import React, { useState } from "react";
import axios from "axios";

function UpdateReview(props) {
  const [title, setTitle] = useState(props.review.fields.title);
  const [text, setText] = useState(props.review.fields.text);
  const [author, setAuthor] = useState(props.review.fields.author);

  const handleSubmit = async (e) => {
    // prevent page reload.
    e.preventDefault();
    // we have to make a fields object that holds the title, text and author
    const fields = {
      title,
      text,
      author,
    };
    // make a POST request to our endpoint to create new data
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/reviews/${props.review.id}`;
    // await axios.methodName(URL, request.body??, options)
    await axios.put(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    // make another GET request?????
    props.setFetchReviews(!props.fetchReviews);
  };

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="text">Text:</label>
      <input
        name="text"
        type="text"
        placeholder="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="author">Author:</label>
      <input
        name="author"
        type="text"
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">HAHA NICE</button>
    </form>
  );
}

export default UpdateReview;
