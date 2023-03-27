import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import Card from "react-bootstrap/Card";
import { BsSearch } from "react-icons/bs";
import IsLoggedIn from "../../util/isLoggedIn";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    // $(".hori-selector").css({
    //   top: itemPosNewAnimTop.top + "px",
    //   left: itemPosNewAnimLeft.left + "px",
    //   height: activeWidthNewAnimHeight + "px",
    //   width: activeWidthNewAnimWidth + "px",
    // });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    setIsLoggedIn(IsLoggedIn());
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <Card>
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <a
          href="/"
          class="Font text-decoration-none text-white ms-3 h5 my-auto"
        >
          {" "}
          <b> Where Next</b>{" "}
        </a>
        <button
          className="navbar-toggler"
          onClick={function () {
            setTimeout(function () {
              animation();
            });
          }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-5">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item">
              <NavLink className="nav-link" to="/destination" exact>
                <i className="far fa-address-book"></i> Destination
              </NavLink>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/travel" exact>
                <i className="far fa-copy"></i>
                Travel Theme
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" exact>
                <i className="far fa-clone"></i>Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hangout" exact>
                <i className="far fa-chart-bar"></i>Hangout Together
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/tripsearch" exact>
                <i className="far fa-chart-bar"></i>Trip Search
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/search" exact>
                <BsSearch /> <i className="far fa-chart-bar"></i>Search
              </NavLink>
            </li>
            <ul>
              {!isLoggedIn && (
                <li>
                  <NavLink
                    className="nav-link"
                    to="/login"
                    exact
                    style={{ color: "green" }}
                  >
                    <i className="far fa-chart-bar"></i> Login
                  </NavLink>
                </li>
              )}
              {!isLoggedIn && (
                <li>
                  <NavLink
                    className="nav-link"
                    to="/signup"
                    exact
                    style={{ color: "green" }}
                  >
                    <i className="far fa-chart-bar"></i> Signup
                  </NavLink>
                </li>
              )}
              {/* profile and logout urls */}
              {isLoggedIn && (
                <li>
                  <NavLink
                    className="nav-link"
                    to="/profile"
                    exact
                    style={{ color: "green" }}
                  >
                    <i className="far fa-chart-bar"></i> Profile
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  <NavLink
                    className="nav-link"
                    to="/logout"
                    exact
                    style={{ color: "green" }}
                  >
                    <i className="far fa-chart-bar"></i> Logout
                  </NavLink>
                </li>
              )}
            </ul>
          </ul>
        </div>
      </nav>
    </Card>
  );
}
export default Navbar;
