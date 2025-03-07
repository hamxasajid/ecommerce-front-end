import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      {/* FOR MOBILE */}
      <header className="mobile-header-top">
        <div className="mobile-header-content">
          <Link to="/" className="brand-wrap me-2">
            <button
              className="btn btn-primary d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px", borderRadius: "5px" }}
            >
              <i className="fas fa-shopping-bag text-white"></i>
            </button>
          </Link>
          {/* brand-wrap end.// */}
          <div className="flex-grow-1">
            <form action="#" className="search my-3 my-lg-0 ms-xl-4">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  style={{ width: "55%" }}
                  placeholder="Search"
                />
                <button className="btn btn-light">
                  <i className="fa fa-search"></i>
                </button>
              </div>
              {/* input-group end.// */}
            </form>
            {/* search-wrap end.// */}
          </div>
        </div>
        {/* mobile-header-content .// */}
      </header>

      <nav className="mobile-nav-bottom">
        <div className="mobile-nav-content">
          <a href="#" className="nav-link">
            <i className="icon fa fa-home"></i>
            <span className="text">Home</span>
          </a>
          <a href="#" className="nav-link">
            <i className="icon fa fa-box"></i>
            <span className="text">Category</span>
          </a>
          <a href="#" className="nav-link">
            <i className="icon fa fa-shopping-cart"></i>
            <span className="text">My cart</span>
          </a>
          <a href="#" className="nav-link">
            <i className="icon fa fa-user"></i>
            <span className="text">Profile</span>
          </a>
        </div>
      </nav>
      {/* FOR MOBILE .//end */}

      <header className="section-header mobile-hidden">
        <section className="header-main bg-white border-bottom py-lg-3 py-2 ">
          <div className="container">
            <div className="row gx-2 d-flex align-items-center justify-content-center">
              <div className="col-xl-2 col-lg col-6 col-sm-6 col-md flex-grow-0 d-flex align-items-center justify-content-center">
                <Link to="/" className="brand-wrap me-3">
                  <i
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                    className="fas fa-shopping-bag text-white bg-primary d-flex align-items-center justify-content-center"
                  ></i>{""}
                </Link>
                {/* brand-wrap end.// */}
              </div>
              {/* col end.// */}

              <div className="col-xl-7 col-lg-5 col-12 col-sm-12 col-md">
                <form action="#" className="search my-3 my-lg-0 ms-xl-4">
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control"
                      style={{ width: "55%" }}
                      placeholder="Search"
                    />
                    <select className="form-select">
                      <option value="">All type</option>
                      <option value="codex">Special</option>
                      <option value="comments">Only best</option>
                      <option value="content">Latest</option>
                    </select>
                    <button className="btn btn-primary">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                  {/* input-group end.// */}
                </form>
                {/* search-wrap end.// */}
              </div>
              {/* col end.// */}

              <div className="col-xl-3 col-lg-4 col-md-12 col-12">
                {/* widgets-wrap  */}
                <nav className="d-flex justify-content-end ms-4">
                  {["Profile", "Message", "Saved", "Cart"].map(
                    (item, index) => (
                      <div key={index} className="col mx-2 text-center">
                        <a href="#" className="text-muted hover:text-dark">
                          <span className="fs-5 d-inline-block">
                            <i
                              className={`fa ${
                                item === "Profile"
                                  ? "fa-user"
                                  : item === "Message"
                                  ? "fa-comment-dots"
                                  : item === "Saved"
                                  ? "fa-heart"
                                  : "fa-shopping-cart"
                              }`}
                            />
                          </span>
                          <small className="d-block text-dark text-truncate">
                            {item}
                          </small>
                        </a>
                      </div>
                    )
                  )}
                </nav>
                {/* widgets-wrap.// */}
              </div>
              {/* col end.// */}
            </div>
            {/* row end.// */}
          </div>
          {/* container end.// */}
        </section>
        {/* header-main end.// */}
        <nav className="navbar navbar-light bg-white navbar-expand-lg border-bottom">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar_main"
              aria-expanded={false}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar_main">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    All templates
                  </a>
                  <nav className="dropdown-menu p-4">
                    <div className="d-flex flex-wrap flex-sm-nowrap">
                      <div style={{ width: "12rem" }}>
                        <h6>Ads website</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a className="text-body" href="/uikit/p-ads-index">
                              Ads home
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/uikit/p-ads-list">
                              Ads listing
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/uikit/p-ads-detail">
                              Ads detail
                            </a>
                          </li>
                        </ul>

                        <h6>Techstore</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-techstore-index"
                            >
                              Main page
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-techstore-list"
                            >
                              Listing view
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-techstore-detail"
                            >
                              Item details
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div style={{ width: "12rem" }}>
                        <h6>Marketplace</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-market-index"
                            >
                              Main page
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-market-list"
                            >
                              Listing view
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-market-list-grid"
                            >
                              Grid view
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-market-detail"
                            >
                              Item detail
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-market-cart"
                            >
                              Cart page
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-market-order"
                            >
                              Order page
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div style={{ width: "12rem" }}>
                        <h6>Food order</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a className="text-body" href="/uikit/p-food-index">
                              Main page
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-food-detail"
                            >
                              Restaurant foods
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/uikit/p-food-order">
                              Food order
                            </a>
                          </li>
                        </ul>

                        <h6>Common pages</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-info-pricing"
                            >
                              Pricing page
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-user-profile"
                            >
                              User profile
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-body"
                              href="/uikit/p-user-signup"
                            >
                              User register
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <figure className="p-5 text-center bg-warning-subtle rounded">
                      <a
                        href="https://ecommerce-ui.com#templates"
                        className="btn btn-warning"
                      >
                        Preview all templates
                      </a>
                    </figure>
                  </nav>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/uikit/p-market-index">
                        Main page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/uikit/p-market-list">
                        Listing view
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/uikit/p-market-list-grid"
                      >
                        Grid view
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/uikit/p-market-detail"
                      >
                        Detail page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/uikit/p-market-cart">
                        Cart page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/uikit/p-market-order">
                        Order page
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Fitness sport
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    USD
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      RUBL
                    </a>
                    <a className="dropdown-item" href="#">
                      UZS
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    English
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Russian
                    </a>
                    <a className="dropdown-item" href="#">
                      Uzbek
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* navbar end.// */}
      </header>
      {/* section-header end.// */}
      {/* Intro Section Start */}
    </>
  );
};

export default Nav;
