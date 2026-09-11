# CashFlow city research brief

_Last reviewed: 2026-09-11. This is planning research, not lending, tax, legal, valuation, or investment advice._

## Decision frame

CashFlow is optimized for **long-term residential rental in small multi-tenant buildings**: 3–12 residential units, potentially with one or two ground-floor commercial units. The active cities are **Porto, Portugal; Lille, France; and San Juan, Puerto Rico**.

The comparison must show purchase price, residential and commercial area, unit schedule, rent evidence, vacancy, operating costs, acquisition costs, financing assumptions, cash required, DSCR, monthly cash flow, and confidence. It must not collapse residential and commercial financing into one unsupported LTV.

## Porto, Portugal

### Primary sources

- Statistics Portugal (INE): official population, housing, construction, and regional statistics. https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_main
- Banco de Portugal: official LTV recommendation context and banking supervision. Its ceiling/context is not a user-specific approval. https://clientebancario.bportugal.pt/en/faq/what-maximum-loan-value-ratio-ltv-allowed
- Portal das Finanças: official tax administration reference for IMT, IMI, and tax procedures. https://www.portaldasfinancas.gov.pt/
- Câmara Municipal do Porto: municipal planning, housing, licensing, and local policy. https://www.porto.pt/en
- IPMA: Portuguese meteorological and climate-normal source. https://www.ipma.pt/en/oclima/normais.clima/1981-2010/002/
- ANA/VINCI Porto Airport: airport access and airline/terminal information. https://www.ana.pt/en/opo/home

### Market/comparable sources

Use Idealista, Imovirtual, Casa Sapo, Properstar, and Green-Acres as listing discovery sources. These are not automatically authoritative rent or valuation evidence; each record needs URL, retrieval timestamp, listing status, and manual verification.

## Lille, France

### Primary sources

- INSEE: official demographic, housing, income, and local statistics. https://www.insee.fr/en/accueil
- Observatoires des loyers: rent-observatory network and methodology. https://www.observatoires-des-loyers.org/
- Service-Public.fr: official tenant, landlord, lease, and regulatory guidance. https://www.service-public.fr/particuliers/vosdroits/N19808
- impots.gouv.fr: official French tax administration. https://www.impots.gouv.fr/
- Métropole Européenne de Lille: metropolitan planning and housing policy. https://www.lillemetropole.fr/
- Météo-France: official meteorological and climate source. https://meteofrance.com/
- Aéroport de Lille: airport access and route information. https://www.lille.aeroport.fr/

### Market/comparable sources

Use SeLoger, Leboncoin, Bien'ici, Logic-Immo, Properstar, and Green-Acres as discovery sources. Preserve the listing snapshot and identify whether a listing is residential, commercial, or mixed-use before comparison.

## San Juan, Puerto Rico

### Primary sources

- U.S. Census American Community Survey: official demographic, housing, household, and income data. https://www.census.gov/programs-surveys/acs
- Puerto Rico Junta de Planificación: official planning, land-use, and regional data. https://jp.pr.gov/
- Puerto Rico Departamento de Hacienda: official tax guidance. https://hacienda.pr.gov/
- CRIM: Puerto Rico municipal property-tax administration/reference. https://www.crimpr.net/
- Office of the Commissioner of Financial Institutions (OCIF): local financial oversight. https://www.ocif.pr.gov/
- NOAA/NCEI: official climate normals and historical weather data. https://www.ncei.noaa.gov/
- Puerto Rico Ports Authority: airport/port infrastructure reference. https://www.prpa.pr.gov/

### Market/comparable sources

Use ClasificadosOnline, Zillow, Realtor.com, Point2, and Encuentra24 as discovery sources. Puerto Rico records must also capture flood/hurricane/insurance questions and distinguish USD figures from EUR markets.

## Cross-city comparison fields

- **Capital vs LTV:** show cash required to close and financed scenarios side by side. Store lender, source URL, retrieval date, LTV status, appraisal basis, rate, fees, term, and borrower/residency assumptions. Regulator ceilings and historical bank material remain context only.
- **Airport access from the USA:** store airport, direct/one-stop route notes, season/date checked, and source URL. Do not make a permanent “easy access” score without a dated route check.
- **September/October inspection climate:** store normal/high-low/rainfall or storm-risk context, month, station/source, and retrieval date. San Juan needs an explicit hurricane-season risk note; this is operational planning, not a property-return input.
- **Quality of life:** do not use an unsourced composite rank. Store the publisher, edition/year, methodology, geography, and metric components. Culinary, gastronomic, historic, and livability claims should link to official tourism/cultural sources or named methodology publishers.
- **Mixed-use:** residential and commercial rents, expenses, licensing, and financing are separate rows. Rank mixed-use deals in a separate lane.

## Competitor coverage and completeness

CashFlow should provide city-specific buttons for competitor portals and a manual JSON/CSV import. “Every property” can only mean every matching property available from the enabled, terms-compliant source set and the user’s imports. It cannot honestly mean every listing across closed or protected portals. The app must show source coverage, last scan/import date, duplicates removed, and records requiring verification.

## Listing-resource playbook

The local resource brief adds a focused discovery layer for whole multi-tenant buildings, not just individual apartments:

- **France — Lille and Strasbourg:** LeBonCoin, SeLoger, Bien'ici, LaBonnePierre (especially already-tenanted *biens occupés*), Notaires de France, PAP, and Logic-Immo.
- **Portugal — Porto and Vila Nova de Gaia:** Idealista, Imovirtual, and Casa SAPO. Gaia is a deliberate adjacent search lane, not a currency or underwriting change.

Recommended search phrases are preserved in the catalog: `immeuble de rapport`, `immeuble entier`, `immeuble loué`, `local commercial + appartements`, `prédio`, `prédio de rendimento`, `prédio arrendado`, and `loja + apartamentos`.

Discovery workflow: create saved-search alerts on each applicable portal, capture the source URL and retrieval date in CashFlow, and request the current lease schedule, *taxe foncière* or IMI bill, and confirmation that units are separately registered. Cross-check French asking prices against notarial transaction data and Portuguese price-per-square-metre data. Treat rent-control, commercial-lease, cadastral, and *lots* questions as verification gates—not automated conclusions.

These are discovery resources supplied by the user; CashFlow does not scrape them or claim complete live-market coverage.

```json
{
  "source": {"name": "", "url": "", "retrievedAt": "", "status": "manual|fixture|live-unverified|verified"},
  "market": {"city": "Porto|Lille|San Juan", "countryOrTerritory": "", "currency": "EUR|USD"},
  "asset": {"residentialUnits": 0, "residentialArea": 0, "commercialUnits": 0, "commercialArea": 0},
  "economics": {"askingPrice": 0, "residentialRent": 0, "commercialRent": 0, "vacancy": 0},
  "verification": {"address": "", "photos": false, "leases": false, "taxes": false, "insurance": false, "notes": ""}
}
```
