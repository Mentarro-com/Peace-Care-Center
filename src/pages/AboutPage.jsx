import React from "react";
import Testimonial from "../components/Testimonial";
import AboutStep from "../components/AboutStep";
import Aboutfirst from "../components/Aboutfirst";
import Marquee from "../components/AboutMarquee";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="text-black"
    >
      <Aboutfirst />
      <AboutStep />
      <Testimonial />
      <Marquee />
    </motion.div>
  );
};

export default AboutPage;
