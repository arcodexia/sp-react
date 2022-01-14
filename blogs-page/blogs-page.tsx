import React from "react";
import "./blogs-page.scss";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import ContactInfo from "../contact-info/contact-info";
import Footer from "../footer/footer";
import BlogsWrapper from "../blog-wrapper/blog-wrapper";
import Designtemplate from "../design-template/design-template";

function BlogsPage() {
    return (
      <div>
        <Header />
        <Navbar />
        <BlogsWrapper />
        <Designtemplate />
        <ContactInfo />
        <Footer />
      </div>
    );
  }
  
  export default BlogsPage;