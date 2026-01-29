FROM node:25-bookworm-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    bash \
    ca-certificates \
    curl \
    git \
    sudo \
  && rm -rf /var/lib/apt/lists/*

COPY scripts/docker/install-sh-smoke/run.sh /usr/local/bin/botbot-install-smoke
COPY public/install.sh /opt/botbot-install.sh
RUN chmod +x /usr/local/bin/botbot-install-smoke \
  && chmod a+r /opt/botbot-install.sh

ENTRYPOINT ["/usr/local/bin/botbot-install-smoke"]
