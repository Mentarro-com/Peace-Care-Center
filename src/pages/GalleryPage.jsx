import React from "react";
import PhotoOne from "../components/PhotoOne";
import Banner from "../components/Banner";
import { motion } from "framer-motion";
import PhotoThree from "../components/PhotoThree";

const GalleryPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="bg-slate-50"
    >
      <Banner />
      <PhotoOne />
      <PhotoThree />
    </motion.div>
  );
};

export default GalleryPage;
