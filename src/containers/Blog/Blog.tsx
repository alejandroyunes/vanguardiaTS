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
import githubBitbucket from ".././../assets/blog/githubbitbucket.jpg";

import { blogDataProps } from "./blog-data";

import Title from "../../components/Title/Title";

export default function Blog() {
  const data = blogDataProps.article;
  console.log(data.map((e) => e.url));

  return (
    <>
      <Title message={"Blog"} title={""} />

      <div className="blog-wrapper">
        {data.map((e, i) => (
          <div className="child-card">
            <img className="about-logo" src={`${e.url}`} alt="" />
            <h4>{e.title}</h4>
            <p>{e.blogSummary}</p>
          </div>
        ))}
      </div>
    </>
  );
}
