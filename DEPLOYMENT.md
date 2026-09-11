# CashFlow deployment

## Current security boundary

The GitHub repository is private. The old public GitHub Pages site has been removed. CashFlow is not currently published at a public URL.

## Authenticated staging deployment

The repository contains a manual Cloudflare Pages workflow at `.github/workflows/deploy-staging.yml`, but it is intentionally unused for now. No Cloudflare credentials are required for the current workflow.

## Online development: GitHub Codespaces

The repository includes `.devcontainer/devcontainer.json` configured for GitHub Codespaces. This is the current private online test method; Cloudflare is not required.

1. Open the private repository on GitHub.
2. Select **Code → Codespaces → Create codespace on main**.
3. In the Codespace terminal, run:

```bash
python3 -m http.server 4173
```

4. Open the forwarded **CashFlow app** port.

Port `4173` is configured as **private**, so the forwarded URL requires an authenticated GitHub user with access to the repository/Codespace. This is a development/test instance, not a permanently running production host; Codespaces can stop when idle.

## Optional future deployment

The Cloudflare workflow remains manual and unused. It can be removed later or enabled if a protected always-on staging URL becomes necessary.
