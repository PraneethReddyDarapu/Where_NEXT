import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './Destination.css';  
import i1 from '../../Images/tajmahal.jpg';
import i2 from '../../Images/Chinawall.jpg';
import i3 from '../../Images/christ.jpg';
import i4 from '../../Images/colosseum.jpg';
import i5 from '../../Images/itza.jpg';
import i6 from '../../Images/machupichu.jpg';
import i7 from '../../Images/petra.jpg';
export class Destination extends Component {  
    render() {  
        var images = [    
            { img: i1 },    
            { img: i6 },    
            { img: i7 },    
            { img: i4 },    
            { img: i5 },    
            { img: i2 },  
            { img: i3 }  
          ];   
    var imgSlides = () =>  
    images.map(num => (  
      <div className="imgpad">  
          <img className="imgdetails" src= {num.img} width="100%"/>    
   </div>
    ));  
  return (  
    <div className="slickpage">  
      <Slider  
    dots={true}  
        slidesToShow={1}  
        slidesToScroll={1}  
        autoplay={true}  
        arrows={true}  
        centerMode= {true}
        autoplaySpeed={1200}>{imgSlides()}</Slider>  
    </div>  
  );  
}  
}  
export default Destination;
