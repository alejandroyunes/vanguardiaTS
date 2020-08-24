import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { appReducer, IAppState } from './reducers/appReducer';
import { IWeatherState, weatherReducer } from './reducers/weatherReducer';

const rootReducer = combineReducers({
  app: appReducer,
  weather: weatherReducer,
});


export type AppStore = {
  app: IAppState;
  weather: IWeatherState;
};

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)));







export default store;
