import React , {useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from "jquery";
import Card from 'react-bootstrap/Card';
import { BsSearch } from "react-icons/bs";



function Navbar () {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
    <Card>
     
  <nav className="navbar navbar-expand-lg navbar-mainbg">
 <NavLink className="navbar-brand navbar-logo" to="/" exact> 
       <div class="Font"> <b> Where Next</b> </div>
      </NavLink>
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-5">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                 <i 
                className="far fa-address-book">
                  </i> Destination
                
              </NavLink> 
            </li>
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/travel" exact>
                 <i 
                className="far fa-copy">
    </i> 
                Travel Theme
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" exact>
                <i 
                className="far fa-clone">
                </i>Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hangout" exact>
                <i 
                className="far fa-chart-bar">
                </i>Hangout Together
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tripsearch" exact>
                <i 
                className="far fa-chart-bar">
                </i>Trip Search
              </NavLink>
            </li>
            <ul><li>
              <NavLink className="nav-link" to="/search" exact style={{color:'green'}} > 
              <BsSearch />
              </NavLink>
              </li></ul>
        </ul>
      </div>
      <div className="search mr-5" style={{color:"white"}}> 
      <NavLink className="nav-link" to="/search" exact  >Search
      <BsSearch style={{marginleft:"20px"}} />
      </NavLink>
             </div> 
  </nav>
  </Card>
  )
}
export default Navbar;