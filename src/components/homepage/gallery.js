import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
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
          <div>
            <img src="" alt="Food Slideshow 1" />
          </div>
          <div>
            <img src="" alt="Food Slideshow 2" />
          </div>
          <div>
            <img src="" alt="Food Slideshow 3" />
          </div>
          <div>
            <img src="" alt="Food Slideshow 4" />
          </div>
          <div>
            <img src="" alt="Food Slideshow 5" />
          </div>
        </Slider>
        <style jsx>{`
            .container img {
                width: 100vw;
                height: 800px;
            }
        `}</style>
      </div>
    )
  }
}