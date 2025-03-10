import React, { useState, useEffect } from "react";
import axios from "axios";

const HomeOutdoor = ({
  backgroundImageUrl,
  sectionTitle,
  buttonText,
  category,
  apiUrl,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setProducts(response.data.products); // Fetch only 8 products
    });
  }, []);

  return (
    <section className="pb-3">
      <div className="container">
        <div className="card overflow-hidden">
          <div className="row gx-0">
            {/* Left Section with Background Image */}
            <aside
              className="col-lg-3 text-dark text-center text-lg-left text-sm-center p-3 px-4"
              style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <header>
                <h3 className="mb-3">{sectionTitle}</h3>
                <a href="#" className="btn btn-light text-dark">
                  {buttonText}
                </a>
              </header>
            </aside>

            {/* Right Section - Product Grid */}
            <div className="col-lg-9 p-0 m-0">
              <ul className="row g-0 m-0 p-0">
                {products
                  .filter((product) => product.category === category)
                  .slice(0, 8) // Fetch only 8 products
                  .map(({ id, title, image, images, price }) => (
                    <li
                      className="col-6 col-lg-3 col-md-4 border"
                      key={id}
                      style={{ listStyle: "none" }}
                    >
                      <div className="card-product p-3 pe-0">
                        <a href="#" className="title">
                          {title.split(" ").slice(0, 1).join(" ")}
                        </a>
                        <img
                          className="float-end mb-2"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "contain",
                          }}
                          src={image || images[0]} // Access first image safely
                          alt={title}
                        />
                        <p className="text-muted small">
                          From <br /> USD {price}
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOutdoor;
