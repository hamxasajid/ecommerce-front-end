import React from "react";
import "./Suplier.css"; // Custom CSS file for 5-column layout

const SuppliersByRegion = () => {
  const regions = [
    { country: "Arabic Emirates", code: "ae", suppliers: ["shopname.ae"] },
    { country: "Australia", code: "au", suppliers: ["shopname.au"] },
    { country: "United States", code: "us", suppliers: ["shopname.us"] },
    { country: "Russia", code: "ru", suppliers: ["shopname.ru"] },
    { country: "Italy", code: "it", suppliers: ["shopname.it"] },
    { country: "Denmark", code: "dk", suppliers: ["denmark.com.dk"] },
    { country: "France", code: "fr", suppliers: ["shopname.com.fr"] },
    { country: "Arabic Emirates", code: "ae", suppliers: ["shopname.ae"] },
    { country: "China", code: "cn", suppliers: ["shopname.cn"] },
    { country: "Great Britain", code: "gb", suppliers: ["shopname.co.uk"] },
  ];

  return (
    <section className="py-4">
      <div className="container">
        <header className="section-heading">
          <h3 className="text-center mb-4">Suppliers by Region</h3>
        </header>

        <div className="row custom-five-cols">
          {regions.map((region, index) => (
            <div className="custom-col mb-3" key={index}>
              <div className="d-flex align-items-center">
                <img
                  src={`https://flagcdn.com/w40/${region.code}.png`}
                  alt={region.country}
                  className="me-2"
                  width="30"
                  height="20"
                />
                <div>
                  <h6 className="mb-1">{region.country}</h6>
                  {region.suppliers.map((supplier, idx) => (
                    <a
                      key={idx}
                      href={`https://${supplier}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-block text-muted"
                    >
                      {supplier}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuppliersByRegion;
