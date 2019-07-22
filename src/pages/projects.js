import React from 'react';
import Layout from '../components/global/layout';
import { graphql, Link } from 'gatsby';

import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import TextBox from '../components/text/textbox';

const Links = styled.ul`
  list-style: none;

  padding: 0;
  margin: 40px 0 0 0;

  & li {
    padding-bottom: 40px;

    &:last-of-type {
      padding: 0;
    }
  }

  @media (max-width: 576px) {
    margin: 1em 0;
  }
`;

const Excerpt = styled.span`
  padding-left: 20px;

  @media (max-width: 576px) {
    display: block;
    padding: 0;
  }
`;

// const TopPadding = {
//   marginTop: '40px',
// };

const Projects = ({ data }) => {
  const allProjects = data.allPrismicProjects.edges.map((project, index) => {
    return (
      <li key={project.node.prismicId}>
        <Link to={'/projects/' + project.node.uid}>
          {project.node.data.title.text}
        </Link>
        <Excerpt>{project.node.data.text_excerpt}</Excerpt>
      </li>
    );
  });

  return (
    <Layout>
      <Row>
        <Col col={12} sm={12} xl={8}>
          <Links>{allProjects}</Links>
        </Col>
      </Row>
    </Layout>
  );
};

export const query = graphql`
  {
    allPrismicProjects {
      edges {
        node {
          uid
          prismicId
          data {
            title {
              text
            }
            text_excerpt
          }
        }
      }
    }
  }
`;

export default Projects;
