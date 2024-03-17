import Modal from "../Modal/Modal";
import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import styles from "./ModalOverlay.module.css";

const modalRoot = document.getElementById("root");

export default function ModalOverlay({ children, close }) {
  return ReactDOM.createPortal(
    <section
      className={styles.modalOverlay}
      id="modalOverlay"
      onClick={(e) => e.currentTarget === e.target && close()}
    >
      {children}
    </section>,
    modalRoot
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.any,
  close: PropTypes.func,
};
