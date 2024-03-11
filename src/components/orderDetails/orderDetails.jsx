import React from "react";
import styles from './orderDetails.module.css';
import done from '../images/done.svg'

export default class orderDetails extends React.Component {
    render () {

        return(
            <div className={styles.order}>
                <h2 className="text text_type_digits-large mt-9">034536</h2>
                <p className="text text_type_main-medium mt-8 mb-15">индефикатор заказа</p>

                <img src={done} alt="Done img" />

                <span className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</span>
                <span className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</span>
            </div>
        )
    }
}