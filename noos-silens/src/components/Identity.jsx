import React from 'react';
import './Identity.css';

const Identity = () => {
    return (
        <section className="identity">
            <div className="container">
                <div className="identity-content fade-in">
                    <div className="identity-symbol">✦</div>
                    <h2 className="identity-title">La Mente Silenciosa</h2>
                    <div className="identity-text">
                        <p>
                            En un mundo saturado de ruido, elegimos el silencio.
                        </p>
                        <p>
                            Forjamos piezas que honran la disciplina, la fuerza interior y la estética eterna.
                        </p>
                        <p>
                            Cada joya es un símbolo de poder contenido, de belleza que no necesita gritar.
                        </p>
                    </div>
                    <div className="identity-symbols">
                        <span>∴</span>
                        <span>✦</span>
                        <span>☽</span>
                        <span>○</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Identity;
