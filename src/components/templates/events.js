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

    const gallery = this.props.data.prismicEvent.data.gallery.map(
      (image, index) => (
        <div key={`event_gallery_images_${index}`}>
          <StyledImage>
            <img src={image.image.url} />
            <p style={{ padding: '0 20px' }}>
              <em>{image.image.alt}</em>
            </p>
          </StyledImage>
        </div>
      )
    );

    return (
      <Layout>
        <Location>
          {({ location }) => {
            return (
              <Helmet>
                <title>{`Caroline Boseley – ${this.props.data.prismicEvent.data.title.text}`}</title>
                <meta
                  name="title"
                  content={`Caroline Boseley – ${this.props.data.prismicEvent.data.title.text}`}
                />
                <meta
                  name="description"
                  content={this.props.data.prismicEvent.data.title.text}
                />
                <meta
                  property="og:url"
                  content={
                    'https://www.carolineboseley.com' + location.pathname
                  }
                />
                <meta
                  property="og:description"
                  content={this.props.data.prismicEvent.data.title.text}
                />
                <meta property="og:locale" content="en" />
                <meta
                  name="twitter:title"
                  content={`Caroline Boseley – ${this.props.data.prismicEvent.data.title.text}`}
                />
                <meta
                  name="twitter:description"
                  content={this.props.data.prismicEvent.data.title.text}
                />
                <meta name="twitter:card" content="summary_large_image" />
              </Helmet>
            );
          }}
        </Location>

        <Row>
          <Col col={12} sm={3}>
            <Row justifyContent="center">
              <Col col={12} sm={12}>
                <GalleryTrigger
                  onClick={this.openModal}
                  color={chooseRandomColor(allColors)}
                >
                  <img
                    src={this.props.data.prismicEvent.data.gallery[0].image.url}
                  />
                </GalleryTrigger>
              </Col>
            </Row>
          </Col>

          <Col col={12} sm={9}>
            <Row>
              <Col col={12} md={12} lg={5}>
                <Title
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.prismicEvent.data.title.html,
                  }}
                />
              </Col>

              <Col col={12} md={12} lg={7}>
                <TextBox
                  text={this.props.data.prismicEvent.data.text}
                  padding={'0 0 0 20px'}
                  underlineLink={true}
                />
              </Col>
            </Row>
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
  query SingleEvent($uid: String!) {
    prismicEvent(uid: { eq: $uid }) {
      data {
        title {
          html
          text
        }
        text {
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
