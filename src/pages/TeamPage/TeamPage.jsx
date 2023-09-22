import Team from '../../components/Team/Team.jsx';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import TeamBg from '../../components/Team/TeamBg.jsx';
import { Helmet } from 'react-helmet';

const TeamPage = () =>{  

  return(
    <>
      <Helmet>
        <title>Page l’équipe</title>
        <meta name="description" content="À la clinique Biomir, seuls les meilleurs vétérinaires travaillent."/>
      </Helmet>
      <PageTitle text="L’équipe"/>
      <Team />
      <TeamBg />
    </>
  )
}
export default TeamPage;