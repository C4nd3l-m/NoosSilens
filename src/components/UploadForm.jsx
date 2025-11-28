import { useState } from 'react';
import styles from '../styles/UploadForm.module.css';

export default function UploadForm(){
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');

  function handleImage(e){
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  }

  function handleSubmit(e){
    e.preventDefault();
    const item = { id: Date.now().toString(), name, description: desc, price, stock, image };
    const existing = JSON.parse(localStorage.getItem('products') || '[]');
    existing.unshift(item);
    localStorage.setItem('products', JSON.stringify(existing));
    alert('Producto guardado en localStorage (demo).');
    setName(''); setDesc(''); setPrice(''); setStock(''); setImage('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>Nombre<input value={name} onChange={e=>setName(e.target.value)} required/></label>
      <label>Descripción<textarea value={desc} onChange={e=>setDesc(e.target.value)} required/></label>
      <label>Precio<input value={price} onChange={e=>setPrice(e.target.value)} required/></label>
      <label>Stock<input value={stock} onChange={e=>setStock(e.target.value)} required/></label>
      <label>Imagen<input type="file" accept="image/*" onChange={handleImage} /></label>
      {image && <img className={styles.preview} src={image} alt="preview" />}
      <button type="submit">Guardar producto</button>
      <p className={styles.note}>Nota: Este formulario guarda los productos en localStorage como demo. Integralo con una API para producción.</p>
    </form>
  )
}