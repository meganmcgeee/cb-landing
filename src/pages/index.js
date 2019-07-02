import React from 'react';
import Layout from '../components/global/layout';
import { graphql } from 'gatsby';
import { Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

// import MagicGrid from 'magic-grid-react';
// import Masonry from 'react-masonry-css';
// import Masonry from 'react-masonry-component';

// import { XMasonry, XBlock } from 'react-xmasonry/dist/index.js'; // Imports precompiled bundle
import SingleProject from '../components/homepage/singleProject';

// const masonryOptions = {
//   transitionDuration: 0,
//   gutter: 40,
//   columnWidth: 80,
// };

const Masonry = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-height: 800px;
  margin-left: -8px; /* Adjustment for the gutter */
  width: 100%;
`;

const Index = ({ data }) => {
  const allProjects = data.prismic.allProjectss.edges.map((project, index) => {
    return (
      <SingleProject
        key={index}
        height={project.node.gallery[0].image.height}
        data={project.node}
      />
    );
  });

  return (
    <Layout>
      <Masonry>{allProjects}</Masonry>
    </Layout>
  );
};

export const query = graphql`
  query Homepage {
    prismic {
      allProjectss {
        edges {
          node {
            _meta {
              uid
              type
            }
            title
            text
            gallery {
              image
            }
            project_information {
              project_text
            }
          }
        }
      }
    }
  }
`;

export default Index;
