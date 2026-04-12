/**
 * Fetch data from Google Sheets (API v4).
 * Requires: GOOGLE_SHEET_ID and GOOGLE_SHEETS_API_KEY in env.
 * Share the sheet as "Anyone with the link can view" for API key access.
 * Uses first tab for Projects, second tab for Feedback (tab names can be anything).
 */

import type { SheetProject, SheetTestimonial } from '@/types/sheets';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

async function getSheetTitles(): Promise<string[] | null> {
  if (!SHEET_ID || !API_KEY) return null;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?key=${API_KEY}&fields=sheets.properties.title`;
  try {
    const res = await fetch(url, { next: { revalidate: 120 } });
    if (!res.ok) return null;
    const data = await res.json();
    return (data.sheets || []).map((s: { properties?: { title?: string } }) => s?.properties?.title ?? '');
  } catch {
    return null;
  }
}

function parseProjectsRows(rows: string[][]): SheetProject[] {
  if (!rows || rows.length < 2) return [];
  return rows
    .slice(1)
    .map((row) => ({
      name: row[0]?.trim() ?? '',
      type: row[1]?.trim() ?? '',
      description: row[2]?.trim() ?? '',
      imageUrl: row[3]?.trim() ?? '',
    }))
    .filter((p) => p.name);
}

function parseFeedbackRows(rows: string[][]): SheetTestimonial[] {
  if (!rows || rows.length < 2) return [];
  return rows
    .slice(1)
    .map((row) => ({
      quote: row[0]?.trim() ?? '',
      name: row[1]?.trim() ?? '',
      role: row[2]?.trim() ?? '',
      avatar: row[3]?.trim() ?? '',
    }))
    .filter((t) => t.quote && t.name);
}

async function fetchRange(sheetName: string): Promise<string[][] | null> {
  if (!SHEET_ID || !API_KEY) return null;
  const range = `${sheetName}!A1:D1000`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(range)}?key=${API_KEY}`;
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = await res.json();
    return (data.values as string[][]) ?? null;
  } catch {
    return null;
  }
}

export async function fetchProjects(): Promise<SheetProject[]> {
  const titles = await getSheetTitles();
  const sheetName = titles?.[0] ?? 'Projects';
  const rows = await fetchRange(sheetName);
  return parseProjectsRows(rows ?? []);
}

export async function fetchFeedback(): Promise<SheetTestimonial[]> {
  const titles = await getSheetTitles();
  const sheetName = titles?.[1] ?? titles?.[0] ?? 'Feedback';
  const rows = await fetchRange(sheetName);
  return parseFeedbackRows(rows ?? []);
}

export async function fetchSheetsData(): Promise<{
  projects: SheetProject[];
  testimonials: SheetTestimonial[];
}> {
  const [projects, testimonials] = await Promise.all([
    fetchProjects(),
    fetchFeedback(),
  ]);
  return { projects, testimonials };
}
