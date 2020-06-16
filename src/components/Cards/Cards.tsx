import React from "react";
import ResponsiveDesignIcon from "./Assets/responsive-design-icon.svg";
import MobileDesignIcon from "./Assets/mobile-design-icon.svg";
import RocketAnimation from "./rocketAnimation";
import './Cards.scss'
import Title from '../Title/Title'
import Card from '../Card/Card'

export default function Cards() {
  return (
    <>
        <Title 
          title="Latest Technologies"
          message="Mobile first world"
        />
     
        <div className="cards__container section__grid">
          {/* ****************************  one ******************************** */}

          
          <Card
          image={ResponsiveDesignIcon}
          title="Responsive Design"
          subtitle="Illustration Galleryzzz"
          message="Leading digital agency with solid design and development
          expertise. We build mobile and web products for startups and
          design intricate trading platforms."
          />
          {/* ****************************  two ******************************** */}

          <Card
          image={MobileDesignIcon}
          title="Responsive Design"
          subtitle="Illustration Gallery"
          message="Leading digital agency with solid design and development
          expertise. We build mobile and web products for startups and
          design intricate trading platforms."
          />


          
          {/* ****************************  three ******************************** */}

          <Card
          image={MobileDesignIcon}
          title="SEO & Marketing"
          subtitle="Illustration Gallery"
          message="Leading digital agency with solid design and development
          expertise. We build mobile and web products for startups and
          design intricate trading platforms."
          />


          {/* ****************************  end ******************************** */}
        </div>
    </>
  );
}
