import styles from '../styles/Hero.module.css';
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className={styles.inner}
      >
        <h1>Noós Silens</h1>
        <p className={styles.lead}>In Silentio Potentia</p>
        <a className={styles.cta} href="/catalogo">Ver colección</a>
      </motion.div>
    </section>
  )
}