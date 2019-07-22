const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicProjects {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  const template = path.resolve('src/components/templates/project.js');

  pages.data.allPrismicProjects.edges.forEach(edge => {
    createPage({
      path: `/projects/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
