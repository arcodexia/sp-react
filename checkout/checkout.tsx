import React from "react";
import "./checkout.scss";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import CheckoutItemsWrapper from "../checkout-items-wrapper/checkout-items-wrapper";
import Footer from "../footer/footer";

function CheckOut() {
    return (
      <div>
        <Header />
        <Navbar />
        <CheckoutItemsWrapper />
        <Footer />
      </div>
    );
  }
  
  export default CheckOut;