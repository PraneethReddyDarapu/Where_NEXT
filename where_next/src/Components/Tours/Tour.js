import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tour = ({ _id, image, info, name, price, continentName, removeTour }) => {
  const navigateTo = `/destination/${"Destination"}/${_id}`;
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <div
        className="row justify-content-end pt-2 me-3"
      >
        {/* close button */}
        <button
          style={{
            borderRadius: "50%",
            // padding: "0.5rem",
            paddingLeft: "0.4rem",
            width: "2rem",
            height: "2rem",
          }}
        
        className="bg-danger text-white" onClick={() => removeTour(_id)}>
          <i className="bi bi-x"></i>
        </button>
      </div>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>

        <Link to={navigateTo} className="details-btn btn-primary">
          details
        </Link>
        {/* book */}
        {/* <Link to={navigateTo} className="details-btn btn btn-secondary">
          book
        </Link> */}
        {/* <button className="delete-btn" onClick={() => removeTour(_id)}>
          not interested
        </button> */}
      </footer>
    </article>
  );
};

export default Tour;
