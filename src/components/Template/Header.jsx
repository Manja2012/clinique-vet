import React, { useState } from "react";
import { Link, NavLink} from "react-router-dom";
import Logo from "../../images/logo.jpg";
import style from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    }
    
  return(
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.logo}>
          <Link to="/" >
            <img className={style.logo_img} src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className={`${style.mobil_menu} ${isOpen ? style.is_open : ''}`} id="mobil-menu" data-menu>
          <ul className={style.mobil_menu__nav}>
            <li className={style.nav__item}>
              <NavLink onClick={() => setIsOpen(false)} className={style.link} to="/">Accueil</NavLink> 
            </li>
            <li className={style.nav__item}>
              <NavLink onClick={() => setIsOpen(false)} className={style.link} to="/clinic">La clinique</NavLink>
            </li>
            <li className={style.nav__item}>
              <NavLink onClick={() => setIsOpen(false)} className={style.link} to="/service">Service</NavLink>
            </li>
            <li className={style.nav__item}>
              <NavLink onClick={() => setIsOpen(false)} className={style.link} to="/team">L’équipe</NavLink>
            </li>
            <li className={style.nav__item}>
              <NavLink onClick={() => setIsOpen(false)} className={style.link} to="/contacts">Contact</NavLink>
            </li>
          </ul>
        </div>
        <nav>
          <ul className={style.nav}>
            <li className={style.nav__item} >
              <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? `${style.nav__link} ${style.nav__link_current})` : `${style.nav__link}`} to="">Accueil</NavLink> 
            </li>
            <li className={style.nav__item}>
              <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? `${style.nav__link} ${style.nav__link_current})` : `${style.nav__link}`} to="/clinic">La clinique</NavLink>
            </li>
            <li className={style.nav__item}>
              <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? `${style.nav__link} ${style.nav__link_current})` : `${style.nav__link}`} to="/service">Service</NavLink>
            </li>
            <li className={style.nav__item}>
              <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? `${style.nav__link} ${style.nav__link_current})` : `${style.nav__link}`} to="/team">L’équipe</NavLink>
            </li>
            <li className="nav__item">
              <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? `${style.nav__link} ${style.nav__link_current})` : `${style.nav__link}`} to="/contacts">Contact</NavLink>
            </li>
          </ul>
        </nav>  
        <div className={style.mobil_header}>
          <button onClick={handleIsOpen} className={`${style.menu_button} ${isOpen ? style.is_open : ''}`}>
            <svg width="40" height="40" aria-label="menu_mobile">
              <use className={style.icon_close} href="/src/images/icos.svg#icon-close_40px"></use>
              <use className={style.icon_menu} href="/src/images/icos.svg#icon-menu"></use>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header;
