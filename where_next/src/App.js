import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import Destination from './pages/Destination/Destination';
import Travel_Theme from './pages/TravelTheme/TravelTheme';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Hangout_Together from './pages/Hangout_Together/Hangout_Together';
import Navbar from './Components/Navbar/Navbar';

function App () {
  return (
   <Router>
    <Navbar/>
       <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/hangout" exact element={<Hangout_Together/>}/>
        <Route path="/travel" exact element={<Travel_Theme/>}/>
        <Route path="/destination" exact element={<Destination/>}/>
         <Route path="/service" exact element={<Services/>}/>    
      </Routes>
   </Router>
  );
}
export default App;
