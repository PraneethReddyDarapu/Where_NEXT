import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Signup() {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup/`, data)
      .then((res) => {
        setErrorMessage("");
        window.location.href = "/login";
      })
      .catch((err) => {
        setErrorMessage("Invalid Credentials");
      });
  };

  const onSubmit = (data) => submitData(data);

  return (
    <div className="row justify-content-center p-4">
      <div className="col-lg-6 col-md-8 col-sm-12 shadow-sm bg-white py-3">
        <h3 className="fw-light">Sign Up</h3>
        {errorMessage && errorMessage.length > 0 && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control border-0">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your first name"
              {...register("first_name")}
            />
            {errors.first_name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-control border-0">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              {...register("last_name")}
            />
            {errors.last_name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-control border-0">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-control border-0">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <button type="submit" className="btn btn-dark ms-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
