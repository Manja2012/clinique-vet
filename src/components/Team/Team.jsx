import TeamMember from "./TeamMember.jsx";
import teamMembers from "./team-members.js";
import style from './Team.module.scss';

const Team = () => {
  return (
    <ul className={style.team}>
      {
        teamMembers.map(member => (
          <li className={style.team__item} key={member.name}>
            <TeamMember
              name={member.name}
              img={member.img}
              specialty={member.specialty}
              description={member.description}
              to={member.to}
              fbProfile={member.fbProfile}
              instagramProfile={member.instagramProfile}
              ldProfile={member.ldProfile}
            />
          </li>
        ))
      }
    </ul>
  )
}

export default Team;