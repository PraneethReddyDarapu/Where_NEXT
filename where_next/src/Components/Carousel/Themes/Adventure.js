import React from 'react'
import SimpleSliderInternal from "../SimpleSlider/SimpleSlider_Internal"
const Adventure = () => {
  return (<div>
    <div className="image">
      <div className="justimage"><img src="../images/CoveAdventure.jpeg" /></div>
      <div className="centered">Adventure
    <div><p><h4>Get an adrenaline rush</h4></p></div>
    </div>
    </div>
          <br/>
          <div className="Heading"><h2 style={{textAlign: "center"}}>Popular Mountain Destinations</h2></div> 
        <div className="container">
          <SimpleSliderInternal data={data} />
        </div>
        </div>
        )
}
export default Adventure;

const data = [
  {
    id: 1,
    image: "../images/TravelTheme1.jpg",
    title:"Mountains",
    description: "Description",
    country:"USA"
  },
  {
    id: 2,
    image: "../images/TravelTheme2.jpg",
    title:"Hill Stations",
    description:"Description",
  },
  {
    id: 3,
    image: "../images/TravelTheme3.jpg",
    title:"Deserts",
    description:"Description",
    country:"USA"
  },
  {
    id: 4,
    image: "../images/TravelTheme4.jpg",
    title:"Adventure",
    description:"Description"
  },

  {
    id: 5,
    image: "../images/TravelTheme5.jpg",
    title:"Heritage",
    description:"Description"
  },
  {
    id: 6,
    image: "../images/TravelTheme6.jpg",
    title:"Beaches",
    description:"Description"
  },
];