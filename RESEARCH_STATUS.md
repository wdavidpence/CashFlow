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
- Current acquisition taxes, notary/registry/legal costs, annual property taxes, rental rules, and local licensing constraints for Porto, Lille, and San Juan.
- Compliant listing-source agreements or APIs and a server-side weekly scan architecture.

## Expanded target markets: Porto, Lille, San Juan

The active comparison set is now Porto, Portugal; Lille, France; and San Juan, Puerto Rico. The app must keep country/territory rules separate rather than applying one European assumption to all three.

### Source map to integrate and cite

- **Porto / Portugal housing and regulation:** Statistics Portugal (INE) for official housing and population statistics; Banco de Portugal for macroprudential LTV context; Portal das Finanças for IMT, IMI, and tax guidance; Câmara Municipal do Porto for local planning and housing policy; IPMA for climate normals; ANA/VINCI Airports for Porto airport access.
- **Lille / France housing and regulation:** INSEE for demographic and housing statistics; Observatoires des loyers / ADIL Nord-Pas-de-Calais for rent-observatory and tenant-law context; Service-Public.fr and impots.gouv.fr for official tax/regulatory guidance; Métropole Européenne de Lille for planning and local housing rules; Météo-France for climate normals; Aéroport de Lille and SNCF/Eurostar sources for access.
- **San Juan / Puerto Rico housing and regulation:** U.S. Census ACS and Puerto Rico Planning Board / Junta de Planificación for demographic and housing data; Puerto Rico Departamento de Hacienda for tax guidance; CRIM for property-tax records; Puerto Rico Office of the Commissioner of Financial Institutions for local finance oversight; HUD/FHA and lender disclosures for financing context; NOAA/NCEI for climate normals; Puerto Rico Ports Authority / SJU airport operator for access.
- **Market listings / competitor discovery:** Porto: Idealista, Imovirtual, Casa Sapo, Properstar, Green-Acres. Lille: SeLoger, Leboncoin, Bien'ici, Logic-Immo, Properstar. San Juan: ClasificadosOnline, Zillow, Realtor.com, Point2, Encuentra24. These are discovery/comparable inputs, not automatically authoritative facts; every imported record must retain URL, source, retrieval time, and a manual-verification status.

### Research rules for the comparison

1. Record purchase price, unit count, residential area, commercial area, asking rent, occupancy, and source URL per listing.
2. Keep lender LTV, regulator ceilings, historical documents, and user-specific written offers in separate statuses; never present a ceiling as available financing.
3. Add September/October climate normals and airport route/access notes as travel-planning context, not investment returns.
4. “Every property” means every matching record available from the enabled, terms-compliant source set and manual imports; the app must show source coverage and cannot claim portal-wide completeness.
5. Competitor buttons should open the correct city and asset-type search in a new tab, while manual import remains the honest catalog path where no compliant API exists.
- Written source citations and timestamps for every country-specific assumption shown in the UI.
