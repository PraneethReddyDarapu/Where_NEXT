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
   title: "Yellowstone National Park",
   description: "With dramatic peaks and pristine lakes, Yellowstone National Park is an outdoor enthusiast's paradise. Multicolored pools swirl around hot springs; verdant forests weave past expansive meadows; and volatile geysers launch streams of steaming water toward the sky. With so much unspoiled natural beauty, it's no wonder why everyone suspected John Colter was embellishing when he first described Yellowstone's geothermal curiosities in 1807.",
   country: "USA"
  },
  {
   id: 2,
   title: "Grand Canyon National Park",
   description: "\"Grand\" doesn't begin to do this canyon justice. Measuring approximately 277 river miles in length, up to 18 miles in width and a mile deep, this massive chasm in northern Arizona is truly a natural wonder. For 6 million years, the Grand Canyon has expanded with the help of the mighty Colorado River, and for centuries, people from all over the globe have traveled to gaze out over its red and orange grandeur. Managed by the National Park Service and officially designated as a UNESCO World Heritage Site, the Grand Canyon leaves its approximately 6 million visitors per year awestruck.",
   country: "USA"
  },
  {
   id: 3,
   title: "Yosemite National Park",
   description: "One of California's most formidable natural landscapes, Yosemite National Park features nearly 1,200 square miles of sheer awe: towering waterfalls, millennia-old sequoia trees, striking, daunting cliff faces and some of the most unique rock formations in the United States. But despite its enormous size, most of the tourist activity takes place within the 8-square-mile area of Yosemite Valley. Here you'll find the park's most famous landmarks –Half Dome, and El Capitan – as well as excellent hiking trails through the natural monuments. ",
   country: "USA"
  },
  {
   id: 4,
   title: "Jackson Hole",
   description: "Jackson Hole, Wyoming, offers adventurous pursuits year-round. In winter and early spring, ski resorts boast plenty of powder for skiing, snowshoeing and tubing. For a more relaxing outing, opt for a sleigh ride. In the warmer months, kayaking, whitewater rafting or hiking in Grand Teton National Park is a must.",
   country: "USA"
  },
  {
   id: 5,
   title: "Hike England from coast to coast",
   description: "If you’re up for a challenge, tackle the 305km Coast to Coast trail, which stretches from St Bees in Cumbria to Robin Hood’s Bay in North Yorkshire. The British fell walker and guidebook author Alfred Wainwright devised this walk in the early 1970s, and it has attracted keen hikers ever since. Over 19 days, you’ll cross from the coastal village of St Bees on England’s west coast though three English National Parks – the Lake District, Yorkshire Dales and the North York Moors – before finishing with a paddle in Robin Hood’s Bay, just south of Whitby.",
   country: "UK"
  },
  {
   id: 6,
   title: "Trek with pack ponies in Cumbria",
   description: "Already hiked Scafell Pike, cruised across Lake Ullswater and explored Grasmere village? Then add fell pony walking to your to-do list on your next trip to the Lake District. Originally, pack ponies carried slate and charcoal before the railways and canals were built, so they don’t think twice about lugging a couple of 20kg backpacks. In return, you’ll guide them by rope, walking side by side as you bond with them down tranquil country lanes, over meadows and past waterfalls.",
   country: "UK"
  },
  {
   id: 7,
   title: "Hire a narrowboat",
   description: "Swap your campervan or tent for a new challenge: navigating the UK’s canal network by narrowboat. Even novice skippers will (eventually) get the hang of steering under cast iron bridges, fathoming the lock system and manoeuvring through marinas, and once you do, you’ll have plenty of time to appreciate the willow trees, buzzards and swans around you. Canal folk are a friendly bunch so along the way you can expect to meet plenty of dog walkers, cyclists, kayakers and paddleboarders, before being rocked to sleep like a baby in a cradle.",
   country: "UK"
  },
  {
   id: 8,
   title: "Hike the Lake District",
   description: "Formed by Ice Age glaciers, the Lake District’s valleys have been admired by painters and writers for centuries, inspiring JMW Turner, Samuel Coleridge and Beatrix Potter. The lakes, mountains and farmland that sprawl across the UNESCO World Heritage Site are beautiful in paintings but even more scenic from the top of a peak. Staying at The George in Keswick on the northern shore of Derwentwater, you’ll tackle Striding Edge and end on a high – literally – by climbing England’s highest mountain, Scafell Pike.",
   country: "UK"
  },
  {
   id: 9,
   title: "Explore Burgundy by boat",
   description: "Starting in Dijon, you’ll spend a relaxing week cruising the region’s picturesque rivers and canals. Each day you'll have&nbsp;the option to go ashore and visit small villages, world class wineries and bike through vineyards and forests. And in the early evening the chance to relax on deck with a glass of wine in hand, taking in the unmistakable atmosphere of this unforgettable part of France.",
   country: "France"
  },
  {
   id: 10,
   title: "Discover France’s wild side",
   description: "Visits some of France's very best areas for birds and wildlife as the autumn leaves turn on this extraordinary journey through the Camargue and High Pyrenees with Wildlife Worldwide.First, the famous Camargue, with its pink flamingos, white horses and black fighting bulls, as well as raptors always present in the skies. Then on to High Pyrenees, home to some of Europe's most awe-inspiring scenery and wildlife including vultures, lynxes, champs and even brown bears.",
   country: "France"
  },
  {
   id: 11,
   title: "Sail the Côte d’Azur",
   description: "Live the life of a champagne jetsetter on a sparkling wine budget as you tour the islands and coastal towns of the famous Cote d’Azur by yacht with Intrepid. Setting sail from the colourful port city of Marseille, you’ll head&nbsp;along the sparkling Cote d’Azur, calling into the glittering cities of St Tropez and Cannes and exploring the hidden coves of the Iles d’Hyeres Archipelago. This is a chance to relax and indulge in fresh seafood and delicious Provencal cuisine, revel in extraordinary culture and spend plenty of time swimming in the warm Mediterranean sea.",
   country: "France"
  },
  {
   id: 12,
   title: "Climb the mighty Mont Blanc",
   description: "If you’re an experienced trekker, winter walker or beginner mountaineer, this climbing adventure with World Expeditions is designed to get you to the top of this mighty peak. Acclimatisation and basic technical mountaineering training will be the main focus of the first three days, teaching you the basics of travel on snow and ice and helping to prepare you for the tough climb ahead. Then, the climb itself, a demanding and exhausting exercise, but one where the rewards are out of this world.",
   country: "France"
  },
  {
   id: 13,
   title: "Ski an Olympic Trail",
   description: "Whistler served as the official mountain resort of the 2010 Olympic Winter Games, and the slopes are still there to play on. Whistler Blackcomb is one of North America’s best ski resorts. With nearly 200 marked trails and the highest vertical drop (5,278 feet) of any ski field on the continent, there are trails for anyone from beginner to expert. Aside from skiing, Whistler is also a great place to go zip-lining, hiking, and kayaking. Whistler is just a two-hour drive from the beautiful city of Vancouver and is a great addition to any trip there.",
   country: "Canada"
  },
  {
   id: 14,
   title: "Kayak with Killer Whales",
   description: "Each year over 200 orcas come to the North of Vancouver Island, BC and it is possible to go kayaking next to these amazing creatures. Whale watching in Vancouver is definitely a highlight of a trip to Canada. Telegraph Cove is world-renowned as one of the best places in the world to go kayaking with orcas and there are several tour operators in the area to take you on this epic tour. During a kayaking trip, you can enjoy the beautiful scenery of Vancouver Island. You can also spot other local wildlife, including humpback whales, black bears, sea lions, sea otters, porpoises, and bald eagles.",
   country: "Canada"
  },
  {
   id: 15,
   title: "Surf in Tofino",
   description: "Surfing isn’t usually the first thing that comes to mind when you think of the great white north. But in fact, Tofino, British Columbia is a premier all-year surfing destination. You just need to wear a wetsuit to go surfing as the water is between 5° C and 7° C. Aside from surfing, Tofino is a gorgeous area to explore with rainforest hiking trails, wildlife, and an endless coastline to explore.",
   country: "Canada"
  },
  {
   id: 16,
   title: "Drive the Icefields Parkway",
   description: "The best Alberta road trip is from Banff to Jasper (or vice versa) through the Icefields Parkway. In fact, National Geographic named this one of the best road trips in the world! If this is your first time visiting Canada, prepare to be amazed! You will&nbsp;pass through ancient glaciers, cascading waterfalls, and emerald lakes surrounded by forests.&nbsp;The drive has many points of interests along the way including Lake Louise, Athabasca Falls, and the Columbia Icefield.",
   country: "Canada"
  },
  {
   id: 17,
   title: "Manali",
   description: "While sorting out the best adventure place in India, doubtlessly quite a good number of places are likely to strike yet nothing really matches the large collection of adventure sports in Manali. This romantic abode is a gorgeous mountainous station that proposes to travellers a wide variety of adventure sports. Even if you look into adventure tourism in India in detail, you’ll see the good number of fun activities that this hill station possesses. In fact, visitors often plan a spontaneous trip to this place only with the idea of indulging in such fun activities. Whether you’re up for land-based sports or air-based activities, this snowy paradise has it all covered for you.",
   country: "India"
  },
  {
   id: 18,
   title: "Aamby valley",
   description: "Situated in Maharasthra, Aamby Valley is this exotic palace with a remarkable collection of experiences and attractions. Whether you travel to this adventure destination for a golf match or a wild safari, you’ll promisingly have it all there. At Aamby Valley, one can engage in distinctive adventure sports during their getaway to the township. With a sum of three massive artificial lakes in the neighbourhood and rich green jungles around, this place hosts exciting activities every now and then. Ranging from hiking to rappelling, you wouldn’t believe this place until you set foot in it.",
   country: "India"
  },
  {
   id: 19,
   title: "Andaman & Nicobar Islands",
   description: "Talking about the entertaining gems of this island, if you’re someone who’s into water sports plus you’re a sea admirer, then this adventure destination is definitely for you. For, this lush paradise, along with having created a prestigious space in the volume of adventure tourism in India, is also one of the best adventure places in India to rediscover yourself. Straight from scuba diving to snorkelling, Andaman and Nicobar island is a true blue package of truckloads of fun, thrill, and excitement.If you are a sea lover and love water sports, this vibrant tropical paradise is a hub of aqua adventures.",
   country: "India"
  },
  {
   id: 20,
   title: "Goa",
   description: "Is it even any longer surprising to conclude that Goa comes under one of the best places in India for hosting top adventure sports? Visit any beach in Go and you’ll be amazed to see some or the other adventure activities showing up. Undoubtedly with its well-built reputation as one of the most tourist-friendly destinations in India, exhibiting great climate, great food, gorgeous beaches, dramatic tourist sports and amazing party places, the beach capital is also flocked for getting the taste of adventure tourism in India. Tickle the adventure travel enthusiast in you and carry yourself to this state of absolute liveliness for an experience of a lifetime.",
   country: "India"
  }
 ];
 