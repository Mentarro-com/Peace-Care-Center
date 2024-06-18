"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import doc from "./images/doc.jpg"
import award from "./images/award.jpg"
import awa from "./images/awar.jpg"
function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const translateY1 = useTransform(scrollYProgress, [0, 0.3], [-75, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const translateY2 = useTransform(scrollYProgress, [0.2, 0.5], [-100, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const translateY3 = useTransform(scrollYProgress, [0.4, 0.7], [-50, 0]);

  return (
    <div
      className="w-full pb-9 dark:bg-gray-800 lg:mt-0 sm:mt-[-560px]"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            ADDICTION ENDS HERE
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            THE REAL JOURNEY BEGINS WHEN YOU ARRIVE
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <motion.div
            style={{ opacity: opacity1, y: translateY1 }}
            whileHover={{ scale: 1.1 }}
          >
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src={doc}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
              
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="https://en.wikipedia.org/wiki/Medical_Council_of_India" target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0"></span>Tamil Nadu Medical Council Additional Registration Certificate for Rehab Practice
                </a>
              </h3>
            </article>
          </motion.div>
          <motion.div
            style={{ opacity: opacity2, y: translateY2 }}
            whileHover={{ scale: 1.1 }}
          >
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src={award}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
             
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="https://en.wikipedia.org/wiki/Gandhi_Global_Family_medals_and_awards#:~:text=The%20Mahatma%20Gandhi%20Award%20is,the%20movement%20for%20Indian%20independence." target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0"></span>Honored with the Mahatma Gandhi Award for Excellence in Recovery Services
                </a>
              </h3>
            </article>
          </motion.div>
          <motion.div
            style={{ opacity: opacity3, y: translateY3 }}
            whileHover={{ scale: 1.1 }}
          >
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src={awa}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
              
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="https://en.wikipedia.org/wiki/Voluntary_Health_Services_hospital,_Chennai" target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0"></span>Membership with Tamil Nadu Deaddiction and Psychiatric Centres Welfare Association
                </a>
              </h3>
            </article>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
