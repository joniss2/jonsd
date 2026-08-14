# jonsd

Uses the [awesome-mac](https://github.com/jaywcjlove/awesome-mac) package — a machine-readable JSON catalog of ~2,000 curated macOS applications.

## Installation

```bash
npm install
```

## Usage

```js
// CommonJS
const data = require('./node_modules/awesome-mac/dist/awesome-mac.json');

// ESM (Node ≥ 22)
import data from 'awesome-mac' with { type: 'json' };
```

The catalog is structured as an array of AST nodes (headings and list items with app metadata).
