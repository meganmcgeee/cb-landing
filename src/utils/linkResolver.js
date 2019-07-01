const linkResolver = function(doc) {
  // Pretty URLs for known types
  if (doc.type === 'project') return '/project/' + doc.uid;
  if (doc.type === 'page') return '/' + doc.uid;
  // Fallback for other types, in case new custom types get created
  return '/doc/' + doc.id;
};

const html = RichText.render(document.data.text_field, linkResolver);
