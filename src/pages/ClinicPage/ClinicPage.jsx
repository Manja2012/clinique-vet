import ClinicFunctions from '../../components/ClinicFunctions/ClinicFunctions.jsx';
import { Helmet } from 'react-helmet';

const ClinicPage = () =>{  

  return(
    <>
      <Helmet>
          <title>Page clinique</title>
          <meta name="description" content="À la clinique Biomir, nous utilisons uniquement des équipements de pointe." />
      </Helmet> 
      <ClinicFunctions/>
    </>
    
  )
}
export default ClinicPage;