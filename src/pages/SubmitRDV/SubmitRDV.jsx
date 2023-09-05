import React from "react"
import { useLocation } from 'react-router-dom';

function SubmitRDV(){
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const dateRDV = queryParams.get('rdv');
  const nom = queryParams.get('lastName');
  const email = queryParams.get('email');
  const specialite = queryParams.get('specialite');
  
  return (
    <main>
        <div>
            <div>Date du RDV : {dateRDV}</div>
            <div>Nom : {nom}</div>
            <div>E-mail : {email}</div>
            <div>Spécialité : {specialite}</div>
        </div>
    </main>
    
  )
}

export default SubmitRDV;