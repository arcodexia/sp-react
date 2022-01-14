import React from "react";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Banner from "../home-banner/banner";
import Homeproducts from "../home-products-wrapper/home-products";
import Designtemplate from "../design-template/design-template";
import LatestBlogPost from "../latest-blog-posts/latest-blog-posts";
import ContactInfo from "../contact-info/contact-info";
import Footer from "../footer/footer";
import "./home.scss";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Homeproducts />
      <Designtemplate />
      <LatestBlogPost />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default Home;
