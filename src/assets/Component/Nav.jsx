import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  return (
    <>
      {/* MOBILE HEADER */}
      <header className="mobile-header-top">
        <div className="mobile-header-content d-flex align-items-center justify-content-between px-3 py-2">
          {/* LEFT: Hamburger Icon */}
          <div className="d-flex align-items-center gap-1">
            <button
              className="btn btn-light"
              onClick={() => setOffCanvasOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
            {/* CENTER: Logo */}
            <Link
              to="/"
              className="brand-wrap me-3 d-flex align-items-center justify-content-center gap-2 fs-3"
            >
              <i
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "5px",
                }}
                className="fas fa-shopping-bag text-white bg-primary d-flex align-items-center justify-content-center"
              ></i>
              eComerce
              {""}
            </Link>
          </div>

          {/* RIGHT: Cart & User Icon */}
          <div>
            <Link to="/cart" className="me-3">
              <i className="fas fa-shopping-cart text-dark"></i>
            </Link>
            <Link to="/profile">
              <i className="fas fa-user text-dark"></i>
            </Link>
          </div>
        </div>

        {/* SECOND ROW: Search Bar */}
        <div className="px-3 py-2">
          <form action="#" className="search">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
              />
              <button className="btn btn-light">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </header>

      {/* OFF-CANVAS MENU */}
      <div className={`offcanvas-menu ${offCanvasOpen ? "open" : ""}`}>
        <div className="offcanvas-content">
          <button className="close-btn" onClick={() => setOffCanvasOpen(false)}>
            &times;
          </button>
          <ul className="text-dark">
            {/* Upper Section */}
            <div className="upper">
              <Link to="/profile" className="profile-icon me-2">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
              </Link>
              <li>
                <Link to="/signin">Sign in | Register</Link>
              </li>
            </div>

            {/* Middle Section */}
            <div className="middle">
              <li>
                <Link to="/">
                  <i className="fa fa-home me-2"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/categories">
                  <i className="fa fa-th-large me-2"></i> Categories
                </Link>
              </li>
              <li>
                <Link to="/favorites">
                  <i className="fa fa-heart me-2"></i> Favorites
                </Link>
              </li>
              <li>
                <Link to="/orders">
                  <i className="fa fa-box me-2"></i> My Orders
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/language">
                  <i className="fa fa-globe me-2"></i> English | USD
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i className="fa fa-phone me-2"></i> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fa fa-info-circle me-2"></i> About
                </Link>
              </li>
              <hr />
            </div>
            <div className="lower">
              <li>
                <Link to="/agreement">User Agreement</Link>
              </li>
              <li>
                <Link to="/partnership">Partnership</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <header className="section-header mobile-hidden">
        <section className="header-main bg-white border-bottom py-lg-3 py-2 ">
          <div className="container">
            <div className="row gx-2 d-flex align-items-center justify-content-center">
              <div className="col-xl-2 col-lg col-6 col-sm-6 col-md flex-grow-0 d-flex align-items-center justify-content-center">
                <Link
                  to="/"
                  className="brand-wrap me-3 d-flex align-items-center justify-content-center gap-2 fs-3"
                >
                  <i
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                    className="fas fa-shopping-bag text-white bg-primary d-flex align-items-center justify-content-center"
                  ></i>
                  eComerce
                  {""}
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
                <nav className="d-flex justify-content-end ms-4 ">
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
                    <i class="fa-solid fa-bars me-2"></i> All categoty
                  </a>
                  <nav className="dropdown-menu p-4">
                    <div className="d-flex flex-wrap flex-sm-nowrap">
                      <div style={{ width: "12rem" }}>
                        <h6>Ads website</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a className="text-body" href="/">
                              Ads home
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/">
                              Ads listing
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/">
                              Ads detail
                            </a>
                          </li>
                        </ul>

                        <h6>Techstore</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a className="text-body" href="/">
                              Main page
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/t">
                              Listing view
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/l">
                              Item details
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div style={{ width: "12rem" }}>
                        <h6>Marketplace</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a className="text-body" href="">
                              Main page
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/">
                              Listing view
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/">
                              Grid view
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/">
                              Item detail
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/">
                              Cart page
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/">
                              Order page
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div style={{ width: "12rem" }}>
                        <h6>Food order</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a className="text-body" href="/">
                              Main page
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/">
                              Restaurant foods
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/">
                              Food order
                            </a>
                          </li>
                        </ul>

                        <h6>Common pages</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a className="text-body" href="/">
                              Pricing page
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/">
                              User profile
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/">
                              User register
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Hot offers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gift Boxes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Menu items
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Help
                    <i
                      className="fa-solid fa-chevron-down ms-1"
                      style={{ fontSize: "12px" }}
                    ></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Main page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Listing view
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Grid view
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Detail page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Cart page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Order page
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto gap-3">
                <li className="nav-item">
                  <select
                    className="form-select"
                    style={{
                      display: "inline-block",
                      width: "auto",
                      outline: "none",
                    }}
                  >
                    <option value="USD">🇺🇸 USD</option>
                    <option value="EUR">🇪🇺 EUR</option>
                    <option value="GBP">🇬🇧 GBP</option>
                    <option value="AED">🇦🇪 AED</option>
                    <option value="RUB">🇷🇺 RUB</option>
                    <option value="UZS">🇺🇿 UZS</option>
                    <option value="INR">🇮🇳 INR</option>
                    <option value="JPY">🇯🇵 JPY</option>
                    <option value="CNY">🇨🇳 CNY</option>
                  </select>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="https://flagcdn.com/w40/us.png"
                      alt="US Flag"
                      width="20"
                      className="me-1"
                    />{" "}
                    English{" "}
                    <i
                      className="fa-solid fa-chevron-down"
                      style={{ fontSize: "12px" }}
                    ></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      <img
                        src="https://flagcdn.com/w40/ru.png"
                        alt="Russia Flag"
                        width="20"
                        className="me-1"
                      />{" "}
                      Russian
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="https://flagcdn.com/w40/uz.png"
                        alt="Uzbekistan Flag"
                        width="20"
                        className="me-1"
                      />{" "}
                      Uzbek
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="https://flagcdn.com/w40/fr.png"
                        alt="France Flag"
                        width="20"
                        className="me-1"
                      />{" "}
                      French
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="https://flagcdn.com/w40/de.png"
                        alt="Germany Flag"
                        width="20"
                        className="me-1"
                      />{" "}
                      German
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="https://flagcdn.com/w40/es.png"
                        alt="Spain Flag"
                        width="20"
                        className="me-1"
                      />{" "}
                      Spanish
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="https://flagcdn.com/w40/cn.png"
                        alt="China Flag"
                        width="20"
                        className="me-1"
                      />{" "}
                      Chinese
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="https://flagcdn.com/w40/jp.png"
                        alt="Japan Flag"
                        width="20"
                        className="me-1"
                      />{" "}
                      Japanese
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="https://flagcdn.com/w40/in.png"
                        alt="India Flag"
                        width="20"
                        className="me-1"
                      />{" "}
                      Hindi
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="https://flagcdn.com/w40/sa.png"
                        alt="Saudi Flag"
                        width="20"
                        className="me-1"
                      />{" "}
                      Arabic
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="https://flagcdn.com/w40/tr.png"
                        alt="Turkey Flag"
                        width="20"
                        className="me-1"
                      />{" "}
                      Turkish
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
    </>
  );
};

export default Nav;
