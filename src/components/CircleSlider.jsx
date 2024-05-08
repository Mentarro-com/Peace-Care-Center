import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import logo from "./logo.png"; // Import your logo image
import img1 from "./images/service1.jpg";
import img2 from "./images/service1.jpg";
import img3 from "./images/service6.jpg";
import img4 from "./images/service2.jpg";
import img5 from "./images/service10.jpg";
import img6 from "./images/service7.jpg";
import img7 from "./images/service7.jpg";

const Info1 = ({ text, isMobile }) => {
  const [boxSize, setBoxSize] = useState({ width: "auto", height: "auto" });

  useEffect(() => {
    const contentWidth = Math.min(400, text.length * 8);
    const contentHeight = Math.max(100, Math.ceil(text.length / 30) * 20);
    setBoxSize({ width: contentWidth + "px", height: contentHeight + "px" });
  }, [text]);

  return (
    <div
      className={`bg-red-500 p-4 rounded-lg  ${
        isMobile ? "bg-navy text-white" : ""
      }`}
      style={{
        ...boxSize,
        fontSize: "18px",
        overflow: "hidden",
        wordWrap: "break-word",
      }}
    >
      {text}
    </div>
  );
};

const ServiceCard = ({ service, isMobile, onLeftClick, onRightClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-4  rounded-lg border border-gray-300 shadow-md service-card ${
        isHovered
          ? "transform scale-105 transition-transform duration-300"
          : "transition-transform duration-300"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isMobile ? "#1F3B4D" : "transparent",
        color: isMobile ? "#FFFFFF" : "",
      }}
    >
      <div className="left-space" onClick={onLeftClick}></div>
      <img
        src={service.image}
        alt={service.name}
        className={`w-full mb-4 rounded-lg ${isMobile ? "object-cover" : ""}`}
      />
      <div className="right-space" onClick={onRightClick}></div>
      <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
      <p className="text-sm">{service.description}</p>
    </div>
  );
};

const CardSlider = () => {
  const [focusElement, setFocusElement] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [img1, img2, img3, img4, img5, img6, img7]; // Include paths for all carousel items
  const services = [
    {
      name: "Service 1",
      description:
        "This is the first service. It provides solutions for various problems. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: img1,
    },
    {
      name: "Service 2",
      description:
        "This is the second service. It offers innovative solutions for your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: img2,
    },
    {
      name: "Service 3",
      description:
        "This is the third service. It delivers high-quality products and services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: img3,
    },
    {
      name: "Service 4",
      description:
        "This is the fourth service. It focuses on customer satisfaction. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: img4,
    },
    {
      name: "Service 5",
      description:
        "This is the fifth service. It aims to exceed your expectations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: img5,
    },
    {
      name: "Service 6",
      description:
        "This is the sixth service. It provides comprehensive solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: img6,
    },
    {
      name: "Service 7",
      description:
        "This is the seventh service. It ensures reliability and efficiency. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: img7,
    },
    {
      name: "Service 8",
      description:
        "This is the eighth service. It adapts to your specific needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: logo,
    },
  ];

  const info = [
    <Info1
      key="1"
      text="Info1 In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
      isMobile={true}
    />,
    <Info1
      key="2"
      text="Mumbai In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
      isMobile={true}
    />,
    <Info1
      key="3"
      text="Bengaluru In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
      isMobile={true}
    />,
    <Info1
      key="4"
      text="Kolkata In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
      isMobile={true}
    />,
    <Info1
      key="5"
      text="gujarat In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
      isMobile={true}
    />,
    <Info1
      key="6"
      text="vadodara In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
      isMobile={true}
    />,
    <Info1
      key="7"
      text="anand In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
      isMobile={true}
    />,
  ];

  return (
    <div className="relative overflow-hidden h-screen w-7/5 flex justify-center items-center mt-20">
      {!isMobile && (
        <div className="absolute ml-[90px] top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <FancyCarousel
            images={images}
            setFocusElement={setFocusElement}
            carouselRadius={200}
            peripheralImageRadius={50}
            centralImageRadius={80}
            focusElementStyling={{ border: "2px solid #ba4949" }}
            autoRotate={false}
            autoRotateTime={5}
            borderWidth={4}
            borderHexColor={"1c364f"}
            centralImageIndex={3}
            className="z-0"
          />
          <img
            src={logo}
            alt="Logo"
            className="absolute top-1/2 bg-black left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
          />
        </div>
      )}
      {!isMobile && (
        <div className="absolute top-1/2 right-[9%] transform -translate-y-1/2 bg-aquamarine">
          <CSSTransition
            in={true}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div>{info[focusElement]}</div>
          </CSSTransition>
        </div>
      )}
      {isMobile && (
        <div className="absolute top-0 left-0 w-full h-full overflow-y-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isMobile={isMobile}
              onLeftClick={() => console.log("Left Click")}
              onRightClick={() => console.log("Right Click")}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSlider;
