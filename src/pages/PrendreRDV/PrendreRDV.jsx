import PageTitle from '../../components/PageTitle/PageTitle';
import RDV from '../../components/RDV/RDV';
import { Helmet } from 'react-helmet';

const PrendreRDV = () => {

  return (
    <> 
      <Helmet>
        <title>Page prendre RDV</title>
        <meta name="description" content="Prendre RDV en ligne à la clinique Biomir" />
      </Helmet> 
      <PageTitle text="Prendre un rendez-vous"/> 
      <RDV/>
    </>
  )
}

export default PrendreRDV