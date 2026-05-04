# `app.hanzo.bot` deployment runbook

## Symptom (2026-05-02)

- `https://app.hanzo.bot/` returns `308 → https://hanzo.bot/`.
- Result: every CTA on `hanzo.bot` that pointed at `app.hanzo.bot/auth/signup?plan=*` 404'd at the apex.

## Why

`app.hanzo.bot` DNS is fronted by Cloudflare (`104.21.88.218`, `172.67.153.140`).
The K8s Ingress in `universe/infra/k8s/bot/agents-control-plane.yaml` registers
the host on the DOKS `hanzo-k8s` LB (`24.199.76.156`), but Cloudflare has a
**Bulk Redirect** or **Page Rule** mapping `app.hanzo.bot/*` → `hanzo.bot/$1`
that runs at the edge before the request ever reaches DOKS. Cloudflare
returns a 308 directly.

## Site fix (already applied — `hanzobot/site`)

All CTAs on `hanzo.bot` now route through Hanzo IAM directly:

```
https://hanzo.id/oauth/authorize?
  client_id=hanzo-bot&
  response_type=code&
  scope=openid+profile+email&
  redirect_uri=https://playground.hanzo.bot/auth/callback&
  signup=1&
  state=plan:<tier>
```

Helper module: `lib/auth-urls.ts` exports `LOGIN_URL`, `SIGNUP_URL`,
`signupUrlForPlan(plan)`, and `APP_DASHBOARD_URL`. All `app.hanzo.bot` href
links were swept and replaced.

This makes the site work today regardless of the Cloudflare config.

## Cloudflare fix (recommended, optional)

Once the playground image ships with `VITE_IAM_SERVER_URL` baked in (see
`playground/deployments/docker/Dockerfile.control-plane` and
`playground/.github/workflows/deploy.yml`), `app.hanzo.bot` should serve
the playground UI directly. To re-enable that:

1. Cloudflare dashboard → `hanzo.bot` zone → **Rules → Redirect Rules**
   (or **Bulk Redirects**). Find any rule matching
   `host == "app.hanzo.bot"` or `path matches "/.*"` whose target is
   `hanzo.bot`. Disable or delete it.
2. Confirm DNS: `app.hanzo.bot` should be an A/CNAME to the DOKS LB
   (`24.199.76.156`) or proxied through Cloudflare with the LB as origin.
3. Verify TLS: `kubectl get certificate -n hanzo app-hanzo-bot-tls` —
   cert-manager already provisioned the cert via the Ingress in
   `agents-control-plane.yaml`.
4. Probe directly:
   ```
   curl -skI https://app.hanzo.bot/agents -m 8
   ```
   Expect `200`/`302` (302 to `hanzo.id` once the new playground image is rolled out).

## Validation

After Cloudflare changes:

```
cd universe/e2e
pnpm test:playground-agents
pnpm test:agent-runtimes
```

The IAM-redirect test for `app.hanzo.bot` should flip from skipped to
passing.

## Related changes

- `universe/infra/k8s/bot/agents-control-plane.yaml` — added
  `playground.hanzo.ai` to the Ingress (apply with the universe deploy
  workflow).
- `playground/deployments/docker/Dockerfile.control-plane` — accepts
  `VITE_IAM_*` build args.
- `playground/.github/workflows/deploy.yml` — passes `VITE_IAM_SERVER_URL`,
  `VITE_IAM_CLIENT_ID` at build time.
