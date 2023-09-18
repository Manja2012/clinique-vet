import { useState } from "react";
import Dog_contacts from '../../images/dog_contacts.jpg'; 
import { sendMessage } from '../../business/send-message.js'
import style from './ContactsForm.module.scss';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

const ContactsForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    event.currentTarget.reset()

    await sendMessage({
      email,
      name,
      phone,
      message
    })
  }
  
  return (
    <main className={style.flex}>
      <div className={style.form} id="paiement">
        <form onSubmit={handleSubmit}>
          <label className={style.form__label} htmlFor="name">Nom complet</label>
          <input className={style.form__input} required type="text" name="name" id="name" onChange={(event) => setName(event.target.value)} />
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