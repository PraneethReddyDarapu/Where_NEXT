import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

import Destination from "./pages/Destination/Destination";
import TravelTheme from "./pages/TravelTheme/TravelTheme";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import HangoutTogether from './pages/Hangout_Together/Hangout_Together';
import TripSearch from './pages/TripSearch/TripSearch';

import Navbar from './Components/Navbar/Navbar';
import Mountains from "./Components/Carousel/Themes/Mountains";
import HillStations from "./Components/Carousel/Themes/HillStations";
import Deserts from "./Components/Carousel/Themes/Desert";
import Adventure from "./Components/Carousel/Themes/Adventure";
import Heritage from "./Components/Carousel/Themes/Heritage";
import Beaches from "./Components/Carousel/Themes/Beaches";

import Footer from "./Components/Footer/Footer";
import SelectedContinent from "./Components/Continents/SelectedContinent";
import SelectedDestination from "./Components/Continents/SelectedDestination";

function App() {
  return (
    
   <Router>
    <Navbar/>
       <Routes>
        <Route path="/" exact element={<Home/>}/>
         <Route path="/hangout" exact element={<HangoutTogether/>}/>
        <Route path="/travel" exact element={<TravelTheme/>}/>
        <Route path="/travel/1" exact element={<Mountains/>}/>
        <Route path="/travel/2" exact element={<HillStations/>}/>
        <Route path="/travel/3" exact element={<Deserts/>}/>
        <Route path="/travel/4" exact element={<Adventure/>}/>
        <Route path="/travel/5" exact element={<Heritage/>}/>
        <Route path="/travel/6" exact element={<Beaches/>}/>
        <Route path="/destination" exact element={<Destination/>}/>
        <Route path="/blog" exact element={<Blog/>}/> 
        <Route path="/tripsearch" exact element={<TripSearch/>}/> 
        <Route path='destination/:name' element={<SelectedContinent />} />
        <Route path='destination/:name/:id' element={<SelectedDestination />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
