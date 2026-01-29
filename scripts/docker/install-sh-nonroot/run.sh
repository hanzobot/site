#!/usr/bin/env bash
set -euo pipefail

LOCAL_INSTALL_PATH="/opt/botbot-install.sh"
LOCAL_CLI_INSTALL_PATH="/opt/botbot-install-cli.sh"
if [[ -n "${BOTBOT_INSTALL_URL:-}" ]]; then
  INSTALL_URL="$BOTBOT_INSTALL_URL"
elif [[ -f "$LOCAL_INSTALL_PATH" ]]; then
  INSTALL_URL="file://${LOCAL_INSTALL_PATH}"
else
  INSTALL_URL="https://hanzo.bot/install.sh"
fi

if [[ -n "${BOTBOT_INSTALL_CLI_URL:-}" ]]; then
  CLI_INSTALL_URL="$BOTBOT_INSTALL_CLI_URL"
elif [[ -f "$LOCAL_CLI_INSTALL_PATH" ]]; then
  CLI_INSTALL_URL="file://${LOCAL_CLI_INSTALL_PATH}"
else
  CLI_INSTALL_URL="https://hanzo.bot/install-cli.sh"
fi

curl_install() {
  if [[ "$INSTALL_URL" == file://* ]]; then
    curl -fsSL "$INSTALL_URL"
  else
    curl -fsSL --proto '=https' --tlsv1.2 "$INSTALL_URL"
  fi
}

curl_cli_install() {
  if [[ "$CLI_INSTALL_URL" == file://* ]]; then
    curl -fsSL "$CLI_INSTALL_URL"
  else
    curl -fsSL --proto '=https' --tlsv1.2 "$CLI_INSTALL_URL"
  fi
}

echo "==> Installer: --help"
curl_install | bash -s -- --help >/tmp/install-help.txt
grep -q -- "--install-method" /tmp/install-help.txt

echo "==> CLI installer: --help"
curl_cli_install | bash -s -- --help >/tmp/install-cli-help.txt
grep -q -- "--prefix" /tmp/install-cli-help.txt

echo "==> Pre-flight: ensure git absent"
if command -v git >/dev/null; then
  echo "git is present unexpectedly" >&2
  exit 1
fi

echo "==> Run installer (non-root user)"
curl_install | bash -s -- --no-onboard

# Ensure PATH picks up user npm prefix
export PATH="$HOME/.npm-global/bin:$PATH"

echo "==> Verify git installed"
command -v git >/dev/null

echo "==> Verify botbot installed"
LATEST_VERSION="$(npm view botbot dist-tags.latest)"
NEXT_VERSION="$(npm view botbot dist-tags.next)"
CMD_PATH="$(command -v botbot || true)"
if [[ -z "$CMD_PATH" && -x "$HOME/.npm-global/bin/botbot" ]]; then
  CMD_PATH="$HOME/.npm-global/bin/botbot"
fi
if [[ -z "$CMD_PATH" ]]; then
  echo "botbot not on PATH" >&2
  exit 1
fi
INSTALLED_VERSION="$("$CMD_PATH" --version 2>/dev/null | head -n 1 | tr -d '\r')"

echo "installed=$INSTALLED_VERSION latest=$LATEST_VERSION next=$NEXT_VERSION"
if [[ "$INSTALLED_VERSION" != "$LATEST_VERSION" && "$INSTALLED_VERSION" != "$NEXT_VERSION" ]]; then
  echo "ERROR: expected botbot@$LATEST_VERSION (latest) or @$NEXT_VERSION (next), got @$INSTALLED_VERSION" >&2
  exit 1
fi

echo "==> Sanity: CLI runs"
"$CMD_PATH" --help >/dev/null

echo "==> Run CLI installer (should also succeed non-root)"
curl_cli_install | bash -s -- --set-npm-prefix --no-onboard

echo "OK"
