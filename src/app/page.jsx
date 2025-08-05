"use client";

import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  return (
    <div>
      <div className={styles.products}>
        {products.map(product => (
        <ProductCard key={product.id} product={product} productTitle={productTitle} productImage={productImage} productPrice={productPrice} productDescription={productDescription} productRating={productRating} 
        />
        ))}

    </div>
    </div>
    
  );
}