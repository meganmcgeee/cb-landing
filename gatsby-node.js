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
      allPrismicEvent {
        edges {
          node {
            id
            uid
          }
        }
      }
      allPrismicResearch {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  const templateProject = path.resolve('src/components/templates/project.js');
  pages.data.allPrismicProjects.edges.forEach(edge => {
    createPage({
      path: `/projects/${edge.node.uid}`,
      component: templateProject,
      context: {
        uid: edge.node.uid,
      },
    });
  });

  const templateEvents = path.resolve('src/components/templates/events.js');
  pages.data.allPrismicEvent.edges.forEach(edge => {
    createPage({
      path: `/event/${edge.node.uid}`,
      component: templateEvents,
      context: {
        uid: edge.node.uid,
      },
    });
  });

  const templateResearch = path.resolve('src/components/templates/research.js');
  pages.data.allPrismicResearch.edges.forEach(edge => {
    createPage({
      path: `/research/${edge.node.uid}`,
      component: templateResearch,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
