import React, { useState } from "react";
// react hook form
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Profile() {
  // react hook form
  const { register, handleSubmit, errors, setValue } = useForm();

  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/profile`)
      .then((res) => {
        setData(res.data);
        setValue("first_name", res.data.first_name);
        setValue("last_name", res.data.last_name);
        setValue("email", res.data.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // submit function
  const onSubmit = (data) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/profile`, {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
      })
      .then((res) => {
        console.log(res);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4">
      <h3>Profile</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* first_name */}
        <label className="mt-2" htmlFor="first_name">
          First Name
        </label>
        <input
          type="text"
          name="first_name"
          placeholder="first_name"
          className="form-control"
          {...register("first_name", { required: true, maxLength: 20 })}
        />
        {errors?.first_name && <span>This field is required</span>}
        {/* last_name */}
        <label className="mt-2" htmlFor="last_name">
          Last Name
        </label>
        <input
          type="text"
          name="last_name"
          placeholder="last_name"
          className="form-control"
          {...register("last_name", { required: true })}
        />
        {errors?.last_name && <span>This field is required</span>}
        {/* email */}
        <label className="mt-2" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="email"
          className="form-control"
          {...register("email", { required: true })}
        />
        {errors?.email && <span>This field is required</span>}
        <button className="btn btn-dark mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
