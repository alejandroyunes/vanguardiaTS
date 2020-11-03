import React from "react";
import "./TwoColumn.scss";
import OneColumnImageCard from '../OneColumnImageCard/OneColumnImageCard'
import WhiteMountains from "../../components/ImageGallery/Assets/white-mountains.jpg";
import GreenDesign from "../../components/ImageGallery/Assets/green-design-mockup.jpg";


export default function TwoColums() {
  return (
    <>
        <div className="two__columns_design__section">
          <div className="two__columns-grid">
            <div className="two__columns-child-one">
              <OneColumnImageCard
                image={WhiteMountains}
                title="Illustration Gallery"
                message=" Leading digital agency with solid design and development
        expertise. We build mobile and web products for startups and
        design intricate trading platforms."
              />
            </div>

            <div className="two__columns-child-two">
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
    </>
  );
}
