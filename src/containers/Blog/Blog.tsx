import React, { useState, useEffect } from "react";
import "./Blog.scss";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { blogDataProps } from "./blog-data";
import { useHistory } from "react-router-dom";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";

export default function Blog() {
  let history = useHistory();

  const [posts, setPosts] = useState([] as any);

  useEffect(() => {
    const fetch = async () => {
      try {
        const article: any[] = await blogDataProps;
        setPosts([...article]);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  console.log(posts);
  return (
    <>
      <Title message={"Blog"} title={""} />

      <div className="blog-wrapper">
        {posts.map((e, i) => (
          <Link to={`/blog-article/${e.id}`} style={{ textDecoration: "none" }}>
            <div className="child-card" key={i}>
              <img className="about-logo" src={`${e.url}`} alt="" />
              <h4>{e.title}</h4>
              <p>{e.blogSummary}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
