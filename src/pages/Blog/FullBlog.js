import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import Skeleton from "../Shared/Skeleton/Skeleton";

const FullBlog = () => {
  const { blogTitle } = useParams();
  const { isLoading, data } = useFetch(
    `http://localhost:5000/blogs/${blogTitle}`
  );

  useLayoutEffect(() => {
    document.title = blogTitle;
  }, [isLoading, blogTitle]);
  return (
    <>
      <Navigation></Navigation>
      <section className="container">
        <div className="row mt-4 align-items-center">
          <div className="col-6 offset-3">
            {isLoading ? (
              <Skeleton></Skeleton>
            ) : (
              <div className="card mb-4">
                <img
                  src={`data:image/*;base64, ${data?.img}`}
                  className="card-img-top blog_img"
                  alt="..."
                />
                <div className="card-body bg-main-linear-gradient rounded-bottom">
                  <h4 className="card-title text-secondary  mb-1">
                    {data?.blogTitle}
                  </h4>
                  <span className="text-main fw-bold">{data?.authorName}</span>{" "}
                  <span className="text-main" style={{ fontSize: "14px" }}>
                    {data?.blogPublishDate}
                  </span>
                  <p className="card-text fs-6 text-main fw-normal mt-2">
                    {data?.blog}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default FullBlog;
