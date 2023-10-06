import { Link } from "react-router-dom";
import style from './Welcome.module.scss';
import css from '../../sass/Base.module.scss';
const Welcome = () =>{  

  return(
    <>
      <section className={style.clinic_presentation}>
        <div className={css.container}>
          <h1 className={style.main__title}> Clinique vétérinaire Biomir</h1>
          <Link to="/rdv"><button type="button" className={style.button}>Prendre RDV</button></Link>
        </div>
      </section>
    </>
  )
}
export default Welcome;