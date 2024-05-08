import React from "react";
import ContactMap from "../components/ContactMap";
import ContactPhone from "../components/ContactPhone";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      className="text-black "
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <ContactMap />
      <ContactPhone />
    </motion.div>
  );
};

export default ContactPage;
