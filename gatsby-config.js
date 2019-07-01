/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'your-repo-name', // (REQUIRED, replace with your own)
        accessToken: '##########', // (optional API access token)
        path: '/preview', // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [
          {
            // (optional, builds pages dynamically)
            type: 'Article', // TypeName from prismic
            match: '/article/:uid', // Pages will be generated under this pattern
            path: '/article', // Placeholder page for unpublished documents
            component: require.resolve('./src/templates/article.js'),
          },
        ],
      },
    },{
      `gatsby-plugin-styled-components`,
    },
  ],
};
