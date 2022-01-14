import React from "react";
import "./about-us.scss";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import ContactInfo from "../contact-info/contact-info";
import Footer from "../footer/footer";
import AboutUsWrapper from "../aboutus-wrapper/aboutus-wrapper";
import Designtemplate from "../design-template/design-template";

function AboutUs() {
    return (
      <div>
        <Header />
        <Navbar />
        <AboutUsWrapper />
        <Designtemplate />
        <ContactInfo />
        <Footer />
      </div>
    );
  }
  
  export default AboutUs;