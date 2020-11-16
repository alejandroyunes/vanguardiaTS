
import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.scss'
import Card from '../Card/Card'
import ResponsiveDesignIcon from "../../assets/cards/responsive-design-icon.svg";
import MobileDesignIcon from "../../assets/cards/mobile-design-icon.svg";
import Rocket from "../../assets/cards/rocket.svg";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      lazyLoad: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <Card
            image={ResponsiveDesignIcon}
            title="Responsive first"
            subtitle="Illustration Galleryzzz"
            message="Leading1 digital agency with solid design and development
          expertise. We build mobile and web products for startups and
          design intricate trading platforms."
          />
          </div>
          <div >
          <Card
            image={MobileDesignIcon}
            title="Responsive first"
            subtitle="Illustration Galleryzzz"
            message="Leading1 digital agency with solid design and development
          expertise. We build mobile and web products for startups and
          design intricate trading platforms."
          />
          </div>
          <div >
          <Card
            image={Rocket}
            title="Responsive first"
            subtitle="Illustration Galleryzzz"
            message="Leading1 digital agency with solid design and development
          expertise. We build mobile and web products for startups and
          design intricate trading platforms."
          />
          </div>
        </Slider>
      </div>
    );
  }
}