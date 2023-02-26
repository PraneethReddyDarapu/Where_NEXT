import React ,{ useState } from 'react';
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
const SimpleSliderInternal = ({ data }) => { 
const [countryFilter, setCountryFilter] = useState('');

const handleFilterChange = (event) => {
  setCountryFilter(event.target.value);
};

const filteredCards = countryFilter
  ? data.filter((card) => card.country === countryFilter)
  : data;
const settings = {
  dots: true,
  infinite: filteredCards.length > 3,
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
    <div>
    <h2>Filter by Country:</h2>
    <select onChange={handleFilterChange}>
      <option value="">All</option>
      <option value="USA">USA</option>
      <option value="UK">UK</option>
      <option value="France">France</option>
      <option value="Canada">Canada</option>
    </select>
    <h2>Carousel:</h2>
    <Slider {...settings}>
      {filteredCards.map((card) => (
        <div key={card.id}>
          <Card>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default SimpleSliderInternal;