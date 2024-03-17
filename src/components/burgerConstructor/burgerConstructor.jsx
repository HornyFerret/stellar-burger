import { useState, useEffect } from "react";
import {
  CurrencyIcon,
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerConstructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../orderDetails/orderDetails";

export default function BurgerConstruction({ data }) {
  const [visible, setVisible] = useState(false);
  const handleChangeModal = () => {
    setVisible(!visible);
  };

  return (
    <section className="ml-4 mt-25 ml-10">
      <div className={styles.drag}>
        <div
          className={`mb-10 mr-2 ${styles.list}`}
        >
          {/* <DragIcon type="none" /> */}
          <DragIcon type="primary" />
          {/* <DragIcon type="primary" /> */}
        </div>

        <div
          className={`mb-10 ${styles.rightList}`}
        >
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            id="Соус Spicy-X"
            // thumbnail={image}
          />
          <div className={styles.scroll}>
            <ConstructorElement
              text="Соус Spicy-X"
              price={90}
              id="Соус Spicy-X"
              // thumbnail={image}
            />
          </div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            id="Соус Spicy-X"
            // thumbnail={data[0].image}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <div
          className={`mr-10 text text_type_digits-medium ${styles.price}`}
        >
          <p className="mb-1 mt-1 mr-1">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleChangeModal}
        >
          Оформить заказ
        </Button>
        {visible && (
          <Modal setVisible={handleChangeModal} visibility={visible!==true}>
            <OrderDetails />
          </Modal>
        )}
      </div>
    </section>
  );
}
