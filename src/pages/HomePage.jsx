import React from "react";
import HomeBg from "../components/HomeBg";
import HomeService from "../components/HomeService";
import CircleSlider from "../components/CircleSlider";
import ImageSlider from "../components/ImageSlider";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Hero2 from "../components/Heros";


const HomePage = () => {
  return (
    <motion.div
      className="bg-slate-50"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <HomeBg />
      <Hero2 />
      
      
      <ImageSlider />
      
      <CircleSlider />

      <Hero />
      <HomeService />
    </motion.div>
  );
};

export default HomePage;
