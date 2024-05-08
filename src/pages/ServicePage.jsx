import React from "react";
import Service from "../components/Service";
import FeatureSection from "../components/FeaturesSection";
import { motion } from "framer-motion";

const ServicePage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Service />
      <FeatureSection />
    </motion.div>
  );
};

export default ServicePage;
