import { createStore,applyMiddleware,compose } from "redux" ;
import thunk  from 'redux-thunk' ;
import combineReducers from './reducers/index' ;

const initialState = {};
const middleware = [thunk];
let store;
const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if(window.navigator.userAgent.includes("Chrome")&& ReactReduxDevTools){  //only wokrs for chrome browsers 
store = createStore(
    combineReducers,
   initialState,
   compose(
     applyMiddleware(...middleware),
     ReactReduxDevTools
   )
 );
}else{  //  for  other  browsers
 store = createStore(
  combineReducers ,
   initialState,
   compose(
     applyMiddleware(...middleware)
   )
 );
}

export default store ;
