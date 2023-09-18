import React, { useState, useEffect } from "react";
import axios from "axios";
import PageTitle from '../PageTitle/PageTitle';  
import ReviewCard from './ReviewCard';
import {reviewsRoute} from '../../api/routes'
import css from '../../sass/Base.module.scss';
import style from './Reviews.module.scss';

const Reviews = () =>{  

  const [review, setReview] = useState([]);
  
  useEffect(() => {
    const fetchReview = async () => {
        try{
            const {data} = await axios.get(reviewsRoute)
            setReview(data) 
        }catch(error){
            console.log(error)
        }
    }
    fetchReview()
  },[])
    
    return(
      <section className={css.section}>
        <div className={css.container}>
        <PageTitle text="Les avis de nos clients"/>
          <ul className={style.reviews}>
            {
              review.map(card => (
                <li className={style.reviews__item} key={card.name}>
                  <ReviewCard
                    name={card.name}
                    review={card.review}
                    rating={card.rating}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </section>   
    )
}
export default Reviews;