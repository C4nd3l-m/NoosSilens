import React from 'react';
import './Collection.css';

const Collection = () => {
    const products = [
        {
            id: 1,
            name: 'Dominus',
            type: 'Anillo de Sello',
            image: '/images/product_ring_dominus_1764367395184.png',
            description: 'Poder imperial en acero forjado'
        },
        {
            id: 2,
            name: 'Aureum Silens',
            type: 'Collar',
            image: '/images/product_necklace_aureum_1764367409799.png',
            description: 'Cruz gótica en plata envejecida'
        },
        {
            id: 3,
            name: 'Ferrum',
            type: 'Brazalete',
            image: '/images/product_bracelet_ferrum_1764367423946.png',
            description: 'Hierro negro, disciplina eterna'
        },
        {
            id: 4,
            name: 'Serpens',
            type: 'Colgante',
            image: '/images/product_pendant_serpens_1764367437071.png',
            description: 'Sabiduría ancestral en plata'
        }
    ];

    return (
        <section className="collection">
            <div className="container">
                <div className="collection-header fade-in">
                    <h2>La Colección</h2>
                    <p>Piezas forjadas para los que caminan en silencio</p>
                </div>
                <div className="collection-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card fade-in">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <div className="product-overlay">
                                    <button className="btn">Ver Detalles</button>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-type">{product.type}</p>
                                <p className="product-description">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collection;
