import React from "react";
import './Billboard.scss'
import Animation from "./animation";

export default function Billboard() {
  return (
    <>
      <div className="grid__billboard section__grid">
        <div className="billboard-box1">
          <div>
            <h1>
              Building Amazing  <br />Web Experiences
          </h1>
            <h2>
              Leading digital agency with solid design and development expertise.
              We build mobile and web products for startups and design intricate
              trading platforms.
          </h2>
            <div className="grid__billboard-email">
              <input type="text" placeholder="Email address" name="mail" />
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>

        <div className="billboard-box2">
          <Animation />
        </div>
        
      </div>
    </>
  );
}
