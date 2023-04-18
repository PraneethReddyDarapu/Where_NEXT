import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./Tripsearch.css";

function TripSearch() {
  // get id from url params
  const id = new URLSearchParams(window.location.search).get("id");

  const [bookingDetails, setBookingDetails] = useState({});
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [showHangoutDetails, setShowHangoutDetails] = useState(true);
  const [mode, setMode] = useState("bus");
  const [isSuccess, setIsSuccess] = useState(false);
  const paymentRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const {
    register: registerPayment,
    handleSubmit: handleSubmitPayment,
    watch: watchPayment,
    formState: { errors: errorsPayment },
  } = useForm();

  const handleHangout = (e) => {
    console.log({ e });
    setShowHangoutDetails(e);
  };

  const BookNow = (data) => {
    console.log(data);
    setBookingDetails(data);
    setShowPaymentDetails(true);
    paymentRef.current.scrollIntoView();
  };

  const onSubmit = (data) => {
    BookNow(data);
  };

  const submitData = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/booking/`, {
        ...bookingDetails,
        tour_id: id,
        mode,
        payment_details: data,
      })
      .then((res) => {
        console.log(res);
        setIsSuccess(true);
        setTimeout(() => {
          window.location.href = "/hangout";
        }, 3000);
      });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/tours/${id}`).then((res) => {
      console.log(res.data);
      setBookingDetails(res.data);
    });
  }, [id]);

  return (
    <div className="Blog mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          {/* Booking section */}
          <div>
            {isSuccess && (
              <div class="alert alert-success" role="alert">
                Tour booked successfully
              </div>
            )}
            <h2 className="fw-light">
              Book Your Trip With Us <i class="bi bi-bus-front"></i>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-3">
                <label>Origin</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter origin city"
                  {...register("origin", { required: true })}
                />
                {errors?.origin && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              {/* <div className="mt-3">
                <label>Destination</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter destination city"
                  {...register("destination", { required: true })}
                />
                {errors?.destination && (
                  <span className="text-danger">This field is required</span>
                )}
              </div> */}

              <div className="mt-3">
                <label>Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter start date"
                  {...register("start_date", { required: true })}
                />
                {errors?.start_date && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>

              <div className="mt-3">
                <label>End Date</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter end date"
                  {...register("end_date", { required: true })}
                />
                {errors?.end_date && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>

              <div className="mt-3">
                <label className="d-flex">Round Trip</label>

                <div className="d-flex">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="round_trip"
                      {...register("trip_type", {
                        type: "radio",
                        required: true,
                      })}
                      checked
                    />
                    <label class="form-check-label">Round Trip</label>
                  </div>
                  <div class="form-check ms-3">
                    <input
                      type="radio"
                      name="is_round_trip"
                      value="one_way"
                      className="form-check-input"
                      {...register("trip_type", {
                        type: "radio",
                        required: true,
                      })}
                    />
                    <span>One Way</span>
                  </div>
                </div>
              </div>

              {/* Travel Mode */}
              <div className="mt-3 container-fluid">
                <span className="d-flex">Mode of Transport</span>
                <div className="row gx-5">
                  <div
                    onClick={() => setMode("bus")}
                    className={`col shadow-sm bg-${
                      mode === "bus" ? "dark text-white" : "white"
                    } rounded rounded-2 text-center m-2 p-2`}
                  >
                    <h3 class="bi bi-bus-front"></h3>
                    <p className="mb-0 pb-0">Bus</p>
                  </div>
                  <div
                    onClick={() => setMode("train")}
                    className={`col shadow-sm bg-${
                      mode === "train" ? "dark text-white" : "white"
                    } rounded rounded-2 text-center m-2 p-2`}
                  >
                    <h3 class="bi bi-train-freight-front"></h3>
                    <p className="mb-0 pb-0">Train</p>
                  </div>
                  <div
                    onClick={() => setMode("flight")}
                    className={`col shadow-sm bg-${
                      mode === "flight" ? "dark text-white" : "white"
                    } rounded rounded-2 text-center m-2 p-2`}
                  >
                    <h3 class="bi bi-airplane"></h3>
                    <p className="mb-0 pb-0">Flight</p>
                  </div>
                </div>
              </div>

              {/* 
              static UI
              book trip by trip: one way round trip
              origin
              destination
              start date
              end date
              number of people
              number of children
              */}

              <div className="mt-3">
                <h3>Passenger Details</h3>

                {/* origin select with  5 cities */}
                <div className="row">
                  <div className="col-6 form-group">
                    <label className="me-3">Origin</label>
                    <select
                      className="form-select"
                      id="origin"
                      aria-label="Default select example 2"
                      // {...register("origin", { required: false })}
                    >
                      <option selected>Select Origin</option>
                      <option value="1">Paris</option>
                      <option value="2">London</option>
                      <option value="3">New York</option>
                      <option value="4">Tokyo</option>
                      <option value="5">Sydney</option>
                    </select>
                    {errors?.origin && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>

                  {/* destination select with  5 cities */}
                  <div className="col-6 form-group">
                    <label className="me-3">Destination</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      // {...register("destination", { required: false })}
                    >
                      <option selected>Select Destination</option>
                      <option value="1">Paris</option>
                      <option value="2">London</option>
                      <option value="3">New York</option>
                      <option value="4">Tokyo</option>
                      <option value="5">Sydney</option>
                    </select>
                    {errors?.destination && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="row">
                  {/* start date */}
                  <div className="col-6 form-group">
                    <label className="me-3">Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Enter start date"
                      // {...register("start_date", { required: false })}
                    />
                    {errors?.start_date && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>

                  {/* end date */}
                  <div className="col-6 form-group">
                    <label className="me-3">End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Enter end date"
                      // {...register("end_date", { required: false })}
                    />
                    {errors?.end_date && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label className="me-3">Number of Adults</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter number of adults"
                    // {...register("number_of_adults", { required: false })}
                  />
                  {errors?.number_of_adults && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                {/* number of children */}
                <div className="form-group">
                  <label className="me-3">Number of Children</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter number of children"
                    // {...register("number_of_children", { required: false })}
                  />
                  {errors?.number_of_children && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label className="d-flex">
                  Do you want to create a Hangout chat?
                </label>

                <div className="d-flex">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="hangout"
                      value="Y"
                      onClick={() => handleHangout(true)}
                      {...register("is_hangout_enabled", {
                        type: "radio",
                        required: true,
                      })}
                      checked
                    />
                    <label class="form-check-label">Yes</label>
                  </div>
                  <div class="form-check ms-3">
                    <input
                      type="radio"
                      name="hangout"
                      value="N"
                      className="form-check-input"
                      onClick={() => handleHangout(false)}
                      {...register("is_hangout_enabled", {
                        type: "radio",
                        required: true,
                      })}
                    />
                    <span>No</span>
                  </div>
                </div>

                {showHangoutDetails && (
                  <div>
                    {/* hangout_title */}
                    <div className="mt-3">
                      <label>Hangout Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter hangout title"
                        {...register("hangout_title", { required: true })}
                      />
                      {errors?.hangout_title && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    {/* description */}
                    <div className="mt-3">
                      <label>Description</label>
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Enter description"
                        {...register("hangout_description", { required: true })}
                      />
                      {errors?.description && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="d-flex">
                <button
                  className="btn btn-dark w-100 mt-3"
                  disabled={showPaymentDetails}
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
          {/* Payment Details */}
          <div
            id="payment-details"
            className={`mt-4 ${showPaymentDetails ? "" : "d-none"}`}
            ref={paymentRef}
          >
            <h2 className="fw-light">Payment Details</h2>
            <form onSubmit={handleSubmitPayment(submitData)}>
              <div className="mt-3">
                <label>Name on card</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name on card"
                  {...registerPayment("name", { required: true })}
                />
                {errors?.origin && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>

              <div className="mt-3">
                <label>Card Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="xxxx xxxx xxxx xxxx"
                  // oninput="javascript: if (this.value > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  // maxlength="16"
                  pattern="/^-?\d+\.?\d*$/"
                  onKeyPress={() => {
                    if (this.value == 16) return false;
                  }}
                  {...registerPayment("card_number", { required: true })}
                />
                {errors?.origin && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>

              <div className="row">
                <div className="col-6 mt-3">
                  <label>Expiry</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM/YY"
                    {...registerPayment("expiry", { required: true })}
                  />
                  {errors?.origin && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="col-6 mt-3">
                  <label>CVV</label>
                  <input
                    type="number"
                    className="form-control"
                    min="16"
                    maxLength="16"
                    placeholder="Enter CVV"
                    {...registerPayment("cvv", { required: true })}
                  />
                  {errors?.origin && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
              </div>

              <div className="d-flex">
                <button className="btn btn-dark w-100 mt-3" type="submit">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="card shadow-sm mt-3 me-3">
            <div className="card-img">
              <img
                src={bookingDetails?.image}
                className="blog__image"
                alt="blog"
              />
            </div>
            <div className="card-body">
              <h4>{bookingDetails?.name}</h4>
              <p>{bookingDetails?.info?.slice(0, 100)}...</p>
              <p className="mt-3">
                <span className="text-dark fw-bold">Price:</span>{" "}
                {bookingDetails?.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripSearch;
