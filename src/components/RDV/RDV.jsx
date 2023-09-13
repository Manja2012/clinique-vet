import React from "react";
import Cat from '../../images/cat_prendre_rdv.jpg'; 
import style from '../Contacts/ContactsForm.module.scss';

const RDV = () =>{

  return(
    <div className={style.flex}>
      <div className={style.form} >
        <form action="/submitRDV">
          <div>
            <label className={style.form__label} htmlFor="spécialité">Choisissez la specialite du vétérinaire</label> 
            <select className={style.form__input} required type="text" placeholder="Rechercher par spécialité" name="specialite" id="specialite">
              <option value="">[Choisissez une option]</option>
              <option value="marianna">Dr. Alexandre Shulesho</option>
              <option value="marianna">Dr. Nikolai Glushkov</option>
              <option value="marianna">Dr. Elina Avezova</option>
            </select>
          </div>
          <div>
            <label className={style.form__label}htmlFor="rdv">Choisissez la date de RDV</label>
            <input className={style.form__input} required type="date" name="rdv" id="rdv" />
          </div>
          <div>
            <label className={style.form__label} htmlFor="lastName">Nom complet</label>
            <input className={style.form__input} required type="text" name="lastName" id="lastName"  />
          </div>
          <div>
              <label className={style.form__label} htmlFor="email">Email</label>
              <input className={style.form__input} required type="email" name="email" id="email" />
          </div>
          <div><button type="submit" className={style.form__button}>Ok</button></div>
        </form>
      </div>
      <div className={style.form__image}>
        <img className={style.form__photo} src={Cat} alt='cat_photo' />
      </div>
    </div>  
  )
}
export default RDV;