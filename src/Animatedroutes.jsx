import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ServicePage" element={<ServicePage />} />
          <Route path="/GalleryPage" element={<GalleryPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
export default AnimatedRoutes;
