import React from 'react';
import './Ritual.css';

const Ritual = () => {
    return (
        <section className="ritual">
            <div className="container">
                <div className="ritual-content">
                    <div className="ritual-text fade-in">
                        <h2>El Ritual</h2>
                        <div className="ritual-manifesto">
                            <p>
                                Cada pieza de NOOS SILENS nace del fuego y el silencio.
                            </p>
                            <p>
                                No fabricamos accesorios. Forjamos símbolos de poder contenido,
                                inspirados en los templos de Roma, en la disciplina de los antiguos,
                                en la belleza que no necesita explicación.
                            </p>
                            <p>
                                Nuestros materiales son elegidos por su resistencia y su historia:
                                acero que no se dobla, plata que envejece con dignidad,
                                piedras que han visto milenios.
                            </p>
                            <p>
                                Cada grabado es un recordatorio. Cada peso, una responsabilidad.
                                Cada joya, un pacto con quien la porta.
                            </p>
                            <p className="ritual-quote">
                                "La verdadera fuerza no grita. Se lleva en silencio."
                            </p>
                        </div>
                    </div>
                    <div className="ritual-visual fade-in">
                        <div className="ritual-symbol">
                            <span>☽</span>
                        </div>
                        <div className="ritual-pillars">
                            <div className="pillar">
                                <h4>Disciplina</h4>
                                <p>Cada pieza requiere horas de trabajo meticuloso</p>
                            </div>
                            <div className="pillar">
                                <h4>Silencio</h4>
                                <p>Forjadas en contemplación, no en producción masiva</p>
                            </div>
                            <div className="pillar">
                                <h4>Eternidad</h4>
                                <p>Diseñadas para durar generaciones</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ritual;
