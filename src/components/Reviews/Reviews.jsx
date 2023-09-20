import React, { useState, useEffect } from "react";

import { getReviews } from '../../api/api-client'
import PageTitle from "../PageTitle/PageTitle";
import ReviewCard from "./ReviewCard";
// import { useReviews } from '../../business/use-reviews'
import { reviewsRoute } from "../../api/routes";
import css from "../../sass/Base.module.scss";
import style from "./Reviews.module.scss";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await getReviews();
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <PageTitle text="Les avis de nos clients" />
        <ul className={style.reviews}>
          {reviews.map((card) => (
            <li className={style.reviews__item} key={card.name}>
              <ReviewCard
                name={card.name}
                review={card.review}
                rating={card.rating}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Reviews;
