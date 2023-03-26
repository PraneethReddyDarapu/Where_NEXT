import React, { useState, useEffect } from "react";
import Review from "./Review";
import Loading from "../Loading/Loading";
import { doHttpCall } from "../../util/restapi";
import "../../Components/Tours/Tours.css";

const reviewsURL = "http://localhost:3001/api/reviews";

function Reviews() {
  const [loading, setLoading] = useState(true);
  const [reviewers, setReviewers] = useState([]);

  const fetchReviewers = async () => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: reviewsURL,
      };

      const { data } = await doHttpCall(options);
      const reviewers = data;
      setLoading(false);
      setReviewers(reviewers);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    // fetchReviewers();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (reviewers.length === 0) {
    return (
      <main>
        <div className="title">
          <button className="btn-refresh" onClick={() => fetchReviewers()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="container-review">
        <div className="title-review">
          <h2 className="reviews-title">our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review people={reviewers} />
      </section>
    </main>
  );
}

export default Reviews;
