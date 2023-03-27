import React, { useState, useEffect } from "react";
import Review from "./Review";
import Loading from "../Loading/Loading";
import { doHttpCall } from "../../util/restapi";
import "../../Components/Tours/Tours.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import moment from "moment";

function Reviews(props) {
  const [reviews, setReviews] = useState([]);
  const [stars, setStars] = useState(1);
  const [message, setMessage] = useState({
    success: null,
  });

  const { register, handleSubmit, errors, setValue, getValues } = useForm();

  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/reviews/${props.id}`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/reviews`, {
        tour_id: props.id,
        rating: stars,
        message: data.message,
      })
      .then((res) => {
        setMessage({
          status: 1,
          success: "Review added successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        setMessage({
          status: 0,
          success: "Something went wrong",
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <section className="container">
        <div className="title-review">
          <h2 className="reviews-title">Reviews</h2>
          <div className="underline"></div>
        </div>

        {message?.status === 1 ? (
          <div className="alert alert-success">{message.success}</div>
        ) : message?.status === 0 ? (
          <div className="alert alert-danger">{message.success}</div>
        ) : null}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* rating with stars background gold on hover and message */}

          <div className="d-flex">
            {[1, 2, 3, 4, 5].map((star, key) => (
              <i
                class="bi bi-star-fill"
                onClick={() => setStars(star)}
                style={{
                  color: star <= stars ? "#f8e825" : "#333",
                }}
              ></i>
            ))}
          </div>
          {errors?.rating && (
            <span className="text-danger">This field is required</span>
          )}

          {/* message */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              placeholder="Message"
              {...register("message", { required: true })}
            ></textarea>
            {errors?.message && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>

        <div className="row mt-3">
          {reviews.map((row, key) => (
            <div className="col-12 mt-3">
              <div className="col-11 row rounded shadow border p-3">
                <div className="col-5 p-0 m-0">
                  <div className="d-flex align-items-center m-0 p-0">
                    <img
                      src={`https://avatars.dicebear.com/4.5/api/avataaars/${row.user._id}.svg?mood=happy`}
                      alt="avatar"
                      className="user__image rounded-circle"
                    />
                    <p className="text-dark user__name fw-normal m-0">
                      {row.user.first_name} {row.user.last_name}
                    </p>
                  </div>
                </div>
                <div className="col-7 text-end">
                  <p className="text-dark user__name fw-normal m-0">
                    {/* format: relative time like 2 days ago */}
                    {moment(row.createdAt).fromNow()}
                  </p>
                </div>

                <div className="col-12">
                  {/* stars with message */}
                  <div className="">
                    {[1, 2, 3, 4, 5].map((star, key) => (
                      <i
                        class="bi bi-star-fill"
                        style={{
                          color: star <= row.rating ? "#f8e825" : "#333",
                        }}
                      ></i>
                    ))}

                    <p className="text-dark user__name fw-normal m-0">
                      {row.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <Review people={reviewers} /> */}
      </section>
    </main>
  );
}

export default Reviews;
