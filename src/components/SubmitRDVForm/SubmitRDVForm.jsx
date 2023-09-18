import { useLocation } from 'react-router-dom';
import style from './SubmitRDVForm.module.scss';

const SubmitRDVForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const dateRDV = queryParams.get('date');
  const nom = queryParams.get('name');
  const email = queryParams.get('email');
  const veterinaire = queryParams.get('veterinaire');

  return(

  <div className={style.submit}>
    <div className={style.submit__text}>Date du RDV : {dateRDV}</div>
    <div className={style.submit__text}>Nom : {nom}</div>
    <div className={style.submit__text}>E-mail : {email}</div>
    <div className={style.submit__text}>Nom du vétérinaire : {veterinaire}</div>
  </div>

  )
}

export default SubmitRDVForm;