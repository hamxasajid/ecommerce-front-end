import React from "react";

const ExtraServices = () => {
  const services = [
    {
      image: "/1(2).jpg",
      title: "Source from Industry Hubs",
      icon: "fa-search", // Industry icon
    },
    {
      image: "/2(2).jpg",
      title: "Customize Your Products",
      icon: "fa-tools", // Tools icon
    },
    {
      image: "/3(3).jpg",
      title: "Fast, reliable shipping by ocean or air",
      icon: "fa-shipping-fast", // Shipping icon
    },
    {
      image: "4(3).jpg",
      title: "Product monitoring and inspection",
      icon: "fa-eye", // Monitoring (eye) icon
    },
  ];

  return (
    <section className="mb-4">
      <div className="container">
        <header className="section-heading">
          <h3>Our Extra Services</h3>
        </header>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
              <article className="card mb-3">
                <img
                  className="card-img-top"
                  src={service.image}
                  alt={service.title}
                  height="160"
                />
                <div className="card-body text-center">
                  <i
                    className={`fa ${service.icon} fa-2 fs-5 mb-2 d-flex align-items-center justify-content-center`}
                    style={{
                      position: "absolute",
                      bottom: "60px",
                      right: "20px",
                      backgroundColor: "#D1E7FF",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      lineHeight: "30px",
                      color: "#333",
                      border: "4px solid white",
                    }}
                  ></i>
                  <a
                    href="#"
                    className="stretched-link text-body d-block text-left muted-text mt-2"
                    style={{ width: "80%" }}
                  >
                    {service.title}
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraServices;
