import CardExample from '../CardExample/CardExample';
import cardServiceExamples from './card-service-examples';
import PageTitle from '../PageTitle/PageTitle';  
import style from '../CardExample/CardExample.module.scss';
import css from '../../sass/Base.module.scss';
const Service = () => {
  return (
  <section className={css.section}>
    <div className={css.container}>
      <PageTitle text="Service"/>
      <ul className={style.card__list}>
        {
          cardServiceExamples.map(card => (
          <li className={style.card__item} key={card.alt}>
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

export default Service;