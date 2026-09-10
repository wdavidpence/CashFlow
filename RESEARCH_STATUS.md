# Foreign-buyer lending research — working status

Last reviewed: 2026-09-10

This is product research, not lending, tax, legal, or investment advice. Lender terms are individualized and must be confirmed with a licensed broker, lender, lawyer, and tax adviser in the relevant country.

## Spain

- Banco Santander currently has a dedicated **Hipoteca Mundo para No Residentes** page stating that a person living abroad may buy a second residence in Spain and that financing is subject to Santander approval. The page directs applicants to the pre-contractual FIPRE and FEIN documents; it does not publish a universal LTV or promise approval.
- CashFlow therefore must not hard-code a Spain foreign-buyer LTV. The MVP should let the user enter lender-specific LTV, rate, term, fees, and underwriting notes, and label them as indicative until a written lender quote exists.
- Santander also links a non-resident online account using a passport, but account availability does not establish mortgage eligibility.

Source: https://www.bancosantander.es/particulares/hipotecas/no-residentes/

## Portugal

- Banco de Portugal publishes a macroprudential recommendation for new credit that includes a 90% LTV cap for certain house-purchase lending. This is a regulatory ceiling/recommendation context, not a promise that an American non-resident buying an income property will receive 90% LTV.
- Banco de Portugal search material also reports system-wide LTV statistics; those aggregates are not a substitute for a foreign-buyer commercial or mixed-use underwriting term sheet.
- Caixa Geral de Depósitos materials indexed by the bank distinguish residential and commercial mortgage maximums in covered-bond documentation, including 80% residential and 60% commercial figures in the cited material. These are not confirmed as a current offer for an American non-resident and must remain a historical/indicative reference until the current product terms are obtained directly.

Sources:

- https://clientebancario.bportugal.pt/en/faq/what-maximum-loan-value-ratio-ltv-allowed
- https://www.bportugal.pt/page/economics-picture
- https://www.cgd.pt/

## Product implications

1. Model residential and commercial components separately; do not apply one LTV to a mixed-use building without lender confirmation.
2. Store `ltvSource`, `ltvRetrievedAt`, `ltvStatus`, and `lenderNotes` beside every financing scenario.
3. Calculate the lower-of-purchase-price/appraisal rule only when a specific lender source confirms it; otherwise expose appraisal basis as an assumption field.
4. Add required-document checklists per country and borrower profile, but mark checklist items as “confirm with lender/notary.”
5. Keep non-EUR income/currency risk as a visible underwriting note even though the MVP displays EUR only.
6. Never describe a search-result snippet, regulator ceiling, or historical bank document as the user’s available LTV.

## Still required before production-quality scanning

- Current lender product sheets for American/non-EU non-residents in both countries.
- Exact treatment of investment/rental and mixed-use properties.
- Current acquisition taxes, notary/registry/legal costs, annual property taxes, rental rules, and local licensing constraints for Vigo and Porto.
- Compliant listing-source agreements or APIs and a server-side weekly scan architecture.
- Written source citations and timestamps for every country-specific assumption shown in the UI.
