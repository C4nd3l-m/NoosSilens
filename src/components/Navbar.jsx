import styles from '../styles/Navbar.module.css';
import Logo from './Logo.jsx';

export default function Navbar() {
  return (
    <header className={styles.nav}>
      <div className={styles.left}>
        <a href="/"> <Logo /> </a>
      </div>
      <nav className={styles.links}>
        <a href="/catalogo">Colecciones</a>
        <a href="#contact">Contacto</a>
        <a href="/admin" className={styles.admin}>Admin</a>
      </nav>
    </header>
  );
}