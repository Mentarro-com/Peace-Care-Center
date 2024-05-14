import React from "react";
import HomeBg from "../components/HomeBg";
import HomeService from "../components/HomeService";
import CircleSlider from "../components/CircleSlider";
import ImageSlider from "../components/ImageSlider";
import { motion } from "framer-motion";


const HomePage = () => {
  return (
    <motion.div
      className="bg-slate-900"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <HomeBg />
      <ImageSlider />
      <CircleSlider />
      <HomeService />
    </motion.div>
  );
};

export default HomePage;
