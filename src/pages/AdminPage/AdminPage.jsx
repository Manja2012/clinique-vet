import { useState, useEffect } from "react";

import { getAppointments } from "../../api/api-client.js";

const AdminPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const appointments = await getAppointments();
      setAppointments(appointments);
    };
    fetchAppointments();
  }, [])

  return (
    <>
      <header>
        <h1>Back-office Vet-Clinique</h1>
      </header>
      <main>
       <h2>Liste des RDV</h2> 

        <ul>
          {
            appointments.map((appointment) => (
              <li key={appointment.id}>
                {appointment.date}
                {appointment.name}
                {appointment.veterinaire}
                {appointment.email}
                <button onClick={removeAppointment}>Annuler</button>
                <button onClick={modifyAppointment}>Modifier</button>
              </li>
            ))
          }
        </ul>
      </main>

    </>
  );
};

export default AdminPage;
