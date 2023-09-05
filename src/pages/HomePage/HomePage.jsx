import Welcome from '../../components/Welcome/Welcome.jsx';
import ClinicDescription from '../../components/ClinicDescription/ClinicDescription.jsx';
import MobileVersion from '../../components/MobileVersion/MobileVersion.jsx';
import Reviews from '../../components/Reviews/Reviews.jsx';

const HomePage = () =>{  

  return(
    <>
      <Welcome />
      <ClinicDescription />
      <MobileVersion />
      <Reviews/>
    </>
  )
}
export default HomePage;