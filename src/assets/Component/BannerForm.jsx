import React from "react";

const BannerForm = () => {
  return (
    <section className="pb-4 pt-4">
      <div className="container">
        <article
          className="card bg-primary p-5"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(44, 123, 241, 0.94),rgba(0, 208, 255, 0.64), transparent), url('/image102.png')",
            minHeight: "400px",
            backgroundSize: "cover",
            // backgroundImage: "url('/image102.png')",
          }}
        >
          <div className="row">
            {/* Left Section - Banner Text */}
            <div className="col-lg-5">
              <h2 className="text-white">
                An easy way to send requests to all suppliers
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>

            {/* Right Section - Form */}
            <div className="col-lg-5 ms-auto">
              <article className="card card-body">
                <form>
                  <h6 className="mb-3">Send quote to suppliers</h6>

                  {/* Item Input */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What item you need?"
                    />
                  </div>

                  {/* Details Textarea */}
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Type more details"
                      rows="3"
                    ></textarea>
                  </div>

                  {/* Quantity & Unit Selection */}
                  <div className="mb-3 d-flex" style={{ maxWidth: "250px" }}>
                    <input
                      type="number"
                      className="me-2 form-control"
                      placeholder="Qty"
                    />
                    <select className="form-select">
                      <option value="">Litres</option>
                      <option value="">Kgs</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button className="btn btn-primary">Send inquiry</button>
                </form>
              </article>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BannerForm;
