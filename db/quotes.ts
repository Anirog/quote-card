import { env } from 'cloudflare:workers';
import seedQuotes from '@/quotes.json';

export type Quote = {
  text: string;
  author: string;
};

async function initialiseQuotes() {
  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS quotes (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      text TEXT NOT NULL,
      author TEXT NOT NULL
    )
  `).run();

  const row = await env.DB.prepare('SELECT COUNT(*) AS count FROM quotes').first<{ count: number }>();

  if (Number(row?.count ?? 0) === 0) {
    await env.DB.batch(
      seedQuotes.map((quote) =>
        env.DB.prepare('INSERT INTO quotes (text, author) VALUES (?, ?)').bind(
          quote.text,
          quote.author,
        ),
      ),
    );
  }
}

async function countQuotes() {
  const row = await env.DB.prepare('SELECT COUNT(*) AS count FROM quotes').first<{ count: number }>();
  return Number(row?.count ?? 0);
}

async function quoteIdAt(index: number) {
  if (index < 0) {
    return null;
  }

  const row = await env.DB.prepare(
    'SELECT id FROM quotes ORDER BY id LIMIT 1 OFFSET ?',
  ).bind(index).first<{ id: number }>();

  return row?.id ?? null;
}

export async function getQuotes(): Promise<Quote[]> {
  await initialiseQuotes();
  const result = await env.DB.prepare(
    'SELECT text, author FROM quotes ORDER BY id',
  ).all<Quote>();
  return result.results;
}

export async function addQuote(text: string, author: string) {
  await initialiseQuotes();
  await env.DB.prepare('INSERT INTO quotes (text, author) VALUES (?, ?)')
    .bind(text, author)
    .run();
  return countQuotes();
}

export async function editQuote(index: number, text: string, author: string) {
  await initialiseQuotes();
  const id = await quoteIdAt(index);
  if (id === null) {
    return null;
  }

  await env.DB.prepare('UPDATE quotes SET text = ?, author = ? WHERE id = ?')
    .bind(text, author, id)
    .run();
  return countQuotes();
}

export async function deleteQuote(index: number) {
  await initialiseQuotes();
  const id = await quoteIdAt(index);
  if (id === null) {
    return null;
  }

  await env.DB.prepare('DELETE FROM quotes WHERE id = ?').bind(id).run();
  return countQuotes();
}
