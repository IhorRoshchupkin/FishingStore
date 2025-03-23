import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/api";
import { Container, Card, Carousel, Row, Col, Button } from "react-bootstrap"; // Import Row and Col
import "./productPage.css";

interface Product {
  id: number;
  name: string;
  description: string;
  basePrice: number;
  variants: Array<{ name: string; price: number }>;
  images: Array<{
    id: number;
    productId: number;
    imageUrl: string;
    isPrimary: boolean;
  }>;
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(Number(id));
        setProduct(data);
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    alert(`Product "${product?.name}" added to the card!`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  // Sort images: first isPrimary === true, then the rest
  const sortedImages = [...product.images].sort((a, b) =>
    a.isPrimary === b.isPrimary ? 0 : a.isPrimary ? -1 : 1
  );

  return (
    <Container className="product-page">
      <h1 className="text-center my-4">{product.name}</h1>
      <Card>
        {/* Use Bootstrap Grid for layout */}
        <Row className="g-43">
          {/* Left column: Carousel */}
          <Col md={6}>
            <div className="carousel-container">
              <Carousel interval={null}>
                {sortedImages.map((image, index) => (
                  <Carousel.Item key={image.id}>
                    <img
                      className="d-block w-100"
                      src={`http://localhost:3000${image.imageUrl}`}
                      alt={`Product Image ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>

          {/* Right column: Product name and price */}
          <Col md={6} className="d-flex align-items-start">
            <div className="info-section">
              <h2>{product.name}</h2>
              <p className="price">${product.basePrice.toFixed(2)}</p>
              <Button variant="primary" onClick={handleAddToCart}>
                Add to the shopping cart
              </Button>
            </div>
          </Col>
        </Row>

        {/* Bottom section: Description and variants */}
        <Card.Body className="details-section">
          <h3>Product Details</h3>
          <Card.Text>{product.description}</Card.Text>
          <h4>Variants</h4>
          <ul>
            {product.variants.map((variant, index) => (
              <li key={index}>
                {variant.name} - ${variant.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductPage;
