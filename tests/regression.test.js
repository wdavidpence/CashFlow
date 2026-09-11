#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const catalog = read('catalog.html');
const deal = read('deal.html');
const calculator = read('index.html');
const research = read('CITY_RESEARCH.md');

function test(name, fn) {
  fn();
  process.stdout.write(`PASS ${name}\n`);
}

// Product boundary and market scope.
test('active markets stay bounded to Porto, Lille, and San Juan', () => {
  for (const city of ['Porto', 'Lille', 'San Juan']) assert.match(catalog, new RegExp(city));
  assert.doesNotMatch(catalog, /Vigo/);
  assert.match(catalog, /EUR/);
  assert.match(catalog, /USD/);
});

test('catalog keeps provenance and local-first storage', () => {
  for (const field of ['sourceUrl', 'sourceName', 'retrievedAt', 'status', 'history']) assert.match(catalog, new RegExp(field));
  assert.match(catalog, /localStorage/);
  assert.match(catalog, /STORE_VERSION=2/);
});

test('catalog validates and rejects unsupported records before saving', () => {
  assert.match(catalog, /unsupported city/);
  assert.match(catalog, /price must be greater than zero/);
  assert.match(catalog, /at least one residential unit required/);
  assert.match(catalog, /missing source URL/);
  assert.match(catalog, /rejected/);
});

test('catalog preserves workflow and underwriting payloads', () => {
  for (const field of ['pipelineStatus', 'followUpDate', 'nextAction', 'verificationChecklist', 'units', 'financeScenarios', 'assumptions', 'finance', 'calc']) {
    assert.match(catalog, new RegExp(field));
  }
  for (const state of ['overdue', 'due-soon', 'unassigned']) assert.match(catalog, new RegExp(state));
});

test('readiness is distinct from rank and evidence scoring', () => {
  assert.match(catalog, /function rank/);
  assert.match(catalog, /function evidenceScore/);
  assert.match(catalog, /function readinessOf/);
  assert.match(catalog, /decision-ready/);
  assert.match(catalog, /screening-only/);
  assert.match(deal, /Decision status/);
});

test('deal guards invalid calculations and zero-debt DSCR', () => {
  for (const warning of ['Asking price is zero', 'Occupancy must stay', 'Vacancy must stay', 'Operating costs must stay', 'LTV must stay', 'Loan term is required']) {
    assert.match(deal, new RegExp(warning));
  }
  assert.match(deal, /DSCR is not meaningful/);
  assert.doesNotMatch(deal, /alert\s*\(|prompt\s*\(/);
});

test('deal supports standalone packet and machine-readable export', () => {
  assert.match(deal, /decisionPacket/);
  assert.match(deal, /Export decision packet/);
  assert.match(deal, /kind:'deal'/);
  assert.match(deal, /JSON.stringify/);
});

test('dynamic deal controls expose accessible names', () => {
  for (const field of ['area', 'currentRent', 'marketRent', 'occupancy', 'leaseStatus', 'confidence', 'checkStatus', 'checkDate', 'checkUrl', 'checkNotes']) {
    assert.match(deal, new RegExp(field));
  }
  assert.match(deal, /addUnit/);
  assert.match(deal, /Unit '\+\(i\+1\)\+' rent confidence/);
});

test('user-provided listing resources are represented', () => {
  for (const resource of ['Idealista', 'Imovirtual', 'Casa Sapo', 'SeLoger', 'LeBonCoin', 'Bien', 'LaBonnePierre', 'Notaires', 'PAP', 'Logic-Immo']) {
    assert.match(catalog + research, new RegExp(resource));
  }
  for (const term of ['immeuble de rapport', 'immeuble loué', 'prédio de rendimento', 'loja + apartamentos']) {
    assert.ok((catalog + research).includes(term), `missing literal search term: ${term}`);
  }
});

test('all three pages remain HTML documents with service-worker shell references', () => {
  for (const page of [calculator, catalog, deal]) {
    assert.match(page, /^<!doctype html>/i);
    assert.match(page, /manifest\.webmanifest/);
    assert.match(page, /serviceWorker/);
  }
});

process.stdout.write('REGRESSION_SUITE=PASS\n');
