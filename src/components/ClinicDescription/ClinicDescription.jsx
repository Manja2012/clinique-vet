import PageTitle from '../PageTitle/PageTitle';
import CardExample from '../CardExample/CardExample';
import cardExamples from '../CardExample/card-examples';
import style from '../CardExample/CardExample.module.scss';
import css from '../../sass/Base.module.scss';
const ClinicsDescription = () =>{  

  return(
    <section className={css.section}>
      <div className={css.container}>
        <PageTitle text="Urgences et Consultants vétérinaires Clinique  vétérinaire d'urgences"/>
        <ul className={style.card__list}>
        {
          cardExamples.map(card => (
            <li className={style.card__item} key={card.alt}>
              <CardExample
                title={card.title}
                img={card.img}
                description={card.description}
                alt={card.alt}
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