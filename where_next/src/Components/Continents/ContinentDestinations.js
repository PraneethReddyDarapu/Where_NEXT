import React, { useEffect, useState } from "react";
import Reviews from "../Reviews/Reviews";
import Tours from "../Tours/Tours";
import { Link } from "react-router-dom";
import axios from "axios";

export const ContinentDestinations = ({
  _id,
  image,
  info,
  name,
  places = [],
  price,
  weather,
  timings,
  isContinent,
}) => {
  const [readMore, setReadMore] = useState(false);
  const [destination, setDestination] = useState(places);
  const [tours, setTours] = useState([]);

  const removePlaces = (id) => {
    const newPlaces = destination.filter((place) => place.id !== id);
    setDestination(newPlaces);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/tours?continent_id=${_id}`)
      .then((res) => {
        setTours(res.data);
      });
  }, []);

  return (
    <>
      <article className="continent-destination">
        <img className="continent-destination-img" src={image} alt={name} />
        <footer>
          <div className="continent-info">
            <h2>{name}</h2>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 300)}...`}
            <button
              className="continent-btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "show less" : "  read more"}
            </button>
          </p>
          {!isContinent &&
            <div>
              <p className="mb-0">
                Price: ${price}{" "}
              </p>
              <p className="mb-0">
                <b>Weather:</b> {weather}
              </p>
              <p className="mb-0">
                <b>Timings:</b>
                {timings}
              </p>
            </div>}
          <br />
          {!isContinent && <div>
            <Link to={`/tripsearch?id=${_id}`} className="btn btn-dark btn-lg">
              Book now
            </Link>
            <Link to={`/hangout`} className="btn btn-dark btn-lg ms-2">
              Hangout
            </Link>
          </div>}
        </footer>
      </article>

      <Tours
        tours={tours}
        removeTour={removePlaces}
        continentName={name}
        isContinent={isContinent}
      />
      {!isContinent ? <Reviews id={_id} /> : <> </>}
    </>
  );
};
