import style from '../CardExample/CardExample.module.scss'

const CardClinicExamples = ({ imageToLeft, description, alt, img}) => {
  return (
    <div className={style.card}>
      { imageToLeft ? (
      <>
        <img className={style.card__image} src={img} alt={alt} />
        <p className={style.card__text}>{description}</p>
      </>
      ) : (
      <>
        <p className={style.card__text}>{description}</p>
        <img className={style.card__image} src={img} alt={alt} />
      </>
      )}
    </div>
  );
}

export default CardClinicExamples;