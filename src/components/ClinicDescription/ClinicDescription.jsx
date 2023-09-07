import PageTitle from '../PageTitle/PageTitle';
import CardExample from '../CardExample/CardExample';
import cardExamples from '../CardExample/card-examples';
import style from './ClinicDescription.module.scss'
import css from '../../sass/Base.module.scss'
const ClinicsDescription = () =>{  

  return(
    <section className={css.section}>
      <div className={css.container}>
        <PageTitle text="Urgences et Consultants vétérinaires Clinique  vétérinaire d'urgences"/>
        {
          cardExamples.map(card => (
          <li className={style.card__list} key={card.alt}>
          <CardExample
            img={card.img}
            description={card.description}
            alt={card.alt}
            imageToLeft={card.imageToLeft}
          />
        </li>
          )) 
        }
      </div>
    </section>
    )
}
export default ClinicsDescription;