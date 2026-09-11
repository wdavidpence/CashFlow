# CashFlow

Phone-first, local-first real-estate deal intelligence for a small household evaluating multi-tenant European property.

## Confirmed MVP decisions

- **Initial regions:** Porto, Portugal; Lille, France; and San Juan, Puerto Rico. Vigo is deferred, not an active target market.
- **Target assets:** 3–12 residential units; mixed-use and ground-floor commercial opportunities are also discoverable and ranked separately.
- **Strategy:** long-term residential rental first.
- **User:** one household.
- **Ranking objective:** positive monthly cash flow after debt.
- **Budget:** €250,000–€500,000 total acquisition budget.
- **Financing:** financing-first, with cash purchase as a secondary comparison.
- **Currency:** EUR only in MVP.
- **Capex:** quick reserve estimate plus editable line items.
- **Analysis:** sensitivity sliders for rent, vacancy, opex, rate, and capex.
- **Persistence:** save shortlisted deals only; retain enough immutable source/provenance data for later analysis.
- **Scan:** manual Update Scan in MVP; weekly automation is a planned phase.
- **Security:** reuse the EstateScout security pattern, but with CashFlow-specific keys and data. Device-local Web Crypto PBKDF2 PIN gate; this is an access gate, not encryption at rest unless a future encrypted store is implemented.
- **Product boundary:** standalone HTML5 mobile/PWA. No Telegram bot, no EstateScout storage, no EstateScout credentials.

## MVP screen flow

1. **Unlock** — local PIN gate and clear device-only privacy notice.
2. **Dashboard** — latest scan status, shortlisted deal count, and cash-flow-positive count.
3. **Discover** — region tabs, listing filters, Update Scan button, source/freshness labels, and shortlist action.
4. **Deal detail** — listing evidence, unit schedule, asking price, rent assumptions, acquisition costs, opex, capex, debt, monthly cash flow, and warnings.
5. **Scenario drawer** — base values plus sliders for rent, vacancy, opex, interest rate, and capex.
6. **Shortlist** — saved deals sorted by after-debt monthly cash flow, with status and notes.
7. **Settings & data** — assumptions, export/import, delete device data, source policy, and limitations.

## Core deal model

Each saved deal must preserve:

- stable internal ID and source URL
- source name, retrieved timestamp, freshness status, and original listing snapshot
- country, city, neighborhood, address precision, asset type, asking price, area, unit count, and commercial area
- per-unit schedule: unit type, area, current/market rent, occupancy, lease status, and confidence
- acquisition costs: transfer/taxes, notary/registry/legal, lender fees, and buyer-side fees
- operating expenses: property tax, insurance, utilities, management, maintenance, vacancy/credit loss, service contracts, and reserve
- capex reserve plus editable line items by building system/unit
- financing scenarios: LTV, loan amount, rate, term, amortization, debt service, and lender/foreigner assumptions
- calculated outputs: gross rent, effective income, NOI, debt service, monthly cash flow after debt, DSCR, cap rate, cash-on-cash return, and cash required to close
- assumption provenance and confidence for every non-user-entered estimate

## Calculation rules

The UI must show formulas and never hide assumptions:

- Effective gross income = scheduled rent × (1 − vacancy/credit-loss rate) + other income.
- NOI = effective gross income − operating expenses − operating reserve.
- Monthly cash flow after debt = NOI / 12 − monthly debt service − recurring owner costs.
- Cash required to close = down payment + acquisition costs + initial capex + reserves.
- Financing must support a cash scenario and at least one foreign-buyer loan scenario.

Values are planning estimates, not lending, tax, legal, or investment advice. Country-specific lending and ownership details require cited research and an explicit “verify with local professionals” state.

## Planned source and scan boundary

The first implementation should use a source adapter interface with fixtures/manual import if compliant live connectors are not yet available. It must not scrape a portal in violation of terms or claim simulated listings are live. Each adapter returns normalized listings plus provenance and a partial/unavailable state.

The manual Update Scan button runs adapters, deduplicates by source URL/source ID, records a scan event, and updates only the Discover view. Weekly scheduling belongs to a later authenticated/server-side worker; a static PWA cannot safely run guaranteed weekly jobs while closed.

## Research workstream

Research must separately cover Spain and Portugal: non-resident/foreign-buyer lending practice and typical LTV ranges, income/residency documentation, tax identification, ownership vehicles, property taxes and acquisition costs, rental rules, mixed-use considerations, and lender underwriting constraints. Every load-bearing statement must cite an official lender, government, regulator, or professional source and be labeled as indicative until confirmed.

## Non-goals for MVP

- automated offers or transaction execution
- tax-return calculation
- legal conclusions
- guaranteed portal-wide listing coverage
- multi-user cloud sync
- automated weekly scans before a backend and compliant source credentials exist
- short-term-rental optimization
