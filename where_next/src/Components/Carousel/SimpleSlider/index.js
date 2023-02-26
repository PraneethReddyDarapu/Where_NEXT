import React from 'react';
import {  Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from 'react-bootstrap';

function SampleNextArrow(props) {
  const { className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", border: "black" , 
       }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
const CarouselComponent = ({ data }) => {
  
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  centerMode: true,
  centerPadding: "60px",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
  return (
    <Slider {...settings}>
      {data.map((item) => (        
        <div key={item.id}>
          <Link to={`/travel/${item.id}`}>
          <Card>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselComponent;