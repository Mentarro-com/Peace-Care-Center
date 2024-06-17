import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "./images/admin.jpg";
import img2 from "./images/awar.jpg";
import img3 from "./images/counseling.jpg";
import img4 from "./images/classroom.jpg";
import img5 from "./images/doc.jpg";
import img6 from "./images/bed2.jpg";

import React from 'react'

function Sap() {
  return (
    <div className = "Image-Slider">
      <Carousel infiniteLoop autoPlay>
        <div className="sliderImage">
          <img src={img1} alt="image1" />
        </div>
        <div className="sliderImage ">
          <img src={img2} alt="img2" />
        </div>
        <div className="sliderImage">
          <img src={img3} alt="img3" />
        </div>
        <div className="sliderImage">
          <img src={img4} alt="img4" />
        </div>
        <div className="sliderImage">
          <img src={img5} alt="img5" />
        </div>
      </Carousel>
    </div>
  );
}

export default Sap