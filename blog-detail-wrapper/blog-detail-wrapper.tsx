import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { blogPostTxt1, blogPostTxt2, blogPostTxt3 } from "../../static";
import "./blog-detail-wrapper.scss";

function BlogDetailWrapper(props: any) {
  return (
    <div className="blogDetailMainCont">
      <img className="blogPostImgCont" src={props.blogRecord.imageURL} />
      <div className="row justify-content-center">
        <div className="col-sm-11 px-0">
          <div className="authorInfoCont">
            <img className="authorImg" src="imgs/userImage.png" />
            <p>By <span className="pointer">Admin</span></p>
            <span className="circleIcon">
              <FontAwesomeIcon icon={["fas", "circle"]} />
            </span>
            <p>{props.blogRecord.blogDomain}</p>
            <span className="circleIcon">
              <FontAwesomeIcon icon={["fas", "circle"]} />
            </span>
            <p>{props.blogRecord.date}</p>
          </div>
          <h2>{props.blogRecord.blogTitle}</h2>
          <p className="postDespTxt">{props.blogRecord.blogDescription}</p>
          {/* <h4 className="mt-5">
            Brute similique an ius platonem mediocrem mea ei.
          </h4>
          <p className="postDespTxt">{blogPostTxt2+blogPostTxt3+blogPostTxt2}</p> */}
        </div>
      </div>
    </div>
  );
}

export default BlogDetailWrapper;
