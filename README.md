# Quote Card

![Quote Card Screenshot](images/quote-card.png)

A tiny Sites app with a random quote card and a management UI.

## Requirements

- Node.js 22.13 or newer

## Install

Install dependencies:

```bash
npm install
```

## Start the development server

Run the app:

```bash
npm run dev
```

Open in your browser:

- http://localhost:3000/quote-card.html — view a random quote
- http://localhost:3000/add-quote.html — manage quotes (add/edit/delete)

## Stop the server

In the terminal where the server is running, press `Ctrl+C` to stop it.

## Production build

```bash
npm run build
```

## Notes

- `quotes.json` supplies the initial quote collection.
- Added, edited and deleted quotes are stored in the Sites-managed database.
