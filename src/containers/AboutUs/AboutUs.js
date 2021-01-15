import React from 'react'
import { useSpring, animated } from 'react-spring'
import "./AboutUs.scss";
import linkedin from ".././../assets/linkedin.svg";
import './styles.scss'



export default function AboutUs() {

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
  const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
  const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
  const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <>
      <div className="wrapper">
        {/* <div className="about-child-one">
          <img className="about-logo" src={aboutLogo} />
        </div> */}
        <div className="about-child-two">
          <h1 className="about-main-title">
            Somos un grupo de profesionales en las áreas de diseño y desarrollo web.
          </h1>
        </div>
        <div className="child-three">
          <p>
            Planteamos soluciones basadas en el entendimiento estratégico y analítico de su negocio.
          </p>
        </div>
      </div>


      <div className="about-us-info">
        <div className="about-child-one">
          <h1>Estudio de diseño y desarrollo web que entrega un trabajo superlativo para startups, agencias o cualquier ser humano.</h1>
        </div>
        <div className="about-child-two design-motion">
          {/* <img className="about-logo" src={linkedin} /> */}
          <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
            <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
            <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
            <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
          </div>
        </div>
      </div>

    </>
  );
}

