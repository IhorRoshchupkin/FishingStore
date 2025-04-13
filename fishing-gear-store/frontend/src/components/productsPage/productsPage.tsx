import { useEffect, useState } from "react";
import ProductCard from "../productCard/productCard";
import { fetchProducts } from "../../services/api";
import { Container, Row, Col } from "react-bootstrap";
import "./productsPage.css";

interface Product {
  id: number;
  name: string;
  description: string;
  basePrice: number;
  imageUrl: string;
  images: Array<{
    id: number;
    productId: number;
    imageUrl: string;
    isPrimary: boolean;
  }>;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container className="products-page">
      <h1 className="text-center my-4">Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsPage;
