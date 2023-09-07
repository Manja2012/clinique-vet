import CardClinicExample from './CardClinicExample';
import cardExamples from './card-clinic-examples';
import PageTitle from '../PageTitle/PageTitle';  
import style from '../CardExample/CardExample.module.scss';
import css from '../../sass/Base.module.scss';

const ClinicFunctions = () => {
  return (
  <section className={css.section}>
    <div className={css.container}>
    <PageTitle text="La clinique"/>
      {
        cardExamples.map(card => (
        <li className={style.card__list} key={card.alt}>
        <CardClinicExample
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

export default ClinicFunctions;