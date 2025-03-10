import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed successfully with: ${email}`);
      setEmail(""); // Clear input after submission
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <section className="py-lg bg-gray-light">
      <div className="container">
        <h4 className="text-center">Subscribe to our newsletter</h4>
        <p className="pb-2 text-center">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>

        <div style={{ maxWidth: "380px" }} className="mx-auto">
          <div className="d-flex">
            <div className="me-1 flex-grow-1">
              <input
                className="w-100 form-control"
                placeholder="✉️ Your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubscribe}
              >
                {" "}
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
