import { useState } from "react";
import style from './ContactsForm.module.scss';
import Dog_contacts from '../../images/dog_contacts.jpg'; 

const ContactsForm = () => {
   
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
    <main className={style.flex}>
      <div className={style.form} id="paiement">
        <form onSubmit={handleSubmit}>
          <label className={style.form__label} htmlFor="lastName">Nom complet</label>
          <input className={style.form__input} required type="text" name="lastName" id="lastName" onChange={(event) => setLastName(event.target.value)} />
          <label className={style.form__label} htmlFor="email">Email</label>
          <input className={style.form__input} required type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)} />
          <label className={style.form__label} htmlFor="phone">Numéro de téléphone</label>
          <input className={style.form__input} required type="tel" name="phone" id="phone" onChange={(event) => setPhone(event.target.value)} />
          <label className={style.form__label} htmlFor="message">Message</label>
          <textarea className={style.form__comment} name="message" id="message" cols="30" rows="10" onChange={(event) => setMessage(event.target.value)}></textarea>
          <div><button className={style.form__button}>Ok</button></div>
        </form>
      </div>
      <div className={style.form__image}>
        <img className={style.form__photo} src={Dog_contacts} alt='dog_contacts' />
      </div>
    </main>
  )
}

export default ContactsForm;