import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Cat from '../../images/cat_prendre_rdv.jpg'; 
import style from '../Contacts/ContactsForm.module.scss';
import baseStyle from '../../sass/Base.module.scss';

import { saveAppointment } from '../../api/api-client.js'

const RDV = () =>{
  const [veterinaire, setVeterinaire] = useState('')
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSaving, setSaving] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSaving(true)

    try {
      const { data: appointment } = await saveAppointment({
        veterinaire,
        date,
        name,
        email
      })
      console.log({appointment})
      navigate('/submitRDV/' + appointment._id)
    } catch (error) {
        console.error(error)
    } finally {
      setSaving(false)
    }
  }

  return(
    <div className={style.flex}>
      <div className={style.form} >
        <form action="/submitRDV" onSubmit={handleSubmit}>
          <div>
            <label className={style.form__label} htmlFor="veterinaire" >Choisissez le nom du vétérinaire</label> 
            <select className={style.form__input} required type="text" placeholder="Rechercher par nom du vétérinaire" name="veterinaire" id="veterinaire" onChange={(event) => setVeterinaire(event.target.value)}>
              <option value="">[Choisissez une option]</option>
              <option value="Dr. Alexandre Shulesho">Dr. Alexandre Shulesho</option>
              <option value="Dr. Nikolai Glushkov">Dr. Nikolai Glushkov</option>
              <option value="Dr. Elina Avezova">Dr. Elina Avezova</option>
            </select>
          </div>
          <div>
            <label className={style.form__label} htmlFor="date">Choisissez la date de RDV</label>
            <input className={style.form__input} required type="datetime-local" min={new Date().toISOString().substring(0,10)} name="date" id="date" onChange={(event) => setDate(event.target.value)}/>
          </div>
          <div>
            <label className={style.form__label} htmlFor="name">Nom complet</label>
            <input className={style.form__input} required type="text" name="name" id="name" onChange={(event) => setName(event.target.value)}/>
          </div>
          <div>
              <label className={style.form__label} htmlFor="email">Email</label>
              <input className={style.form__input} required type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)}/>
          </div>
          <div>
            <button type="submit" className={style.form__button} disabled={isSaving}>
              <span style={{marginInline: '1em'}}>Ok</span>
              { isSaving && <AiOutlineLoading3Quarters className={baseStyle.spin} /> }
            </button>
          </div>
        </form>
      </div>
      <div className={style.form__image}>true
        <img className={style.form__photo} src={Cat} alt='cat_photo' />
      </div>
    </div>  
  )
}
export default RDV;