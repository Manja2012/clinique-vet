import { useLocation } from 'react-router-dom';
import style from './SubmitRDVForm.module.scss';

const SubmitRDVForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const dateRDV = queryParams.get('rdv');
  const nom = queryParams.get('lastName');
  const email = queryParams.get('email');
  const specialite = queryParams.get('specialite');

  return(

  <div className={style.submit}>
    <div className={style.submit__text}>Date du RDV : {dateRDV}</div>
    <div className={style.submit__text}>Nom : {nom}</div>
    <div className={style.submit__text}>E-mail : {email}</div>
    <div className={style.submit__text}>Spécialité : {specialite}</div>
  </div>

  )
}

export default SubmitRDVForm;