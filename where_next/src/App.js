import React from 'react';
import './App.css';  
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Footer from './Components/Footer/Footer';

import Destination from './pages/Destination/Destination';
import TravelTheme from './pages/TravelTheme/TravelTheme';
import Blog from './pages/Blog/Blog';
import TripSearch from './pages/TripSearch/TripSearch';
import HangoutTogether from './pages/Hangout_Together/Hangout_Together';
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './pages/SearchBar';
import BG from './pages/Belgium';
import India from './pages/India';
import Contact from './Components/Contact/Contact';


function App () {
  return (
    
   <Router>
    <Navbar/>
       <Routes>
       <Route path="/" exact element={<Destination/>}/>
        <Route path="/hangout" exact element={<HangoutTogether/>}/>
        <Route path="/travel" exact element={<TravelTheme/>}/>
        <Route path="/destination" exact element={<Destination/>}/>
        <Route path="/blog" exact element={<Blog/>}/> 
        <Route path="/tripsearch" exact element={<TripSearch/>}/>  
        <Route path="/search" exact element={<SearchBar/>}/> 
        <Route path="/Belgium" exact element={<BG/>}/>  
        <Route path="/India" exact element={<India/>}/>  
        <Route path="/contact" exact element={<Contact/>}/>  
      </Routes>
      <Footer/>
   </Router>
   
  );
}
export default App;