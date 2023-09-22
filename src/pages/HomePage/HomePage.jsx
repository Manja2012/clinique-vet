import Welcome from '../../components/Welcome/Welcome.jsx';
import ClinicDescription from '../../components/ClinicDescription/ClinicDescription.jsx';
import MobileVersion from '../../components/MobileVersion/MobileVersion.jsx';
import Reviews from '../../components/Reviews/Reviews.jsx';
import { Helmet } from 'react-helmet';

const HomePage = () =>{  

  return(
    <>
      <Helmet>
        <title>Biomir</title> 
        <meta name="description" content="Biomir - clinique vétérinaire pour vos animaux de compagnie"/>
      </Helmet>
      <Welcome />
      <ClinicDescription />
      <MobileVersion />
      <Reviews/>
    </>
  )
}
export default HomePage;