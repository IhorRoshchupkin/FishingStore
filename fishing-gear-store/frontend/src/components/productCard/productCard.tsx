import { Link } from "react-router-dom";
import "./productCard.css";
import React from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  products: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                />
              </Link>
              <div className="card-body">
                <Link to={`/products/${product.id}`}>
                  <h4 className="card-title">{product.name}</h4>
                </Link>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>${product.price.toFixed(2)}</strong>
                </p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
