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
            <PageTitle h2 text="La clinique" />
            <div className={style.card__item} >
              <img className={style.card__image} src={Dog} alt="dog" />
              <p className={style.card__text}>Nous savons que les urgences peuvent survenir à tout moment. C'est pourquoi nous proposons des soins vétérinaires d'urgence 24/7. Si votre animal a une situation critique, vous pouvez compter sur notre aide. </p>
            </div>
          </div> 
        </div>
      </section>
      <section  className={css.mobil}>
        <div className={style.container}>
          <PageTitle h2 text="Notre équipe" />
          <Team />  
        </div>
      </section>
    </>
    )
}
export default MobileVersion;