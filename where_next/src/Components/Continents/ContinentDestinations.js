import React, { useState } from "react";
import Reviews from "../Reviews/Reviews";
import Tours from "../Tours/Tours";

export const ContinentDestinations = ({
  id,
  image,
  info,
  name,
  places = [],
  isContinent,
}) => {
  const [readMore, setReadMore] = useState(false);
  const [destination, setDestination] = useState(places);

  const removePlaces = (id) => {
    const newPlaces = destination.filter((place) => place.id !== id);
    setDestination(newPlaces);
  };

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
        </footer>
      </article>

      <Tours
        tours={destination}
        removeTour={removePlaces}
        continentName={name}
        isContinent={isContinent}
      />
      {!isContinent ? <Reviews /> : <></>}
    </>
  );
};
