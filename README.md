# jonsd

A Node.js package that bundles the [awesome-mac](https://github.com/jaywcjlove/awesome-mac) catalog — a machine-readable JSON index of ~2,000 curated macOS applications across 30+ categories.

## Installation

```bash
npm install
```

## Usage

```js
// CommonJS
const catalog = require('./node_modules/awesome-mac/dist/awesome-mac.json');

// ESM (Node ≥ 22)
import catalog from 'awesome-mac' with { type: 'json' };
```

The catalog is a flat array of [Remark](https://github.com/remarkjs/remark) Markdown AST nodes. Category headings sit at depth 2, sub-category headings at depth 3. Each application entry is a `listItem` node whose `mark` object carries:

| Field | Description |
|---|---|
| `mark.title` | Application name |
| `mark.url` | Homepage or download URL |
| `mark.icons` | Array of badge strings: `oss`, `freeware`, `appstore` |

### Filter by category

```js
// Find the "Developer Tools" heading, then collect its listItem children
const nodes = catalog; // flat AST array
const idx = nodes.findIndex(n => n.type === 'heading' && n.depth === 2
  && n.children?.[0]?.value === 'Developer Tools');
const items = [];
for (let i = idx + 1; i < nodes.length; i++) {
  if (nodes[i].type === 'heading' && nodes[i].depth <= 2) break;
  if (nodes[i].type === 'list') {
    nodes[i].children.forEach(li => items.push(li.mark));
  }
}
```

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
