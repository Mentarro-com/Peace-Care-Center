import React from "react";
import HomeService from "../components/HomeService";
import CircleSlider from "../components/CircleSlider";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Hero2 from "../components/Heros";
import Sap from "../components/Sap";
import VideoCarousel from "../components/HomeVideo";



const HomePage = () => {
  return (
    <motion.div
      className="bg-slate-50"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <VideoCarousel />
      <Hero2 />
      <div className="mt-[-100px] mb-[-210px] sm:mb-[8px] sm:mt-[-110px]  bg-slate-300">
      <Sap />
      </div>
      <Hero />
      
      {/* <ImageSlider /> */}
      
      {/* <CircleSlider /> */}
      <HomeService />
    </motion.div>
  );
};

export default HomePage;
