import Service from '../../components/Service/Service.jsx';
import { Helmet } from 'react-helmet';

const ServicePage = () =>{  

  return(
    <>
      <Helmet>
        <title>Page service</title>
        <meta name="description" content="La clinique Biomir prend soin de votre animal de compagnie. Nous offrons un service de haute qualité." />
      </Helmet>
      <Service/>
    </>
  )
}
export default ServicePage;