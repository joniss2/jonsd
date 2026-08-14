'use strict';

const catalog = require('./node_modules/awesome-mac/dist/awesome-mac.json');

// Extract the mark object from a listItem node
function itemMark(listItem) {
  return listItem.children?.[0]?.mark ?? null;
}

// Return all depth-2 category names
function categories() {
  return catalog
    .filter(n => n.type === 'heading' && n.depth === 2)
    .map(n => n.value);
}

// Return all app mark objects in a named category (case-insensitive)
function getCategory(name) {
  const lower = name.toLowerCase();
  const idx = catalog.findIndex(
    n => n.type === 'heading' && n.depth === 2 && n.value.toLowerCase() === lower
  );
  if (idx === -1) return [];

  const apps = [];
  for (let i = idx + 1; i < catalog.length; i++) {
    const node = catalog[i];
    if (node.type === 'heading' && node.depth <= 2) break;
    if (node.type === 'list') {
      node.children.forEach(li => {
        const mark = itemMark(li);
        if (mark) apps.push(mark);
      });
    }
  }
  return apps;
}

// Search all apps by title (case-insensitive substring)
function search(query) {
  const lower = query.toLowerCase();
  const results = [];
  catalog.forEach(node => {
    if (node.type !== 'list') return;
    node.children.forEach(li => {
      const mark = itemMark(li);
      if (mark?.title?.toLowerCase().includes(lower)) results.push(mark);
    });
  });
  return results;
}

// Filter all apps by icon type: 'oss' | 'freeware' | 'app-store' | 'awesome-list'
function filterByIcon(type) {
  const results = [];
  catalog.forEach(node => {
    if (node.type !== 'list') return;
    node.children.forEach(li => {
      const mark = itemMark(li);
      if (mark?.icons?.some(i => i.type === type)) results.push(mark);
    });
  });
  return results;
}

module.exports = { catalog, categories, getCategory, search, filterByIcon };
