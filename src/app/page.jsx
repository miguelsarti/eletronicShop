'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Header from '../components/Header/Header';
import ProductCard from '../components/ProductCard/ProductCard';
import { productsData } from '../data/products';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    
    setTimeout(() => {
      setProducts(productsData);
    }, 500);
  }, []);

  useEffect(() => {
    setTotal(products.length);
  }, [products]);

  return (

      <main className={styles.productsGrid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} title={product.title} image={product.image} price={product.price} description={product.description} count={product.count} reviews={product.rating.reviews} score={product.rating.count}/>
        ))}
      </main>
  );
}
