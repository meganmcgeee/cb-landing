import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';
import Img from 'gatsby-image';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

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
    font-size: 15px;
    line-height: 1.5;
    letter-spacing: 0.6px;
  }
`;

const InformationText = styled.div`
  font-family: 'AktivGrotesk', -apple-system, system-ui, 'Segoe UI', Arial,
    sans-serif;
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: 0.6px;

  margin: 2em 0;

  & h1 {
    font-size: 13px;
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
    box-shadow: 20px 20px 0px 0px rgba(106, 130, 147, 1);
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
    const gallery = this.props.data.prismicProjects.data.gallery.map(
      (image, index) => (
        <Img
          fluid={image.image.localFile.childImageSharp.fluid}
          key={index}
          style={styledImage}
          imgStyle={styledInnerImage}
        />
      )
    );

    const projectInformation = this.props.data.prismicProjects.data.project_information.map(
      (text, index) => <p key={index}>{text.project_text}</p>
    );

    return (
      <Layout>
        <Row>
          <Col col={12} sm={4}>
            <Row justifyContent="center">
              <Col col={8} sm={12}>
                <GalleryTrigger onClick={this.openModal}>
                  <Img
                    fluid={
                      this.props.data.prismicProjects.data.gallery[0].image
                        .localFile.childImageSharp.fluid
                    }
                  />
                </GalleryTrigger>
              </Col>
            </Row>
            <Row>
              <Col col={12}>
                <InformationText>
                  <Title
                    dangerouslySetInnerHTML={{
                      __html: this.props.data.prismicProjects.data.title.html,
                    }}
                  />

                  {projectInformation}
                </InformationText>
              </Col>
            </Row>
          </Col>

          <Col col={12} sm={8} lg={8} xl={6}>
            <TextBox
              text={this.props.data.prismicProjects.data.text}
              padding={'0 0 0 20px'}
              underlineLink={true}
            />
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
        }
        text {
          html
        }
        project_information {
          project_text
        }
        gallery {
          image {
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
