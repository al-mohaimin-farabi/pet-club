import React from "react";
import faqImg from "../../Images/faq.jpg";
const Faq = () => {
  return (
    <div className="container mt-4 mb-3">
      <div className="row px-2">
        <div className="col-5 d-none d-md-block">
          <img src={faqImg} className="img-fluid rounded h-100" alt="" />
        </div>
        <div className="col-12 col-md-7 col-lg-7">
          <div className="faq pb-2 ">
            <h2 className="text-main">Frequently Asked Question</h2>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-success"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How To Train Your Dog ?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="text-main">
                    If you're wondering how to train a dog with a specific
                    behavior, one of the most effective methods is to give them
                    treats, praise, or affection. Most importantly, the best
                    reward to give them is the one that they want the most. If
                    they are food motivated, treats might work better than
                    praise.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed text-success"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How To Mange Your Pets ?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Make sure your pet gets enough exercise and social
                    interaction.Providing your pet with a clean and safe home.
                    Keep your pet well nourished and at a healthy weight. Take
                    your pet for regular health checkups. Make sure your pet is
                    vaccinated. Make sure your pets are neutered. Microchip your
                    pet.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed text-success"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What do pets teach us ?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Pets teach children valuable life lessons like
                    responsibility, trust, compassion, respect and patience.
                    While pets offer a lot of benefits to kids, kids also have a
                    lot to offer the pet in your family as well. Both kids and
                    pets enjoy high energy play as well as having a cuddle buddy
                    during nap time.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed text-success"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Why are pets so loyal ?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Make sure your pet gets enough exercise and social
                    interaction.Providing your pet with a clean and safe home.
                    Keep your pet well nourished and at a healthy weight. Take
                    your pet for regular health checkups. Make sure your pet is
                    vaccinated. Make sure your pets are neutered. Microchip your
                    pet.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed text-success"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Do pets recognize their owners ?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    They've learnt to look at human faces for communication
                    clues and can even tell how we're are feeling by how we
                    look! Dogs are also able to identify individual people from
                    their facial features and can even recognise their owner in
                    a photograph. So for dogs, yes, they are likely to recognise
                    your face!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
