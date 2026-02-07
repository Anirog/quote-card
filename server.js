const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/add-quote', async (req, res) => {
  try {
    const { text, author } = req.body;

    if (!text || !author) {
      return res.status(400).json({ error: 'Quote text and author are required' });
    }

    const quotesPath = path.join(__dirname, 'quotes.json');
    const data = await fs.readFile(quotesPath, 'utf8');
    const quotes = JSON.parse(data);

    quotes.push({ text, author });

    await fs.writeFile(quotesPath, JSON.stringify(quotes, null, 2));

    res.json({ success: true, totalQuotes: quotes.length });
  } catch (error) {
    console.error('Error adding quote:', error);
    res.status(500).json({ error: 'Failed to add quote' });
  }
});

app.put('/edit-quote/:index', async (req, res) => {
  try {
    const index = parseInt(req.params.index);
    const { text, author } = req.body;

    if (!text || !author) {
      return res.status(400).json({ error: 'Quote text and author are required' });
    }

    const quotesPath = path.join(__dirname, 'quotes.json');
    const data = await fs.readFile(quotesPath, 'utf8');
    const quotes = JSON.parse(data);

    if (index < 0 || index >= quotes.length) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    quotes[index] = { text, author };

    await fs.writeFile(quotesPath, JSON.stringify(quotes, null, 2));

    res.json({ success: true, totalQuotes: quotes.length });
  } catch (error) {
    console.error('Error editing quote:', error);
    res.status(500).json({ error: 'Failed to edit quote' });
  }
});

app.delete('/delete-quote/:index', async (req, res) => {
  try {
    const index = parseInt(req.params.index);

    const quotesPath = path.join(__dirname, 'quotes.json');
    const data = await fs.readFile(quotesPath, 'utf8');
    const quotes = JSON.parse(data);

    if (index < 0 || index >= quotes.length) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    quotes.splice(index, 1);

    await fs.writeFile(quotesPath, JSON.stringify(quotes, null, 2));

    res.json({ success: true, totalQuotes: quotes.length });
  } catch (error) {
    console.error('Error deleting quote:', error);
    res.status(500).json({ error: 'Failed to delete quote' });
  }
});

app.listen(PORT, () => {
  console.log(`\n✨ Quote Card server running!`);
  console.log(`\n📝 Manage quotes at: http://localhost:${PORT}/add-quote.html`);
  console.log(`🎲 View quote card at: http://localhost:${PORT}/quote-card.html\n`);
});
