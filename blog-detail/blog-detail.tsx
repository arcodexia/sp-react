import React from "react";
import "./blog-detail.scss";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import BlogDetailWrapper from "../blog-detail-wrapper/blog-detail-wrapper";

function BlogDetail(props: any) {
  return (
    <div>
      <Header />
      <Navbar />
      <BlogDetailWrapper blogRecord={props.location.state.blogData} />
      <Footer />
    </div>
  );
}

export default BlogDetail;
