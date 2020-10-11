import React, { FC, useEffect } from 'react'


import Index from '../Index/Index'
import AboutUs from '../AboutUs/AboutUs'
import Services from '../Services/Services'
import Blog from '../Blog/Blog'
import Portfolio from '../Portfolio/Portfolio'

import { Route, useRouteMatch } from 'react-router-dom'


const HomeRouter: FC = () => {

  let match = useRouteMatch();

  return (
    <div >

      <Route exact path={`${match.path}`} component={Index} />
      <Route exact path={`/about`} component={AboutUs} />
      <Route exact path={`/services`} component={Services} />
      <Route exact path={`/portfolio`} component={Portfolio} />
      <Route exact path={`/blog`} component={Blog} />
    </div>

  );
}

export default HomeRouter
