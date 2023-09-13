import PageTitle from '../PageTitle/PageTitle';
import style from './ContactsForm.module.scss';
import css from '../../sass/Base.module.scss';

const Contacts = () => {

  return(
   
    <div className={css.container}> 
      <PageTitle text="Pour nous contacter"/>
      <p className={style.form__text}>Pour toute demande de renseignements, merci d'utiliser le formulaire ci-dessous. Nous sommes joignables 7 jours/7, 24h/24 au 096 930 55 95 pour toute demande urgente.</p>
    </div>

  )
}

export default Contacts;