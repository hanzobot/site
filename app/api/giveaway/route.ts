import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const DATA_FILE = path.join(process.cwd(), 'data', 'giveaway-entries.json');

interface GiveawayEntry {
  email: string;
  entries: number;
  github: boolean;
  linkedin: boolean;
  createdAt: string;
  ip: string | null;
}

async function readEntries(): Promise<GiveawayEntry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeEntries(entries: GiveawayEntry[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), 'utf-8');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, action } = body as { email?: string; action?: string };

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const normalized = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const entries = await readEntries();
    const existing = entries.find((e) => e.email === normalized);

    // Initial signup
    if (!action) {
      if (existing) {
        return NextResponse.json({
          ok: true,
          entries: existing.entries,
          github: existing.github,
          linkedin: existing.linkedin,
          message: 'Already entered',
        });
      }

      const ip = request.headers.get('x-forwarded-for')
        ?? request.headers.get('x-real-ip')
        ?? null;

      const entry: GiveawayEntry = {
        email: normalized,
        entries: 1,
        github: false,
        linkedin: false,
        createdAt: new Date().toISOString(),
        ip,
      };

      entries.push(entry);
      await writeEntries(entries);

      return NextResponse.json({
        ok: true,
        entries: 1,
        github: false,
        linkedin: false,
      });
    }

    // Bonus entry actions
    if (!existing) {
      return NextResponse.json({ error: 'Enter your email first' }, { status: 400 });
    }

    if (action === 'github' && !existing.github) {
      existing.github = true;
      existing.entries += 1;
    } else if (action === 'linkedin' && !existing.linkedin) {
      existing.linkedin = true;
      existing.entries += 1;
    }

    await writeEntries(entries);

    return NextResponse.json({
      ok: true,
      entries: existing.entries,
      github: existing.github,
      linkedin: existing.linkedin,
    });
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
