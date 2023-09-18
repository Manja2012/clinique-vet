import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import style from './Social.module.scss';

const Social = ({ fbProfile, instagramProfile, ldProfile  }) => {

  return(
    <ul className={style.social}>
      {
        fbProfile && 
          <li className={style.social__item}>
            <Link to={fbProfile} className={style.social__link}>
              <FaSquareFacebook className={style.social__icon} size={20}/>
            </Link>
          </li>
      }
      {
        instagramProfile && 
        <li className={style.social__item}>
            <Link to={instagramProfile} className={style.social__link}>
              <BsInstagram className={style.social__icon} size={20}/>
            </Link>
          </li>
      }
      {
        ldProfile && 
          <li className={style.social__item}>
            <Link to={ldProfile} className={style.social__link}>
              <BsLinkedin  className={style.social__icon} size={20}/>
            </Link>
          </li>
      }
    </ul>
  )
}

export default Social;