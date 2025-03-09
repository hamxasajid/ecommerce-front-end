import React from "react";
import "./Nav.css";

const IntroSection = () => {
  return (
    <>
      {/* Intro Section Start */}

      <section className="section-intro mb-3 mt-3">
        <div className="container1">
          <main className="card p-2">
            <div className="row">
              {/* Sidebar Navigation */}
              <aside className="col-lg-3">
                <nav className="nav flex-row nav-pills mb-3 mb-lg-0 aside-nav">
                  <ul className="nav-list">
                    <a href="#" className="nav-link">
                      Mobiles
                    </a>
                    <a href="#" className="nav-link">
                      Electronics
                    </a>
                    <a href="#" className="nav-link">
                      Clothes and wear
                    </a>
                    <a href="#" className="nav-link">
                      Home interiors
                    </a>
                    <a href="#" className="nav-link">
                      Computer and tech
                    </a>
                    <a href="#" className="nav-link">
                      Tools, equipments
                    </a>
                    <a href="#" className="nav-link">
                      Sports and outdoor
                    </a>
                    <a href="#" className="nav-link">
                      Animal and pets
                    </a>
                    <a href="#" className="nav-link">
                      Machinery tools
                    </a>
                    <a href="#" className="nav-link">
                      Other products
                    </a>
                  </ul>
                </nav>
              </aside>

              {/* Main Content */}
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-xxl-9 col-lg-8">
                    {/* Carousel */}
                    <div
                      id="carouselMain"
                      className="carousel-main carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <article className="carousel-item active">
                          <div className="carousel-caption">
                            <h2 className="mb-3 text-start text-dark">
                              <span className="fw-normal">Latest trending</span>
                              <br />
                              <strong>Electronic items</strong>
                            </h2>
                          </div>
                          <img
                            src="/main-tech.png"
                            className="d-block w-100 img-cover carousel-image"
                            alt="Electronics Banner"
                          />
                        </article>
                        <article className="carousel-item">
                          <div className="carousel-caption">
                            <h2 className="mb-3 text-start text-dark">
                              <span className="fw-normal">Latest deals</span>
                              <br />
                              <strong>Best Smartphones</strong>
                            </h2>
                          </div>
                          <img
                            src="/main-phone.png"
                            className="d-block w-100 img-cover carousel-image"
                            alt="Smartphones Banner"
                          />
                        </article>
                      </div>
                      {/* Carousel controls */}
                      <button
                        className="carousel-btn carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselMain"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-btn carousel-control-next"
                        type="button"
                        data-bs-target="#carouselMain"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    {/* Carousel End */}
                  </div>

                  {/* Right Side Content */}
                  <div className="col-xxl-3 col-lg-4 d-none d-lg-block">
                    <div className="bg-primary-subtle p-3 rounded mb-2 gap-2">
                      <p className="d-flex  text-base">
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                          src="/avatar.jpg"
                          className="img-avatar me-2"
                          alt="User Avatar"
                        />
                        <span>
                          Hi, user <br />
                          let's get started
                        </span>
                      </p>
                      <a href="#" className="btn btn-sm btn-primary w-100 mb-2">
                        Join now
                      </a>

                      <a href="#" className="btn btn-sm btn-light w-100">
                        login
                      </a>
                    </div>

                    <div className="bg-warning text-white p-3 rounded mb-2">
                      Get US $10 off with a new supplier account
                      <br />
                      <a
                        href="#"
                        className="text-white mt-1 fw-bold d-inline-block"
                      >
                        Get now
                      </a>
                    </div>
                    <div className="bg-info text-white p-3 rounded mb-2">
                      Send quotes with supplier preferences
                      <br />
                      <a
                        href="#"
                        className="text-white mt-1 fw-bold d-inline-block"
                      >
                        Try now
                      </a>
                    </div>
                  </div>
                  {/* Right Side End */}
                </div>
              </div>
              {/* Main Content End */}
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
