import React, { useLayoutEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Navigation from "../Shared/Navigation/Navigation";
import Blog from "./Blog";
import Footer from "../Shared/Footer/Footer";

const Blogs = () => {
  const [isLoading, setisLoading] = useState(true);
  const { data } = useFetch("http://localhost:5000/blogs");

  useLayoutEffect(() => {
    document.title = "Blog";
    if (data.length > 0) {
      setisLoading(false);
    }
  }, [data]);
  return (
    <>
      <Navigation></Navigation>
      {isLoading && (
        <div className="w-100 d-flex flex-column justify-content-center  align-items-center mt-5">
          <div className="spinner-border text-main" role="status">
            <span className="visually-hidden"></span>
          </div>
          <span className="mt-2 fs-4 text-main">Loading...</span>
        </div>
      )}
      <section>
        <div className=" blog-showcase container mb-3">
          <div className="row g-3  mt-0 py-2 ">
            {data.length >= 1 &&
              data.map((data) => <Blog key={data._id} data={data}></Blog>)}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Blogs;
