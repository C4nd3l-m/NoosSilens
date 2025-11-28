import ProductCard from './ProductCard.jsx';
import styles from '../styles/ProductsList.module.css';

export default function ProductList({ products }){
  return (
    <section className={styles.grid}>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  )
}