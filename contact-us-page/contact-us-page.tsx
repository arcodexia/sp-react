import React from "react";
import "./contact-us-page.scss";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import ContactInfo from "../contact-info/contact-info";
import Footer from "../footer/footer";

function ContactUsPage() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className ="contactusContainer">
        <ContactInfo />
        </div>
        <Footer />
      </div>
    );
  }
  
  export default ContactUsPage;