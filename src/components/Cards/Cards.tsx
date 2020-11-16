import React from "react";
import ResponsiveDesignIcon from "./Assets/responsive-design-icon.svg";
import MobileDesignIcon from "./Assets/mobile-design-icon.svg";
import Rocket from "./Assets/rocket.svg";
import './Cards.scss'
import Title from '../Title/Title'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'


export default function Cards() {


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
    <>
      <div className="cards-wrapper">
        <div className="cards__container section__grid">
          <Card
            image={ResponsiveDesignIcon}
            title="Responsive first"
            subtitle="Illustration Galleryzzz"
            message="Leading1 digital agency with solid design and development
          expertise. We build mobile and web products for startups and
          design intricate trading platforms."
          />
          <Card
            image={Rocket}
            title="Responsive Middle"
            subtitle="Illustration Gallery"
            message="Leading2 digital agency with solid design and development
  expertise. We build mobile and web products for startups and
  design intricate trading platforms."
          />
          <Card
            image={MobileDesignIcon}
            title="Responsive Middle"
            subtitle="Illustration Gallery"
            message="Leading2 digital agency with solid design and development
  expertise. We build mobile and web products for startups and
  design intricate trading platforms."
          />
        </div>
      </div>
      <div className="cards-wrapper-mobile">
      <Carousel />
      </div>
    </>
  );
}

