import PageTitle from '../PageTitle/PageTitle.jsx';
import Team from '../Team/Team.jsx';
import style from './MobileVersion.module.scss';
import css from '../../sass/Base.module.scss';
const MobileVersion = () =>{  

    return(
    <div>
      <section className={style.mobil}  >
        <div className={css.container} >
          <PageTitle text="La clinique" />
          <img className={style.mobil__image} src="/img/dog.jpg" alt="dog" />
          <p className={style.mobil__text}>Lorem ipsum dolor sit amet consectetur. Sit amet facilisi massa lacus quam sed enim turpis dignissim. Lecea amet mi. Lacus erat habitasse turpis semper nunc massa </p>
        </div>
      </section>
      <section  className={css.mobil}>
        <div className={style.container}>
          <PageTitle text="Notre équipe" />
          <Team />  
        </div>
      </section>
    </div>
    )
}
export default MobileVersion;