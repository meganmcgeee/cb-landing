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
      padding-bottom: 80px;
    }
  }

  @media (max-width: 576px) {
    margin: 1em 0;
  }
`;

const Title = styled.div`
  & h1 {
    font-family: 'History 01';
    text-transform: uppercase;

    font-size: 30px;
    line-height: 1.5;
    letter-spacing: 1px;

    margin-top: -14px;

    @media (max-width: 576px) {
      font-size: 25px;
      padding: 15px 0 0 0;
      margin-top: 0;
    }
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
  & a {
    border-bottom: 1px solid #272727;
  }
  & a:hover {
    color: ${props => props.color};
    // border-bottom: none;
  }
`;

const Projects = ({ data }) => {
  let allColors = ['#6a8493', '#8a432e', '#B1B2B5'];

  const allResearch = data.allPrismicResearch.edges.map((project, index) => {
    return (
      <SingleListLink
        key={project.node.prismicId}
        color={chooseRandomColor(allColors)}
      >
        <Link to={'/research/' + project.node.uid}>
          {project.node.data.title.text}
        </Link>
        <Excerpt>{project.node.data.text_excerpt}</Excerpt>
      </SingleListLink>
    );
  });

  const allEvents = data.allPrismicEvent.edges.map((project, index) => {
    return (
      <SingleListLink
        key={project.node.prismicId}
        color={chooseRandomColor(allColors)}
      >
        <Link to={'/event/' + project.node.uid}>
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
          <Title>
            <h1>Upcoming</h1>
          </Title>
          <Links>{allEvents}</Links>

          <Title>
            <h1>Research</h1>
          </Title>
          <Links>{allResearch}</Links>
        </Col>
      </Row>
    </Layout>
  );
};

export const query = graphql`
  {
    allPrismicResearch {
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
    allPrismicEvent {
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
