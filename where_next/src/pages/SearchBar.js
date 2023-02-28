import React, { useState } from "react";

export default function SearchBar() {
  const itemList = [
    { name: "Belgium", continent: "Europe" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXL4Cwz4pstohIifRemxDOEDGP3dKwYKIFlav8sWXl&s"},
    { name: "India", continent: "Asia" ,image:"https://th.bing.com/th?id=OIP.Wla0mKuIUK6V8YnPSfoKiQHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"},
    { name: "Bolivia", continent: "South America" , image:"https://media.istockphoto.com/id/465844068/photo/between-the-earth-and-the-heaven.jpg?b=1&s=170667a&w=0&k=20&c=yhvvMxF8fV5EuJ2vaAW2HNBNTMSBv46C5WOZRFr1O84="},
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent : "Asia" },
  ];

  const [filteredList, setFilteredList] = new useState(itemList);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...itemList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return (item.name.toLowerCase().indexOf(query.toLowerCase()) !==-1);
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
          <th><h2 style={{margin:"40px"}}>Destination </h2></th>
        </tr>
        <tr>
          <th><h4  style={{margin:"40px"}}>Image </h4></th>
          <th><h4  style={{margin:"20px"}}>Country </h4></th>
          <th><h4  style={{margin:"20px"}}>Continent </h4></th>
        </tr>
          {filteredList.map((item, index) => (
            <tr key={index}>
            <td style={{height:"10px",width:"10px"}}><img src={item.image} alt=""/></td> 
            <td><a href={item.name}>{item.name}</a></td>
            <td >{item.continent}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}