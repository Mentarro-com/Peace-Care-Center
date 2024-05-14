import React from "react";
import PhotoOne from "../components/PhotoOne";
import PhotoTwo from "../components/PhotoTwo";
import Banner from "../components/Banner";
import { motion } from "framer-motion";
import PhotoThree from "../components/PhotoThree";

const GalleryPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Banner />
      <PhotoOne />
      <PhotoTwo />
      <PhotoThree />
    </motion.div>
  );
};

export default GalleryPage;
