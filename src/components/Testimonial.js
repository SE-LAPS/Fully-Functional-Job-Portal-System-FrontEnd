import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    name: "Jane Doe",
    profession: "Software Engineer",
    image: "https://img.freepik.com/free-photo/artist-white_1368-3543.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716595200&semt=ais_user",
    feedback: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam."
  },
  {
    name: "John Smith",
    profession: "Product Manager",
    image: "https://static.vecteezy.com/system/resources/thumbnails/003/492/207/small/i-don-t-know-portrait-of-confused-handsome-bearded-young-man-standing-with-raised-arms-and-looking-at-camera-with-answer-indoor-studio-shot-isolated-on-blue-background-free-photo.JPG",
    feedback: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam."
  },
  {
    name: "Alice Johnson",
    profession: "UX Designer",
    image: "https://www.shutterstock.com/image-photo/please-help-me-smiling-cute-260nw-2086662178.jpg",
    feedback: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam."
  }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Our Clients Say!!!</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-card">
              <div className="testimonial-image-container">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-profession">{testimonial.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
