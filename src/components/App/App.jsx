import {useEffect,useState} from "react";
import styles from "./App.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstruction from "../BurgerConstructor/burgerConstructor";
// import { data } from "../../utils/data";
import { compose, createStore, applyMiddleware } from 'redux';
// const enhancer = composeEnhancers(applyMiddleware(thunk));

// const store = createStore(rootReducer, enhancer);
// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;
// let defaultArr = [];
const url = 'https://norma.nomoreparties.space/api/ingredients';
export default function App() {
    const [data,setDataArr] = useState([]);

    const getApiData = async() => {
        const resp = await fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err));
        
        setDataArr(resp.data);
    }
    
    useEffect(() => {
        getApiData();
    },[]);
    
    return(
        <main className={styles.list}>
            <BurgerIngredients data={data} />
            <BurgerConstruction data={data}/>
        </main>
    );
}



