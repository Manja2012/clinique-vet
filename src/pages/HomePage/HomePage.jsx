import Welcome from '../../components/Welcome/Welcome.jsx';
import ClinicDescription from '../../components/ClinicDescription/ClinicDescription.jsx';
import MobileVersion from '../../components/MobileVersion/MobileVersion.jsx';
import Reviews from '../../components/Reviews/Reviews.jsx';
import { Helmet } from 'react-helmet';


const HomePage = () =>{  

  return(
    <>
      <Helmet>
        <title>Clinique vétérinaire urgence 7/7- Biomir</title> 
        <meta name="description" content="Découvrez notre clinique vétérinaire Biomir, offrant des services d'urgence et la possibilité de prendre rendez-vous en ligne pour des soins de qualité pour votre animal de compagnie."/>
      </Helmet>
      <Welcome />
      <ClinicDescription />
      <MobileVersion />
      <Reviews/>
    </>
  )
}
export default HomePage;