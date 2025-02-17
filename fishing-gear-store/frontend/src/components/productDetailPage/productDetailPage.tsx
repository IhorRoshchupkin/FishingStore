import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API_URL from "../../config";
import "./productDetailPage.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container my-5">
      <div className="row g-4 align-items-center">
        {/* Product image */}
        <div className="col-md-5 text-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="img-fluid product-image"
          />
        </div>
        {/* Product details */}
        <div className="col-md-6 d-flex flex-column justify-content-center h-100">
          <h1 className="display-5">{product.name}</h1>
          <p className="lead">{product.description}</p>
          <h3 className="text-primary">${product.price.toFixed(2)}</h3>
          <button className="btn btn-success btn-lg mt-3">Add to Cart</button>
        </div>
      </div>
      {/* Дополнительная информация о продукте */}
      <div className="row mt-5">
        <div className="col">
          <h4>Description</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
