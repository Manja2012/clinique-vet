import React from "react";
import PageTitle from '../../components/PageTitle/PageTitle';
import ConfirmationRDVForm from '../../components/ConfirmationRDVForm/ConfirmationRDVForm';
import { Helmet } from 'react-helmet';

const SubmitRDV = () => {
  
  return (
    <>
      <Helmet>
        <title>Page confirmationRDV</title>
        <meta name="description" content=" Prenez RDV à la clinique Biomir et recevez une confirmation par e-mail."/>
      </Helmet>
      <PageTitle text="Votre RDV:"/>
      <ConfirmationRDVForm/>
    </>
    
  )
}

export default SubmitRDV;