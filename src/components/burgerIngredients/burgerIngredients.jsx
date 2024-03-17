import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngredients.module.css";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

export default function BurgerIngredients({ data }) {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("Булки");
  const [arr, setArr] = useState(data);

  const setThatCurrent = () => {
    document.addEventListener("click", (e) => {
      setCurrent({ current: e.target.textContent });
    });
  };

  const handleOpenModal = (evt) => {
    setVisible(!visible);
    if (evt.target.parentElement.id) {
      setArr(data.find((elem) => elem._id === evt.target.parentElement.id));
    } else {
      setArr(
        data.find(
          (elem) => elem._id === evt.target.parentElement.parentElement.id
        )
      );
    }
  };

  const handleCloseModal = () => {
    setVisible(!visible);
  };

  return (
    <section className={`${styles.section}`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={`mb-10 ${styles.flex}`}>
        <Tab
          value="Булки"
          active={current === "Булки"}
          id="Булки"
          onClick={setThatCurrent}
        >
          Булки
        </Tab>
        <Tab
          value="Соусы"
          active={current === "Соусы"}
          id="Соусы"
          onClick={setThatCurrent}
        >
          Соусы
        </Tab>
        <Tab
          value="Начинки"
          active={current === "Начинки"}
          id="Начинки"
          onClick={setThatCurrent}
        >
          Начинки
        </Tab>
      </div>

      <div className={styles.scroll} id="list">
        <h2 className="text text_type_main-medium mb-6">Булки</h2>

        <div
          className={`ml-4 mb-10 ${styles.ingridients}`}
        >
          {data.map((it) => {
            if (it.type === "bun") {
              return (
                <div
                  className={styles.ingredient}
                  key={it._id}
                  id={it._id}
                  onClick={handleOpenModal}
                >
                  <img
                    src={it.image}
                    alt={it.name}
                    className="ml-4 mr-4 mt-6"
                  />
                  <div
                    className={`mt-1 mb-1 ${styles.flex}`}
                    id={it._id}
                  >
                    <p className="text text_type_digits-default mr-1">
                      {it.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <h3
                    className={`text text_type_main-small mr-6 ${styles.name}`}
                  >
                    {it.name}
                  </h3>
                </div>
              );
            }
          })}
        </div>

        <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>

        <div
          className={`ml-4 mb-10 ${styles.ingridients}`}
        >
          {data.map((it) => {
            if (it.type === "sauce") {
              return (
                <button
                  className={styles.ingredient}
                  key={it._id}
                  id={it._id}
                  onClick={handleOpenModal}
                >
                  <img
                    src={it.image}
                    alt={it.name}
                    className="ml-4 mr-4 mt-6"
                  />
                  <div className={`mt-1 mb-1 ${styles.flex}`}>
                    <p className="text text_type_digits-default mr-1">
                      {it.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <h3
                    className={`text text_type_main-small mr-6 ${styles.name}`}
                  >
                    {it.name}
                  </h3>
                </button>
              );
            }
          })}
        </div>

        <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>

        <div
          className={`ml-4 mb-10 ${styles.ingridients}`}
        >
          {data.map((it) => {
            if (it.type === "main") {
              return (
                <button
                  className={styles.ingredient}
                  key={it._id}
                  id={it._id}
                  onClick={handleOpenModal}
                >
                  <img
                    src={it.image}
                    alt={it.name}
                    className="ml-4 mr-4 mt-6"
                  />
                  <div
                    className={`mt-1 mb-1 ${styles.flex}`}
                    id={it._id}
                  >
                    <p className="text text_type_digits-default mr-1">
                      {it.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <h3
                    className={`text text_type_main-small mr-6 ${styles.name}`}
                  >
                    {it.name}
                  </h3>
                </button>
              );
            }
          })}
        </div>
      </div>
      {visible && (
        <Modal header="Детали ингредиента" setVisible={handleCloseModal} visibility={visible!==true}>
          <IngredientDetails arr={arr} />
        </Modal>
      )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.array,
};
