import React, { Component } from "react";
import Slider from "react-slick";
import tvImg from "../assets/img/tv.png";
import sliderData from "../data/sliderData";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          {sliderData.map((numb) => (
            <div
              key={numb}
              className="global_all_slider_item"
              // style="width: 100px; display: block"
            >
              <a href="" className="global_all_slider_item_in">
                <h6 className="regular_10 text-dark">Музыка и видео</h6>
                <div className="global_all_slider_item_in_img">
                  <img src={tvImg} alt="" />
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
