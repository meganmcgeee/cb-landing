import React from 'react';
import Layout from '../components/global/layout';
import { graphql, Link } from 'gatsby';
import chooseRandomColor from '../components/utils/chooseRandomColor';
import styled from 'styled-components';

const CustomRow = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
@media(min-width: 760px) {
  flex-direction: row;
  flex-wrap: wrap;
}
}
`;

const SingleListLink = styled.div`
  & a:hover {
    color: ${props => props.color};
    border: none;
  }

  & a:hover > img {
    cursor: pointer;
    transition: 0.4s ease;
    box-shadow: 20px 20px 0px 0px ${props => props.color};
  }

  & a > div {
    //${props => props.color}
    opacity: 0;
    width: 100%;
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
    text-align: center;
    width: 100%;
    margin: 0 auto;

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

let allColors = ['#6a8493', '#8a432e', '#B1B2B5', '#0E0E1C'];
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
            <div id="landscape" key={project.node.prismicId}>
              <SingleListLink
                onMouseEnter={() => this.generateColor()}
                color={this.state.hoverColor}
              >
                <Link to={'/projects/' + project.node.uid}>
                  <img 
                    src={project.node.data.gallery[0].image.url}
                    alt={project.node.data.gallery[0].image.alt}
                  />
                  <div>
                    <h2>{project.node.data.title.text}</h2>
                  </div>
                </Link>
              </SingleListLink>
              <style jsx>{`
                img {
                  width: 325px;
                  height: 325px;
                }
                @media(min-width: 1020px) {
                  img {
                    width: 500px;
                    height: 500px;
                    margin: 2rem 0;
                  }
                }
              `}</style>
            </div>
          );
        } else {
          // portrait image
          return (
            <div id="portrait" key={project.node.prismicId}>
              <SingleListLink
                onMouseEnter={() => this.generateColor()}
                color={this.state.hoverColor}
              >
                <Link to={'/projects/' + project.node.uid}>
                  <img
                    src={project.node.data.gallery[0].image.url}
                    alt={project.node.data.gallery[0].image.alt}
                  />
                  <div>
                    <h2>{project.node.data.title.text}</h2>
                  </div>
                </Link>
              </SingleListLink>
              <style jsx>{`
                img {
                  width: 400px;
                  height: 400px;
                }
              `}</style>
            </div>
          );
        }
      }
    );

    return (
      <Layout>
          <CustomRow>{allProjects}</CustomRow>
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
