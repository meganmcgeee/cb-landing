require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Caroline Boseley',
    menuLinks: [
      {
        name: 'projects',
        link: '/projects',
      },
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'news',
        link: '/news',
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
        schemas: {
          about: require('./src/schemas/about.json'),
          event: require('./src/schemas/event.json'),
          home: require('./src/schemas/home.json'),
          projects: require('./src/schemas/projects.json'),
          research: require('./src/schemas/research.json'),
        },
      },
    },
  ],
};
