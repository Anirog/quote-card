import { deleteQuote, editQuote } from '@/db/quotes';

type RouteContext = { params: Promise<{ index: string }> };

export async function PUT(request: Request, { params }: RouteContext) {
  try {
    const { index: indexValue } = await params;
    const index = Number.parseInt(indexValue, 10);
    const body = (await request.json()) as { text?: string; author?: string };
    const text = body.text?.trim();
    const author = body.author?.trim();

    if (!Number.isInteger(index) || !text || !author) {
      return Response.json(
        { error: 'A valid quote, author and index are required' },
        { status: 400 },
      );
    }

    const totalQuotes = await editQuote(index, text, author);
    if (totalQuotes === null) {
      return Response.json({ error: 'Quote not found' }, { status: 404 });
    }

    return Response.json({ success: true, totalQuotes });
  } catch (error) {
    console.error('Error editing quote:', error);
    return Response.json({ error: 'Failed to edit quote' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  try {
    const { index: indexValue } = await params;
    const index = Number.parseInt(indexValue, 10);

    if (!Number.isInteger(index)) {
      return Response.json({ error: 'A valid quote index is required' }, { status: 400 });
    }

    const totalQuotes = await deleteQuote(index);
    if (totalQuotes === null) {
      return Response.json({ error: 'Quote not found' }, { status: 404 });
    }

    return Response.json({ success: true, totalQuotes });
  } catch (error) {
    console.error('Error deleting quote:', error);
    return Response.json({ error: 'Failed to delete quote' }, { status: 500 });
  }
}
