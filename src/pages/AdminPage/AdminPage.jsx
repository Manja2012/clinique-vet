import { useState, useEffect } from "react";
import PageTitle from '../../components/PageTitle/PageTitle';
import { getAppointments, removeAppointment, updateAppointment } from "../../api/api-client.js";
import style from './AdminPage.module.scss';
import styleForm from '../../components/Contacts/ContactsForm.module.scss';

const AdminPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState({});
  const [currentId, setCurrentId] = useState();
  const [veterinaire, setVeterinaire] = useState('')
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const fetchAppointments = async () => {
    try {        
      const appointments = await getAppointments();
      setAppointments(appointments);
    } catch (error) {
      // TODO: afficher une erreur à l’utilisateur
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [])

  const deleteAppointment = async (id) => {
    await removeAppointment(id);
    await fetchAppointments();
  }
  const modifyAppointment = async (_id) => {
    await updateAppointment({veterinaire, name, email, date, _id});
    await fetchAppointments();
  }
  const modify = (id) => {
    // TODO: afficher un formulaire de modification
    setCurrentId(id);
    const appointment = appointments.find((appointment) => appointment._id === id);
    setVeterinaire(appointment.veterinaire)
    setName(appointment.name)
    setDate(appointment.date)
    setEmail(appointment.email)
  }

  return (
    <>
      <header>
        <h1 className={style.title} >Back-office Vet-Clinique</h1>
      </header>
      <main>
      <PageTitle text="Liste des RDV"/>
 

        <ul className={style.list}>
          {
            appointments.map((appointment) => (
              <li className={style.item} key={appointment._id}>
                {new Date(appointment.date).toLocaleString()} <br />
                {appointment.name} <br />
                {appointment.veterinaire} <br />
                {appointment.email}
                <button className={style.button} onClick={() => deleteAppointment(appointment._id)}>Annuler</button>
                <button className={style.button} onClick={() => modify(appointment._id)}>Modifier</button>
              </li>
            ))
          }
        </ul>
      </main>
      {
        currentId &&
        <div className={styleForm.flex}>
      <div className={styleForm.form} >
        <form onSubmit={(event) => {
          event.preventDefault()
          modifyAppointment(currentId)
        }}>
          <div>
            <label className={styleForm.form__label} htmlFor="veterinaire" >Choisissez le nom du vétérinaire</label> 
            <select value={veterinaire} className={styleForm.forim__input} required type="text" placeholder="Rechercher par nom du vétérinaire" name="veterinaire" id="veterinaire" onChange={(event) => setVeterinaire(event.target.value)}>
              <option disabled value="">[Choisissez une option]</option>
              <option value="Dr. Alexandre Shulesho">Dr. Alexandre Shulesho</option>
              <option value="Dr. Nikolai Glushkov">Dr. Nikolai Glushkov</option>
              <option value="Dr. Elina Avezova">Dr. Elina Avezova</option>
            </select>
          </div>
          <div>
            <label className={styleForm.form__label} htmlFor="date">Choisissez la date de RDV</label>
            <input value={new Date(date).toISOString().slice(0,16)} className={styleForm.form__input} required type="datetime-local" min={new Date().toISOString().slice(0, 16)} name="date" id="date" onChange={(event) => setDate(event.target.value)}/>
          </div>
          <div>
            <label className={styleForm.form__label} htmlFor="name">Nom complet</label>
            <input value={name} className={styleForm.form__input} required type="text" name="name" id="name" onChange={(event) => setName(event.target.value)}/>
          </div>
          <div>
              <label className={styleForm.form__label} htmlFor="email">Email</label>
              <input value={email} className={styleForm.form__input} required type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)}/>
          </div>
          <div>
            <button type="submit" className={styleForm.form__button}>Ajouter</button>
          </div>
        </form>
      </div>
      
    </div>  
          
      }

    </>
  );
};

export default AdminPage;
