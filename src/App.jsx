import { Route, Routes } from "react-router-dom";
import Template from "./components/Template/HeaderFooter.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import PrendreRDV from "./pages/PrendreRDV/PrendreRDV.jsx";
import SubmitRDV from "./pages/SubmitRDV/SubmitRDV.jsx";
import ClinicPage from "./pages/ClinicPage/ClinicPage.jsx";
import ServicePage from "./pages/ServicePage/ServicePage.jsx";
import TeamPage from "./pages/TeamPage/TeamPage.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage />} />
        <Route path='/rdv' element={<PrendreRDV />} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/submitRDV' element={<SubmitRDV/>} />
        <Route path='/clinic' element={<ClinicPage/>} />
        <Route path='/service' element={<ServicePage/>} />
        <Route path='/team' element={<TeamPage/>} />
      </Route>
    </Routes>
  );
}
export default App;
