import React from "react";
import "./Blog.scss";
import linuxWindows from ".././../assets/blog/linux-windows.jpg";
import wordPress from ".././../assets/blog/wordpress.jpg";
import css from ".././../assets/blog/css.jpg";
import react from ".././../assets/blog/react.jpg";
import wordPressPlugin from ".././../assets/blog/wordpress-plugins.jpg";
import adobeFigma from ".././../assets/blog/figma-xd.jpg";
import ReactNetlify from ".././../assets/blog/react-netlify.jpg";
import htmlCssJs from ".././../assets/blog/htmlcssjs.jpg";



import aboutMarketing from ".././../assets/boxeagle.svg";
import aboutBox from ".././../assets/boxeagle.svg";
import aboutIllustrator from ".././../assets/illustraeagle.svg";
import Title from "../../components/Title/Title";

export default function Blog() {
    return (
        <>
            <Title message={"Blog"} title={""} />

            <div className="about-us-icons-services">
                <div className="child-one-icons">
                    <img className="about-logo" src={linuxWindows} />
                    <h4>¿Cómo instalar Linux y Windows en el mismo disco?</h4>
                    <p>
                        Collecting images are always a nightmare, especially with all the
                        procedures and when there are more than one.
                    </p>
                </div>
                <div className="child-two-icons">
                    <img className="about-logo" src={wordPress} />
                    <h4>¿Cómo tener un sitio web en 20 minutos?</h4>
                    <p>
                        Collecting images are always a nightmare, especially with all the
                        procedures and when there are more than one.
                    </p>
                </div>
                <div className="child-three-icons">
                    <img className="about-logo" src={css} />
                    <h4>¿Cósas que puedes hacer con CSS hoy?</h4>
                    <p>
                        Collecting images are always a nightmare, especially with all the
                        procedures and when there are more than one.
                    </p>
                </div>
            </div>

            <div className="about-us-icons-services">
                <div className="child-one-icons">
                    <img className="about-logo" src={react} />
                    <h4>¿Cómo instalar React?</h4>
                    <p>
                        Collecting images are always a nightmare, especially with all the
                        procedures and when there are more than one.
                    </p>
                </div>
                <div className="child-two-icons">
                    <img className="about-logo" src={wordPressPlugin} />
                    <h4>¿Cuáles son los mejores plug-ins para un sitio en WordPress?</h4>
                    <p>
                        Collecting images are always a nightmare, especially with all the
                        procedures and when there are more than one.
                    </p>
                </div>
                <div className="child-three-icons">
                    <img className="about-logo" src={adobeFigma} />
                    <h4>¿Cuáles son los mejores programas para diseñar?</h4>
                    <p>
                        Collecting images are always a nightmare, especially with all the
                        procedures and when there are more than one.
                    </p>
                </div>
            </div>

            <div className="about-us-icons-services">
                <div className="child-one-icons">
                    <img className="about-logo" src={ReactNetlify} />
                    <h4>¿Cómo instalar tu proyecto de React en un servidor veloz y seguro?</h4>
                    <p>
                        Collecting images are always a nightmare, especially with all the
                        procedures and when there are more than one.
                    </p>
                </div>
                <div className="child-two-icons">
                    <img className="about-logo" src={htmlCssJs} />
                    <h4>¿Mejores recursos para aprender a programar?</h4>
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
