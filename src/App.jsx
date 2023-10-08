import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Template from "./components/Template/HeaderFooter.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import PrendreRDV from "./pages/PrendreRDV/PrendreRDV.jsx";
import ConfirmationRDV from "./pages/ConfirmationRDV/ConfirmationRDV.jsx";
import ClinicPage from "./pages/ClinicPage/ClinicPage.jsx";
import ServicePage from "./pages/ServicePage/ServicePage.jsx";
import TeamPage from "./pages/TeamPage/TeamPage.jsx";
import LegalNotice from "./pages/LegalNotice/LegalNotice.jsx";
import CGU from "./pages/CGU/CGU.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import AdminPage from "./pages/AdminPage/AdminPage.jsx";
import Modal from './components/Modal/Modal.jsx'; 

function App() {
  const [isOk, setOk] = useState(localStorage.getItem('isOk') === 'true')
  return (
   <>
      {
          !isOk && (
              <Modal title="Cookies">
                <span className="mx-2">
                  Notre site utilise des cookies, acceptez-vous ?
                </span>
                <button className="button_cookies" onClick={() => {
                  localStorage.setItem('isOk', 'true');
                  setOk(true)
                  notify()
                }}>Oui</button>
                <button className="button_cookies" onClick={() => {
                  localStorage.setItem('isOk', 'true');
                  setOk(true)
                  notify()
                }}>Paramètres les cookies</button>
              </Modal>
        )
      }
        
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<HomePage />} />
          <Route path='/rdv' element={<PrendreRDV />} />
          <Route path='/contacts' element={<ContactsPage/>} />
          <Route path='/сonfirmationRDV/:id' element={<ConfirmationRDV/>} />
          <Route path='/clinic' element={<ClinicPage/>} />
          <Route path='/service' element={<ServicePage/>} />
          <Route path='/team' element={<TeamPage/>} />
          <Route path='/legalnotice' element={<LegalNotice/>} />
          <Route path='/cgu' element={<CGU/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
