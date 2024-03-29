import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppHeader from "./components/appHeader/appHeader";
import reportWebVitals from "./reportWebVitals";
import App from './components/App/App'

// import { compose, createStore, applyMiddleware } from 'redux';
// const enhancer = composeEnhancers(applyMiddleware(thunk));

// const store = createStore(rootReducer, enhancer);
// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

ReactDOM.render(
  <React.StrictMode>
    <AppHeader />
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
