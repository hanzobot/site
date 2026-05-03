/**
 * Auth URLs for hanzo.bot CTAs.
 *
 * All login / signup CTAs point at Hanzo IAM (hanzo.id) — the only login
 * surface. Casdoor's authorize endpoint runs the OAuth dance and bounces
 * back to the playground app on success. We never link to
 * `app.hanzo.bot/auth/*` because Cloudflare 308's the whole subdomain to
 * the apex, breaking those paths.
 */

const IAM = 'https://hanzo.id'
const APP_CLIENT_ID = 'hanzo-bot'

/** Where Casdoor sends the user back after a successful login. */
const DEFAULT_REDIRECT = 'https://playground.hanzo.bot/auth/callback'

function authorizeUrl(opts: {
  signup?: boolean
  plan?: string
  redirectUri?: string
} = {}): string {
  const params = new URLSearchParams({
    client_id: APP_CLIENT_ID,
    response_type: 'code',
    scope: 'openid profile email',
    redirect_uri: opts.redirectUri ?? DEFAULT_REDIRECT,
  })
  if (opts.signup) params.set('signup', '1')
  if (opts.plan) {
    // Cary the plan through the OAuth state so the dashboard can read it
    // back after a successful login (e.g. for trial provisioning).
    params.set('state', `plan:${opts.plan}`)
  }
  return `${IAM}/oauth/authorize?${params.toString()}`
}

/** Direct login flow — use for "Log in" buttons. */
export const LOGIN_URL = authorizeUrl()

/** Sign-up flow — use for "Try Hanzo Bot" / "Get Started" buttons. */
export const SIGNUP_URL = authorizeUrl({ signup: true })

/** Sign-up flow tagged with a plan tier ("free", "starter", "dev", "pro", "team", "cloud"). */
export function signupUrlForPlan(plan: string): string {
  return authorizeUrl({ signup: true, plan })
}

/** Where authenticated users land — use for "Open Dashboard" / "Launch" links. */
export const APP_DASHBOARD_URL = 'https://playground.hanzo.bot'
