import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Allproducts = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [api1, api2, api3] = await Promise.all([
          axios.get("https://fakestoreapi.com/products"),
          axios.get("https://dummyjson.com/products"),
          axios.get(
            "https://api.escuelajs.co/api/v1/products?offset=0&limit=29"
          ),
        ]);

        // Combine products from both APIs
        const mergedProducts = [
          ...api1.data,
          ...api2.data.products,
          ...api3.data,
        ];

        setProducts(mergedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="container py-5">
      <header className="section-heading text-center mb-4">
        <h1>All Products</h1>
        <div
          style={{
            width: "100px",
            height: "4px",
            backgroundColor: "blue",
            border: "none",
            margin: "10px auto",
          }}
        ></div>
      </header>

      {/* Product Grid */}
      <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
        {currentProducts.map((product) => (
          <div className="col" key={product.id}>
            <div className="card border border-primary py-3">
              <img
                src={
                  product.image ||
                  product.thumbnail ||
                  product.images[0] ||
                  product.images[1] ||
                  product.images[2] ||
                  product.category.image
                }
                className="card-img-top"
                alt={product.title}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                  margin: "auto",
                }}
              />
              <div className="card-body">
                <h5 className="card-title fs-6">
                  {product.title.split(" ").slice(0, 3).join(" ")}
                </h5>
                <b className="text-muted">${product.price}</b>

                {/* Buttons */}
                <div className="d-flex justify-content-between mt-4 gap-2">
                  <Link to="#" className="btn btn-primary fs-6">
                    View Details
                  </Link>
                  <Link
                    to="#"
                    className="btn border border-primary text-primary fs-6 d-flex align-items-center"
                  >
                    <i className="bi bi-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="container d-flex justify-content-between mt-4 fs-6">
        <button
          className="btn btn-primary"
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="d-flex align-items-center">
            <i className="bi bi-arrow-left me-1"></i> Previous
          </span>
        </button>

        <button
          className="btn btn-primary"
          disabled={currentPage === totalPages}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="d-flex align-items-center">
            Next <i className="ms-1 bi bi-arrow-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Allproducts;
