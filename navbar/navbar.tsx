import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "../login/login";
import SignUp from "../sign-up/sign-up";
import ForgotPassword from "../forgot-password/forgot-password";
import UserProfile from "../user-profile/user-profile";
import Cookies from "js-cookie";
import Loader from "react-loader-spinner";
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (Cookies.get("uid")) {
      setIsLoggedIn(true);
    }

    if(localStorage.getItem("cart")){
      var cart =  JSON.parse(localStorage.getItem("cart")!);
      setCartCount(cart.length ? cart.length : 0);
    }
    else{
      setCartCount(0);
    }

  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top">
        <NavLink className="navbar-brand mr-3" exact={true} to="/">
          <img src="imgs/Applogo.svg" alt="logo" height="35px" />
        </NavLink>
        <button
          className="navbar-toggler px-0"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <i className="fas fa-bars primary"></i>
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav main">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact={true}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/blogs"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about-us"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/contact-us"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <ul
          className="navbar-nav text-center ml-auto"
          style={{ alignItems: "center" }}
        >
          {/* <div className="navSearchBar">
            <span>
              <FontAwesomeIcon icon={["fas", "search"]} />
            </span>
            <input placeholder="Search" className="form-control" />
          </div> */}
          <li className="nav-item rightIcons">
            <div className="hrLine"></div>
            {/* <NavLink to="/shopping-cart">
                <img src="imgs/cart.svg"></img>
              </NavLink> */}
            <div className="dropdown">
              <div className="shopingCartIconCont" data-toggle="dropdown">
                <img src="imgs/cart.svg"></img>
                <div className="shoppingCount">{cartCount}</div>
              </div>
              {cartCount == 0 ? 
              <div className="dropdown-menu cartDropDown dropdown-menu-right shadow">
                <h3 className="mt-0">Shopping cart empty!</h3>
                <p>You have no items in your shopping cart.</p>
                <Link to="/products">
                  <button className="btn primaryBtn contiuneShopBtn">
                    Shop Now
                  </button>
                </Link>
              </div>
              :
              <div className="dropdown-menu cartDropDown dropdown-menu-right shadow">
                <h3 className="mt-0">Happy Shopping!</h3>
                <p>You have {cartCount} items in your shopping cart.</p>
                <Link to="/checkout">
                  <button className="btn primaryBtn contiuneShopBtn">
                    Checkout Now
                  </button>
                </Link>
              </div>
}
            </div>
          </li>
          <UserProfile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </ul>
      </nav>
      <Login setIsLoggedIn={setIsLoggedIn} />
      <SignUp />
      <ForgotPassword />
    </div>
  );
}

export default Navbar;
