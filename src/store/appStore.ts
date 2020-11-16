import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { appReducer, IAppState } from './reducers/appReducer';


const rootReducer = combineReducers({
  app: appReducer,
 
});


export type AppStore = {
  app: IAppState;
};

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)));







export default store;
