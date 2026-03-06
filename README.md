# Quote Card

A tiny demo that serves a random quote card and a management UI.

## Requirements

- Node.js (v14+ recommended)

## Install

Install dependencies:

```bash
npm install
```

## Start the server

Run the app (starts an Express server on port 3000):

```bash
npm start
```

Open in your browser:

- http://localhost:3000/quote-card.html — view a random quote
- http://localhost:3000/add-quote.html — manage quotes (add/edit/delete)

## Stop the server

In the terminal where the server is running, press `Ctrl+C` to stop it.

## Notes

- Quotes are stored in `quotes.json` in the project root. The server reads and writes this file.
- The server uses port `3000` by default (see `server.js`).
