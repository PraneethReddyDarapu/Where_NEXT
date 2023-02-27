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
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  
};
  return (
    <div>
      <br />
      <br />
      <h2 style={{textAlign: "center"}}>Popular Travel Themes</h2>
      <br />
    
    <Slider {...settings}>
      {data.map((item) => (        
        <div key={item.id}>
          <Card bg='black' text='white'>
          <Link to={`/travel/${item.id}`}>
            <Card.Img variant="top" src={item.image} />
            </Link>
            <Card.Body>
            <Link to={`/travel/${item.id}`}>
              <Card.Title style={{textAlign: "center"}}>{item.title}</Card.Title>
              </Link>
              <Card.Text style={{textAlign: "center"}}>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default CarouselComponent;