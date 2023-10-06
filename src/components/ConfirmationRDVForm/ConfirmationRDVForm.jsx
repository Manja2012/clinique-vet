// import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import style from "./ConfirmationRDVForm.module.scss";
import css from "../../sass/Base.module.scss";
import { getAppointment } from "../../api/api-client";

const ConfirmationRDVForm = () => {
  const [confirmation, setConfirmation] = useState({});
  const params = useParams()

  useEffect(() => {
    const fetchConfirmation = async () => {
      try {
        const { data } = await getAppointment(params.id);
        setConfirmation(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchConfirmation();
  }, []);

  const DateTime = new Date(confirmation.date);

  return (
    <section className={css.section}>
      <div className={css.container}>
          <div key={confirmation.id}>
            <div className={style.submit__text}>Date du RDV : {DateTime.toLocaleDateString('fr-FR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}</div>
            <div className={style.submit__text}>Nom : {confirmation.name}</div>
            <div className={style.submit__text}>E-mail : {confirmation.email}</div>
            <div className={style.submit__text}>
              Nom du vétérinaire : {confirmation.veterinaire}
            </div>
          </div>
      </div>
    </section>
  );
};

export default ConfirmationRDVForm;
