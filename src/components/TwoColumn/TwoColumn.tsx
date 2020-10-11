import React from "react";
import "./TwoColumn.scss";
import Title from '../Title/Title'
import OneColumnImageCard from '../OneColumnImageCard/OneColumnImageCard'
import WhiteMountains from "../../components/ImageGallery/Assets/white-mountains.jpg";
import GreenDesign from "../../components/ImageGallery/Assets/green-design-mockup.jpg";


export default function TwoColums() {
  return (
    <>
      <div className="">
      <Title
        title="Design"
        message="Modern tendency Interface Design"
      />
      <div className="design__section">
        <div className="two__column-grid">
          <div className="two__column-box-one">
            <OneColumnImageCard
              image={WhiteMountains}
              title="Illustration Gallery"
              message=" Leading digital agency with solid design and development
        expertise. We build mobile and web products for startups and
        design intricate trading platforms."
            />
          </div>

          <div className="two__column-box-two">
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
      </div>
    </>
  );
}
