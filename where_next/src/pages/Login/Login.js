import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(process.env);

  const submitData = (data) => {
    console.log(process.env);
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login/`, data)
      .then((res) => {
        setErrorMessage("");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        window.location.href = "/";
      })
      .catch((err) => {
        setErrorMessage("Invalid Credentials");
      });
  };

  const onSubmit = (data) => submitData(data);

  return (
    <div className="row justify-content-center p-4">
      <div className="col-lg-6 col-md-8 col-sm-12 shadow-sm bg-white py-3">
        <h3 className="fw-light">LOGIN</h3>
        {errorMessage && errorMessage.length > 0 && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
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
