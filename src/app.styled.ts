import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {


  /* tslint:disable */
  
  export interface DefaultTheme extends Theme {}

}

export const GlobalStyles = createGlobalStyle`


body {

  background: no-repeat center 120%, linear-gradient(${({ theme }) =>
  theme.backgroundGradient.color1} 0%,  ${({ theme }) => theme.backgroundGradient.color2} 100%);
  background-size: auto;
  color: ${({ theme }) => theme.textColor};
}

`;
