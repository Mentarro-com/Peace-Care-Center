import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/20.jpg";
import img4 from "./images/22.jpg";
import img5 from "./images/3.jpg";

const ImageSlider: React.FC = () => {
  return (
    <div className = "Image-Slider">
      <Carousel infiniteLoop autoPlay>
        <div className="Slider-Image">
          <img src={img1} alt="image1" />
        </div>
        <div className="Slider-Image ">
          <img src={img2} alt="img2" />
        </div>
        <div className="Slider-Image">
          <img src={img3} alt="img3" />
        </div>
        <div className="Slider-Image">
          <img src={img4} alt="img4" />
        </div>
        <div className="Slider-Image">
          <img src={img5} alt="img5" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
