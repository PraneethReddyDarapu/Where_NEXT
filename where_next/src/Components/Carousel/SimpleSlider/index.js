import Slider from "react-slick";
import React from "react";
import BasicCard from "../Card"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        NEXT
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        BACK
      </div>
    );
  }

function SimpleSlider() {
    const slider = React.useRef(null);
  
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
  
      // customPaging: function (i) {
      //   return <p>{i + 1}</p>;
      // },
  
      responsive: [
        {
          breakpoint: 1424,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
  
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
  
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
          TRAVEL THEME
        </h1>
  
        <div style={{ margin: 20 }}>
          <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
          <button
            style={{ marginLeft: 20 }}
            onClick={() => slider?.current?.slickNext()}
          >
            Next
          </button>
        </div>
  
        <Slider ref={slider} {...settings}>
          {products?.map((item, index) => {
            return <BasicCard item={item} />;
          })}
        </Slider>
      </div>
    );
  }
  
  const products = [
    {
      id: 1,
      image: "../images/Mountains.jpg",
      name:"Mountains",
      description: "Description"
    },
    {
      id: 2,
      image: "../images/Hill Stations.jpg",
      name:"Hill Stations",
      description:"Description"
    },
    {
      id: 3,
      image: "../images/Desert.jpg",
      name:"Deserts",
      description:"Description"
    },
    {
      id: 4,
      image: "../images/Adventure.jpg",
      name:"Adventure",
      description:"Description"
    },
  
    {
      id: 5,
      image: "../images/Heritage.jpg",
      name:"Heritage",
      description:"Description"
    },
    {
      id: 6,
      image: "../images/Beaches.jpg",
      name:"Beaches",
      description:"Description"
    },
  ];


  export default SimpleSlider;