import React from "react";
import { NavLink } from "react-router-dom";
import TitleBox from "../Shared/Title-box/TitleBox";
import style from "./Home/Home.module.css";
import blog1 from "../../Images/BlogShowcase/blog-1.webp";
import blog2 from "../../Images/BlogShowcase/blog-2.jpg";
import blog4 from "../../Images/BlogShowcase/blog-4.jpg";

const BlogShowCase = () => {
  return (
    <section className="blog-showcase  my-1">
      <div className="container">
        <TitleBox title="From Our Blog"></TitleBox>
        <div className="row mt-4 px-2">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-2">
            <div className="row">
              <div className="col-12  ">
                <div className="card border-0 mb-3">
                  <img
                    src={blog2}
                    className="card-img-top blog_img"
                    alt="..."
                  />
                  <div className="card-body bg-main-linear-gradient rounded-bottom">
                    <h4 className="card-title text-secondary  mb-1">
                      Health Benefits of Human-Animal Interactions
                    </h4>
                    <span className="text-main fw-bold">Rahela Begum </span>{" "}
                    <span className="text-main" style={{ fontSize: "14px" }}>
                      Octobor 27, 2022
                    </span>
                    <p className="card-text fs-6  text-mian">
                      Nothing compares to the joy of coming home to a loyal
                      companion. The unconditional love of a pet can do more
                      than keep you company. Pets may also decrease stress,
                      improve heart health, and even help children with their
                      emotional and social skills.....
                      <NavLink
                        to={`/blogs/Health Benefits of Human-Animal Interactions`}
                        className="text-main fs-6 fw-light">
                        read full article
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12  ">
                <div className="card border-0   mb-3">
                  <img
                    src={blog4}
                    className="card-img-top blog_img"
                    alt="..."
                  />
                  <div className="card-body bg-main-linear-gradient rounded-bottom">
                    <h4 className="card-title text-secondary mb-1">
                      How to take care of your pet rabbits
                    </h4>
                    <span className="text-main fw-bold">Mili Akhter</span>{" "}
                    <span className="text-main" style={{ fontSize: "14px" }}>
                      December 12, 2022
                    </span>
                    <p className="card-text fs-6 text-main">
                      Rabbits are a social species and should not be kept alone,
                      or without at least one other rabbit with whom they are
                      compatible. Generally rabbits should live as part of a
                      bonded pair of rabbits; this is a process that takes some
                      time and patience but, if successful.....
                      <NavLink
                        to={`/blogs/How to take care of your pet rabbits`}
                        className="text-main fs-6 fw-light">
                        read full article
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-2  ">
            <div className="row">
              <div className="col-12 h-100">
                <div className="card border-0    mb-3 ">
                  <img
                    src={blog1}
                    className="card-img-top blog_img"
                    alt="..."
                  />
                  <div className="card-body bg-main-linear-gradient rounded-bottom">
                    <h4 className="card-title text-secondary  mb-1">
                      Dog Training: Obedience Training for Dogs
                    </h4>
                    <span className="text-main fw-bold">Al Mohaimin Farbi</span>{" "}
                    <span className="text-main" style={{ fontSize: "14px" }}>
                      November 30, 2022
                    </span>
                    <p className="card-text fs-6 text-main">
                      There are two common methods of training a dog. The first
                      is the aversive-based method. The second is the
                      reward-based method. Aversive-based (discipline) training
                      is when you use positive punishment and negative
                      reinforcement techniques with your dog. Reward-based
                      methods use rewards only for the behaviors that you want
                      your dog to follow.Aversive-based training uses techniques
                      like loud, unpleasant noises, physical corrections, and
                      harsh scoldings to get your dog to act the way you want.
                      On the other hand, reward-based training uses rewards
                      whenever your dog does something you want it to do......
                      <NavLink
                        to={`/blogs/Dog Training: Obedience Training for Dogs`}
                        className="text-main fs-6 fw-light">
                        read full article
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center  mt-md-5">
                <NavLink to="/blogs" title="View All Blog ">
                  <i
                    className={`fas fa-arrow-right ${style.view_blog} p-4 bg-secondary text-main rounded-circle`}></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogShowCase;
