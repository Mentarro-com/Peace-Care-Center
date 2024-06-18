import React from "react";
import pic3 from "./images/sch.jpg"

const PhotoOne = () => {
  return (
    <div className="flex  md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-4xl lg:text-5xl text-center md:text-left text-red-600 leading-tight font-medium">
            TIME SCHEDULE
          </h2>
          <h3 className="mt-6 text-justify md:mt-10 text-sm  p-4 lg:text-xl  md:text-left sm:text-sm text-gray-700 font-light tracking-wider leading-relaxed">
          The rehabilitation center's daily schedule is thoughtfully designed to promote holistic well-being and structured recovery. The day begins at 6:00 am, followed by a series of activities that include prayer, tea breaks, yoga therapy or meditation, personal hygiene, and breakfast. Throughout the day, participants engage in various therapeutic sessions such as psycho therapy, group therapy, and step work, complemented by periods of silence and Big Book reading for reflection and self-improvement. Regular tea breaks, lunch, and an evening of entertainment or games provide balance and relaxation. The day concludes with in-house sharing, dinner, evening medicine, a session for thoughts and feelings, a final prayer, and bedtime at 10:00 pm. This comprehensive schedule ensures a supportive and nurturing environment for recovery.
          </h3>
          
        </div>
        <div className="w-full md:w-1/2 flex justify-center p-6 md:p-[160px] md:justify-end">
          <img
            src={pic3}
            loading="lazy"
            alt=" Martin Sanchez"
            className="object-cover rounded-lg shadow-md"
          />

        </div>
      </div>
    </div>
    
  );
};

export default PhotoOne;
