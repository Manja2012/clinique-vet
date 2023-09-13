import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import style from './Footer.module.scss';
import css from '../../sass/Base.module.scss';
const Footer = () => {

  return(
    <footer>
      <section className={style.footer}>
        <h2 className={css.hidden}>footer</h2>
        <div className={style.footer__list}>
          <ul>
            <li className={style.footer__title}>Mention Légales</li>
            <li className={style.footer__item}>CGU</li>
            <li className={style.footer__item}>CGV</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={style.footer__title}>Plan du Site</li>
            <li className={style.footer__item}>Accueil</li>
            <li className={style.footer__item}>La clinique</li>
            <li className={style.footer__item}>Service</li>
            <li className={style.footer__item}>L’équipe</li>
            <li className={style.footer__item}>Contact</li>
          </ul>
        </div>
        <div className={style.footer__list}>
          <span className={style.footer__title}>Où nous trouver ?</span> 
          <iframe title="Google Maps" width="300" height="170" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
        <div className={style.footer__title}>
          <ul>
            <li className={style.footer__item}>Contact</li>
            <li className={style.footer__item}>Où nous trouver ?</li>
            <li className={style.footer__item}>FAQ</li>
        </ul>
        </div>
        <div className={style.social}>
          <Link to="https://www.facebook.com/biomirdp/?locale=ru_RU" className={style.social__link}>
            <BsFacebook className={style.social__icon} size={40}/>
          </Link>
          <Link to="https://www.instagram.com/biomir.dp/" className={style.social__link}>
            <BsInstagram className={style.social__icon} size={40}/>
          </Link>
        </div>
      </section>
  </footer>
  )
}
export default Footer;