import style from './CardExample.module.scss';

const CardExample = ({ description, title, alt, img}) => {
  return (
    <>
      <img className={style.card__image} src={img} alt={alt} />
      <div>
        <h2 className={style.card__title}>{title}</h2>
        <p className={style.card__text}>{description}</p>
      </div>
      
    </>
  );
}

export default CardExample;