import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import chooseRandomColor from '../utils/chooseRandomColor';
import Helmet from 'react-helmet';
import { Location } from '@reach/router';

import '../styles/carousel.css';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';

import Layout from '../global/layout';
import TextBox from '../text/textbox';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#___gatsby');

const InformationText = styled.div`
  font-family: 'AktivGrotesk', -apple-system, system-ui, 'Segoe UI', Arial,
    sans-serif;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 0.6px;

  margin: 2em 0;

  & h1 {
    font-size: 15px;
  }

  & p {
    margin: 0;
  }

  @media (max-width: 576px) {
    margin: 1em 0 0;
  }
`;

const StyledImage = styled.div`
  max-width: 100%;
  margin: 0 auto;

  & img {
    margin: 0 auto;
  }
`;


let allColors = ['#6a8493', '#8a432e', '#B1B2B5', '#6a8493'];

class Project extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      hoverColor: '#6a8493',
    };

    this.generateColor = this.generateColor.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  generateColor = () => {
    this.setState({
      hoverColor: chooseRandomColor(allColors),
    });
  };

  openModal() {
    this.setState({ modalIsOpen: true });
    disableBodyScroll();
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    enableBodyScroll();
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render(props) {
    return (
      <Layout>
        <Location>
          {({ location }) => {
            return (
              <Helmet>
                <title>{`Caroline Boseley – ${this.props.data.prismicProjects.data.title.text}`}</title>
                <meta
                  name="title"
                  content={`Caroline Boseley – ${this.props.data.prismicProjects.data.title.text}`}
                />
                <meta
                  name="description"
                  content={this.props.data.prismicProjects.data.title.text}
                />
                <meta
                  property="og:url"
                  content={
                    'https://www.carolineboseley.com' + location.pathname
                  }
                />
                <meta
                  property="og:description"
                  content={this.props.data.prismicProjects.data.title.text}
                />
                <meta property="og:locale" content="en" />
                <meta
                  name="twitter:title"
                  content={`Caroline Boseley – ${this.props.data.prismicProjects.data.title.text}`}
                />
                <meta
                  name="twitter:description"
                  content={this.props.data.prismicProjects.data.title.text}
                />
                <meta name="twitter:card" content="summary_large_image" />
              </Helmet>
            );
          }}
        </Location>
          <Col>
            <Row>

            </Row>
            <div className="container">
            <TextBox
              text={this.props.data.prismicProjects.data.text}
              css={{width: '59vw'}}
            />
            </div>
          </Col>
          <style jsx>{`
            .container {
              width: 60vw;
              margin: 2rem auto;
            }
          `}</style>
      </Layout>
    );
  }
}

export const query = graphql`
  query SingleProject($uid: String!) {
    prismicProjects(uid: { eq: $uid }) {
      data {
        title {
          html
          text
        }
        text {
          html
        }
        project_information {
          project_text
        }
        video {
          html
        }
        gallery {
          image {
            alt
            url
          }
        }
      }
    }
  }
`;

export default Project;
