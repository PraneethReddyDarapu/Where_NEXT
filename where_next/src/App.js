import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

import Destination from "./pages/Destination/Destination";
import TravelTheme from "./pages/TravelTheme/TravelTheme";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import HangoutTogether from "./pages/Hangout_Together/Hangout_Together";
import TripSearch from "./pages/TripSearch/TripSearch";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Logout from "./pages/Logout/Logout";
import Chat from "./pages/Chat/Chat";

import Mountains from "./Components/Carousel/Themes/Mountains";
import HillStations from "./Components/Carousel/Themes/HillStations";
import Deserts from "./Components/Carousel/Themes/Desert";
import Adventure from "./Components/Carousel/Themes/Adventure";
import Heritage from "./Components/Carousel/Themes/Heritage";
import Beaches from "./Components/Carousel/Themes/Beaches";
import SearchBar from "./pages/SearchBar";
import BG from "./pages/Belgium";
import India from "./pages/India";
import AboutUs from "./Components/AboutUs/aboutus";
import ContactUs from "./Components/ContactUs/contactus";
import Footer from "./Components/Footer/Footer";
import SelectedContinent from "./Components/Continents/SelectedContinent";
import SelectedDestination from "./Components/Continents/SelectedDestination";
import TravelThemeItem from "./Components/Carousel/Themes/TravelThemeItem";
import Profile from "./pages/Profile/Profile.js";

function App() {
  axios.interceptors.request.use(function (successfulReq) {
    const token = localStorage.getItem("token");
    if (token) {
      successfulReq.headers.Authorization = `Bearer ${token}`;
    }
    return successfulReq;
  });

  axios.interceptors.response.use(
    function (successfulRes) {
      return successfulRes;
    },
    function (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Destination />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/logout" exact element={<Logout />} />
        <Route path="/hangout" exact element={<HangoutTogether />} />
        <Route path="/chat" exact element={<Chat />} />
        <Route path="/travel" exact element={<TravelTheme />} />
        <Route path="/profile" exact element={<Profile />} />
        {/* <Route path="/travel/1" exact element={<Mountains />} />
        <Route path="/travel/2" exact element={<HillStations />} />
        <Route path="/travel/3" exact element={<Deserts />} />
        <Route path="/travel/4" exact element={<Adventure />} />
        <Route path="/travel/5" exact element={<Heritage />} />
        <Route path="/travel/6" exact element={<Beaches />} /> */}
        <Route path="/travel/:id" exact element={<TravelThemeItem />} />
        <Route path="/destination" exact element={<Destination />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/tripsearch" exact element={<TripSearch />} />
        <Route path="destination/:name" element={<SelectedContinent />} />
        <Route path="/search" exact element={<SearchBar />} />
        <Route path="/Belgium" exact element={<BG />} />
        <Route path="/India" exact element={<India />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/contactus" exact element={<ContactUs />} />
        <Route path="destination/:name/:id" element={<SelectedDestination />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
