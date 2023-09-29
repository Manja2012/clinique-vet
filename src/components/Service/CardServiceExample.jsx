import style from '../CardExample/CardExample.module.scss';

const CardServiceExample = ({ title, description, alt, img}) => {
  return (
    <div className={style.card}>
      <img className={style.card__image} src={img} alt={alt} />
      <div>
        <h2>{title}</h2>
        <p className={style.card__text}>{description}</p>
      </div>
    </div>
  );
}

export default CardServiceExample;