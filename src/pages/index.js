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
  justify-content: space-between;

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
    // display: flex;
    border: none;
  }

  & a:hover {
    color: ${props => props.color};
    border: none;
  }

  & a:hover > img {
    cursor: pointer;
    box-shadow: 20px 20px 0px 0px ${props => props.color};
  }

  & a > div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    //${props => props.color}
    opacity: 0;

    transition: 250ms opacity ease;
  }

  & a:hover > div {
    opacity: 1;
  }

  @media (max-width: 575px) {
    &:hover img {
      box-shadow: none;
    }
  }

  & h2 {
    top: 50%;
    transform: translateY(-50%);

    position: absolute;

    margin: 0;
    width: 100%;
    padding: 20px;

    font-family: 'History 01';
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;

    color: #fff;
    font-weight: 900;
    -webkit-font-smoothing: auto !important;
    // text-shadow: 1px 1px 1px rgba(255,255,255, 0.05);
  }
`;

const ProjectImage = styled.img`
//   &:hover {
//     cursor: pointer;
//     box-shadow: 20px 20px 0px 0px ${props => props.color};
//   }
`;

let allColors = ['#6a8493', '#8a432e', '#B1B2B5', '#6a8493'];
class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      hoverColor: '#6a8493',
    };

    this.generateColor = this.generateColor.bind(this);
  }

  generateColor = () => {
    this.setState({
      hoverColor: chooseRandomColor(allColors),
    });
  };

  render() {
    const allProjects = this.props.data.allPrismicProjects.edges.map(
      (project, index) => {
        if (
          project.node.data.gallery[0].image.dimensions.width >
          project.node.data.gallery[0].image.dimensions.height
        ) {
          // landscape image
          return (
            <Col col={12} sm={4} key={project.node.prismicId}>
              <SingleListLink
                onMouseEnter={() => this.generateColor()}
                color={this.state.hoverColor}
              >
                <Link to={'/projects/' + project.node.uid}>
                  <ProjectImage
                    src={project.node.data.gallery[0].image.url}
                    alt={project.node.data.gallery[0].image.alt}
                  />
                  <div>
                    <h2>{project.node.data.title.text}</h2>
                  </div>
                </Link>
              </SingleListLink>
            </Col>
          );
        } else {
          // portrait image
          return (
            <Col col={12} sm={4} key={project.node.prismicId}>
              <SingleListLink
                onMouseEnter={() => this.generateColor()}
                color={this.state.hoverColor}
              >
                <Link to={'/projects/' + project.node.uid}>
                  <ProjectImage
                    src={project.node.data.gallery[0].image.url}
                    alt={project.node.data.gallery[0].image.alt}
                  />
                  <div>
                    <h2>{project.node.data.title.text}</h2>
                  </div>
                </Link>
              </SingleListLink>
            </Col>
          );
        }
      }
    );

    return (
      <Layout>
        <Row>
          <Col col={12}>
            <CustomRow>{allProjects}</CustomRow>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export const query = graphql`
  {
    allPrismicProjects(sort: { order: DESC, fields: first_publication_date }) {
      edges {
        node {
          uid
          prismicId
          data {
            title {
              text
            }
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
