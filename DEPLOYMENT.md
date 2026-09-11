# CashFlow deployment

## Current security boundary

The GitHub repository is private. The old public GitHub Pages site has been removed. CashFlow is not currently published at a public URL.

## Authenticated staging deployment

The repository contains a GitHub Actions workflow at `.github/workflows/deploy-staging.yml`. Once the two repository/environment secrets below are configured, every successful push to `main` deploys the static PWA to the Cloudflare Pages project `cashflow-staging`:

- `CLOUDFLARE_API_TOKEN` — a scoped Cloudflare API token allowed to deploy Pages
- `CLOUDFLARE_ACCOUNT_ID` — the Cloudflare account ID

After the first deployment, restrict the Cloudflare Pages hostname with Cloudflare Access:

1. Create an Access application for the staging hostname.
2. Select GitHub or Google identity login.
3. Allow only `david@pencetravel.com` (and optionally the GitHub account `wdavidpence`).
4. Deny all other identities.
5. Test in a private browser window before sharing the URL.

Do not put Cloudflare tokens in the repository or in source files. Add them through GitHub repository **Settings → Secrets and variables → Actions**, preferably as environment secrets for the `staging` environment.

Until these secrets exist, the staging job is intentionally skipped. The CI regression workflow still runs on every push.

## Online development fallback

Because the repository is private, GitHub Codespaces can provide an authenticated development URL without exposing the source. Start a Codespace from the repository, run:

```bash
python3 -m http.server 4173
```

Forward port `4173` with visibility set to **Private**. The forwarded URL is then limited to authenticated GitHub users with repository/Codespace access.
