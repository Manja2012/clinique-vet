import React, { useState } from "react";
import { Link, Outlet, NavLink} from "react-router-dom";
import Logo from "../../images/logo.jpg"

import icos from '../../images/icos.svg'

function Template(){
    const [isActive, setActive] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
      setIsOpen(!isOpen);
    }

    return(
    <>
    <header className="header">
      <div className="header__container">
        <div className="logo">
            <Link to="/" >
                <img className="logo_img" src={Logo} alt="Logo" />
            </Link>
        </div>
            <div className={"mobil-menu " + (isOpen ? 'is-open' : '')} id="mobil-menu" data-menu>
              <ul className="mobil-menu__nav">
                <li className="nav__item" >
                  <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => (isActive ? 'mobil-menu__link mobil-menu__linkl--current' : 'mobil-menu__link')} to="/">Accueil</NavLink> 
                </li>
                <li className="nav__item">
                  <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => (isActive ? 'mobil-menu__link mobil-menu__link--current' : 'mobil-menu__link')} to="/clinic">La clinique</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => (isActive ? 'mobil-menu__link mobil-menu__link--current' : 'mobil-menu__link')} to="/service">Service</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => (isActive ? 'mobil-menu__link mobil-menu__link--current' : 'mobil-menu__link')} to="/team">L’équipe</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => (isActive ? 'mobil-menu__link mobil-menu__link--current' : 'mobil-menu__link')} to="/contacts">Contact</NavLink>
                </li>
              </ul>
            </div>
        <nav>
          <ul className="nav">
            <li className="nav__item" >
              <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => (isActive ? 'nav__link nav__link--current' : 'nav__link')} to="">Accueil</NavLink> 
            </li>
            <li className="nav__item">
              <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => (isActive ? 'nav__link nav__link--current' : 'nav__link')} to="/clinic">La clinique</NavLink>
            </li>
            <li className="nav__item">
              <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => (isActive ? 'nav__link nav__link--current' : 'nav__link')} to="/service">Service</NavLink>
            </li>
            <li className="nav__item">
              <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => (isActive ? 'nav__link nav__link--current' : 'nav__link')} to="/team">L’équipe</NavLink>
            </li>
            <li className="nav__item">
              <NavLink onClick={() => setIsOpen(false)} className={({isActive}) => (isActive ? 'nav__link nav__link--current' : 'nav__link')} to="/contacts">Contact</NavLink>
            </li>
          </ul>
        </nav>  
        {/* <div className="button_contacts">
          <span style={{textDecoration: 'none'}}>24/7</span>
          <Link to="tel:+380961111111" className="button_contacts">
              <svg width="16" height="12" fill="var(--main-background-color)">
                <use href={`${icos}#icon-smartphone`}></use>
              </svg>
            <span>+38 096 111 11 11</span>    
          </Link>
        </div> */}
        <div className="mobil-header">
            <button onClick={handleIsOpen} className={"menu-button " + (isOpen ? 'is-open' : '')}>
            <svg width="40" height="40" aria-label="Переключатель мобильного меню">
                <use className="menu-button__icon-close" href="img/icos.svg#icon-close_40px"></use>
                <use className="menu-button__icon-menu" href="img/icos.svg#icon-menu"></use>
            </svg>
            </button>
        </div>
          
  </div>
  </header>

    <main><Outlet /></main>

    <footer>
      <section className="footer">
        <h2 className="hidden">footer</h2>
        <div className="footer_list">
            <ul>
                <li className="footer_list__title">Mention Légales</li>
                <li>CGU</li>
                <li>CGV</li>
            </ul>
        </div>
        <div className="footer_list">
            <ul>
                <li className="footer_list__title">Plan du Site</li>
                <li>Accueil</li>
                <li>La clinique</li>
                <li>Service</li>
                <li>L’équipe</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footer_list">
            <span className="footer_list__text footer_list__title">Où nous trouver ?</span> 
            <iframe title="Google Maps" width="300" height="170" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
        <div className="footer_list">
            <ul>
                <li>Contact</li>
                <li>Où nous trouver ?</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className="footer_list">
          <Link href="#" className="social__link">
            <svg width="40" height="40" className="social__icon">
                <use href="images/icons.svg#icon-facebook">
                </use>
            </svg>
          </Link>
        </div>
    </section>
</footer>
    </>

    )
}
export default Template