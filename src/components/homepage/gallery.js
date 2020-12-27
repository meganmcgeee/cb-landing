import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "1",
    alt: "Slider Image 1"
  },
  {
    src: "2",
    alt: "Slider Image 2"
  },
  {
    src: "3",
    alt: "Slider Image 3"
  },
  {
    src: "4",
    alt: "Slider Image 4"
  },
  {
    src: "5",
    alt: "Slider Image 5"
  },
]

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
    return (
      <div className="container">
        <Slider {...settings}>
            {images.map(image => <div><img src={image.src} alt={image.alt}/></div>)}
        </Slider>
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