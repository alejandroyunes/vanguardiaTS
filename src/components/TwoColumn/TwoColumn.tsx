import React from "react";
import "./TwoColumn.scss";
import Title from '../Title/Title'
import ImageColumn from '../ImageColumn/ImageColumn'

export default function TwoColums() {
  return (
    <>
      <Title
        title="Portfolio"
        message="Creative Interface Design"
      />

      <div className="two__column-grid section__full">
        <div className="box11">
          <ImageColumn
            title="Illustration Gallery"
            message=" Leading digital agency with solid design and development
        expertise. We build mobile and web products for startups and
        design intricate trading platforms."
          />
        </div>

        <div className="box22">
          <ImageColumn
            title="Illustration Gallery"
            message=" Leading digital agency with solid design and development
        expertise. We build mobile and web products for startups and
        design intricate trading platforms."
          />
        </div>

      </div>


    </>
  );
}
