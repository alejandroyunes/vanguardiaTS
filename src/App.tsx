import React, { FC } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomeRouter from "./containers/HomeRouter/HomeRouter";
import PublicRoute from './core/PublicRoute/PublicRoute';

import { useSelector } from 'react-redux';
import { AppStore } from './store/appStore';

import "../src/sass/styles.scss";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyles } from './app.styled';

let routerProps = {}

const App: FC = () => {

  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Router
        {...routerProps}>
        <Switch>
          <PublicRoute path="/" component={HomeRouter} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App