import PageTitle from '../PageTitle/PageTitle';
import CardExample from '../CardExample/CardExample';
import cardExamples from '../CardExample/card-examples';
import css from './ClinicDescription.module.scss'
import baseCss from '../../sass/Base.module.scss'
const ClinicsDescription = () =>{  

  return(
    <section className={baseCss.section}>
      <div className={baseCss.container}>
        <PageTitle text="Urgences et Consultants vétérinaires Clinique  vétérinaire d'urgences"/>
        <ul className={css.cards}>
        {
          cardExamples.map(card => (
            <li className={css.card__item} key={card.alt}>
              <CardExample
                img={card.img}
                description={card.description}
                alt={card.alt}
                imageToLeft={card.imageToLeft}
              />
            </li>
          )) 
        }
        </ul>
      </div>
    </section>
  )
}
export default ClinicsDescription;