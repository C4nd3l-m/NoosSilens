import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            quote: "La pieza no es un accesorio. Es un recordatorio.",
            author: "M.A."
        },
        {
            id: 2,
            quote: "Cada vez que la veo, recuerdo quién elegí ser.",
            author: "D.R."
        },
        {
            id: 3,
            quote: "No necesita brillar para tener presencia.",
            author: "L.V."
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials-header fade-in">
                    <h2>Voces del Silencio</h2>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card fade-in">
                            <div className="testimonial-quote-mark">❝</div>
                            <p className="testimonial-quote">{testimonial.quote}</p>
                            <p className="testimonial-author">— {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
