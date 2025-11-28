import React from 'react';
import './Materials.css';

const Materials = () => {
    const materials = [
        {
            id: 1,
            name: 'Acero Quirúrgico Negro',
            description: 'Resistencia absoluta. No se oxida, no se dobla.',
            symbol: '⚔'
        },
        {
            id: 2,
            name: 'Plata Envejecida',
            description: 'Dignidad que mejora con el tiempo.',
            symbol: '◈'
        },
        {
            id: 3,
            name: 'Ónix y Obsidiana',
            description: 'Piedras ancestrales de protección.',
            symbol: '◆'
        },
        {
            id: 4,
            name: 'Grabados Artesanales',
            description: 'Cada marca cuenta una historia.',
            symbol: '✦'
        }
    ];

    return (
        <section className="materials">
            <div className="container">
                <div className="materials-header fade-in">
                    <h2>Materiales Eternos</h2>
                    <p>Forjados para resistir el paso del tiempo</p>
                </div>
                <div className="materials-grid">
                    {materials.map((material) => (
                        <div key={material.id} className="material-card fade-in">
                            <div className="material-symbol">{material.symbol}</div>
                            <h3 className="material-name">{material.name}</h3>
                            <p className="material-description">{material.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Materials;
