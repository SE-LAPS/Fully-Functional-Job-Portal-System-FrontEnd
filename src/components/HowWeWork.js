import React from 'react';
import howWeWorkImage from '../assets/Logo.png'; // Update with correct path

const HowWeWork = () => {
  return (
    <section className="how-we-work">
      <h2>How We Work</h2>

      <div className="how-we-work-image">
        <img src={howWeWorkImage} alt="How We Work" />
      </div>
      <p>
        Integer gravida justo luctus dolor faucibus, quis ullamcorper orci pretium. Ut gravida sollicitudin faucibus. Etiam vitae neque finibus, interdum lacus quis, ornare diam. Quisque efficitur mauris id erat euismod vestibulum. Nam placerat malesuada risus, placerat accumsan metus. Quisque dictum velit lacus, tempor eleifend nibh ultrices ut.
      </p>
      
      <a href="/learn-more" className="learn-more">Learn More</a>
 
    </section>
  );
};

export default HowWeWork;
