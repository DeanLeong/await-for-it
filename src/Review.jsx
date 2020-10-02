import React, { useState } from "react";
import axios from "axios";
import UpdateReview from "./UpdateReview";

function Review(props) {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    setDeleted(true);
    setTimeout(async () => {
      // let's get the airtableURL...
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/reviews/${props.review.id}`;
      // ...and make an axios delete request for a particular record
      await axios.delete(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      props.setFetchReviews(!props.fetchReviews);
      setDeleted(false);
    }, 2000);
  };

  return (
    <div className="review">
      <h3>{props.review.fields.title}</h3>
      <h4>{props.review.fields.text}</h4>
      <h5>{props.review.fields.author}</h5>
      <button onClick={handleDelete}>{deleted ? "YEETED" : "YEET"}</button>
      <UpdateReview
        review={props.review}
        fetchReviews={props.fetchReviews}
        setFetchReviews={props.setFetchReviews}
      />
    </div>
  );
}

export default Review;
