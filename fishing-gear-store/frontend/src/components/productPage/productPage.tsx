import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/api";
import { Container, Card, Carousel } from "react-bootstrap"; // Import Carousel
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
        {/* Image carousel */}
        <Carousel>
          {sortedImages.map((image, index) => (
            <Carousel.Item key={image.id}>
              <img
                className="d-block w-100"
                src={`http://localhost:3000${image.imageUrl}`} // Full URL
                alt={`Product Image ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <Card.Body>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.basePrice.toFixed(2)}</Card.Text>
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
