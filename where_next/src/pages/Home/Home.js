import React from "react";
const Home = () => {
  return (
    <div className="">
      <div
        className="home__banner
        d-flex
        justify-content-center
        align-items-center
      "
      >
        <div>
          <h2 className="fw-light text-center">Discover Your Next Adventure</h2>
          <p className="text-white text-center fw-normal">
            Inspire customers to explore new and exciting destinations with our
            diverse range of tour offerings. <br />
            Join our community of like-minded travelers and share your
            experiences through our hangout feature.
          </p>
          <div className="d-flex justify-content-center">
            <a
              className="btn btn-dark btn-lg px-5 fw-light text-decoration-none"
              href="/destination"
            >
              Explore
              <i class="bi bi-arrow-right my-auto ms-2"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
