import React, { useState } from "react";
import { Link, NavLink} from "react-router-dom";
import Logo from "../../images/logo.jpg";
import { GrClose } from "react-icons/gr";
 import { GrMenu } from "react-icons/gr";
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
            <GrClose aria-label="menu_mobile" className={style.icon_close} size={40} />
            <GrMenu aria-label="menu_mobile" className={style.icon_menu} size={40}/>
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header;
