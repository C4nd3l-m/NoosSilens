import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="hero-content container">
                <div className="hero-text fade-in">
                    <h1 className="hero-title">NOOS SILENS</h1>
                    <p className="hero-subtitle">Joyas masculinas forjadas en silencio</p>
                    <div className="hero-cta">
                        <button className="btn btn-primary">Explorar Colección</button>
                        <button className="btn">Únete a la Hermandad</button>
                    </div>
                </div>
                <div className="hero-image fade-in">
                    <img src="/images/hero_main_1764367373566.png" alt="NOOS SILENS Jewelry" />
                </div>
            </div>
            <div className="hero-scroll-indicator">
                <span>∴</span>
            </div>
        </section>
    );
};

export default Hero;
