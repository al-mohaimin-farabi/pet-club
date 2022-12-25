import React, { useEffect } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import TitleBox from "../../Shared/Title-box/TitleBox";
import petsitting from "../../../Images/PetCareSevice/petsitting.jpg";
import medicalattention from "../../../Images/PetCareSevice/medicalattention.jpg";
import dogwalking from "../../../Images/PetCareSevice/dogwalking.jpg";
import login_requried from "../../../Images/login_requried.png";
import useAuth from "../../../Hooks/useAuth";
import PetCareBookingForm from "./PetCareBookingForm";

const PetCare = () => {
  const { user } = useAuth();
  useEffect(() => {
    document.title = "Pet Care";
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <section className="container my-3">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 ">
          <div className="col">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="title  text-justify ">
                  <h4 className="text-secondary ">Pet Care Services</h4>
                  <p className="text-main text-justify text-main-light">
                    At PetClub, we serve pets of every type, age, and phase of
                    life because we truly love animals. We show it with every
                    belly rub, long walk, scratch behind the ear, and treat we
                    give. We’d love to be your trusted sidekick for a healthy
                    and happy pet because we know we can deliver trusted,
                    quality care and a professional, stress-free experience for
                    you.
                  </p>
                </div>
              </div>
              <TitleBox title={"We provide Three Kind Of pet care service"}>
                {" "}
                <small className="text-muted mt-1 fs-6">
                  *all of our service has same price tag ৳ 500
                </small>
              </TitleBox>

              <div className="col-12 col-md-12 col-lg-12 mt-3 mb-2 ">
                <div className="card mb-3 w-100">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <img
                        src={petsitting}
                        className="img-fluid rounded-start h-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title text-secondary">
                          Puppy Sitting
                        </h5>
                        <p
                          className="card-text text-main-light  lh-base"
                          style={{ fontSize: "18px" }}
                        >
                          You love your new puppy with all your heart…but you’re
                          less fond of stained carpets, chewed up shoes, and
                          slobbery clothing. Thankfully, you don’t have to go
                          through the process of transforming your little rascal
                          into a good boy or girl all by yourself. Our local
                          sitters can help you customize the perfect feeding,
                          exercise, and potty schedule for your pup while
                          helping them learn the proper way to behave in your
                          home.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12 mb-2 ">
                <div className="card mb-3 w-100">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <img
                        src={medicalattention}
                        className="img-fluid rounded-start h-100 pet_care_service"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title text-secondary">
                          Medical Administration
                        </h5>
                        <p
                          className="card-text text-main-light  lh-base"
                          style={{ fontSize: "18px" }}
                        >
                          If your pet has a strict schedule for taking
                          prescribed medication, enlisting a little help is
                          never a bad idea. Our medical administrators are
                          experienced with pills, shots, injections, and fluids
                          and can ensure that your pet is getting the right
                          medication at the right time. In their experienced
                          hands, your pet will feel calm and comfortable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12 mb-2 ">
                <div className="card mb-3 w-100">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <img
                        src={dogwalking}
                        className="img-fluid rounded-start h-100 pet_care_service"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title text-secondary">
                          Dog Walking
                        </h5>
                        <p
                          className="card-text text-main-light  lh-base"
                          style={{ fontSize: "18px" }}
                        >
                          Most dogs can’t wait to hear W-A-L-K, but it isn’t
                          always easy to find time for their favorite activity.
                          We can help you give them their daily dose of
                          fun-filled exercise with a 30, 45, or 60-minute walk
                          that includes any feeding, watering, or potty breaks
                          they need.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <TitleBox
              title={"Please Fill Up This Form To Book A service"}
            ></TitleBox>
            {!user.email ? (
              <div className="text-center mx-auto">
                <div className="alert alert-warning" role="alert">
                  <i className="fas  fa-exclamation-triangle ms-1"></i> You Need
                  To LogIn
                </div>
                <img className="img-fluid" src={login_requried} />
              </div>
            ) : (
              <PetCareBookingForm user={user}></PetCareBookingForm>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PetCare;
