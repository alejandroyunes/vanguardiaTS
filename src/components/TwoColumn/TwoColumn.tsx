import React from "react";
import "./TwoColumn.scss";
import Title from '../Title/Title'
import OneColumnImageCard from '../OneColumnImageCard/OneColumnImageCard'
import WhiteMountains from "../../components/ImageGallery/Assets/white-mountains.jpg";
import GreenDesign from "../../components/ImageGallery/Assets/green-design-mockup.jpg";

import Forecast from '../../components/Forecast/Forecast';
import Weather from '../../components/Weather/Weather';
import Search from '../../components/Search/Search';


export default function TwoColums() {
  return (
    <>
      <Title
        title="Design"
        message="Modern tendency Interface Design"
      />
      <div className="design__section section__full" >

        <div className="two__column-grid">
          <div className="box11">
            <OneColumnImageCard
              image={WhiteMountains}
              title="Illustration Gallery"
              message=" Leading digital agency with solid design and development
        expertise. We build mobile and web products for startups and
        design intricate trading platforms."
            />
          </div>

          <div className="box22">
            <OneColumnImageCard
            image={GreenDesign}
              title="Illustration Gallery"
              message=" Leading digital agency with solid design and development
        expertise. We build mobile and web products for startups and
        design intricate trading platforms."
            />
          </div>

        </div>

      </div>


      <Search />
      <Weather />
      <Forecast />

    </>
  );
}
