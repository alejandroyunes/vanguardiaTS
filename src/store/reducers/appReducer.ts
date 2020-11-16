import { AppActionTypes } from '../actionTypes';

export interface IAppState {

  isLoading: boolean;
  isInitial: boolean;
  darkMode: boolean;
}

const initialState: IAppState = {
  
  isLoading: false,
  isInitial: true,
  darkMode: JSON.parse(localStorage.getItem('darkMode') as string) as boolean,
};

export const appReducer = (state: IAppState = initialState, action: { type: AppActionTypes; payload: any }) => {
  switch (action.type) {
    case AppActionTypes.TOGGLE_DARK_MODE:
      localStorage.setItem('darkMode', (!state.darkMode).toString());
      return {
        ...state,
        darkMode: !state.darkMode,
      };
   

    default:
      return state;
  }
};
