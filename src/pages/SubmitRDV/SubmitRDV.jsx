import React from "react";
import PageTitle from '../../components/PageTitle/PageTitle';
import SubmitRDVForm from '../../components/SubmitRDVForm/SubmitRDVForm';
import css from '../../sass/Base.module.scss';

const SubmitRDV = () => {
  
  return (
    <main className={css.section}>
      <div className={css.container}>
        <PageTitle text="Votre RDV:"/>
        <SubmitRDVForm/>
      </div>
    </main>
    
  )
}

export default SubmitRDV;