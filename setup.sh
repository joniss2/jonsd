#!/usr/bin/env bash
# Installs macOS apps via Homebrew casks. Run locally on macOS with Homebrew installed.
set -euo pipefail

if ! command -v brew >/dev/null 2>&1; then
  echo "Homebrew not found. Install it from https://brew.sh, then re-run this script." >&2
  exit 1
fi

casks=(
  msitarzewski/agency-agents/agency-agents
)

for cask in "${casks[@]}"; do
  brew install --cask "$cask"
done
