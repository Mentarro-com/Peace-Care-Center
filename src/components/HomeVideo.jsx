import React, { useEffect } from "react";
import styles from "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./stylings.css";
import { Link } from "react-router-dom";
import pic from './images/peace.mp4'


const VideoCarousel = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source
          src={pic}
          type="video/mp4"
        />
      </video>
      <div
        id="carouselExampleCaptions"
        className={`${styles.carousel} slide`}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <div className="carousel-caption">
              <h5>Experienced Doctors</h5>
              <p className="text-xs sm:text-2xl">
              Our team of highly skilled doctors and therapists is dedicated to providing personalized care to help you on your journey to recovery. We utilize the latest treatment methods and a holistic approach to ensure the best outcomes for our patients.
              </p>
              <p className="para-container ">
                <Link to="/ContactPage">
                  <a className="para ">Contact Us</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carousel-caption">
              <h5>Modern Treatment</h5>
              <p className="text-xs sm:text-2xl">
              Evidence-based therapies and holistic practices , mindfulness, and yoga to promote comprehensive recovery.
              </p>
              <p className="para-container">
                <Link to="/ContactPage">
                  <a className="para">Contact Us</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carousel-caption">
              <h5>24 / 7 Services</h5>
              <p className="text-xs sm:text-2xl">
              We offer round-the-clock (24/7) service care to ensure continuous support for our clients. Our dedicated team is always available to address any needs or concerns.
              </p>
              <p className="para-container">
                <Link to="/ContactPage">
                  <a className="para">Contact Us</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
