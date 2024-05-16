"use client";

import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

function HomeService() {
  const [isVisibleFirst, setIsVisibleFirst] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetPositionFirst = windowHeight * 2.5;
      setIsVisibleFirst(scrollPosition > targetPositionFirst);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const first = useSpring({
    opacity: isVisibleFirst ? 1 : 0,
    transform: isVisibleFirst ? "translateX(0%)" : "translateX(-100%)",
    config: { duration: 500 },
    delay: isVisibleFirst ? 500 : 0,
  });

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6 mt-24  text-black">
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">
          Highlighted Features
        </h2>
      </div>

      <div className="flex flex-col md:flex-row">
        <animated.div style={first}>
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              className="max-w-xs max-h-xs w-1/2 md:w-full mx-auto"
              src="https://thumbs.dreamstime.com/z/rehabilitation-facilities-concept-icon-rehab-clinical-center-physiotherapy-thin-line-illustration-medical-vector-isolated-outline-183951142.jpg?w=768"
              alt="can_help_banner"
            />
          </div>
        </animated.div>

        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <div className="h-full py-4 px-6 border border-green-500 rounded-xl transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-md mb-6">
                Alcohol De Addiction
              </h3>
              <p className="text-sm">
                Our platform leverages user data and behavior to provide a
                highly personalized experience, with dynamic content and product
                recommendations that change in real-time.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-green-500 rounded-xl transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-md mb-6">
                Drug De addiction
              </h3>
              <p className="text-sm">
                {" "}
                Our website is designed with a mobile-first approach, offering a
                seamless browsing experience across all devices, including
                smartphones and tablets.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-green-500 rounded-xl transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-md mb-6">
                24/7 Customer Support
              </h3>
              <p className="text-sm">
                ur U.S.-based customer support team is available around the
                clock to answer any questions, resolve any issues, and provide
                helpful solutions. Whether it's through email, phone, or live
                chat, we're always here to support you.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-green-500 rounded-xl transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-md mb-6">
                Privacy
              </h3>
              <p className="text-sm">
                We use cutting-edge security measures to protect our customers'
                sensitive information and ensure the safety of all transactions
                made on our site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeService;
