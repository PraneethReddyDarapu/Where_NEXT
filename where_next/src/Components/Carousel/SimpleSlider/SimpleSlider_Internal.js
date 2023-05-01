import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardItem } from "./CardInternal";

const SimpleSliderInternal = (props) => {
  useEffect(() => {
    console.log(props.data);
  }, []);
  return (
    <div className="row m-0">
      {props.data?.map((card) => (
        <div className="col-lg-4 col-md-6 mt-3" key={card.id}>
          <CardItem
            title={card.name}
            description={card.info}
            image={card.image}
            link={`/destination/Destination/${card._id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default SimpleSliderInternal;
