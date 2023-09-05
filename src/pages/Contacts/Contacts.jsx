import { useState } from "react"
export default function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  
    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(firstName)
      console.log(lastName)
  
    }
  
    // 3 façons de declarer une fonction anonyme
  
    // function(event) {
    //   setLastName(event.target.value)
    // }
  
    // (event) => {
    //   setLastName(event.target.value)
    // }
  
    // (event) => setLastName(event.target.value)
  
    return (
      <main className="contacts">
        <h1 className="contacts__title">Pour nous contacter</h1>
        <p className="contacts__text">Pour toute demande de renseignements, merci d'utiliser le formulaire ci-dessous. Nous sommes joignables 7 jours/7, 24h/24 au 096 930 55 95 pour toute demande urgente.</p>
        <div className="contacts__form" id="paiement">
          <form style={{ "display": "flex", "flexDirection": "column" }} onSubmit={handleSubmit}>
            <label className="contacts__label" htmlFor="lastName">Nom complet</label>
            <input className="contacts__input" required type="text" name="lastName" id="lastName" onChange={(event) => setLastName(event.target.value)} />
            <br />
            <label className="contacts__label" htmlFor="email">Email</label>
            <input className="contacts__input" required type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)} />
            <br />
            <label className="contacts__label" htmlFor="phone">Numéro de téléphone</label>
            <input className="contacts__input" required type="tel" name="phone" id="phone" onChange={(event) => setPhone(event.target.value)} />
            <br />
            <label className="contacts__label" htmlFor="message">Message</label>
            <textarea className="contacts__textarea" name="message" id="message" cols="30" rows="10" onChange={(event) => setMessage(event.target.value)}></textarea>
  
            <div><button className="rdv__button">Ok</button></div>
          </form>
        </div>
      </main>
    )
  }