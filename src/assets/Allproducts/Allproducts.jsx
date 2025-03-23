import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Allproducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [api1, api2] = await Promise.all([
          axios.get("https://fakestoreapi.com/products"),
          axios.get("https://dummyjson.com/products"),
        ]);

        const mergedProducts = [...api1.data, ...api2.data.products];

        setProducts(mergedProducts);
        setFilteredProducts(mergedProducts);

        // Extract unique categories (filter out undefined values)
        const uniqueCategories = [
          ...new Set(
            mergedProducts.map((product) => product.category).filter(Boolean)
          ),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Apply Filters
  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    filtered = filtered.filter((product) => product.price <= priceRange);

    if (selectedRating > 0) {
      filtered = filtered.filter((product) => {
        const productRating = product.rating?.rate || product.rating || 0;
        return Math.round(productRating) >= selectedRating;
      });
    }

    // Apply Sorting
    if (sortOption === "price-low-high") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-low") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-a-z") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "name-z-a") {
      filtered = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, priceRange, selectedRating, sortOption, products]);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage)
  );

  const getProductSource = (product) => {
    if (product.category?.image) return "escuelajs";
    if (product.thumbnail) return "dummyjson";
    return "fakestore";
  };

  return (
    <div className="container py-5">
      <header className="section-heading text-center mb-4">
        <h1>All Products</h1>
        <div
          style={{
            width: "100px",
            height: "4px",
            backgroundColor: "blue",
            margin: "10px auto",
          }}
        ></div>
      </header>

      <div className="row">
        {/* Hamburger Menu for Small Screens */}
        <button
          className="btn btn-primary d-lg-none mx-2 mb-3 w-25"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#filterSidebar"
          aria-controls="filterSidebar"
        >
          <i className="bi bi-list"></i> Filters
        </button>

        {/* Sidebar Filters - Offcanvas on Small Screens */}
        <div
          className="offcanvas offcanvas-start d-lg-none"
          tabIndex="1"
          id="filterSidebar"
          aria-labelledby="filterSidebarLabel"
          style={{ zIndex: "19999" }}
        >
          <div className="offcanvas-header">
            <h5 id="filterSidebarLabel">Filter Products</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {/* Sidebar Filters */}
            <div className="card p-3 border-primary">
              <h5 className="mb-3">Filters</h5>

              {/* Category Filter */}
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-3">
                <label className="form-label">Max Price: ${priceRange}</label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                />
              </div>

              {/* Star Rating Filter */}
              <div className="mb-3">
                <label className="form-label">Minimum Rating</label>
                <div className="d-flex flex-column gap-2 w-50">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className={`btn text-start ${
                        selectedRating === star
                          ? "btn-warning"
                          : "btn-outline-warning"
                      }`}
                      onClick={() => setSelectedRating(star)}
                    >
                      {"★".repeat(star)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar for Large Screens */}
        <div className="col-lg-3 d-none d-lg-block">
          <div className="card p-3 border-primary">
            <h5 className="mb-3">Filter Products</h5>

            {/* Category Filter */}
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-3">
              <label className="form-label">Max Price: ${priceRange}</label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="1000"
                step="10"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
              />
            </div>

            {/* Star Rating Filter */}
            <div className="mb-3">
              <label className="form-label">Minimum Rating</label>
              <div className="d-flex flex-column gap-2 w-50">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className={`btn text-start ${
                      selectedRating === star
                        ? "btn-warning"
                        : "btn-outline-warning"
                    }`}
                    onClick={() => setSelectedRating(star)}
                  >
                    {"★".repeat(star)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-lg-9">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 gap-2">
            <span className="fw-boldtext-center text-md-start w-100 ">
              Total Products: {filteredProducts.length}
            </span>

            {/* Sorting & View Toggle */}
            <div className="d-flex flex-column flex-sm-row gap-2 w-100 justify-content-sm-end">
              <select
                className="form-select w-100 w-sm-auto"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="name-a-z">Name: A - Z</option>
                <option value="name-z-a">Name: Z - A</option>
              </select>

              <div className="btn-group">
                <button
                  className={`btn ${
                    viewMode === "grid" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <i className="bi bi-grid"></i>
                </button>
                <button
                  className={`btn ${
                    viewMode === "list" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <i className="bi bi-list"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Product List/Grid */}
          <div
            className={`row g-3 ${
              viewMode === "list" ? "d-flex flex-column" : "row-cols-md-3"
            }`}
          >
            {currentProducts.map((product) => (
              <div
                className={`col ${viewMode === "list" ? "d-flex" : ""}`}
                key={product.id}
              >
                <div
                  className={`card border border-primary py-3 w-100 ${
                    viewMode === "list"
                      ? "d-flex flex-row align-items-center"
                      : ""
                  }`}
                >
                  <img
                    src={
                      product.image ||
                      product.thumbnail ||
                      product.images?.[0] ||
                      product.images?.[1] ||
                      product.images?.[2]
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
                    <b>
                      <span style={{ color: "orange" }}>$</span>
                      {product.price}
                    </b>

                    <h5 className="card-title fs-6 text-muted">
                      {product.title.split(" ").slice(0, 3).join(" ")}
                    </h5>
                    <p
                      className="text-muted"
                      style={{ fontSize: "12px", height: "40px" }}
                    >
                      {product.description.split(" ").slice(0, 8).join(" ") +
                        " ..."}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Star Rating */}
                      <small style={{ color: "orange" }}>
                        {Array.from({ length: 5 }, (_, index) => (
                          <i
                            key={index}
                            className={`bi bi-star${
                              index <
                              Math.round(product.rating?.rate || product.rating)
                                ? "-fill"
                                : ""
                            } me-1`}
                          ></i>
                        ))}
                      </small>

                      {/* Reviews Count */}
                      <small className="text-muted">
                        <i className="bi bi-chat-left-text"></i>{" "}
                        {product.rating?.count || 0}
                      </small>
                    </div>
                    {/* Buttons */}

                    <div className="d-flex justify-content-between mt-4 gap-2">
                      <Link
                        to={`/detail/${product.id}?source=${encodeURIComponent(
                          getProductSource(product)
                        )}`}
                        className="btn btn-primary fs-6"
                      >
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

          {/* Pagination */}
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-primary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
