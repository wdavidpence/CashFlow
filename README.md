# CashFlow

CashFlow is a phone-first, local-first HTML5 PWA for finding and analyzing multi-tenant real-estate opportunities in Europe, starting with Vigo, Spain and Porto, Portugal.

> Planning tool only. CashFlow does not provide lending, tax, legal, valuation, or investment advice.

## Status

Product definition now covers Porto, Lille, and San Juan; the calculator and local market catalog are available. The catalog supports clearly labeled sample fixtures, manual JSON imports, mixed-use filtering, provenance, change-history tracking, competitor research links, and side-by-side comparison.

See [PRODUCT_BRIEF.md](PRODUCT_BRIEF.md) for the confirmed scope and model.

## Local development

The app will be served over HTTP for service-worker and browser acceptance testing. Planned command:

```bash
python3 -m http.server 4173
```

## Security boundary

CashFlow is a separate project from EstateScout. It uses CashFlow-specific storage keys and will never load EstateScout credentials or Telegram integration. The local PIN is an access gate; device storage is not described as encrypted at rest unless implemented and verified.
