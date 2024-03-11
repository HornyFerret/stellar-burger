import React from "react";
import PropTypes from 'prop-types';
import { Tab,CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerIngredients.module.css';
import ModalOverlay from '../modalOverlay/modalOverlay';
import IngredientDetails from '../ingredientDetails/ingredientDetails';


export default class BurgerIngredients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    visible: false,
    current: 'Булки',
    arr: 0,
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.setCurrent = this.setCurrent.bind(this);
    // this.arrayEllement = this.arrayEllement.bind(this);
  }

  setCurrent() {
    document.addEventListener("click", (e) =>{
      this.setState({current: e.target.textContent, });
    });
  }

  handleOpenModal(evt) {
    this.setState({ visible: true });
    let itArr = this.props.data.find((elem) => elem._id === evt.target.parentElement.id);
    this.setState({arr: itArr});
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
    const { data } = this.props;
    const modal = (
      <ModalOverlay header = 'Детали ингредиента' onClose ={this.handleCloseModal}> 
          <IngredientDetails arr={this.state.arr} /> 
      </ModalOverlay>
    );
    return(
      <section style={{maxWidth:"600px"}}>
        <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
        <div className='mb-10' style={{ display: 'flex' }}>
          <Tab value="Булки" active={this.state.current === 'Булки'} id="Булки" onClick={this.setCurrent}>
            Булки
          </Tab>
          <Tab value="Соусы" active={this.state.current === 'Соусы'} id="Соусы" onClick={this.setCurrent}>
            Соусы
          </Tab>
          <Tab value="Начинки" active={this.state.current === 'Начинки'} id="Начинки" onClick={this.setCurrent}>
            Начинки
          </Tab>
        </div>
  
        <div className={styles.scroll} id='list'>
          <h2 className='text text_type_main-medium mb-6'>Булки</h2>
        
          
          <div className="ml-4 mb-10" style={{display: "flex", flexWrap:"wrap"}}>
              {data.map(it => {
                if(it.type==="bun") {
                return(
                  <div className={styles.ingredient} key={it._id} id={it._id} onClick = {this.handleOpenModal}>
                      <img src={it.image} alt={it.name} className="ml-4 mr-4 mt-6"/>
                      <div style={{display: "flex"}} className="mt-1 mb-1">
                          <p className="text text_type_digits-default mr-1">{it.price}</p>
                          <CurrencyIcon type="primary" />
                      </div>
                      <h3 className="text text_type_main-small mr-6" style={{textAlign: "center"}}>{it.name}</h3>
                  </div>
                  
                )}
              })
              }
              
          </div>
      
    
          <h2 className='text text_type_main-medium mt-10 mb-6'>Соусы</h2>
    
          
          <div className="ml-4 mb-10" style={{display: "flex", flexWrap:"wrap"}}>
          {data.map(it => {
                if(it.type==="sauce") {
                return(
                  <button className={styles.ingredient} key={it._id} id={it._id} onClick = {this.handleOpenModal}>
                      <img src={it.image} alt={it.name} className="ml-4 mr-4 mt-6"/>
                      <div style={{display: "flex"}} className="mt-1 mb-1">
                          <p className="text text_type_digits-default mr-1">{it.price}</p>
                          <CurrencyIcon type="primary" />
                      </div>
                      <h3 className="text text_type_main-small mr-6" style={{textAlign: "center"}}>{it.name}</h3>
                  </button> 
                )}
              })}
          </div>
          
    
          <h2 className='text text_type_main-medium mt-10 mb-6'>Начинки</h2>
    
          
          <div className="ml-4 mb-10" style={{display: "flex", flexWrap:"wrap"}}>
          {data.map(it => {
                if(it.type==="main") {
                return(
                  <button className={styles.ingredient} key={it._id} id={it._id} onClick = {this.handleOpenModal}>
                      <img src={it.image} alt={it.name} className="ml-4 mr-4 mt-6"/>
                      <div style={{display: "flex"}} className="mt-1 mb-1">
                          <p className="text text_type_digits-default mr-1">{it.price}</p>
                          <CurrencyIcon type="primary" />
                      </div>
                      <h3 className="text text_type_main-small mr-6"  style={{textAlign: "center"}}>{it.name}</h3>
                  </button> 
                )}
              })}
          </div>
        </div>
{this.state.visible && modal}
      </section>
    )
  }
}
  
  
BurgerIngredients.propTypes = {
  data: PropTypes.array,
}