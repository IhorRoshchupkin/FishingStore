import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./productCard.css";

interface Product {
  id: number;
  name: string;
  description: string;
  basePrice: number;
  images: Array<{
    id: number;
    productId: number;
    imageUrl: string;
    isPrimary: boolean;
  }>;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate(); // Hook for navigation

  // Find the image where isPrimary === true
  const primaryImage = product.images.find((image) => image.isPrimary);

  // If there is a primaryImage, use its URL, otherwise use a placeholder
  const imageUrl = primaryImage
    ? `http://localhost:3000${primaryImage.imageUrl}`
    : "placeholder.jpg"; // Placeholder if no primary image

  // Handler for the "View Details" button click
  const handleViewDetails = () => {
    navigate(`/products/${product.id}`); // Navigate to the product page
  };

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={imageUrl} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.basePrice.toFixed(2)}</Card.Text>
        <Button variant="primary" onClick={handleViewDetails}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
