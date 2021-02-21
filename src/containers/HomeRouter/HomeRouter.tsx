import React, { FC } from 'react'
import Index from '../Index/Index'
import AboutUs from '../AboutUs/AboutUs'
import Services from '../Services/Services'
import Blog from '../Blog/Blog'
import Portfolio from '../Portfolio/Portfolio'
import ScrollToTop from './ScrollToTop'
import { Route, useRouteMatch } from 'react-router-dom'
import BlogArticle from '../BlogArticle/BlogArticle'


const HomeRouter: FC = () => {

  let match = useRouteMatch();

  return (
    <div >
      <ScrollToTop />
      <Route exact path={`${match.path}`} component={Index} />
      <Route exact path={`/about`} component={AboutUs} />
      <Route exact path={`/services`} component={Services} />
      <Route exact path={`/portfolio`} component={Portfolio} />
      <Route exact path={`/blog`} component={Blog} />
      <Route path="/blog-article" component={BlogArticle} />
    </div>

  );
}

export default HomeRouter
