import React from "react";
import { CurrencyIcon,Button,ConstructorElement,DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerConstructor.module.css';
import ModalOverlay from '../modalOverlay/modalOverlay';
import OrderDetails from '../orderDetails/orderDetails';

export default class BurgerConstruction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        visible: false,
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

    }

    handleOpenModal() {
        this.setState({ visible: true });
    }
    handleCloseModal() {
        this.setState({ visible: false });
    }

    componentDidMount() {
        document.addEventListener("keydown", (e) => {
            if (e.code === 'Escape') {
                this.setState({ visible: false });
            }
        });
    }

    componentDidUpdate() {
        const modalOverlay = document.getElementById("modalOverlay");
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (evt) => {
                evt.preventDefault();
                if (evt.target.id === 'modalOverlay') {
                    this.setState({ visible: false });
                }
            })
        }
    }

    render() {

        const modal = (
            <ModalOverlay onClose ={this.handleCloseModal}> 
                <OrderDetails />
            </ModalOverlay>
        );

        return(
            <section className='ml-4 mt-25 ml-10'>
                <div className={styles.drag}>
                    <div className='mb-10 mr-2' style={{ display: 'flex', justifyContent: 'space-around' ,flexDirection: 'column', gap: '10px' }}>
                        {/* <DragIcon type="none" /> */}
                        <DragIcon type="primary" />
                        {/* <DragIcon type="primary" /> */}
                    </div>
                

                    <div className='mb-10' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={this.img}
                        />
                        <div className={styles.scroll}>
                            <ConstructorElement
                                text="Краторная булка N-200i (верх)"
                                price={50}
                                thumbnail={this.img}
                            />
                        </div>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={this.img}
                        />
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className='mr-10 text text_type_digits-medium' style={{display: 'flex',alignItems:"center"}}>
                        <p className='mb-1 mt-1 mr-1'>610</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button htmlType="button" type="primary" size="large" onClick={this.handleOpenModal}>
                        Оформить заказ 
                    </Button>
                    {this.state.visible && modal}
                </div>
            </section>
        )
    }
}