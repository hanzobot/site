FROM node:22-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable && pnpm install --frozen-lockfile 2>/dev/null || pnpm install
COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY <<'CONF' /etc/nginx/conf.d/default.conf
server {
    listen 80 default_server;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location /health {
        return 200 'ok';
        add_header Content-Type text/plain;
    }

    location / {
        try_files $uri $uri/ $uri/index.html =404;
    }

    error_page 404 /404.html;
}

server {
    listen 80;
    server_name skills.hanzo.bot;
    root /usr/share/nginx/html;
    index index.html;
    absolute_redirect off;

    location /health {
        return 200 'ok';
        add_header Content-Type text/plain;
    }

    location = / {
        return 301 /skills/;
    }

    location / {
        try_files $uri $uri/ $uri/index.html =404;
    }

    error_page 404 /404.html;
}
CONF
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
