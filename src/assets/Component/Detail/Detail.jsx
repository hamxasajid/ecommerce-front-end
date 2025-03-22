import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";

const Detail = () => {
  const { id } = useParams(); // ✅ Use 'id' instead of 'product_id'
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let product = null;

        // Try fetching from each API
        const sources = [
          `https://fakestoreapi.com/products/${id}`,
          `https://dummyjson.com/products/${id}`,
          `https://api.escuelajs.co/api/v1/products/${id}`,
        ];

        for (let source of sources) {
          try {
            const response = await axios.get(source);
            product = response.data;
            break; // Stop fetching if found
          } catch {
            console.warn(`Product not found in ${source}`);
          }
        }

        if (!product) throw new Error("Product not found!");

        setData(product);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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
        <h4 className="text-danger">Error: {error}</h4>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Img
              variant="top"
              src={
                data.image || data.thumbnail || (data.images && data.images[0])
              }
              alt={data.title}
              className="p-3"
              style={{ objectFit: "contain", height: "300px" }}
            />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <h4 className="text-success">${data.price}</h4>
              <Button variant="primary" className="w-100 mt-3">
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
