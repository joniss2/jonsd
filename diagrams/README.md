# diagrams

Interactive architecture, sequence, and workflow diagrams for the `jonsd` package, generated with [Archify](https://github.com/tt-a1i/archify).

Each diagram ships as a pair of files: a JSON spec and a self-contained HTML file you can open directly in a browser — no server required.

---

## jonsd Architecture

**Files:** `jonsd-architecture.architecture.json` · `jonsd-architecture.html`

Shows how a consumer application depends on the `jonsd` package, which in turn bundles `awesome-mac@2.1.0` and its locale-specific JSON catalogs (EN, JA, ZH, KO).

## awesome-mac Install & Usage

**Files:** `awesome-mac-install.sequence.json` · `awesome-mac-install.html`

Sequence diagram tracing the `npm install` handshake and the two ways to load the catalog at runtime — CommonJS (`require`) and ESM (`import … with { type: 'json' }`).

## awesome-mac Catalog Query

**Files:** `jonsd-catalog-query.workflow.json` · `jonsd-catalog-query.html`

Swimlane workflow showing the end-to-end catalog query flow across four lanes — Developer, Node.js Runtime, awesome-mac, and Exception Path — from package install through AST filtering, `mark` object traversal, and final result collection.
