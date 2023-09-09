import style from './CardExample.module.scss';

const CardExample = ({ imageToLeft, description, alt, img}) => {
  return (
    <>
      <img className={style.card__image} src={img} alt={alt} />
      <p className={style.card__text}>{description}</p>
    </>
  );
}

export default CardExample;