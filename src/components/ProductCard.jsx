import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }){
  const whatsapp = `https://wa.me/549XXXXXXXXXX?text=Hola,%20me%20interesa%20el%20producto%20${encodeURIComponent(product.name)}`;
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.body}>
        <h3>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>
        <div className={styles.meta}>
          <strong>${product.price}</strong>
          <a className={styles.whatsapp} href={whatsapp} target="_blank" rel="noreferrer">Consultar</a>
        </div>
      </div>
    </article>
  )
}