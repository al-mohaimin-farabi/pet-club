import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import cat404Img from "../../Images/cat.jpg";

import style from "./NotFound.module.css";
const NotFound = () => {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <section className="page_404 text-center p-4">
      <img className="img-fluid" src={cat404Img} alt="404"  />

      <div className={style.contant_box_404}>
        <h3 className="text-main">Look like you're lost</h3>

        <p className="text-main fs-5">
          the page you are looking for not avaible!
        </p>

        <NavLink
          to="/home"
          className={`${style.link_404} bg-main rounded text-uppercase`}
        >
          Go to Home
        </NavLink>
      </div>
    </section>
  );
};

export default NotFound;
