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
            <img src="https://images.unsplash.com/photo-1510746001195-0db09655b6db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80" alt="Food Slideshow 1" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1510746001195-0db09655b6db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80" alt="Food Slideshow 2" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1510746001195-0db09655b6db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80" alt="Food Slideshow 3" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1510746001195-0db09655b6db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80" alt="Food Slideshow 4" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1510746001195-0db09655b6db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80" alt="Food Slideshow 5" />
          </div>
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
          }
            .container img {
                width: 100%;
                height: 100%;
            }
        `}</style>
      </div>
    )
  }
}