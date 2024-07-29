import React from 'react';
import howWeWorkImage from '../assets/campanyimg1.jpg'; // Update with correct path

const HowWeWork = () => {
  return (
    <section className="how-we-work">
      <div className="how-we-work-content">
        <div className="how-we-work-text">
          <h2>We Help To Get The Best Job And Find A Talent</h2>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </p>
          <ul>
            <li>Tempor erat elitr rebum at clita</li>
            <li>Aliqu diam amet diam et eos</li>
            <li>Clita duo justo magna dolore erat amet</li>
          </ul>
          <a href="/learn-more" className="read-more">Read More</a>
        </div>
        <div className="how-we-work-image">
          <img src={howWeWorkImage} alt="How We Work" />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
