import React from "react";
import "./blog-post.scss";

// interface blogPostExp {
//   blogImgUrl: string;
//   blogDesp: string;
//   blogDate: string;
// }
// type Props = {
//   blogExp: blogPostExp;
// };
function BlogPost(props: any) {
  return (
    <div className="postCont">
      <img className="postImg" src={props.blog.imageURL} />
      <p className="font-13 secondary my-2">{props.blog.blogDomain + " | " + props.blog.date}</p>
      <p className="font-15 primary mb-2">{props.blog.blogTitle}</p>
      <img src="imgs/forwardArrow.svg" height="13px" />
    </div>
  );
}

export default BlogPost;