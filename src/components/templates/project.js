import React, {Component} from 'react';
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
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';

import Layout from '../global/layout';
import TextBox from '../text/textbox';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#___gatsby');
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
        <div className="slide" key={`project_gallery_images_${index}`}>
            <img src={image.image.url} />
            <style jsx>{`
              img {
                width: 800px;
                height: 600px;
              }
            `}</style>
        </div>
      )
    );

    class SimpleSlider extends Component {
      render() {
        const settings = {
          dots: true,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
        <div className="slider">
          <Slider {...settings}>
            {gallery}
          </Slider>
          <style jsx>{`
            .slider {
              width: 75vw;
              margin: 0 auto;
            }
            .slider img {
              width: 90vw;
              height: 300px;
            }
            @media(min-width: 760px) {
              .slider img {
                height: 400px;
              }
            }
          `}</style>
        </div>
        )
      }
    }

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
              <SimpleSlider/>
            <div className="textcontainer">
            <TextBox
              text={this.props.data.prismicProjects.data.text}
              css={{width: '59vw', margin: '0 auto'}}
            />
            </div>
          </Col>
          <style jsx>{`
            .textcontainer {
              width: 90vw;
              margin: 2rem auto;
            }
            @media(min-width: 760px) {
              .textcontainer {
                width: 75vw;

              }
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