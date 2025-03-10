import React, { useEffect, useState } from "react";
import axios from "axios";

const Recomanded = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data); // Assuming API returns an array
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <section className="pb-3">
      <div className="container">
        <header className="section-heading">
          <h3>Recommended items</h3>
        </header>

        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
          {products
          .slice(0,10)
          .map((product) => (
            <div className="col" key={product.id}>
              <figure
                className="card card-product-grid d-flex flex-column justify-content-center align-items-center"
                style={{ height: "300px" }}
              >
                <a href="#" className="img-wrap py-3">
                  <img
                    style={{
                      width: "170px",
                      height: "170px",
                      objectFit: "contain",
                    }}
                    src={product.image}
                    alt={product.title}
                  />
                </a>
                <figcaption className="p-3 text-left" style={{ width: "100%" }}>
                  <div className="price-wrap">
                    <b className="price">${product.price}</b>
                  </div>
                  <a
                    href="#"
                    className="title text-muted"
                    style={{ fontSize: "14px" }}
                  >
                    {product.title.split(" ").slice(0, 3).join(" ")}
                  </a>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recomanded;
