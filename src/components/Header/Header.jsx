import styles from './Header.module.css';
import { productsData } from '@/data/products';


function countProducts() {
const products = document.querySelectorAll('.product-card');
document.getElementById('totalProducts').textContent = products.length;
}


export default function Header({ title, subtitle }) {
    return (
         <div className={styles.header}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>📊 Total de produtos: <span id="totalProducts">{productsData.length}</span></p>
        </div>
    )}
    