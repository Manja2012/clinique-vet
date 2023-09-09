import { Link } from "react-router-dom"

import style from './Social.module.scss'

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Social = ({ fbProfile, instagramProfile, ldProfile  }) => {

  return(
    <ul className={style.social}>
      {
        fbProfile && 
          <li className={style.social__item}>
            <Link to={fbProfile} className={style.social__link}>
              <BsFacebook className={style.social__icon}/>
            </Link>
          </li>
      }
      {
        instagramProfile && 
        <li className={style.social__item}>
            <Link to={instagramProfile} className={style.social__link}>
              <BsInstagram className={style.social__icon}/>
            </Link>
          </li>
      }
      {
        ldProfile && 
          <li className={style.social__item}>
            <Link to={ldProfile} className={style.social__link}>
              <BsLinkedin  className={style.social__icon}/>
            </Link>
          </li>
      }
    </ul>
  )
}

export default Social;