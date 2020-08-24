import React, { FC } from 'react'
import { BrowserRouter, Switch } from "react-router-dom";
import HomeRouter from "./containers/HomeRouter/HomeRouter";
import PublicRoute from './core/PublicRoute/PublicRoute';


import { useSelector } from 'react-redux';
import { AppStore } from './store/appStore';

import "../src/sass/styles.scss";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

import { GlobalStyles } from './app.styled';

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


const App: FC = () => {
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
       <GlobalStyles />
      <BrowserRouter {...routerProps}>
   
        <Switch>
       
          <PublicRoute path="/" exact forceRedirect component={HomeRouter} />

        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App