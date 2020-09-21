import React, { FC, useEffect } from 'react'


import Index from '../Index/Index'
import AboutUs from '../AboutUs/AboutUs'
import { Route, useRouteMatch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'


const HomeRouter: FC = () => {

  let match = useRouteMatch();

  return (
    <div >
 <ScrollToTop />
      <Route exact path={`${match.path}`} component={Index} />
      <Route exact path={`/about`} component={AboutUs} />
    </div>

  );
}

export default HomeRouter
