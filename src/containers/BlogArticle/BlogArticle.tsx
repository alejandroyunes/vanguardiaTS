import React, { useEffect, useState } from "react";
import "./BlogArticle.scss";
import avatarImg from "./Resouces/img_avatar2.png";
import { blogDataProps } from "../Blog/blog-data";
import { useLocation } from "react-router-dom";

export default function BlogArticle() {
  let id = useLocation().pathname.substring(14);

  const [posts, setPosts] = useState([] as any);

  useEffect(() => {
    const fetch = async () => {
      try {
        const article: any[] = await blogDataProps;

        const uniqueAriticle = article.filter((e, i) => e.id == id);

        setPosts([...uniqueAriticle]);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, [id]);

  return (
    <>
      <div className="wrapper-blog-article">
        {posts.map((e) => (
          <div className="two">
            <div className="title">
              <div className="article-title">
                <div className="article-date">
                  <p>{e.date}</p>
                </div>
                <div className="article-title">
                  <h2>{e.title}</h2>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="article-description">
                <section
                  arial-label="quick summary"
                  className="article__summary"
                >
                  {e.articleSummary}
                </section>
                <section className="article__summary-body">
                  {e.step.map((e) => (
                    <>
                      <h2>{e.title}</h2>
                      <p>
                        <strong>{e.step} </strong>
                        {e.description}
                      </p>
                    </>
                  ))}
                </section>
              </div>
            </div>
            <div className="right">
              <div className="meta-box-article">
                <ul className="meta-box-article-list">
                  <li className="meta-box--item meta-box--published">
                    {e.time} min read
                  </li>
                  <li className="meta-box--item meta-box--tags">
                    {e.related.map((e) => (
                      <>
                        <a href="/category/css">{e}</a>
                        <span>,</span>
                      </>
                    ))}
                  </li>
                  <li className="meta-box--item meta-box--author">
                    Saved for offline reading
                  </li>
                  <li className="meta-box--item meta-box--share">
                    <section>
                      Share on <a href="/">Twitter</a>,&nbsp;
                      <a href="/">LinkedIn</a>
                    </section>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className="left">
          <div className="article-author">
            <div className="article-image-title-wrapper">
              <div className="article-author-image">
                <img src={avatarImg} alt="Avatar" className="avatar" />
              </div>
              <div className="article-author-title">
                <p>Sobre el autor</p>
              </div>
            </div>
            <div className="article-author-description">
              <p>
                Un diseñador independiente y desarrollador front-end que intenta
                mejorar la experiencia de todos en la Web con un enfoque en la
                mejora progresiva y
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
