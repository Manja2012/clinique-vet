import PageTitle from '../PageTitle/PageTitle.jsx';
import Team from '../Team/Team.jsx';
import Dog from '../../images/dog.jpg';
import style from './MobileVersion.module.scss';
import css from '../../sass/Base.module.scss';
const MobileVersion = () =>{  

    return(
    <>
      <section className={css.section} >
        <div className={css.container}>
          <div className={style.card}>
            <PageTitle text="La clinique" />
            <div className={style.card__item} >
              <img className={style.card__image} src={Dog} alt="dog" />
              <p className={style.card__text}>Lorem ipsum dolor sit amet consectetur. Sit amet facilisi massa lacus quam sed enim turpis dignissim. Lecea amet mi. Lacus erat habitasse turpis semper nunc massa </p>
            </div>
          </div> 
        </div>
      </section>
      <section  className={css.mobil}>
        <div className={style.container}>
          <PageTitle text="Notre équipe" />
          <Team />  
        </div>
      </section>
    </>
    )
}
export default MobileVersion;