import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HomeBg() {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="container mx-auto px-0 md:px-0">
      {!modalOpen && ( // Render the button only if the modal is closed
        <button
          className="fixed bottom-21 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg z-50"
          onClick={toggleModal}
        >
          Click ME
        </button>
      )}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={toggleModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 999 }} // Add a higher z-index value here
          >
            <motion.div
              className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5 "
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ zIndex: 1000 }} // Add a higher z-index value here
            >
              <div className="flex justify-between font-bold text-sm">
                <p>Product Review</p>
                <p className="text-gray-400">17th March, 2021</p>
              </div>
              <h2 className="text-3xl font-semibold mt-4 md:mt-10">
                Coffee From Heaven
              </h2>
              <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                aperiam nulla cupiditate saepe sed quis veritatis minus rem
                adipisci aliquid.
              </p>
              <motion.button
                onClick={toggleModal}
                className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Read More
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HomeBg;
