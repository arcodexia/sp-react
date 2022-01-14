import React, { useEffect, useState } from "react";
import "./latest-blog-posts.scss";
import BlogPost from "../blog-post/blog-post";
import { Link } from "react-router-dom";
import fire from "../../fire";
import Loader from "react-loader-spinner";

function LatestBlogPost() {
  const [allBlogs, setAllBlogs] = useState<Array<any>>([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
    fire
      .database()
      .ref("blogs")
      .once("value", (snapshot) => {
        var blogs = snapshot.val();
        var allBlogsData = [];
        for (var key in blogs)
          if (!(blogs[key].status && blogs[key].status === "Inactive")) {
            var timeStamp = parseInt(blogs[key].timeStamp);
            if (timeStamp.toString().length > 2) {
              blogs[key].timeStamp = parseInt(blogs[key].timeStamp);
              debugger;
              var date = new Date(blogs[key].timeStamp);
              blogs[key].date =
                date.getDate() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getFullYear();
            }
            allBlogsData.push(blogs[key]);
          }

        setAllBlogs(allBlogsData);
        setShowLoader(false);
      });
  }, []);

  return (
    <div className="row postMainCont">
      {showLoader && (
        <div className="centered">
          <Loader type="TailSpin" color="#ff6a02" height={100} width={100} />
        </div>
      )}
      <div className="col-sm-11 px-0">
        <div className="headingCont">
          <h2 className="secondary my-0">Check Out Our Latest Blog Posts</h2>
          <Link to="/blogs">
            <button className="btn btn-outline-primary">View All</button>
          </Link>
        </div>
        <div className="row">
          {allBlogs
            .slice(Math.max(allBlogs.length - 4, 0))
            .map((blogData, index) => (
              <div className="col-sm-3">
                <Link to={{pathname: "/blog-detail", state: {blogData}}}>
                  <BlogPost key={index} blog={blogData} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default LatestBlogPost;
