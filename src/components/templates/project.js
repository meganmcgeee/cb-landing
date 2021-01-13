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

    const LeftArrow = ({className, style, onClick}) => {
      return (
        <svg className="sliderArrow leftArrow" onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
      )
    }
    const RightArrow = ({className, style, onClick}) => {
      return (
        <svg className="sliderArrow rightArrow" onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
      )
    }

    class SimpleSlider extends Component {
      render() {
        const settings = {
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <LeftArrow/>,
          prevArrow: <RightArrow/>,
          className: 'simpleslider'
        };
        return (
        <div className="slider">
          <Slider {...settings}>
            {gallery}
          </Slider>
          <style jsx>{`
             .sliderArrow {
               display: none;
             }
             .simpleslider {
              position: relative;
             }
            .slider {
              width: 80vw;
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
              .sliderArrow {
                display: block;
                position: absolute;
                top: 50%;
                z-index: 1;
              }
              .leftArrow {
                left: -25px;
              }
              .rightArrow {
                right: -25px;
              }
            }
            @media(min-width: 1024px) {
              .slider img {
                height: 500px;
              }
            }
            @media(min-width: 1366px) {
              .slider img {
                height: 600px;
              }
            }
            @media(min-width: 1900px) {
              .slider img {
                width: 1000px;
                height: 600px;
                margin: 0 auto;
              }
              .leftArrow {
                left: 220px;
                width: 40px;
                height: 40px;
              }
              .rightArrow {
                right: 220px;
                width: 40px;
                height: 40px;
              }
            }
            @media(min-width: 2500px) {
              .leftArrow {
                left: 460px;
                width: 50px;
                height: 50px;
              }
              .rightArrow {
                right: 460px;
                width: 50px;
                height: 50px;
              }
            }
            @media(min-width: 3840px) {
              .leftArrow {
                left: 950px;
              }
              .rightArrow {
                right: 950px;
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
              width: 80vw;
              margin: 2rem auto;
            }
            @media(min-width: 760px) {
              .textcontainer {
                width: 75vw;

              }
            }
            @media(min-width: 1900px) {
              .textcontainer {
                width: 1000px;
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