import React, { useState, useEffect } from "react";
import "./Hotoffer.css";
import axios from "axios";

const Hotoffer = () => {
  const [products, setProducts] = useState([]);

  //   const uniqueCategories = [];
  //   const filteredProducts = products.filter((product) => {
  //     if (
  //       !uniqueCategories.includes(product.category) &&
  //       uniqueCategories.length < 4
  //     ) {
  //       uniqueCategories.push(product.category);
  //       return true;
  //     }
  //     return false;
  //   });

  useEffect(() => {
    axios.get("https://fakestoreapi.in/api/products").then((response) => {
      setProducts(response.data.products);
    });
  });
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

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
    updateCountdown(); // Call once immediately

    return () => clearInterval(interval); // Cleanup function to prevent memory leaks
  }, []);

  return (
    <div className="container1">
      <div className="offer-row">
        <div className="left">
          <div className="left1">
            <h2 className="componenet-title">Deals and Offers</h2>
            <p className="componenet-desc">Hygiene equipments.</p>
          </div>
          <div className="left2">
            <div id="countdown">
              <div className="couterdiv">
                <span>
                  {timeLeft.days}
                  <br /> Days
                </span>
              </div>
              <div className="couterdiv">
                <span>
                  {timeLeft.hours} <br /> Hours
                </span>
              </div>
              <div className="couterdiv">
                <span>
                  {timeLeft.minutes} <br /> Min
                </span>
              </div>
              <div className="couterdiv">
                <span>
                  {timeLeft.seconds}
                  <br /> Sec
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="grid-container">
            {
              // filteredProducts
              products.slice(0, 4).map((product) => (
                <div className="card" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <h3 className="card-title">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                    {product.title.split(" ").length > 3 && " ..."}
                  </h3>
                  <span className="badge badge-danger">
                    -{product.discount}%
                  </span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotoffer;
