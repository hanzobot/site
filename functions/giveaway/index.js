import { http } from '@google-cloud/functions-framework';
import { google } from 'googleapis';

const SHEET_ID = process.env.SHEET_ID;
const SHEET_NAME = process.env.SHEET_NAME ?? 'Entries';
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS ?? '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const HEADERS = ['Email', 'Entries', 'GitHub', 'LinkedIn', 'CreatedAt', 'UserAgent', 'IP'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let sheetsClientPromise;

async function getSheets() {
  if (!sheetsClientPromise) {
    sheetsClientPromise = (async () => {
      const auth = new google.auth.GoogleAuth({
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      return google.sheets({ version: 'v4', auth: await auth.getClient() });
    })();
  }
  return sheetsClientPromise;
}

function applyCors(req, res) {
  const origin = req.headers.origin ?? '';
  const allow =
    ALLOWED_ORIGINS.length === 0 ? '*' : ALLOWED_ORIGINS.includes(origin) ? origin : '';
  if (allow) {
    res.set('Access-Control-Allow-Origin', allow);
    res.set('Vary', 'Origin');
  }
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Access-Control-Max-Age', '3600');
}

async function ensureHeaderRow(sheets) {
  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `${SHEET_NAME}!A1:G1`,
  });
  if (!data.values || data.values.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: 'RAW',
      requestBody: { values: [HEADERS] },
    });
  }
}

async function loadDataRows(sheets) {
  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `${SHEET_NAME}!A2:G`,
  });
  return data.values ?? [];
}

function parseBool(v) {
  return v === true || String(v).toUpperCase() === 'TRUE';
}

http('giveaway', async (req, res) => {
  applyCors(req, res);
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  if (!SHEET_ID) {
    res.status(500).json({ error: 'SHEET_ID not configured' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body ?? {});
    const rawEmail = body.email;
    const action = body.action;
    const email = typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : '';

    if (!EMAIL_RE.test(email)) {
      res.status(400).json({ error: 'Invalid email address' });
      return;
    }

    const sheets = await getSheets();
    await ensureHeaderRow(sheets);
    const rows = await loadDataRows(sheets);
    const idx = rows.findIndex((r) => String(r[0] ?? '').toLowerCase() === email);

    if (!action) {
      if (idx !== -1) {
        const r = rows[idx];
        res.status(200).json({
          ok: true,
          entries: Number(r[1]) || 0,
          github: parseBool(r[2]),
          linkedin: parseBool(r[3]),
          message: 'Already entered',
        });
        return;
      }

      const userAgent = req.headers['user-agent'] ?? '';
      const ip = String(req.headers['x-forwarded-for'] ?? '').split(',')[0].trim() || req.ip || '';
      await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A:G`,
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: [[email, 1, false, false, new Date().toISOString(), userAgent, ip]],
        },
      });
      res.status(200).json({ ok: true, entries: 1, github: false, linkedin: false });
      return;
    }

    if (action !== 'github' && action !== 'linkedin') {
      res.status(400).json({ error: 'Unknown action' });
      return;
    }
    if (idx === -1) {
      res.status(400).json({ error: 'Enter your email first' });
      return;
    }

    const r = rows[idx];
    let entries = Number(r[1]) || 0;
    let github = parseBool(r[2]);
    let linkedin = parseBool(r[3]);

    if (action === 'github' && !github) {
      github = true;
      entries += 1;
    } else if (action === 'linkedin' && !linkedin) {
      linkedin = true;
      entries += 1;
    }

    const sheetRow = idx + 2;
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!B${sheetRow}:D${sheetRow}`,
      valueInputOption: 'RAW',
      requestBody: { values: [[entries, github, linkedin]] },
    });

    res.status(200).json({ ok: true, entries, github, linkedin });
  } catch (err) {
    console.error('giveaway error', err);
    res.status(500).json({ error: 'Internal error' });
  }
});
