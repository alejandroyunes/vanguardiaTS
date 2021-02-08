import React from "react";
import "./Blog.scss";
import aboutMarketing from ".././../assets/deskeagle.svg";
import aboutBox from ".././../assets/boxeagle.svg";
import aboutIllustrator from ".././../assets/illustraeagle.svg";
import Title from "../../components/Title/Title";

export default function Blog() {
    return (
        <>
            <Title message={"Blog"} title={""} />

            <div className="about-us-icons-services">
                <div className="child-one-icons">
                    <img className="about-logo" src={aboutMarketing} />
                    <h4>It can be a fuss to collect images from websiites</h4>
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

            <div className="about-us-icons-services">
                <div className="child-one-icons">
                    <img className="about-logo" src={aboutMarketing} />
                    <h4>It can be a fuss to collect images from websiites</h4>
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

            <div className="about-us-icons-services">
                <div className="child-one-icons">
                    <img className="about-logo" src={aboutMarketing} />
                    <h4>It can be a fuss to collect images from websiites</h4>
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
