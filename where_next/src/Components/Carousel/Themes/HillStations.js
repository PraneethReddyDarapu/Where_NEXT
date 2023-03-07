import React from 'react'
import SimpleSliderInternal from "../SimpleSlider/SimpleSlider_Internal"
const HillStations = () => {
  return (
    <div>
<div className="image">
  <div className="justimage"><img src="../images/CoveHillStation.jpg" /></div>
  <div className="centered">Hill Stations
<br/><h4>High-altitude towns for recreation</h4>
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
   },
        {
            id: 9,
            image: "../images/Grand Couronne.jpeg",
            title: "Grand Couronne",
            description: "It is one of the most underrated France hill stations,if you’re looking for an escape and an experience,this place has got you covered.",
            country: "France"
        },
        {
            id: 10,
            image: "../images/Rhône-Alpes.jpeg",
            title: "Rhône-Alpes",
            description: "The Rhône-Alpes is a stunning location and one of the best hill stations in France.",
            country: "France"
        },
        {
            id: 11,
            image: "../images/Meudon.jpeg",
            title: "Meudon",
            description: "It is a rural hamlet in the southwest of Paris,France.Meudon is an excellent area to explore by walking.",
            country: "France"
        },
        {
            id: 12,
            image: "../images/Hulluch.jpeg",
            title: "Hulluch",
            description: "It is a Pas-de-Calais based commune in the Hauts-de-France region of France.The place is filled with a lot of things to do!",
            country: "France"
        },
        {
            id: 13,
            image: "../images/Fernie.jpeg",
            title: "Fernie,British Columbia",
            description: "The historic yet quaint small town of Fernie sits comfortable in the arms of the Canadian Rockies and is the ideal place to escape if you want to get away from the usual humdrum of life.",
            country: "Canada"
        },
        {
            id: 14,
            image: "../images/Banff.jpeg",
            title: "Banff,Alberta",
            description: "One of the highest hill stations in Canada,Banff is an ideal place for a family weekend gateway.It is full of scenic mountain trails that lead you to stunning waterfalls.",
            country: "Canada"
        },
        {
            id: 15,
            image: "../images/Laurentiana.jpeg",
            title: "The Laurentiana,Quebec",
            description: "The Laurentians alpine region of southern Quebec is a popular Canada hill station for a winter getaway.The region is full of snow-capped mountain peaks.",
            country: "Canada"
        },
        {
            id: 16,
            image: "../images/Mont Tremblant.jpeg",
            title: "Mont Tremblant,Quebec",
            description: "The picturesque village of Mont Tremblant is one of the most inviting hill stations in Canada.The vibrantly colored buildings against a snowy backdrop give this place a dreamy feel.",
            country: "Canada"
        },
        {
            id: 17,
            image: "../images/Nainital.jpeg",
            title: "Nainital,Uttarakhand",
            description: "Situated in the Kumaon region of Uttarakhand and home to the spectacular Lake Naini, the famous hill station of India, Nainital, is often referred as the ‘Lake District’ of India.",
            country: "India"
        },
        {
            id: 18,
            image: "../images/Munnar.jpeg",
            title: "Munnar,Kerala",
            description: "With its well-preserved natural beauty and sprawling tea gardens, Munnar invites honeymoon couples to spend time amidst tranquil and scenic settings. ",
            country: "India"
        },
        {
            id: 19,
            image: "../images/Ranikhet.jpeg",
            title: "Ranikhet,Uttarakhand",
            description: "Built by the British, Ranikhet is a top hill station of India which you should visit to admire the beauty of topography, flora and fauna of the Himalayas.",
            country: "India"
        },
        {
            id: 20,
            image: "../images/Dharmashala.jpeg",
            title: "Dharamshala,Himachal Pradesh",
            description: "Along with being one of the best mountain destinations in India for its tranquillity, solitude and center of Tibetan Buddhist culture, Dharamshala in Himachal Pradesh is home to the holy Dalai Lama. ",
            country: "India"
        }
        
];