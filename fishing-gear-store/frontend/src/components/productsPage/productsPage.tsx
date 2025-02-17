import React, { useState, useEffect } from "react";
import API_URL from "../../config";
import ProductCard from "../productCard/productCard";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

//Product page to dispay available products
const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ProductCard products={products} />
    </div>
  );
};

export default ProductsPage;
