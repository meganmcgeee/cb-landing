import React from 'react';

export function linkResolver(doc) {
  // Pretty URLs for known types
  if (doc.type === 'projects') return '/projects/' + doc.uid;
  if (doc.type === 'page') return '/' + doc.uid;
  // Fallback for other types, in case new custom types get created
  return '/doc/' + doc.id;
}
