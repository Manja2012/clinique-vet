import React from "react"

function PrendreRDV(){

  return (
    <main className="rdv"> 
      <h1 className="rdv__title">Prendre un rendez-vous</h1>
      <form action="/submitRDV">
        <div>
          <label className="rdv__label" htmlFor="spécialité">choisissez la specialite du vétérinaire</label> <br />
          <select className="rdv__input" required type="text" placeholder="Rechercher par spécialité" name="specialite" id="specialite">
            <option value="">[Choisissez une option]</option>
            <option value="marianna">Dr. Marianna</option>
            <option>Dr. Toto</option>
          </select>
        </div>
        <div>
          <label className="rdv__label" htmlFor="rdv">choisissez la date de RDV</label><br />
          <input className="rdv__input" required type="date" name="rdv" id="rdv" />
       </div>
       <div>
            <label className="rdv__label" htmlFor="lastName">Nom complet</label><br />
            <input className="rdv__input" required type="text" name="lastName" id="lastName"  />
        </div>
        <div>
            <label className="rdv__label" htmlFor="email">Email</label><br />
            <input className="rdv__input" required type="email" name="email" id="email" />
        </div>
        <div><button type="submit" className="rdv__button">Ok</button></div>
      </form>
    </main>
  )
}

export default PrendreRDV