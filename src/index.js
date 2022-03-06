import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import authorsReducer from "./store/authors/reducer";
import coursesReducer from "./store/courses/reducer";
import userReducer from "./store/courses/reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
//
// const rootReducer = {
//     authors: authorsReducer,
//     courses: coursesReducer,
//     user: userReducer,
// };
//
//
// const composeEnhancers =
//     window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
//
// export const store = createStore(combineReducers(rootReducer), composeEnhancers(applyMiddleware(thunkMiddleware))());

ReactDOM.render(
  <React.StrictMode>
      {/*<Provider store={store}>*/}
          <App />
      {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
