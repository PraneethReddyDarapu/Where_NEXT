import React from 'react'
import SimpleSlider  from "../../Components/Carousel/SimpleSlider"
const Travel_Theme = () => {
  return (
    <div className="container">
      <SimpleSlider data={data} />
    </div>)
}
export default Travel_Theme;

export const data = [
  {
    id: 1,
    image: "../images/wildlife-1.jpg",
    title:"Nature and Wildlife",
    description: "Into the best view of wilderness"
  },
  {
    id: 2,
    image: "../images/TravelTheme2.jpg",
    title:"Hill Stations",
    description:"High-altitude towns for recreation"
  },
  {
    id: 3,
    image: "../images/TravelTheme3.jpg",
    title:"Deserts",
    description:"Lands of the lost borders"
  },
  {
    id: 4,
    image: "../images/TravelTheme4.jpg",
    title:"Adventure",
    description:"Get an adrenaline rush"
  },

  {
    id: 5,
    image: "../images/TravelTheme5.jpg",
    title:"Heritage",
    description:"Ancient history comes alive here"
  },
  {
    id: 6,
    image: "../images/TravelTheme6.jpg",
    title:"Beaches",
    description:"High tides & good vibes"
  },
];