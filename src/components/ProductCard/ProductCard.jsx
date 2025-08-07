import styles from './ProductCard.module.css';
import image from 'next/image';
import React from 'react';

export default function ProductCard({ product, title, price, image, description }) {
    return (

            <div className={styles.productCard} data-category="smartphones">
                <div className={styles.productImage}>
                    <img className={styles.image} src={image}/>
                </div>
                <div className={styles.productTitle}>{title}</div>
                <div className={styles.productPrice}>{price}</div>
                <div className={styles.productDescription}>{description}</div>
                <div className={styles.productRating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span>({product.rating.count}) - {product.rating.reviews} avaliações</span>
                </div>
            </div>

    );
}