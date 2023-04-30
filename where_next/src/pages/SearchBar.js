import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const itemList = [
    { name: "Bolivia", continent: "South America" , image:"https://media.istockphoto.com/id/465844068/photo/between-the-earth-and-the-heaven.jpg?b=1&s=170667a&w=0&k=20&c=yhvvMxF8fV5EuJ2vaAW2HNBNTMSBv46C5WOZRFr1O84="},
    { name: "China", continent: "Asia" ,image:"https://th.bing.com/th?id=OIP.JJ2Dzqq5LvDhEd0qVQ98owHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "India", continent: "Asia" ,image:"https://th.bing.com/th?id=OIP.Wla0mKuIUK6V8YnPSfoKiQHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "Ghana", continent: "Africa", image:"https://th.bing.com/th?id=OIP.Q0PT2iRITDt01DZyYfGD3wHaGC&w=276&h=225&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" },
    { name: "Japan", continent: "Asia", image:"https://th.bing.com/th?id=OIP.RzwHiEP7ArVbxX6x7cRwWAHaE2&w=308&h=202&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" },
    { name: "Canada", continent: "North America" , image:"https://th.bing.com/th?id=OIP.V1uzt9xXzpsHizZJEY5WVQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "Belgium", continent: "Europe" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXL4Cwz4pstohIifRemxDOEDGP3dKwYKIFlav8sWXl&s"},
    { name: "Marshal Island", continent: "Australia" ,image:"https://th.bing.com/th?id=OIP.Fi35T6qZlvhjigXpGh7NLAHaL9&w=196&h=317&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "Italy", continent: "Europe" ,image:"https://th.bing.com/th?id=OIP.sVvoNJ2nAC188Xa__ofvJQHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "South Africa", continent: "Africa" ,image:"https://th.bing.com/th?id=OIP.GIq5_M59D1-QGif6yU4WYAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "Paraguay", continent: "South America" ,image:"https://th.bing.com/th?id=OIP.Jy7Fxk3OK7iZX95ROx_1xQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "Usa", continent: "North America" ,image:"https://th.bing.com/th?id=OIP.fG8AjywxcrDPCWWreiClwQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "France", continent: "Europe" ,image:"https://th.bing.com/th?id=OIP.l5BqdcWFNyYHYATCs0bwNgHaLK&w=203&h=307&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "Botswana", continent: "Africa" ,image:"https://th.bing.com/th?id=OIP.G8pOb5JrnNIzTK4g7uhZkwHaE4&w=307&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "Spain", continent: "Europe" ,image:"https://th.bing.com/th?id=OIP.8lRbUFsQEebRHx_3OnVW4gHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "Senegal", continent: "Africa" ,image:"https://th.bing.com/th?id=OIP.OJW_zhoUHCZ04W41ebgbwQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "Brazil", continent: "South America" ,image:"https://th.bing.com/th?id=OIP.JohtUYiMxa4tJY3YI40HqQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "Denmark", continent: "Europe" ,image:""},
    { name: "Mexico", continent: "South America" ,image:"https://th.bing.com/th?id=OIP.M7SBNfC74jo92r20wU3pTwHaFR&w=296&h=210&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" },
    { name: "Portugal", continent: "Europe",image:"https://th.bing.com/th?id=OIP.qdacCwsoyD1bvvSEuW6QYwHaE6&w=307&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" },
  ];

  const [filteredList, setFilteredList] = new useState(itemList);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...itemList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return (item.continent.toLowerCase().indexOf(query.toLowerCase()) !== -1); 
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

  return (
    <div className="App">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" placeholder="Please Enter your Destination" style={{width:"50%"}} onChange={filterBySearch} />
      </div>
      <div id="App">
        <table  style={{margin:"0px auto"}}>
        <tr>
        { /*  <th><h2 style={{margin:"10%"}}>Destination </h2></th> */ }
        </tr>
        <tr>
          <th><h4  style={{margin:"40px"}}>Image </h4></th>
          <th><h4  style={{margin:"20px"}}>Country </h4></th>
          <th><h4  style={{margin:"20px"}}>Continent </h4></th>
        </tr>
          {filteredList.map((item, index) => (
            <tr key={index}>
            <td><img src={item.image} style={{height:"auto"}} alt=""/></td> 
            <td style={{color:"blue"}}>{item.name}</td>
            <td >{item.contient}
              <Link
                to={`/destination/${item.continent}`}
                className="btn btn-primary btn-details"
              >
                {item.continent}{" "}
              </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}