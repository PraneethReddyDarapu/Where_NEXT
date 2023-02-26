import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import Destination from './pages/Destination/Destination';
import Travel_Theme from "./pages/TravelTheme/TravelTheme";
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Hangout_Together from "./pages/Hangout_Together/Hangout_Together";
import Navbar from './Components/Navbar/Navbar';
import Mountains from "./Components/Carousel/Themes/Mountains";
import HillStations from "./Components/Carousel/Themes/HillStations";
import Deserts from "./Components/Carousel/Themes/Desert";
import Adventure from "./Components/Carousel/Themes/Adventure";
import Heritage from "./Components/Carousel/Themes/Heritage";
import Beaches from "./Components/Carousel/Themes/Beaches";


function App () {
  return (
   <Router>
    <Navbar/>
       <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/hangout" exact element={<Hangout_Together/>}/>
        <Route path="/travel" exact element={<Travel_Theme/>}/>
        <Route path="/travel/1" exact element={<Mountains/>}/>
        <Route path="/travel/2" exact element={<HillStations/>}/>
        <Route path="/travel/3" exact element={<Deserts/>}/>
        <Route path="/travel/4" exact element={<Adventure/>}/>
        <Route path="/travel/5" exact element={<Heritage/>}/>
        <Route path="/travel/6" exact element={<Beaches/>}/>
        <Route path="/destination" exact element={<Destination/>}/>
         <Route path="/service" exact element={<Services/>}/>    
      </Routes>
   </Router>
  );
}
export default App;
