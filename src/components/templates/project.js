import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';
import Img from 'gatsby-image';
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

const BodyText = styled.div`
  & p:first-of-type {
    margin-top: 0;
  }
`;

const Title = styled.div`
  & h1 {
    font-family: 'History 01';
    text-transform: uppercase;

    font-size: 35px;
    line-height: 1.5;
    letter-spacing: 1px;

    margin-top: -14px;

    padding: 0 20px 20px;

    @media (max-width: 576px) {
      font-size: 30px;
      padding: 15px 0 0 0;
      margin-top: 0;
    }
  }
`;

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

const GalleryTrigger = styled.div`
  &:hover {
    cursor: pointer;
    box-shadow: 20px 20px 0px 0px ${props => props.color};
  }


  .gallery-hover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    //${props => props.color}
    opacity: 0;

    transition: 250ms opacity ease;
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

  &:hover .gallery-hover {
    opacity: 1;
  }

  @media (max-width: 767px) {
    &:hover {
      box-shadow: none;
    }
  }
`;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    border: '0',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
};

const styledImage = {
  maxHeight: 'calc(100vh - 100px)',
  maxWidth: '100%',
  margin: '0 auto',
};

const styledInnerImage = {
  maxHeight: 'calc(100vh - 260px)',
  objectFit: 'contain',
  objectPosition: 'center',
  margin: '0 auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 'calc(100% - 208px)',
  transition: 'none',
};

const CloseModal = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 10000;
  cursor: pointer;
  font-size: 40px;
  line-height: 0;
`;

const Iframe = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  margin-left: 20px;

  @media (max-width: 576px) {
    margin-left: 0;
  }

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

class Project extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

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
    let allColors = ['#6a8493', '#8a432e', '#B1B2B5'];

    const gallery = this.props.data.prismicProjects.data.gallery.map(
      (image, index) => (
        <div key={index}>
          <Img
            fluid={image.image.localFile.childImageSharp.fluid}
            style={styledImage}
            imgStyle={styledInnerImage}
          />
          <p style={{ padding: '0 20px' }}>
            <em>{image.image.alt}</em>
          </p>
        </div>
      )
    );

    const projectInformation = this.props.data.prismicProjects.data.project_information.map(
      (text, index) => <p key={index}>{text.project_text}</p>
    );

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

        <Row>
          <Col col={12} sm={4}>
            <Row justifyContent="center">
              <Col col={12} sm={12}>
                <GalleryTrigger
                  onClick={this.openModal}
                  color={chooseRandomColor(allColors)}
                >
                  <Img
                    fluid={
                      this.props.data.prismicProjects.data.gallery[0].image
                        .localFile.childImageSharp.fluid
                    }
                  />

                  <div className="gallery-hover">
                    <h2>Gallery</h2>
                  </div>
                </GalleryTrigger>
              </Col>
            </Row>
            <Row>
              <Col col={12}>
                <InformationText>{projectInformation}</InformationText>
              </Col>
            </Row>
          </Col>

          <Col col={12} sm={8} lg={8} xl={6}>
            {/* <em> */}
            <Title
              dangerouslySetInnerHTML={{
                __html: this.props.data.prismicProjects.data.title.html,
              }}
            />
            {/* </em> */}
            <TextBox
              text={this.props.data.prismicProjects.data.text}
              padding={'0 0 0 20px'}
              underlineLink={true}
            />

            {this.props.data.prismicProjects.data.video && (
              <Iframe
                dangerouslySetInnerHTML={{
                  __html: this.props.data.prismicProjects.data.video.html,
                }}
              />
            )}
          </Col>
        </Row>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Image Gallery"
        >
          <CloseModal onClick={this.closeModal}>×</CloseModal>

          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            css={{ height: '100%' }}
            useKeyboardArrows={true}
            swipeable={true}
          >
            {gallery}
          </Carousel>
        </Modal>
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
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Project;
