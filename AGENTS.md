# Repository Guidelines

## Project Structure & Module Organisation
This is a small Express-backed static app with all source files at the repository root. `server.js` serves the site and handles quote add/edit/delete endpoints. `quote-card.html` is the public quote card, `add-quote.html` is the management screen, and `quote-card.css` styles the card UI. Quote data lives in `quotes.json`. `README.md` covers basic local use, and `node_modules/` is generated and should not be edited by hand.

## Build, Test, and Development Commands
- `npm install` installs the single runtime dependency, `express`.
- `npm start` runs `server.js` on `http://localhost:3000`.
- `node server.js` is equivalent if you want to run the server directly.

Open these pages while developing:
- `/quote-card.html` to verify the random quote card
- `/add-quote.html` to verify quote management

## Coding Style & Naming Conventions
Keep changes simple and readable. Prefer plain HTML, CSS, and light vanilla JavaScript. Use camelCase for JavaScript variables and functions, and keep JSON entries in the form `{ "text": "...", "author": "..." }`. Match existing naming where possible: card styles use a BEM-like pattern such as `.card__meta` and `.card__refresh`.

Use 2-space indentation in HTML and JavaScript. For CSS, follow the surrounding file style rather than reformatting unrelated rules. Avoid introducing build tools, frameworks, or large abstractions.

## Testing Guidelines
There is no automated test suite yet. Before opening a PR, run `npm start` and manually check:
- quotes load on `/quote-card.html`
- refresh and copy actions work
- add, edit, and delete flows work on `/add-quote.html`
- `quotes.json` is updated correctly and remains valid JSON

## Commit & Pull Request Guidelines
Recent commits use short, imperative subjects such as `add copy quote button` and `Add in-card refresh icon for new random quote`. Follow that style: one clear change per commit, brief subject line, no unnecessary prefixes.

PRs should include a short summary, testing notes, and screenshots or short clips for UI changes. If you change `quotes.json`, mention whether the content update is intentional.

## Data & Configuration Notes
The app currently uses port `3000` directly in `server.js`. Keep file writes limited to `quotes.json`, and be careful not to break its structure because the UI depends on it loading cleanly.
