import React, { Component } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      fade: true,
      loop: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    const Slides = () => {
      const data = useStaticQuery(graphql`
      query Slider {
        allPrismicSlider {
          nodes {
            data {
              slider {
                alternative_text
                image {
                  url
                }
                link {
                  slug
                }
              }
            }
          }
        }
      }      
      `)

      const slides = [
        {
          uid: data.allPrismicSlider.nodes[0].data.slider[0].link.slug,
          url: data.allPrismicSlider.nodes[0].data.slider[0].link.slug,
          src: data.allPrismicSlider.nodes[0].data.slider[0].image.url,
          alt: data.allPrismicSlider.nodes[0].data.slider[0].alternative_text,
        },
        {
          uid: data.allPrismicSlider.nodes[0].data.slider[1].link.slug,
          url: data.allPrismicSlider.nodes[0].data.slider[1].link.slug,
          src: data.allPrismicSlider.nodes[0].data.slider[1].image.url,
          alt: data.allPrismicSlider.nodes[0].data.slider[1].alternative_text,
        },
        {
          uid: data.allPrismicSlider.nodes[0].data.slider[2].link.slug,
          url: data.allPrismicSlider.nodes[0].data.slider[2].link.slug,
          src: data.allPrismicSlider.nodes[0].data.slider[2].image.url,
          alt: data.allPrismicSlider.nodes[0].data.slider[2].alternative_text,
        },
        {
          uid: data.allPrismicSlider.nodes[0].data.slider[3].link.slug,
          url: data.allPrismicSlider.nodes[0].data.slider[3].link.slug,
          src: data.allPrismicSlider.nodes[0].data.slider[3].image.url,
          alt: data.allPrismicSlider.nodes[0].data.slider[3].alternative_text,
        }
      ]
      return (
        <Slider {...settings}>
          <Link to={`projects/${slides[0].url}`}>
            <div key={slides[0].uid}>
              <img src={slides[0].src} alt={slides[0].alt} />
            </div>
          </Link>
          <Link to={`projects/${slides[1].url}`}>
            <div key={slides[1].uid}>
              <img src={slides[1].src} alt={slides[0].alt} />
            </div>
          </Link>
        </Slider>
      )
    }
    return (
      <div className="container">
        <Slides />
        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .container {
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
          }
            .container img {
                width: 100vw;
                height: 100vh;
            }
        `}</style>
      </div>
    )
  }
}

