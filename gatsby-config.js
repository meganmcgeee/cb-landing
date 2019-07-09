/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Caroline Boseley',
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'projects',
        link: '/projects',
      },
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `carolineboseley`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
  ],
};
