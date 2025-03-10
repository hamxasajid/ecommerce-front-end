import React, { useState, useEffect } from "react";
import axios from "axios";

const Hotoffer = () => {
  const [products, setProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    axios.get("https://fakestoreapi.in/api/products").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  useEffect(() => {
    function updateCountdown() {
      let targetDate = new Date("March 15, 2025 12:00:00").getTime();
      let now = new Date().getTime();
      let timeLeft = targetDate - now;

      let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-4">
      <div className="container">
        <div className="card overflow-hidden">
          <div className="row gx-0 border">
            {/* Left Section */}
            <aside className="col-lg-3 p-4 d-flex flex-column align-items-start justify-content-start">
              <header>
                <h3 className="fw-bold fs-4">Deals and Offers</h3>
                <p className="text-muted">Hygiene equipments</p>
              </header>

              <div className="d-flex justify-content-between">
                <div
                  className="text-center text-white border bg-dark d-flex flex-column justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <span className="fw-bold fs-5">{timeLeft.days}</span>
                  <small className="d-block">Days</small>
                </div>
                <div
                  className="text-center border text-white border bg-dark d-flex flex-column justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <span className="fw-bold fs-5">{timeLeft.hours}</span>
                  <small className="d-block">Hours</small>
                </div>
                <div
                  className="text-center border text-white border bg-dark d-flex flex-column justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <span className="fw-bold fs-5">{timeLeft.minutes}</span>
                  <small className="d-block">Min</small>
                </div>
                <div
                  className="text-center border text-white border bg-dark d-flex flex-column justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <span className="fw-bold fs-5">{timeLeft.seconds}</span>
                  <small className="d-block">Sec</small>
                </div>
              </div>
            </aside>

            {/* Right Section */}
            <div className="col-lg-9 border-start">
              <div className="row gx-0">
                {" "}
                {/* g-0 removes gutter spacing */}
                {products.slice(0, 5).map((product) => (
                  <div
                    className="col-md col-sm-4 col-6 border"
                    key={product.id}
                  >
                    <div className="card-product product-sm p-2 text-center">
                      <img
                        src={product.image}
                        className="img-fluid mb-2"
                        alt={product.title}
                      />
                      <div className="fw-semibold">
                        {product.title.split(" ").slice(0, 1).join(" ")}
                        {product.title.split(" ").length > 2 && "..."}
                      </div>
                      <span className="badge bg-danger rounded-pill">
                        -{product.discount}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* End Right Section */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotoffer;
