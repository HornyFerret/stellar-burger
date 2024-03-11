import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppHeader from "./components/appHeader/appHeader";
import BurgerIngredients from './components/burgerIngredients/burgerIngredients';
import BurgerConstruction from './components/burgerConstructor/burgerConstructor'
import reportWebVitals from "./reportWebVitals";
import { data } from "./utils/data";


ReactDOM.render(
  <React.StrictMode>
    <AppHeader />
    <div className="list">
    <BurgerIngredients data ={data}/>
    <BurgerConstruction/>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
