import styles from './ProductCard.module.css';

export default function ProductCard({ productTitle, productImage, productPrice, productDescription, productRating }) {
    return (

            <div className={styles.productCard} data-category="smartphones">
                <div className={styles.productImage}>
                    <img className={styles.image} src={productImage}/>
                </div>
                <div className={styles.productTitle}>{productTitle}</div>
                <div className={styles.productPrice}>{productPrice}</div>
                <div className={styles.productDescription}>{productDescription}</div>
                <div className={styles.productRating}>⭐⭐⭐⭐⭐ {productRating}</div>
            </div>

    );
}