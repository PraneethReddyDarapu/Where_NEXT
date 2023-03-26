import { useState, useEffect } from "react";
import "./blogForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function FormBlog() {
  const [blogs, setBlogs] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("link", data.link);

    axios
      .post(`${process.env.REACT_APP_API_URL}/blogs`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        getData();
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/blogs`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Blog mt-3">
      <h3>Blog</h3>
      <p>Share your experience with us</p>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* file */}
        <label className="mt-2">Upload Image</label>
        <input class="form-control" type="file" {...register("image")} />
        {/* title */}
        <label className="mt-3">Title</label>
        <input
          class="form-control"
          type="text"
          placeholder="Title"
          {...register("title")}
        />
        {/* description */}
        <label className="mt-2">Description</label>
        <input
          class="form-control"
          type="text"
          placeholder="Description"
          {...register("description")}
        />
        {/* link */}
        <label className="mt-2">Link</label>
        <input
          class="form-control"
          type="text"
          placeholder="Link"
          {...register("link")}
        />
        {/* submit */}
        <button className="btn btn-dark mt-2" type="submit">
          Submit
        </button>
      </form>
      {/* blogs */}

      <span className="blogoutput">
        {blogs?.map((blog) => {
          return (
            <div className="card shadow-sm mt-3 me-3">
              <div className="card-img">
                <img
                  src={"http://localhost:3001/images/" + blog.image}
                  className="blog__image"
                  alt="blog"
                />
              </div>
              <div className="card-body">
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <a href={blog.link}>Link</a>
              </div>
            </div>
          );
        })}
      </span>
    </div>
  );
}

export default FormBlog;
