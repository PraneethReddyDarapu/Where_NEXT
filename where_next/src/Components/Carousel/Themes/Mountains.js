import React from 'react';
import "./Theme.css";
import SimpleSliderInternal from "../SimpleSlider/SimpleSlider_Internal"

const Mountains = () => {
  return (
<div>
<div className="image">
  <div className="justimage"><img src="../images/CoveNature.jpg" /></div>
  <div className="centered">Nature and Wildlife
<div><p><h4>Into the best view of wilderness</h4></p></div>
</div>
</div>
      <br/>
      <div className="Heading"><h2 style={{textAlign: "center"}}>Popular Nature & Wildlife Destinations</h2></div> 
    <div className="container">
      <SimpleSliderInternal data={data} />
    </div>
    </div>
    )
}
export default Mountains;

const data=[
      {
          id: 1,
          image: "../images/San Juan Islands.png",
          title: "San Juan Islands",
          description: "Looking for whales? Known as one of the top destinations in the world for whale watching, the San Juan Islands are perfect for observing these majestic animals. ",
          country: "USA"
      },
      {
          id: 2,
          image: "../images/Katmai.jpeg",
          title: "Katmai National Park",
          description: "Katmai National Park is known for two attractions: brown bears and volcanos. Located in Alaska, Katmai is the place to watch brown bears catch salmon flying out of streams. ",
          country: "USA"
      },
      {
          id: 3,
          image: "../images/US Virgin Islands.jpeg",
          title: "US Virgin Islands",
          description: "Interested in seeing wildlife underwater? Fly over to the US Virgin Islands, where you can discover more than 300 species of fish and 50 species of coral.   ",
          country: "USA"
      },
      {
          id: 4,
          image: "../images/Theodore.jpeg",
          title: "Theodore Roosevelt National Park",
          description: "Named after the “conservation president,” Theodore Roosevelt National Park is home to wild horses, prairie dogs, coyotes, and bison. You can also expect to see longhorn steer. ",
          country: "USA"
      },
      {
          id: 5,
          image: "../images/BassRock.jpeg",
          title: "Northern gannets at Bass Rock",
          description: "At first sight, the steep, black sides of Bass Rock, in the Firth of Forth, Scotland, might seem covered in snow; look closer, and you’ll make out countless northern gannets. ",
          country: "UK"
      },
      {
          id: 6,
          image: "../images/Ospreys.jpeg",
          title: "Ospreys at Rutland Water Nature Reserve",
          description: "Ospreys became extinct in England in the 19th century due to intense persecution and habitat loss. ",
          country: "UK"
      },
      {
          id: 7,
          image: "../images/NewQuay.jpeg",
          title: "Bottlenose dolphins in New Quay",
          description: "Cardigan Bay is home to Britain’s largest resident population of dolphins, and in the Welsh town of New Quay, home to the Cardigan Bay Marine Wildlife Centre, you’re almost guaranteed a sighting. ",
          country: "UK"
      },
      {
          id: 8,
          image: "../images/Mull.jpeg",
          title: "Eagles in the Isle of Mull",
          description: "In the past decade or so, Mull has become a place of wildlife pilgrimage. It’s home to some fantastic birds of prey, with the eagles arguably the most impressive. ",
          country: "UK"
      },
      {
          id: 9,
          image: "../images/Parc.jpeg",
          title: "Parc Naturel Regional Perigord Limousin",
          description: "Spanning both the Haute Vienne and Dordogne departments of France, the Parc Naturel Regional Perigord Limousin is known for having a multitude of different species of flora and fauna. ",
          country: "France"
      },
      {
          id: 10,
          image: "../images/Volcanoes.jpeg",
          title: "Auvergne Volcanoes Regional Nature Park",
          description: "Lying across the departments of Puy-de-Dôme and Cantal, this is mainland France’s largest nature park, covering 395,000 hectares. ",
          country: "France"
      },
      {
          id: 11,
          image: "../images/Ardeche.jpeg",
          title: "Ardèche Mountains Regional Nature Park",
          description: "You can experience six different landscapes here, the Boutières, the Vernoux plateau, the Sucs region, the High Cévennes, the Piémont cévenol, and the southern Cévennes, each just as captivating as the others. ",
          country: "France"
      },
      {
          id: 12,
          image: "../images/Ballons.jpeg",
          title: "Ballons des Vosges",
          description: "The Ballons des Vosges Regional Nature Park covers the three former regions of Alsace, Franche-Comté and Lorraine, offering 14 peaks to hike, bike, or soak up views from. ",
          country: "France"
      },
      {
          id: 13,
          image: "../images/RainForest.jpeg",
          title: "The Great Bear Rainforest",
          description: "Glacial fjords, ancient cedars and the elusive spirit bear await in British Columbia’s mighty Great Bear Rainforest. This sprawling region is located on the Pacific Coast of British Columbia and makes up the world’s largest coastal temperate rainforest.  ",
          country: "Canada"
      },
      {
          id: 14,
          image: "../images/Northwest.jpeg",
          title: "Northwest Passage",
          description: "The historical and iconic Northwest Passage that links the Atlantic and Pacific Oceans is dotted with islands and waterways that are home to all of the ‘Arctic Big Five’ – polar bear, walrus, musk ox, beluga whale and the elusive narwhal.  ",
          country: "Canada"
      },
      {
          id: 15,
          image: "../images/Churchill.jpeg",
          title: "Churchill",
          description: "Located in the far north of Manitoba on Hudson Bay, the remote town of Churchill is known as the polar bear capital of the world. These magnificent creatures are one of the largest species of bear . ",
          country: "Canada"
      },
      {
          id: 16,
          image: "../images/BanffN.jpeg",
          title: "Banff National Park",
          description: "Established in 1885, Banff in Alberta was Canada’s first national park and is now one of the country’s most popular destinations.",
          country: "Canada"
      },
      {
          id: 17,
          image: "../images/Nagarahole.jpeg",
          title: "Nagarahole National Park",
          description: "The lush forests and marshlands of southern India’s Nagarahole National Park, also known as Rajiv Gandhi National Park, form one of the country’s premier tiger destinations. ",
          country: "India"
      },
      {
          id: 18,
          image: "../images/Kaziranga.jpeg",
          title: "Kaziranga National Park",
          description: "On the floodplains of the Brahmaputra River, Kaziranga National Park began as a forest preserve in 1905 with the aim of bringing the greater one-horned rhinoceros back from the brink of extinction. ",
          country: "India"
      },
      {
          id: 19,
          image: "../images/Keoladeo.jpeg",
          title: "Keoladeo National Park",
          description: "Situated between the historic cities of Jaipur and Agra, Keoladeo National Park is an ornithologist’s dream, with hundreds of bird species in its compact size. ",
          country: "India"
      },
      {
          id: 20,
          image: "../images/Satpura.jpeg",
          title: "Satpura National Park",
          description: "Picturesque Satpura National Park, in the highlands of central India, is a photographer’s paradise. Grasslands and malachite green forests are riddled by ravines and slot canyons, concealing temples and waterfalls. ",
          country: "India"
      }
  ];