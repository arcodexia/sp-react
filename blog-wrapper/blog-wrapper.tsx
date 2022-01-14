import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import fire from "../../fire";
import BlogPost from "../blog-post/blog-post";
import "./blog-wrapper.scss";

const PER_PAGE = 12;

type Props = {
  selected: number;
};
function BlogsWrapper() {
  const [currentPage, setCurrentPage] = useState(0);
  const [allBlogs, setAllBlogs] = useState<Array<any>>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Array<any>>([]);
  const [showLoader, setShowLoader] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput("");
    setShowLoader(true);
    fire
      .database()
      .ref("blogs")
      .once("value", (snapshot) => {
        var blogs = snapshot.val();
        var allBlogsData = [];
        for (var key in blogs) {
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
        }

      allBlogsData.sort((x, y) => {
        debugger;
          return y.timeStamp - x.timeStamp;
      })
        setAllBlogs(allBlogsData);
        setFilteredBlogs(allBlogsData);
        setShowLoader(false);
      });
  }, []);

  const updateSearchInput = async (e: any) => {
    var searchInput = e.target.value;
    setInput(searchInput);
    const filtered = allBlogs.filter((blog) => {
      return blog.blogTitle.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredBlogs(filtered);
  };

  function handlePageClick({ selected: selectedPage }: Props) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = filteredBlogs
    .slice(offset, offset + PER_PAGE)
    .map((blogData, index) => (
      <div className="col-sm-3">
         <Link to={{pathname: "/blog-detail", state: {blogData}}}>
          <BlogPost key={index} blog={blogData} />
        </Link>
      </div>
    ));

  const pageCount = Math.ceil(filteredBlogs.length / PER_PAGE);

  return (
    <div className="row blogsWrapperCont">
      {showLoader && (
        <div className="centered">
          <Loader type="TailSpin" color="#ff6a02" height={100} width={100} />
        </div>
      )}

      <div className="col-sm-11 px-0">
        <div className="row mb-3 justify-content-end">
          <div className=" pr-0">
            <div className="navSearchBar">
              <span>
                <FontAwesomeIcon icon={["fas", "search"]} />
              </span>
              <input
                type="search"
                placeholder="Search"
                className="form-control"
                value={input}
                onChange={updateSearchInput}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="secondary mb-4">Blog Posts</h2>
        </div>
        <div className="row">{currentPageData}</div>
        <ReactPaginate
          previousLabel={<i className="fas fa-angle-left contrlBtn"></i>}
          nextLabel={<i className="fas fa-angle-right contrlBtn"></i>}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </div>
  );
}

export default BlogsWrapper;
