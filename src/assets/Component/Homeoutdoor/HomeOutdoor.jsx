import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomeOutdoor.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const HomeOutdoor = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="container1 my-5">
      <div className="row home-row">
        {/* Left Column */}
        <div className="col-lg-4 d-flex align-items-center">
          <h2 className="fw-bold">Deals and Offers</h2>
        </div>

        {/* Right Column - Grid */}
        <div className="col-lg-8">
          <div className="row home-row1">
            {products
              .filter((product) => product.category.name === "Furniture")
              .slice(0, 4)
              .map((product) => (
                <div className="col-md-3 " key={product.id}>
                  <div className="card p-3 d-flex flex-column justify-content-between">
                    <div>
                      <h6 className="text-muted small mb-1">
                        {product.title.split(" ").slice(0, 2).join(" ")}
                        {product.title.split(" ").length > 3 && " ..."}
                      </h6>
                      <p className="mb-1">From</p>
                      <h5 className="fw-bold text-danger">${product.price}</h5>
                    </div>
                    <div className="d-flex justify-content-end">
                      <img
                        src={product.images[1]}
                        alt={product.title}
                        className="rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOutdoor;
