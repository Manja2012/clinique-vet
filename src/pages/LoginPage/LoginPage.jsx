import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/api-client.js";
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import css from '../../components/Contacts/ContactsForm.module.scss';
import style from '../AdminPage/AdminPage.module.scss';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const login = async event => {
    event.preventDefault();
    // Appel à l'API pour se connecter
    try {
      await signIn(email, password)
      navigate("/admin")
    } catch (error) {
      // TODO: Afficher l'erreur à l'utilisateur
      console.error(error.message)
    }
  }

  return (
    <>
      <PageTitle text="Connexion"/>
      <form className={style.form} onSubmit={login}>
        <fieldset>
          <legend className={style.legend}>Connexion</legend>
          <div>
            <label className={css.form__label} htmlFor="email">Adresse email :</label>
            <input className={css.form__input} value={email} onChange={event => setEmail(event.target.value)} type="text" id="email" />
          </div>
          <div>
            <label className={css.form__label} htmlFor="password">Mot de passe :</label>
            <input className={css.form__input} value={password} onChange={event => setPassword(event.target.value)} type="password" id="password" />
          </div>
          <div>
            <button className={style.button} type="submit">Se connecter</button>  
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LoginPage;
