import { addQuote, getQuotes } from '@/db/quotes';

export async function GET() {
  try {
    return Response.json(await getQuotes());
  } catch (error) {
    console.error('Error loading quotes:', error);
    return Response.json({ error: 'Failed to load quotes' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { text?: string; author?: string };
    const text = body.text?.trim();
    const author = body.author?.trim();

    if (!text || !author) {
      return Response.json(
        { error: 'Quote text and author are required' },
        { status: 400 },
      );
    }

    const totalQuotes = await addQuote(text, author);
    return Response.json({ success: true, totalQuotes });
  } catch (error) {
    console.error('Error adding quote:', error);
    return Response.json({ error: 'Failed to add quote' }, { status: 500 });
  }
}
