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

const BodyText = styled.div`
  & p:first-of-type {
    margin-top: 0;
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

const StyledImage = styled.div`
  max-height: calc(100vh - 100px);
  max-width: 100%;
  margin: 0 auto;

  & img {
    max-height: calc(100vh - 260px);
    object-fit: contain;
    object-position: center;
    margin: 0 auto;

    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);

    max-width: calc(100% - 208px);
    transition: none;
  }
`;

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
    const gallery = this.props.data.prismicProjects.data.gallery.map(
      (image, index) => (
        <div key={`project_gallery_images_${index}`}>
          <StyledImage>
            <img src={image.image.url} />
            <p style={{ padding: '0 20px' }}>
              <em>{image.image.alt}</em>
            </p>
          </StyledImage>
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

        <div className="center">
          <InformationText>{projectInformation}</InformationText>
          <Col col={12} sm={8} lg={8} xl={6}>
            <Row>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              css={{ height: '500px', width: '75vw' }}
              useKeyboardArrows={true}
              swipeable={true}
              autoPlay
            >
              {gallery}
            </Carousel>
            </Row>
            <TextBox
              text={this.props.data.prismicProjects.data.text}
              padding={'0 0 0 20px'}
              underlineLink={true}
              css={{ textAlign: 'center' }}
            />

            {this.props.data.prismicProjects.data.video && (
              <Iframe
                dangerouslySetInnerHTML={{
                  __html: this.props.data.prismicProjects.data.video.html,
                }}
              />
            )}
          </Col>
          <style jsx>{`
            .center {
              width: 100vw;
              text-align: center;
            }
          `}</style>
        </div>
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
