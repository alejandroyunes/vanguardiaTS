import lightBg from './assets/bg.svg';
import darkBg from './assets/darkBg.svg';

export interface Theme {
  backgroundImage: string;
  backgroundGradient: {
    color1: string;
    color2: string;
  };
  panelBgColor: string;
  panelTitleColor: string;
  textColor: string;

}

export const lightTheme: Theme = {
  backgroundImage: lightBg,
  backgroundGradient: {
    color1: '#ffffff',
    color2: '#ffffff',
  },
  panelBgColor: '#FFFFFF',
  panelTitleColor: '#727E8E',
  textColor: '#000000',

  
};

export const darkTheme: Theme = {
  backgroundImage: darkBg,
  backgroundGradient: {
    color1: '#031027',
    color2: '#02101D',
  },
  panelBgColor: '#051A33',
  panelTitleColor: '#216397',
  textColor: '#ffffff',
};
