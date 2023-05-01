import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Destination.css";
import axios from "axios";

import i1 from "../../Images/tajmahal.jpg";
// import i2 from "../../Images/Chinawall.jpg";
// import i3 from "../../Images/christ.jpg";
// import i4 from "../../Images/colosseum.jpg";
// import i5 from "../../Images/itza.jpg";
// import i6 from "../../Images/machupichu.jpg";
// import i7 from "../../Images/petra.jpg";
import TourWrapper from "../../Components/Tours/TourWrapper";
import Continents from "../../Components/Continents/Continents";

const Destination = () => {
  const [data, setData] = React.useState([]);

  const imgSlides = () => {
    return (
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          {data.map((tour, key) => (
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={key}
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          ))}
        </div>
        <div class="carousel-inner">
          {data.map((tour, key) => (
            <div class={`carousel-item ${key === 0 ? "active" : ""}`}>
              <img
                src={tour.image}
                class="carousel__image d-block w-100"
                alt={tour.name}
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>{tour.name}</h5>
                <p className="text-white">{tour.info.substring(0, 100)}</p>
                <a
                  href={`/destination/Destination/${tour._id}`}
                  className="btn btn-dark"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/tours?is_featured=true`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="">
      <Continents />
      <div className="slickpage mt-3">{imgSlides()}</div>
      <TourWrapper />
    </div>
  );
};
export default Destination;
