import React from 'react';
import companyImage from '../assets/company1.jpg'; // Adjust path as needed
import videoThumbnail from '../assets/campanyimg1.jpg'; // Adjust path as needed

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <div className="about-intro">
          <h2>Et nunc ut tempus duis nisl sed massa</h2>
          <p>Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit et ari...</p>
        </div>
        <img src={companyImage} alt="Team" className="about-image" />
      </section>
      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <i className="fas fa-user-plus"></i>
            <h3>Create Account</h3>
            <p>Nunc sed a nisl purus. Nibh dis faucibus proin lacus...</p>
          </div>
          <div className="step">
            <i className="fas fa-file-upload"></i>
            <h3>Upload Resume</h3>
            <p>Feils eu ultrices a sed massa. Commodo fringilla sed tempor...</p>
          </div>
          <div className="step">
            <i className="fas fa-briefcase"></i>
            <h3>Find Jobs</h3>
            <p>Commodo fringilla sed tempor risus laoreet ultrices ipsum...</p>
          </div>
          <div className="step">
            <i className="fas fa-check-circle"></i>
            <h3>Apply Job</h3>
            <p>Nisi enim feugiat enim volutpat. Sem quis viverra...</p>
          </div>
        </div>
      </section>
      <section className="video-section">
        <h2>Good Life Begins With A Good Company</h2>
        <div className="video-container">
          <img src={videoThumbnail} alt="Video Thumbnail" className="video-thumbnail" />
          <button className="play-button"><i className="fas fa-play"></i></button>
        </div>
        <div className="video-info">
          <div className="info-item">
            <h3>1</h3>
            <p>Elit gravida lorem amet porta risus vitae at...</p>
          </div>
          <div className="info-item">
            <h3>2</h3>
            <p>Volutpat dui lacus mattis urna platea...</p>
          </div>
          <div className="info-item">
            <h3>3</h3>
            <p>Elementum faucibus netus gravida lacus lorem...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
