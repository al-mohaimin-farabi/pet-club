import React from "react";
import { NavLink } from "react-router-dom";

const Blog = ({ data }) => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
      <div className="card mb-4 h-100 border-0">
        <img
          src={`data:image/*;base64,${data?.img}`}
          className="card-img-top blog_img"
          alt="..."
        />
        <div className="card-body  bg-main-linear-gradient rounded-bottom">
          <h4 className="card-title text-secondary mb-1">{data.blogTitle}</h4>
          <span className="text-main fw-bold">{data.authorName}</span>{" "}
          <span className="text-white" style={{ fontSize: "14px" }}>
            {data.blogPublishDate}
          </span>
          <p className="card-text fs-6 text-white mt-2">
            {data.blog.slice(0, 330)}...
            <NavLink
              to={`/blogs/${data._id}`}
              className="text-white fs-6  fw-light"
            >
              read full article
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
