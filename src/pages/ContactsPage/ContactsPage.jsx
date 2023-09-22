import Contacts from '../../components/Contacts/Contacts';
import ContactsForm from '../../components/Contacts/ContactsForm';
import { Helmet } from 'react-helmet';

const ContactsPage = () =>{  

  return(
    <>
      <Helmet>
        <title>Page contacts</title>
        <meta name="description" content="la clinique Biomir est joignable 7 jours/7, 24h/24 au 096 930 50 90. Appelez-nous !" />
      </Helmet>
      <Contacts/>
      <ContactsForm/>
    </>
  )
}
export default ContactsPage;
