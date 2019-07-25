import React from 'react';
import Layout from '../components/global/layout';
import { graphql, Link } from 'gatsby';
import chooseRandomColor from '../components/utils/chooseRandomColor';

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

const SingleListLink = styled.li`
  & a:hover {
    color: ${props => props.color};
  }
`;

const Projects = ({ data }) => {
  let allColors = ['#6a8493', '#8a432e', '#B1B2B5'];

  const allProjects = data.allPrismicProjects.edges.map((project, index) => {
    return (
      <SingleListLink
        key={project.node.prismicId}
        color={chooseRandomColor(allColors)}
      >
        <Link to={'/projects/' + project.node.uid}>
          {project.node.data.title.text}
        </Link>
        <Excerpt>{project.node.data.text_excerpt}</Excerpt>
      </SingleListLink>
    );
  });

  return (
    <Layout>
      <Row>
        <Col col={12} sm={12}>
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
