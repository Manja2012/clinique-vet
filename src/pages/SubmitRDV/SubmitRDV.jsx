import React from "react";
import { useLocation } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import style from './SubmitRDV.module.scss';
import css from '../../sass/Base.module.scss';

function SubmitRDV(){
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const dateRDV = queryParams.get('rdv');
  const nom = queryParams.get('lastName');
  const email = queryParams.get('email');
  const specialite = queryParams.get('specialite');
  
  return (
    <main className={css.section}>
      <div className={css.container}>
        <PageTitle text="Votre RDV:"/>
        <div className={style.submit}>
          <div className={style.submit__text}>Date du RDV : {dateRDV}</div>
          <div className={style.submit__text}>Nom : {nom}</div>
          <div className={style.submit__text}>E-mail : {email}</div>
          <div className={style.submit__text}>Spécialité : {specialite}</div>
        </div>
      </div>
    </main>
    
  )
}

export default SubmitRDV;