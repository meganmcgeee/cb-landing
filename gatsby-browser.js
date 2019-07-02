const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/components/utils/linkResolver');

registerLinkResolver(linkResolver);
