import styles from "./appHeader.module.css";
import { Logo,BurgerIcon,ListIcon,ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

 export default function AppHeader() {
    return (
      <div className={styles.header}>
        <div className="mt-4 mb-4" style={{display: "flex"}}>
          <BurgerIcon />
          <div className="text text_type_main-small mr-7 ml-2">Конструктор</div>
          <ListIcon type="secondary"/>
          <div className="text text_type_main-default text_color_inactive ml-2">Лента заказов</div>
        </div>
        <Logo className="mt-4 mb-4"/>
        <div className="mt-4 mb-4" style={{display: "flex"}}>
          <ProfileIcon type="secondary"/>
          <div className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</div>
        </div>
      </div>
    );
}
