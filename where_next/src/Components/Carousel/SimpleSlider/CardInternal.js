import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./card.css";
export const CardItem = ({ title, description, image, link }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card bg="black" text="white" style={{ height: "450px" }}>
      <Card.Img className="card-title" src={image} />
      <Card.Body>
        <Card.Title className="card-title" style={{ textAlign: "center" }}>
          {title}
        </Card.Title>
        {showMore ? (
          <Card.Text>{description}</Card.Text>
        ) : (
          <Card.Text>
            {description.slice(0, 100)}...{" "}
            <a href="#" onClick={() => setShowMore(true)}>
              Read more
            </a>
          </Card.Text>
        )}
        <a className="btn btn-primary text-decoration-none" href={link}>
          Book Now
        </a>
      </Card.Body>
    </Card>
  );
};
export default CardItem;
