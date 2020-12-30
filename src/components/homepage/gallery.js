import React, { Component } from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'
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
      autoplaySpeed: 5000,
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
          {slides.map(slide => <Link key={slide.uid} to={`projects/${slide.url}`}><div><img src={slide.src} alt={slide.alt}/></div></Link>)}
        </Slider>
      )
    }
    return (
      <div className="container">
        <Slides/>
        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .container {
            width: 100%;
            height: calc(100vh-120px);
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

