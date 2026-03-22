#!/usr/bin/env python3
"""
Lightweight scraper for career-switch project.
- Uses requests + BeautifulSoup
- Respects robots.txt via urllib.robotparser
- Outputs metadata JSON to data/links/<industry>.json

Usage:
  python3 scripts/scrape.py --industry data-science
  python3 scripts/scrape.py --industry all

Notes: edit config/targets.json to control allowed targets per industry.
"""
import argparse
import json
import os
import re
import time
from urllib.parse import urlparse, urlunparse, urlencode, parse_qsl
import urllib.robotparser

import requests
from bs4 import BeautifulSoup

ROOT = os.path.dirname(os.path.dirname(__file__))
CONFIG_PATH = os.path.join(ROOT, 'config', 'targets.json')
DATA_DIR = os.path.join(ROOT, 'data', 'links')
LOG_DIR = os.path.join(ROOT, 'scripts', 'logs')

os.makedirs(DATA_DIR, exist_ok=True)
os.makedirs(LOG_DIR, exist_ok=True)

SESSION = requests.Session()
SESSION.headers.update({'User-Agent': 'career-switch-scraper/1.0 (+https://github.com/SYChen123/career-switch)'})


def normalize_url(u):
    # remove UTM and common tracking params
    try:
        parts = list(urlparse(u))
        qs = dict(parse_qsl(parts[4], keep_blank_values=True))
        for rm in ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','fbclid']:
            qs.pop(rm, None)
        parts[4] = urlencode(qs)
        return urlunparse(parts)
    except Exception:
        return u


def can_fetch(url):
    try:
        p = urlparse(url)
        base = f"{p.scheme}://{p.netloc}"
        rp = urllib.robotparser.RobotFileParser()
        rp.set_url(base + '/robots.txt')
        rp.read()
        return rp.can_fetch(SESSION.headers['User-Agent'], url)
    except Exception:
        return False


def fetch_meta(url, timeout=10):
    try:
        if not can_fetch(url):
            return {'error': 'disallowed by robots.txt'}
        r = SESSION.get(url, timeout=timeout)
        r.raise_for_status()
        soup = BeautifulSoup(r.text, 'html.parser')
        title = soup.title.string.strip() if soup.title and soup.title.string else ''
        desc = ''
        d = soup.find('meta', attrs={'name': 'description'}) or soup.find('meta', attrs={'property': 'og:description'})
        if d and d.get('content'):
            desc = d.get('content').strip()
        # try first paragraph
        p = soup.find('p')
        excerpt = p.get_text().strip() if p else ''
        return {'title': title, 'description': desc or excerpt}
    except Exception as e:
        return {'error': str(e)}


def scrape_industry(industry, targets):
    out = []
    fetched_at = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
    for target in targets:
        # naive: fetch target page and extract links
        norm = normalize_url(target)
        meta = fetch_meta(norm)
        entry = {
            'title': meta.get('title', '') if isinstance(meta, dict) else '',
            'desc': meta.get('description', '') if isinstance(meta, dict) else '',
            'url': norm,
            'source': urlparse(norm).netloc,
            'relevance': 7,
            'quality': 7,
            'fetched_at': fetched_at
        }
        out.append(entry)
        time.sleep(1.2)
    return out


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--industry', default='all')
    args = parser.parse_args()

    with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
        config = json.load(f)

    targets_map = config
    industries = [args.industry] if args.industry != 'all' else list(targets_map.keys())

    for ind in industries:
        targets = targets_map.get(ind, [])
        if not targets:
            print(f'[WARN] no targets for {ind}')
            continue
        print(f'[INFO] scraping {ind} ({len(targets)} targets)')
        results = scrape_industry(ind, targets)
        out_path = os.path.join(DATA_DIR, f'{ind}.json')
        with open(out_path, 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=2)
        print(f'[OK] wrote {out_path}')

if __name__ == '__main__':
    main()
