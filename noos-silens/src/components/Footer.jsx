import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-logo">NOOS SILENS</h3>
                        <p className="footer-tagline">Virtus in Silentio</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Navegación</h4>
                            <ul>
                                <li><a href="#coleccion">Colección</a></li>
                                <li><a href="#ritual">El Ritual</a></li>
                                <li><a href="#materiales">Materiales</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Información</h4>
                            <ul>
                                <li><a href="#contacto">Contacto</a></li>
                                <li><a href="#politica">Política de Privacidad</a></li>
                                <li><a href="#terminos">Términos y Condiciones</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Síguenos</h4>
                            <ul>
                                <li><a href="#instagram">Instagram</a></li>
                                <li><a href="#newsletter">Newsletter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 NOOS SILENS. Todos los derechos reservados.</p>
                    <div className="footer-symbols">
                        <span>∴</span>
                        <span>✦</span>
                        <span>☽</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
