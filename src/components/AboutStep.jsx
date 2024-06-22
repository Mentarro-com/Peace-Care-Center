"use client";

import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

function HowItWorksSection() {
  const [isVisibleFirst, setIsVisibleFirst] = useState(false);
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);
  const [isVisibleThird, setIsVisibleThird] = useState(false);
  const [isVisibleFour, setIsVisibleFour] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetPosition = windowHeight * 0.8;

      setIsVisibleFirst(scrollPosition > targetPosition);
      setIsVisibleSecond(scrollPosition > targetPosition);
      setIsVisibleThird(scrollPosition > targetPosition);
      setIsVisibleFour(scrollPosition > targetPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const first = useSpring({
    opacity: isVisibleFirst ? 1 : 0,
    transform: isMobile
      ? "translateX(0%)"
      : isVisibleFirst
      ? "translateX(0%)"
      : "translateY(100%)",
    config: { duration: 500 },
    delay: isVisibleFirst ? 500 : 0,
  });

  const second = useSpring({
    opacity: isVisibleSecond ? 1 : 0,
    transform: isMobile
      ? "translateX(0%)"
      : isVisibleSecond
      ? "translateX(0%)"
      : "translateY(-100%)",
    config: { duration: 500 },
    delay: isVisibleSecond ? 500 : 0,
  });

  const third = useSpring({
    opacity: isVisibleThird ? 1 : 0,
    transform: isMobile
      ? "translateX(0%)"
      : isVisibleThird
      ? "translateX(0%)"
      : "translateY(100%)",
    config: { duration: 500 },
    delay: isVisibleThird ? 500 : 0,
  });

  const four = useSpring({
    opacity: isVisibleFour ? 1 : 0,
    transform: isMobile
      ? "translateX(0%)"
      : isVisibleFour
      ? "translateX(0%)"
      : "translateY(-100%)",
    config: { duration: 500 },
    delay: isVisibleFour ? 500 : 0,
  });

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
            Start Your Recovery Journey With
          </p>
          <h2 className="mt-6 text-3xl text-blue-900 font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Peace Life Care Rehabilitation Center
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
            In 4 Easy Steps
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
          <animated.div style={first}>
            <li className="how-it-works-card flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <div className="text-gray-600 group-hover:text-white">1</div>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Assessment:
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  Begin your journey with a thorough assessment to understand
                  your unique needs and challenges. Our team will work with you
                  to create a personalized treatment plan.
                </h4>
              </div>
            </li>
          </animated.div>

          <animated.div style={second}>
            <li className="how-it-works-card flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <div className="text-gray-600 group-hover:text-white">2</div>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Personalized Therapy:
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                Engage in personalized therapy sessions tailored to address the root causes of your addiction. Our experienced therapists will guide you through the process with empathy and care.
                </h4>
              </div>
            </li>
          </animated.div>

          <animated.div style={third}>
            <li className="how-it-works-card flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <div className="text-gray-600 group-hover:text-white">3</div>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Healing Programs:
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                Participate in holistic healing programs that include physical, mental, and emotional wellness activities. These programs are designed to support your overall well-being and recovery.
                </h4>
              </div>
            </li>
          </animated.div>

          <animated.div style={four}>
            <li className="how-it-works-card flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <div className="text-gray-600 group-hover:text-white">4</div>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Continued Support:
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                Receive ongoing support and aftercare to ensure long-term recovery. Our team is dedicated to helping you maintain a healthy, addiction-free life even after you leave our center.
                </h4>
              </div>
            </li>
          </animated.div>
        </ul>
      </div>
    </section>
  );
}

export default HowItWorksSection;
