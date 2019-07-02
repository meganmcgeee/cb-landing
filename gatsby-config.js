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
        name: 'Home',
        link: '/',
      },
      {
        name: 'Projects',
        link: '/projects',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'carolineboseley', // (REQUIRED, replace with your own)
        accessToken:
          'MC5YUnM0c0JBQUFDUUF3TUlB.B3Dvv71u77-9Se-_vSEDCe-_vTfvv70XSu-_ve-_vRN7G--_ve-_ve-_vUAp77-977-9ee-_vXNX77-9', // (optional API access token)
        path: '/preview', // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [
          {
            // (optional, builds pages dynamically)
            type: 'Projects', // TypeName from prismic
            match: '/projects/:uid', // Pages will be generated under this pattern
            path: '/projects', // Placeholder page for unpublished documents
            component: require.resolve('./src/components/templates/project.js'),
          },
        ],
      },
    },
  ],
};
