import { NextResponse } from 'next/server';

/**
 * GET /api/sheets-debug
 * Call this to see why sheet data might not be loading.
 */
export async function GET() {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;

  const hasEnv = !!(sheetId && apiKey);
  const result: {
    env: { sheetIdSet: boolean; apiKeySet: boolean };
    projects: { ok: boolean; error?: string; count?: number; raw?: unknown };
    feedback: { ok: boolean; error?: string; count?: number; raw?: unknown };
    sheetNames?: string[];
  } = {
    env: {
      sheetIdSet: !!sheetId,
      apiKeySet: !!apiKey,
    },
    projects: { ok: false },
    feedback: { ok: false },
  };

  if (!hasEnv) {
    return NextResponse.json({
      ...result,
      hint: 'Add GOOGLE_SHEET_ID and GOOGLE_SHEETS_API_KEY to .env.local and restart the dev server.',
    });
  }

  try {
    // 1. Get spreadsheet metadata to see actual sheet names
    const metaUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?key=${apiKey}&fields=sheets.properties.title`;
    const metaRes = await fetch(metaUrl);
    const metaJson = await metaRes.json();

    if (!metaRes.ok) {
      result.projects.error = metaJson.error?.message || metaRes.statusText;
      result.projects.raw = metaJson;
      if (metaRes.status === 403) {
        result.projects.error += ' (Enable Google Sheets API and ensure API key is not restricted to browser only.)';
      }
      if (metaRes.status === 404) {
        result.projects.error += ' (Wrong GOOGLE_SHEET_ID or sheet not shared as "Anyone with the link can view".)';
      }
      return NextResponse.json(result);
    }

    const titles = (metaJson.sheets || []).map((s: { properties?: { title?: string } }) => s?.properties?.title);
    result.sheetNames = titles;

    if (titles.length === 0) {
      result.projects.error = 'No sheets found in workbook.';
      return NextResponse.json(result);
    }

    // 2. Use first sheet for Projects, second for Feedback (any names)
    const projectsSheet = titles[0];
    const feedbackSheet = titles[1] || titles[0];

    const projectsRange = encodeURIComponent(`${projectsSheet}!A1:D1000`);
    const feedbackRange = encodeURIComponent(`${feedbackSheet}!A1:D1000`);

    const [projectsRes, feedbackRes] = await Promise.all([
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${projectsRange}?key=${apiKey}`),
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${feedbackRange}?key=${apiKey}`),
    ]);

    const projectsData = await projectsRes.json();
    const feedbackData = await feedbackRes.json();

    if (!projectsRes.ok) {
      result.projects.error = projectsData.error?.message || projectsRes.statusText;
      result.projects.raw = projectsData;
    } else {
      const rows = projectsData.values || [];
      result.projects.ok = true;
      result.projects.count = rows.length - 1; // minus header
    }

    if (!feedbackRes.ok) {
      result.feedback.error = feedbackData.error?.message || feedbackRes.statusText;
      result.feedback.raw = feedbackData;
    } else {
      const rows = feedbackData.values || [];
      result.feedback.ok = true;
      result.feedback.count = rows.length - 1;
    }

    return NextResponse.json(result);
  } catch (err) {
    result.projects.error = err instanceof Error ? err.message : String(err);
    return NextResponse.json(result);
  }
}
