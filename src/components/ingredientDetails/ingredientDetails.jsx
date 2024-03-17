import React from "react";
import PropTypes from "prop-types";
import styles from "./IngredientDetails.module.css";

export default function ingredientDetails({ arr }) {

    return (
      <div className={styles.ingredient}>
        <img src={arr.image_large} alt={arr.name} className={styles.picture} />
        <h2
          className={`text text_type_main-medium mt-4 mb-8 ${styles.name}`}
        >
          {arr.name}
        </h2>

        <ul className={styles.elements}>
          <li className="text text_type_main-default text_color_inactive mr-5">
            Калории,ккал
          </li>
          <li className="text text_type_main-default text_color_inactive mr-5">
            Белки, г
          </li>
          <li className="text text_type_main-default text_color_inactive mr-5">
            Жиры, г
          </li>
          <li className="text text_type_main-default text_color_inactive mr-5">
            Углеводы, г
          </li>
          <li className="text text_type_digits-default text_color_inactive mr-5 mb-15">
            {arr.calories}
          </li>
          <li className="text text_type_digits-default text_color_inactive mr-5 mb-15">
            {arr.proteins}
          </li>
          <li className="text text_type_digits-default text_color_inactive mr-5 mb-15">
            {arr.fat}
          </li>
          <li className="text text_type_digits-default text_color_inactive mr-5 mb-15">
            {arr.carbohydrates}
          </li>
        </ul>
      </div>
    );
  }


ingredientDetails.propTypes = {
  data: PropTypes.array,
};
