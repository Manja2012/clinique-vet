import { useState } from "react";
import { Link } from "react-router-dom";

import { signIn } from "../../api/api-client.js";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = event => {
    event.preventDefault();
    // Appel à l'API pour se connecter
    try {
      signIn(email, password)
    } catch (error) {
      // TODO: Afficher l'erreur à l'utilisateur
      console.error(error.message)
    }
  }

  return (
    <>
      <header>
        <h1>Connexion</h1>
      </header>
      <form onSubmit={login}>
        <fieldset>
          <legend className="">Connexion</legend>
          <div className="">
            <label htmlFor="email">Adresse email :</label>
            <input value={email} onChange={event => setEmail(event.target.value)} type="text" id="email" />
          </div>
          <div className="">
            <label htmlFor="password">Mot de passe :</label>
            <input value={password} onChange={event => setPassword(event.target.value)} type="password" id="password" />
          </div>
          <div>
           <Link to="/admin">
              <button type="submit">Se connecter</button>  
           </Link> 
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LoginPage;
