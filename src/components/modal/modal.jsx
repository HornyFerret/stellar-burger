import React from "react";
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import closeIcon from '../images/closeIcon.svg'



export default class Modal extends React.Component {
    

    render() {
        const { children, header,onClose } = this.props;
        return (
            <div className={styles.modalWindow} id="modal">
                <div style={{display:'flex', flexDirection:'row', alignItems:'baseline', justifyContent:'space-between'}}> 
                    <h1 className='ml-10 mt-10 text text_type_main-large'>{header}</h1>
                    <button className='mt-15 mr-10' style={{border: 'none', padding: '0',backgroundColor: "rgba(0,0,0,0)"}}>
                        <img className={styles.closeButton} src={closeIcon} alt="closeIcon" onClick={onClose}/>
                    </button>
                </div>
                {children}
            </div>
            
        )
    }
}

Modal.propTypes = {
    children: PropTypes.any,
    header: PropTypes.string,
    onClose: PropTypes.func,
}