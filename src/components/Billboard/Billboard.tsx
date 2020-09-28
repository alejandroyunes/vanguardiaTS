import React from "react";
import "./Billboard.scss";
import Animation from "./animation";
import Button from "../Button/Button";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import ContactMailIcon from "@material-ui/icons/ContactMail";
export default function Billboard() {
  return (
    <>
      <div className="main__billboard">
        <div className="child-one">
          <div>
            <h1>Building Amazing Web Experiences</h1>
            <h2>
              Leading digital agency with solid design and development
              expertise. We build mobile and web products for startups and
              design intricate trading platforms.
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
              <div className="button-two">
                <Button
                  label="contact us"
                  category="primary"
                  size="sm"
                  icon={ContactMailIcon}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="child-two">
          <Animation />
        </div>
      </div>
    </>
  );
}
