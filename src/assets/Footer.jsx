import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="section-footer bg-white py-2">
      <div>
        <section className="container footer-main py-4">
          <div className="row">
            {/* Left Column - Company Info */}
            <aside className="col-12 col-sm-12 col-lg-4">
              <article className="me-lg-5">
                <Link
                  to="/"
                  className="brand-wrap me-3 d-flex align-items-center justify-content-center gap-2 fs-3"
                >
                  <img src="logo-colored.svg" alt="logo-colored" />
                </Link>
                <p className="mt-3 text-muted">
                  Here is some information about our company. We have been
                  working since 1990 and are still growing. This is just a good
                  HTML template.
                </p>
                <nav className="mb-4 mb-lg-0">
                  <a
                    className="btn btn-icon me-1 "
                    title="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-icon me-1"
                    title="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-icon me-1"
                    title="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    className="btn btn-icon"
                    title="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </nav>
              </article>
            </aside>

            {/* Store Links */}
            <aside className="col-6 col-sm-4 col-lg-2">
              <h6 className="title text-dark">Store</h6>
              <ul
                className="list-menu mb-4"
                style={{ listStyle: "none", padding: 0 }}
              >
                <li>
                  <a href="#" style={{ color: "#333" }}>
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#333" }}>
                    Find store
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#333" }}>
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#333" }}>
                    Blogs
                  </a>
                </li>
              </ul>
            </aside>

            {/* Information Links */}
            <aside className="col-6 col-sm-4 col-lg-2">
              <h6 className="title text-dark">Information</h6>
              <ul
                className="list-menu mb-4"
                style={{ listStyle: "none", padding: 0 }}
              >
                <li>
                  <a href="#" style={{ color: "#333" }}>
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#333" }}>
                    Money refund
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#333" }}>
                    Shipping info
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#333" }}>
                    Refunds
                  </a>
                </li>
              </ul>
            </aside>

            {/* Support Links */}
            <aside className="col-6 col-sm-4 col-lg-2">
              <h6 className="title text-dark">Support</h6>
              <ul
                className="list-menu mb-4"
                style={{ listStyle: "none", padding: 0 }}
              >
                <li>
                  <a href="#" style={{ color: "#333" }}>
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#333" }}>
                    Documents
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#333" }}>
                    Account restore
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#333" }}>
                    My Orders
                  </a>
                </li>
              </ul>
            </aside>

            {/* Download Buttons */}
            <aside className="col-6 col-sm-4 col-lg-2">
              <h6 className="title text-dark">Download</h6>
              <a href="#" className="mb-2 d-inline-block">
                <img src="/btn-appstore.png" height="40" alt="App Store" />
              </a>
              <a href="#" className="mb-2 d-inline-block">
                <img src="/btn-market.png" height="40" alt="Google Play" />
              </a>
            </aside>
          </div>
        </section>

        {/* Horizontal Line */}
        <hr className="my-0 border-dark" />

        {/* Footer Bottom Section */}
        <section
          className=" footer-bottom py-4"
          style={{ backgroundColor: "##f7fafc" }}
        >
          <div className="container d-flex justify-content-between">
            <div className="text-dark">© 2018-2024 Ecommerce UI.</div>

            {/* Language Dropdown */}
            <nav className="dropup">
              <button
                className="dropdown-toggle btn text-dark align-items-center"
                type="button"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://flagcdn.com/w40/us.png"
                  className="me-2"
                  height="20"
                  alt="English"
                />
                <span>English</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      src="https://flagcdn.com/w40/ru.png"
                      height="16"
                      className="me-2"
                      alt="Russian"
                    />
                    Russian
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      src="https://flagcdn.com/w40/ae.png"
                      height="16"
                      className="me-2"
                      alt="Arabic"
                    />
                    Arabic
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      src="https://flagcdn.com/w40/es.png"
                      height="16"
                      className="me-2"
                      alt="Spanish"
                    />
                    Spanish
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
