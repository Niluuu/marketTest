import React, { Component } from "react";
import Slider from "react-slick";
import tvImg from "../assets/img/tv.png";

export default class Carousel extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    function range(start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    }

    const result = range(1, 10);
    this.setState({ items: result });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          {this.state.items.map((numb) => (
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
