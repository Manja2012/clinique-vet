import Team from '../../components/Team/Team.jsx';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import TeamBg from '../../components/Team/TeamBg.jsx';
const TeamPage = () =>{  

  return(
    <>
      <PageTitle text="L’équipe"/>
      <Team />
      <TeamBg />
    </>
  )
}
export default TeamPage;