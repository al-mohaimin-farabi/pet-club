import React, { useLayoutEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Navigation from "../Shared/Navigation/Navigation";
import Blog from "./Blog";
import Footer from "../Shared/Footer/Footer";
import Skeleton from "../Shared/Skeleton/Skeleton";

const Blogs = () => {
  const { data, isLoading } = useFetch("http://localhost:5000/blogs");
  useLayoutEffect(() => {
    document.title = "Blog";
  }, [data]);
  return (
    <>
      <Navigation></Navigation>

      <section>
        <div className=" blog-showcase container mb-3">
          <div className="row g-3 mt-0 py-2 ">
            {isLoading ? (
              <>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Skeleton></Skeleton>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Skeleton></Skeleton>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Skeleton></Skeleton>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Skeleton></Skeleton>
                </div>
              </>
            ) : (
              data.map((data) => <Blog key={data._id} data={data}></Blog>)
            )}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Blogs;
