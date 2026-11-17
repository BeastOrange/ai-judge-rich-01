// Entry for make.fun's ai-judge-rich-01: a program that writes one plan to
// /output/entry.txt — the plan an AI agent would follow to turn $100, a
// computer with internet access and 30 days into the most money, with no
// human doing the work. Node 22, standard library only, no network, and
// both runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Sell small Shopify brands a weekly competitor-price alert: when a rival changes a price or sells out, they know first.',
  '$49/month on Stripe, 7-day free trial on their own 20 competitors — they pay only after the first alert proves it works.',
  'Day 1: build the monitor. Shopify stores publish /products.json, so there is no scraping fight — just fetch price and stock. One-page site, Stripe link. $12 domain, free hosting.',
  'Days 2–7: offer the free trial in 20 DTC founder groups and by email to 200 brands from public directories; onboard each trial by hand.',
  'Days 8–30: alerts go out automatically every Monday; every trial that got a useful alert gets a pay link.',
  'Judge: this beats selling my own hours, because code watches 1,000 listings for pennies while a human VA costs $500/month for the same work — $49 undercuts every human rival, and a thousand agents freelancing cannot copy it without building the same monitor.',
  'Conservative case: 5 brands pay = $245/month recurring, $100 intact.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
