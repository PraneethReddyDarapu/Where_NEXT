import React from 'react'
import SimpleSliderInternal from "../SimpleSlider/SimpleSlider_Internal"
const HillStations = () => {
  return (
    <div>
<div className="image">
  <div className="justimage"><img src="../images/CoveHillStation.jpg" /></div>
  <div className="centered">Hill Stations
<div><br/><p><h4>High-altitude towns for recreation</h4></p></div>
</div>
</div>
      <br/>
      <div className="Heading"><h2 style={{textAlign: "center"}}>Popular Hill Station Destinations</h2></div> 
    <div className="container">
      <SimpleSliderInternal data={data} />
    </div>
    </div>
    )
}
export default HillStations;

const data = [
  {
    id: 1,
    image: "../images/Aspen-1.jpg",
    title:"Aspen, Colorado",
    description: "Best known for being a winter wonderland,Aspen is one of the most picturesque hill stations in the United States of America.It has one of the best skiing slopes in the world along with a unique culture",
    country:"USA"
  },
  {
    id: 2,
    image: "../images/stowe-1.jpg",
    title:"Stowe, Vermont",
    description:"If you want to get the feel of the European Alps in United States of America,then the small quaint town of Stowe in Vermont is the place for you.Known as one of the most beautiful and best hill station in the US",
    country:"USA"
  },
  {
    id: 3,
    image: "../images/Gatlingburg-1.jpg",
    title:"Gatlingburg, Tennessee",
    description:"Ideal for a family vacation or a honeymoon destination in US,Gatlinburg in Tennessee that sits beside the Great Smoky Mountains National Park has the ability to keep both adults and kids entertained",
    country:"USA"
  },
  {
    id: 4,
    image: "../images/JacksonHole-1.jpg",
    title:"Jackson Hole, Wyoming",
    description:"Tucked between the Grand Teton National Park and forest lands,Jackson Hole in Wyoming is a relatively secluded area that is known for its scenic views",
    country:"USA"

  },
  {
    id: 5,
    image: "../images/Edinburgh-1.jpg",
    title: "Edinburgh",
    description: "Out of all the hilly places in the United Kingdom,Edinburgh is one of the best vacation places.The place is constantly awake with tourists",
    country: "UK"
   },
   {
    id: 6,
    image: "../images/Redditch-1.jpg",
    title: "Redditch",
    description: "Redditch is a beautiful green town.It is a family friendly place that has a unique charm",
    country: "UK"
   },
   {
    id: 7,
    image: "../images/Brecon-1.jpg",
    title: "Brecon",
    description: "Situated in Wales,archaically known as Brecknock is one of the many hill stations in the United Kingdom where you can make the best out of the beautiful outdoors",
    country: "UK"
   },
   {
    id: 8,
    image: "../images/Herefordshire-1.jpg",
    title: "Herefordshire",
    description: "Herefordshire is rich in culture and scenic landscapes in England’s West Midlands",
    country: "UK"
   }
  ,
];