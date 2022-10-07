import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function RatingStars({ rate }) {

  let floor = Math.floor(rate);
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= floor) stars.push(<AiFillStar className="rating-star" key={i} />);
    else stars.push(<AiOutlineStar className="rating-star" key={i} />);
  }

  return <>{stars}</>;
}

export default RatingStars;
