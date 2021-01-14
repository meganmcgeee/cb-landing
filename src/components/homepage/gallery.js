import React, { Component, useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      pauseOnHover: false,
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
          url: data.allPrismicSlider.nodes[0].data.slider[0].link.slug,
          src: data.allPrismicSlider.nodes[0].data.slider[0].image.url,
          alt: data.allPrismicSlider.nodes[0].data.slider[0].alternative_text,
        },
        {
          url: data.allPrismicSlider.nodes[0].data.slider[1].link.slug,
          src: data.allPrismicSlider.nodes[0].data.slider[1].image.url,
          alt: data.allPrismicSlider.nodes[0].data.slider[1].alternative_text,
        },
        {
          url: data.allPrismicSlider.nodes[0].data.slider[2].link.slug,
          src: data.allPrismicSlider.nodes[0].data.slider[2].image.url,
          alt: data.allPrismicSlider.nodes[0].data.slider[2].alternative_text,
        }
        // {
        //   url: data.allPrismicSlider.nodes[0].data.slider[3].link.slug,
        //   src: data.allPrismicSlider.nodes[0].data.slider[3].image.url,
        //   alt: data.allPrismicSlider.nodes[0].data.slider[3].alternative_text,
        // },
        // {
        //   url: data.allPrismicSlider.nodes[0].data.slider[4].link.slug,
        //   src: data.allPrismicSlider.nodes[0].data.slider[4].image.url,
        //   alt: data.allPrismicSlider.nodes[0].data.slider[4].alternative_text,
        // },
      ]
      function time(a, b) {
        setTimeout(() => {
          document.getElementById('slideLink').href = `/projects/${slides[a].url}`
        }, b)
      }

      return (
        <Link id="slideLink" href={`/projects/${slides[0].url}`}>
          <Slider {...settings}>
            {slides.map(slide => <div key={slide.url}><img src={slide.src} alt={slide.alt} /></div>)}
          </Slider>
        </Link>
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
            height: calc(100vh-120px);
            position: absolute;
            bottom: 0;
            left: 0;
          }
            .container img {
                width: 100vw;
                height: 100vh;
            }
            @media(max-width: 760px) {
              .container {
                background: #0E0E1C;
              }
              .container img {
                width: 100vw;
                height: 300px;
                margin: 13.5rem auto 0 auto;
              }
            }
        `}</style>
      </div>
    )
  }
}

