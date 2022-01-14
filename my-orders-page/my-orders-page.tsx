import React from "react";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import MyOrders from "../my-orders/my-orders";
import "./my-orders-page.scss";

function MyOrdersPage() {
  return (
    <div>
      <Header />
      <Navbar />
      <MyOrders />
      <Footer />
    </div>
  );
}

export default MyOrdersPage;
