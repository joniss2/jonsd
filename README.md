# jonsd

A Node.js package that bundles the [awesome-mac](https://github.com/jaywcjlove/awesome-mac) catalog — a machine-readable JSON index of ~2,000 curated macOS applications across 30+ categories.

## Installation

```bash
npm install
```

## Usage

```js
const { categories, getCategory, search, filterByIcon } = require('jonsd');
```

### API

#### `categories() → string[]`

Returns all top-level category names.

```js
categories();
// ['Reading and Writing Tools', 'Developer Tools', 'Terminal Apps', ...]
```

#### `getCategory(name) → mark[]`

Returns all apps in a named category (case-insensitive). Returns `[]` if the category is not found.

```js
getCategory('Browsers');
// [{ title: 'Arc', url: '...', icons: [...] }, ...]
```

#### `search(query) → mark[]`

Returns all apps whose title contains `query` (case-insensitive substring).

```js
search('git');
// [{ title: 'GitKraken', url: '...', icons: [...] }, ...]
```

#### `filterByIcon(type) → mark[]`

Returns all apps tagged with a given icon type.

| Type | Meaning |
|---|---|
| `'oss'` | Open-source |
| `'freeware'` | Free to use |
| `'app-store'` | Available on the Mac App Store |
| `'awesome-list'` | Featured in another awesome list |

```js
filterByIcon('oss').length; // ~400
```

#### `catalog`

The raw [Remark](https://github.com/remarkjs/remark) AST array from `awesome-mac`. Category headings are depth-2 nodes; each app is a `listItem` whose inner paragraph carries a `mark` object:

| Field | Description |
|---|---|
| `mark.title` | Application name |
| `mark.url` | Homepage or download URL |
| `mark.icons` | `[{ type, url }]` — badge entries |

## Locale catalogs

Additional locale catalogs ship alongside the English one:

| File | Locale | Size |
|---|---|---|
| `dist/awesome-mac.json` | English | ~511 KB |
| `dist/awesome-mac.ja.json` | Japanese | ~206 KB |
| `dist/awesome-mac.zh.json` | Chinese | ~542 KB |
| `dist/awesome-mac.ko.json` | Korean | ~206 KB |

## Diagrams

Interactive Archify diagrams live in [`diagrams/`](./diagrams/):

| Diagram | Description |
|---|---|
| [`jonsd-architecture.html`](./diagrams/jonsd-architecture.html) | Package dependency map: Consumer App → jonsd → awesome-mac → locale catalogs |
| [`awesome-mac-install.html`](./diagrams/awesome-mac-install.html) | Sequence: npm install handshake and CJS / ESM catalog loading |
| [`jonsd-catalog-query.html`](./diagrams/jonsd-catalog-query.html) | Workflow: end-to-end catalog query across Developer, Runtime, awesome-mac, and Exception swimlanes |

Open any `.html` file directly in a browser — no server required.

## License

`jonsd` — ISC  
`awesome-mac` catalog data — [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/)
