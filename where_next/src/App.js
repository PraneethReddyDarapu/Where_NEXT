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

import Footer from "./Components/Footer/Footer";
import SelectedContinent from "./Components/Continents/SelectedContinent";
import SelectedDestination from "./Components/Continents/SelectedDestination";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/hangout" exact="true" element={<HangoutTogether />} />
        <Route path="/travel" exact="true" element={<TravelTheme />} />
        <Route path="/destination" exact="true" element={<Destination />} />
        <Route path="/blog" exact="true" element={<Blog />} />
        <Route path="/tripsearch" exact="true" element={<TripSearch />} />
        <Route path='destination/:name' element={<SelectedContinent />} />
        <Route path='destination/:name/:id' element={<SelectedDestination />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
