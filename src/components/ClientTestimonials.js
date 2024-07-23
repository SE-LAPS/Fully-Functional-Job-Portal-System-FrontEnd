// src/components/ClientTestimonials.js
import React from 'react';
import robertFox from '../assets/img 1.jpg'; // Update with correct path
import bessieCooper from '../assets/img 2.jpg'; // Update with correct path
import janeCooper from '../assets/img 3.jpg'; // Update with correct path

const testimonials = [
  {
    image: robertFox,
    name: "Robert Fox",
    role: "UI/UX Designer",
    testimonial: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in molestie metus aliquam lacinia. Suspendisse ut per conubia nostra, per inceptos himenaeos."
  },
  {
    image: bessieCooper,
    name: "Bessie Cooper",
    role: "Creative Director",
    testimonial: "Mauris eget lorem odio. Mauris convallis justo dui vulputate augue condimentum ornare. Morbi venenatis sit amet id orci. Duis vestibulum bibendum dapibus."
  },
  {
    image: janeCooper,
    name: "Jane Cooper",
    role: "Photographer",
    testimonial: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan vitae tristique ante."
  }
  
];

const ClientTestimonials = () => {
  return (
    <section className="client-testimonials">
      <h2>Clients Testimonial</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-text">
              <p className="testimonial-quote">“{testimonial.testimonial}”</p>
              <p className="testimonial-author">— {testimonial.name}, {testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
