import React, { FC } from 'react'


import Index from '../Index/Index'
import { Route, useRouteMatch } from 'react-router-dom'


const HomeRouter: FC = () => {

  let match = useRouteMatch();

  return (
    <div >
      <Route exact path={`${match.path}`} component={Index} />
    </div>

  );
}

export default HomeRouter
