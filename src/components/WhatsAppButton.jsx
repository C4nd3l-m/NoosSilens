import styles from '../styles/WhatsAppButton.module.css';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton(){
  return (
    <a className={styles.fab} href="https://wa.me/549XXXXXXXXXX" target="_blank" rel="noreferrer">
      <MessageCircle />
    </a>
  )
}