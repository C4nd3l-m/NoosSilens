// Demo: lee productos desde localStorage (si existen) o devuelve un set de ejemplo
export async function getProducts(){
  if(typeof window !== 'undefined'){
    const stored = localStorage.getItem('products');
    if(stored) return JSON.parse(stored);
  }

  // fallback estático para SSR
  return [
    {
      id: '1',
      name: 'Medalla Noós Oro',
      description: 'Medalla enchapada en oro con sello de la marca.',
      price: '12000',
      stock: 5,
      image: '/assets/sample1.jpg'
    },
    {
      id: '2',
      name: 'Aros Silens',
      description: 'Aros delicados con baño dorado.',
      price: '8500',
      stock: 10,
      image: '/assets/sample2.jpg'
    }
  ];
}