import { useState, useEffect } from "react";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Modal({ children, header, setVisible,visibility }) {
  // console.log(window.find(Modal));
  useEffect(() => {
    function changeVisibilitu(evt) {
      if (evt.code === "Escape") {
        setVisible();
        // console.log(1);
      }
    }
    document.addEventListener("keydown", changeVisibilitu);
    // if (window.find(Modal)) {
    //   document.removeEventListener("keydown",changeVisibilitu);
    // }
      
  }, [setVisible,visibility]);

  return (
    <ModalOverlay close={setVisible}>
      <div className={styles.modalWindow} id="modal">
        <div
          className={styles.modal}
        >
          <h1 className="ml-10 mt-10 text text_type_main-large">{header}</h1>
          <button className={`mt-15 mr-10 ${styles.closeButton}`}>
            <CloseIcon type="primary" onClick={setVisible} />
          </button>
        </div>
        {children}
      </div>
    </ModalOverlay>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  header: PropTypes.string,
  setVisible: PropTypes.func,
  visibility:PropTypes.bool
};
