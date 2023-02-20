import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Footer from './Components/Footer/Footer';

import Destination from './pages/Destination/Destination';
import TravelTheme from './pages/TravelTheme/TravelTheme';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import TripSearch from './pages/TripSearch/TripSearch';
import HangoutTogether from './pages/Hangout_Together/Hangout_Together';
import Navbar from './Components/Navbar/Navbar';


function App () {
  return (
   <Router>
    <Navbar/>
       <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/hangout" exact element={<HangoutTogether/>}/>
        <Route path="/travel" exact element={<TravelTheme/>}/>
        <Route path="/destination" exact element={<Destination/>}/>
        <Route path="/blog" exact element={<Blog/>}/> 
        <Route path="/tripsearch" exact element={<TripSearch/>}/> 
        
      </Routes>
      <Footer/>
   </Router>
  );
}
export default App;
