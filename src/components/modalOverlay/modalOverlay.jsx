import Modal from "../modal/modal";
import React from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import styles from './modalOverlay.module.css';


const modalRoot = document.getElementById("root");

export default class ModalOverlay extends React.Component {

    render() {
        const { children,header,onClose } = this.props;
    
        return ReactDOM.createPortal((
            <section className={styles.modalOverlay} id ="modalOverlay">
                <Modal header = {header} onClose={onClose}>
                    {children}
                </Modal>
            </section>
        ),modalRoot
        );
    }
}

ModalOverlay.propTypes = {
    children: PropTypes.any,
    header: PropTypes.string,
    onClose: PropTypes.func,
}