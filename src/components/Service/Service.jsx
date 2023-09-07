import CardServiceExample from './CardServiceExample';
import cardServiceExamples from './card-service-examples';
import PageTitle from '../PageTitle/PageTitle';  
import style from '../CardExample/CardExample.module.scss';
import css from '../../sass/Base.module.scss'
const Service = () => {
  return (
  <section className={css.section}>
    <div className={css.container}>
    <PageTitle text="Service"/>
      {
        cardServiceExamples.map(card => (
        <li className={style.card__list} key={card.alt}>
        <CardServiceExample
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

export default Service;