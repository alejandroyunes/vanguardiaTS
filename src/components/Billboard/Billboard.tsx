import React from "react";
import "./Billboard.scss";
import Animation from "./animation";
import Button from "../Button/Button";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import { useHistory } from "react-router-dom";

export default function Billboard() {
  let history = useHistory();

  return (
    <>
      <div className="main__billboard">
        <div className="main-billboard-child-one">
          <div>
            <h1>Construimos Experiencias Web Asombrosas</h1>
            <p>
              Agencia digital líder con sólida experiencia en diseño y
              desarrollo. Creamos productos móviles y web para plataformas
              comerciales complejas.
            </p>
            <div className="billboard-button">
              <Button
                label="ver trabajo"
                category="primary"
                size="sm"
                icon={WorkOutlineIcon}
                onClick={() => history.push("/portfolio")}
              />
            </div>
          </div>
        </div>

        <div className="main-billboard-child-two">
          <Animation />
        </div>
      </div>
    </>
  );
}
