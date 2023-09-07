import { Link } from "react-router-dom";
import Social from "../Social/Social.jsx";
import style from './Team.module.scss';

const TeamMember = ({ description, to, name, img, specialty, fbProfile, instagramProfile, ldProfile }) => {
    return (
      <>
        <Link className={style.team__link} to={to}>
          <div className={style.team__overlay}>
              <img className={style.team__image} src={img} alt={`photo ${name}`} />
              <p className={style.team__overlaytext}>{description}</p>
          </div>
        </Link>
        <div className={style.team__exampl}>
            <h2 className={style.team__title}>{name}</h2>
            <p className={style.team__text}>{specialty}</p>
            {
              fbProfile && 
                <Social fbProfile={fbProfile} />
            }
             {/* {
              instagramProfile && 
                <Social instagramProfile={instagramProfile} />
            }
             {
              ldProfile && 
                <Social ldProfile={ldProfile} />
            } */}
        </div>
      </>
    );
}

export default TeamMember;