import React from "react"
import "./BlogArticle.scss"

import avatarImg from "./Resouces/img_avatar2.png"

export default function BlogArticle() {

    return (
        <>
            <div className="wrapper">
                <div className="article-author">
                    <div className="article-author-image">
                        <img src={avatarImg} alt="Avatar" className="avatar" />
                    </div>
                    <div className="article-author-title">
                        <p>Sobre el autor</p>
                    </div>
                </div>
                <div className="article-author-description">
                    <p>
                        Un diseñador independiente y desarrollador front-end que intenta mejorar la experiencia de todos en la Web con un enfoque en la mejora progresiva y
                    </p>
                </div>

                <div className="article-title">
                    <div className="article-date">
                        <p>Febrero 1, 2021</p>
                    </div>
                    <div className="article-title">
                        <h2>¿Cómo instalar Linux y Windows en el mismo disco?</h2>
                    </div>
                </div>
                <div className="meta-box-article">
                    <ul className="meta-box-article-list">
                        <li className="meta-box--item meta-box--published">12 min read</li>
                        <li className="meta-box--item meta-box--tags"><a href="/category/css">CSS</a><span>,</span>
                            <a href="/category/tools">Tools</a><span>,</span>
                            <a href="/category/workflow">Workflow</a>
                        </li>
                        <li className="meta-box--item meta-box--author">Saved for offline reading</li>
                        <li className="meta-box--item meta-box--share"><section>Share on <a href="#">Twitter</a>,&nbsp;<a href="#">LinkedIn</a></section></li>
                    </ul>
                </div>
                <div className="article-description">
                    <section arial-label="quick summary" className="article__summary">
                    The present and future of CSS are very bright indeed and if you take a pragmatic, progressive approach to your CSS, then things will continue to get better and better on your projects, too. In this article, we’ll look into masonry layout, :is selector, clamp(), ch and ex units, updated text decoration, and a few other useful CSS properties.
                    </section>
                    <section className="article__summary-body">
                        <p><strong>CSS is great </strong>and getting better all the time. Over recent years, especially, it has evolved really fast, too. Understandably, some of the really handy powers CSS gives you might have slipped you by because of this, so in this article, I’m going to show you some really handy stuff you can do with modern CSS today, and also share some stuff that we can look forward to in the future.</p>
                        <h2>

                        </h2>
                    </section>
                </div>
            </div>
        </>
    )
}

