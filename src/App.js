import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateReview from "./CreateReview";
import Review from "./Review";
import "./App.css";

function App() {
  const [reviews, setReviews] = useState([]);
  const [fetchReviews, setFetchReviews] = useState(false);

  useEffect(() => {
    const getJokes = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/reviews`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setReviews(response.data.records);
    };
    getJokes();
  }, [fetchReviews]);

  return (
    <div className="App">
      <h1>Await For It</h1>
      {reviews.map((review) => (
        /* Review component has a prop called review with a value of review (from map) */
        <Review review={review} />
      ))}
      <CreateReview
        fetchReviews={fetchReviews}
        setFetchReviews={setFetchReviews}
      />
    </div>
  );
}

export default App;
