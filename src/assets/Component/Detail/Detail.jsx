import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Form,
} from "react-bootstrap";

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);

  // Extract the API source from the URL
  const queryParams = new URLSearchParams(location.search);
  const source = queryParams.get("source");

  useEffect(() => {
    fetch("https://dummyjson.com/products") // Fetch all products instead of filtering by category
      .then((res) => res.json())
      .then((data) => {
        if (data.products && data.products.length > 0) {
          // Shuffle the products randomly
          const shuffled = data.products.sort(() => 0.5 - Math.random());
          setRandomProducts(shuffled.slice(0, 4));
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    // API Sources
    const apiUrls = {
      fakestore: `https://fakestoreapi.com/products/${id}`,
      dummyjson: `https://dummyjson.com/products/${id}`,
    };

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      if (!source || !apiUrls[source]) {
        setError("Invalid product source");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(apiUrls[source]);
        setData(response.data);

        // Fetch related products based on category
        fetchRelatedProducts(response.data.category);
      } catch {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedProducts = async (category) => {
      if (!category) return;

      const categoryApiUrls = {
        fakestore: `https://fakestoreapi.com/products/category/${category}`,
        dummyjson: `https://dummyjson.com/products/category/${category}`,
      };

      if (!categoryApiUrls[source]) return;

      try {
        const res = await axios.get(categoryApiUrls[source]);
        let products = res.data;

        // Ensure it's an array (escuelajs API returns an object sometimes)
        if (!Array.isArray(products)) {
          products = products.products || [];
        }

        // Filter out the current product and limit to 4 related products
        setRelatedProducts(
          products.filter((p) => p.id !== parseInt(id)).slice(0, 4)
        );
      } catch {
        console.error("Failed to fetch related products");
      }
    };

    fetchData();
  }, [id, source]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center mt-5">
        <h4 className="text-danger">{error}</h4>
      </Container>
    );
  }

  const reviews = [
    {
      user: "John Doe",
      rating: 5,
      comment: "Amazing product! Highly recommended.",
      date: "2024-03-15",
    },
    {
      user: "Jane Smith",
      rating: 4,
      comment: "Good quality, but shipping was slow.",
      date: "2024-03-10",
    },
    {
      user: "Alice Johnson",
      rating: 3,
      comment: "Decent product, but expected better quality.",
      date: "2024-03-05",
    },
  ];

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="p-4 bg-white rounded">
            <Row>
              {/* Left Side - Image */}
              <Col md={5} className="d-flex align-items-center">
                <Card.Img
                  variant="top"
                  src={data.image || data.thumbnail}
                  alt={data.title}
                  className="w-100 rounded"
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </Col>

              {/* Right Side - Details */}
              <Col md={7}>
                <Card.Body>
                  <p className="text-muted mb-1 text-uppercase">
                    {data.category || "Uncategorized"}
                  </p>
                  <Card.Title className="fs-4 fw-bold">{data.title}</Card.Title>
                  <Card.Text className="text-secondary fs-6">
                    {data.description.split(" ").slice(0, 35).join(" ") +
                      " ..."}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* Star Rating with Space */}
                    <small className="text-warning fs-5">
                      {Array.from({ length: 5 }, (_, index) => (
                        <i
                          key={index}
                          className={`bi bi-star${
                            index < Math.round(data.rating.rate || data.rating)
                              ? "-fill"
                              : ""
                          } me-1`}
                        ></i>
                      ))}
                    </small>

                    {/* Reviews Count */}
                    <small className="text-muted">
                      <i className="bi bi-chat-left-text"></i>{" "}
                      {data.reviews ? data.reviews.length : 0}
                    </small>
                  </div>

                  {/* Stock Badge */}
                  <small
                    className={`mb-3 badge py-2 fw-bold ${
                      data.stock > 0 ? "text-success" : "text-danger"
                    }`}
                    style={{ borderRadius: "8px", fontSize: "14px" }}
                  >
                    {data.stock > 0 ? "✔ In Stock" : "❌ Out of Stock"}
                  </small>

                  <b className="mb-3 d-block fs-4">${data.price}</b>

                  {/* Size Dropdown (if applicable) */}
                  {["men's clothing", "women's clothing"].includes(
                    data.category || ""
                  ) && (
                    <Form.Group className="mb-3">
                      <Form.Label>Select Size</Form.Label>
                      <Form.Select
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                      >
                        <option value="">Choose Size</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                      </Form.Select>
                    </Form.Group>
                  )}

                  {/* Quantity Selector */}
                  <div className="d-flex align-items-center mb-4">
                    <Button
                      variant="outline-primary"
                      className="me-2"
                      onClick={() =>
                        setQuantity(quantity > 1 ? quantity - 1 : 1)
                      }
                    >
                      −
                    </Button>
                    <Form.Control
                      type="text"
                      value={quantity}
                      className="text-center"
                      style={{ width: "50px" }}
                      readOnly
                    />
                    <Button
                      variant="outline-primary"
                      className="ms-2"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>

                  {/* Add to Cart Button */}
                  <Button variant="primary" className="w-100">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Container className="mt-5 mb-5">
        <Row>
          {/* Left - Reviews Section */}
          <Col md={9}>
            <h4 className="mb-3">Customer Reviews</h4>
            <div>
              {(data.reviews && data.reviews.length > 0
                ? data.reviews
                : reviews
              ).map((review, index) => (
                <Card key={index} className="mb-3 p-3">
                  <div className="d-flex justify-content-between">
                    <strong>{review.reviewerName || review.user}</strong>
                    <small className="text-muted">
                      {review.date
                        ? new Date(review.date).toLocaleDateString()
                        : "N/A"}
                    </small>
                  </div>
                  <p className="text-secondary">{review.comment}</p>
                  <div className="text-warning">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`bi bi-star${
                          i < review.rating ? "-fill" : ""
                        }`}
                        style={{ marginRight: "3px" }}
                      ></i>
                    ))}
                  </div>
                  <small className="text-muted">
                    {review.reviewerEmail || "Anonymous"}
                  </small>
                </Card>
              ))}
            </div>
          </Col>

          {/* Right - Random Products Section */}
          <Col md={3}>
            <h4 className="mb-3">You May Also Like</h4>
            {randomProducts.map((product) => (
              <Card
                key={product.id}
                className="mb-3 p-2 d-flex flex-row align-items-center"
              >
                <Card.Img
                  src={product.image || product.thumbnail}
                  alt={product.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                  }}
                />
                <div className="ms-3">
                  <strong className="d-block" style={{ fontSize: "14px" }}>
                    {product.title.split(" ").slice(0, 3).join(" ")}
                  </strong>
                  <small className="text-success fw-bold">
                    ${product.price}
                  </small>
                </div>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <Container className="mt-5">
          <h3 className="text-center mb-4">Related Products</h3>
          <Row>
            {relatedProducts.map((product) => (
              <Col md={3} key={product.id} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={product.image || product.thumbnail}
                    alt={product.title}
                    className="p-3"
                    style={{ objectFit: "contain", height: "200px" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <h6 className="text-success">${product.price}</h6>
                    <Card.Title className="fs-6">
                      {product.title.split(" ").slice(0, 4).join(" ")}
                    </Card.Title>
                    <Button
                      as={Link}
                      to={`/detail/${product.id}?source=${source}`}
                      variant="outline-primary"
                      className="mt-auto"
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default Detail;
