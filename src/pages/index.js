import React from 'react';
import Layout from '../components/global/layout';
import { graphql, Link } from 'gatsby';
import chooseRandomColor from '../components/utils/chooseRandomColor';

import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import TextBox from '../components/text/textbox';

const CustomRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -20px;
  margin-left: -20px;

  & > div:nth-child(1n) {
    padding-top: 25px;
  }

  & > div:nth-child(2n) {
    padding-top: 200px;
  }

  & > div:nth-child(3n) {
    padding-top: 80px;
  }

  @media (max-width: 575px) {
    & > div:nth-child(1n),
    & > div:nth-child(2n),
    & > div:nth-child(3n) {
      padding-top: 0;
      padding-bottom: 15px;
    }
  }
`;

const SingleListLink = styled.div`
  & a {
    width: 100%;
  }

  & a:hover {
    color: ${props => props.color};
  }

  @media (max-width: 575px) {
    &:hover img {
      box-shadow: none;
    }
  }
`;

const ProjectImage = styled.img`
  &:hover {
    cursor: pointer;
    box-shadow: 20px 20px 0px 0px ${props => props.color};
  }
`;

const Projects = ({ data }) => {
  let allColors = ['#6a8493', '#8a432e', '#B1B2B5', '#6a8493'];

  const allProjects = data.allPrismicProjects.edges.map((project, index) => {
    if (
      project.node.data.gallery[0].image.dimensions.width >
      project.node.data.gallery[0].image.dimensions.height
    ) {
      // landscape image
      return (
        <Col col={12} sm={4} key={project.node.prismicId}>
          <SingleListLink>
            <Link to={'/projects/' + project.node.uid}>
              <ProjectImage
                src={project.node.data.gallery[0].image.url}
                alt={project.node.data.gallery[0].image.alt}
                color={chooseRandomColor(allColors)}
              />
            </Link>
          </SingleListLink>
        </Col>
      );
    } else {
      // portrait image
      return (
        <Col col={12} sm={4} key={project.node.prismicId}>
          <Row justifyContent="center">
            <Col col={8} sm={10} md={9} lg={8}>
              <SingleListLink>
                <Link to={'/projects/' + project.node.uid}>
                  <ProjectImage
                    src={project.node.data.gallery[0].image.url}
                    alt={project.node.data.gallery[0].image.alt}
                    color={chooseRandomColor(allColors)}
                  />
                </Link>
              </SingleListLink>
            </Col>
          </Row>
        </Col>
      );
    }
  });

  return (
    <Layout>
      <Row>
        <Col col={12}>
          <CustomRow>{allProjects}</CustomRow>
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
            gallery {
              image {
                alt
                url
                dimensions {
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Projects;
