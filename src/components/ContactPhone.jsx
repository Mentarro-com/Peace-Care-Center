import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import instapic from "./images/insta-pic.jpg";
function ContactPhone() {

    const [isVisible, setIsVisible] = useState(false);

  const phone = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0%)" : "translateX(-100%)",
    config: { duration: 200 },
  });

  const second = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0%)" : "translateY(-100%)",
    config: { duration: 200 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetPosition = windowHeight * 0.65;

      if (scrollPosition > targetPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex mb-28 mt-[-100px] ">
        <div className="sm:flex  items-center max-w-screen-xl lg:ml-[20%]">
          <animated.div style={phone}>
            <div className="sm:w-1/2 p-10">
              <div className="image object-center text-center lg:ml-36">
                <div
                  className="relative flex justify-center h-[440px] w-[230px] border-4 border-black rounded-2xl shadow-lg p-8"
                  style={{
                    backgroundImage: `url(${instapic})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl mt-[-35px]"></span>
                  <span className="absolute -right-2 top-20  border-4 border-black h-10 rounded-md"></span>
                  <span className="absolute -right-2 top-44  border-4 border-black h-24 rounded-md"></span>
                </div>
              </div>
            </div>
          </animated.div>

          <animated.div style={second}>
            <div className="ml-10 p-2">
              <div className="text mt-24 mb-[-100px]">
                <span className="text-slate-700 text-xl border-b-2 border-pink-600 uppercase">
                  Contact Us 
                </span>
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                  On <span className="text-red-600">Our Page</span>
                </h2>
                <a
                  href="https://www.instagram.com/mentarro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 text-3xl text-zinc-900 hover:text-pink-600 hover:underline"
                >+919789053645</a>
                
              </div>
            </div>
          </animated.div>
        </div>
      </div>
  )
}

export default ContactPhone