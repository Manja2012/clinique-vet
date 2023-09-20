import React, { useState } from 'react';
import style from './Reviews.module.scss';

const ReviewCard = ({name, review, rating}) => {
  
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <span className={style.star}>⭐⭐⭐⭐⭐</span>
      <div className={style.rating}>{rating}/5</div>
      <p className={`${style.reviews__text} ${style.content} ${expanded ? style.expanded : ''}`}>{review}</p>
      <p className={style.reviews__name}>{name}</p>
      <button onClick={toggleExpanded}>{expanded ? 'Masquer' : 'En savoir plus'}</button>
    </>
  );
}

export default  ReviewCard;