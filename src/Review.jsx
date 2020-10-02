import React from "react";

function Review(props) {
  return (
    <div className="review">
      <h3>{props.review.fields.title}</h3>
      <h4>{props.review.fields.text}</h4>
      <h5>{props.review.fields.author}</h5>
    </div>
  );
}

export default Review;
