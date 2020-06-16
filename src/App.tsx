import React, { FC } from 'react'
import { BrowserRouter, Switch } from "react-router-dom";
import HomeRouter from "./containers/HomeRouter/HomeRouter";
import PublicRoute from './core/PublicRoute/PublicRoute';

import "../src/sass/styles.scss";

const { NODE_ENV, PUBLIC_URL } = process.env
let routerProps = {}

if (NODE_ENV === 'production' && PUBLIC_URL) {
  try {
    const { pathname } = new URL(PUBLIC_URL)
    routerProps = {
      basename: pathname,
    }
  } catch (err) {
    console.log('LOG: err', err)
  }
}


const App: FC = () => (
  <BrowserRouter {...routerProps}>
    <Switch>
    <PublicRoute path="/" exact forceRedirect component={HomeRouter} />
    </Switch>
  </BrowserRouter>
)

export default App