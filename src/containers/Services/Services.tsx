import React from "react";
import "./Services.scss";
import aboutMarketing from ".././../assets/deskeagle.svg";
import aboutBox from ".././../assets/boxeagle.svg";
import aboutIllustrator from ".././../assets/illustraeagle.svg";
import TItle from "../../components/Title/Title";

import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

import Button from "../../components/Button/Button";
import Animation from "../../assets/development.png";

export default function Services() {
  return (
    <>
      <div className="services-billboard">
        <div className="child-one-services">
          <div>
            <h1>Vanguardia Digital Development</h1>
            <h2>
              Get rid of spam in your application. Use our API to access
              Akismet’s powerful spam detection. Our developer program provides
              valuable data and feedback during development.
            </h2>
            <div className="buttons">
              <div className="button-one">
                <Button
                  label="view work"
                  category="primary"
                  size="sm"
                  icon={WorkOutlineIcon}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="child-two-services">
          <img src={Animation} />
        </div>
      </div>
      <div className="services-technologies">
        <TItle message={"Technologies"} title={""} />
      </div>
      <div className="about-us-icons">
        <div className="child-one-icons">
          <img className="about-logo" src={aboutMarketing} />
          <h4>It can be a fuss to collect images from websites</h4>
          <p>
            Collecting images are always a nightmare, especially with all the
            procedures and when there are more than one.
          </p>
        </div>
        <div className="child-two-icons">
          <img className="about-logo" src={aboutBox} />
          <h4>Lack of efficiency to organizing assets</h4>
          <p>
            Collecting images are always a nightmare, especially with all the
            procedures and when there are more than one.
          </p>
        </div>
        <div className="child-three-icons">
          <img className="about-logo" src={aboutIllustrator} />
          <h4>Finding assets become mission impossible</h4>
          <p>
            Collecting images are always a nightmare, especially with all the
            procedures and when there are more than one.
          </p>
        </div>
      </div>
    </>
  );
}
