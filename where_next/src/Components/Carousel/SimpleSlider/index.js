import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./card.css";
import { Card } from "react-bootstrap";

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          border: "black",
        }}
        onClick={onClick}
      />
    );
  };

  SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  };

  componentDidMount = () => {
    this.setState({ data: this.props.data });
  };

  render() {
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
      nextArrow: <this.SampleNextArrow />,
      prevArrow: <this.SamplePrevArrow />,
    };

    const { data } = this.props;

    return (
      <div className="card-title">
        <br />
        <br />
        <h2 style={{ textAlign: "center" }}>Immersive Travel Themes</h2>
        <br />
        {this.state.data.length > 0 && (
          <Slider {...settings}>
            {this.state.data.map((item, key) => (
              <div key={key}>
                <Card bg="black" text="white">
                  <Link to={`/travel/${item._id}`}>
                    <Card.Img variant="top" src={item.image} />
                  </Link>
                  <Card.Body>
                    <Link to={`/travel/${item._id}`}>
                      <Card.Title style={{ textAlign: "center" }}>
                        {item.title}
                      </Card.Title>
                    </Link>
                    <Card.Text style={{ textAlign: "center" }}>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        )}
      </div>
    );
  }
}

export default CarouselComponent;
