import React from "react";
import pic from "./images/admin_pandian.jpg";

function Hero2() {
  return (
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16 ">
      <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
        <h1 className="max-w-3xl mx-auto text-lg sm:text-4xl font-bold hover:text-indigo-600 transition duration-500 ease-in-out inline-block ">
          PEACE LIFE CARE CENTER
        </h1>
        <img className="w-auto h-auto my-4" src={pic} alt="peace life" />

        <p className="text-gray-700 text-justify text-xs sm:text-lg font-bold leading-6 sm:leading-8 max-w-2xl mx-auto">
          Peace Life Care Centre in Chennai provides a residential, non-medical
          program for overcoming substance dependency. Our personalized approach
          includes meditation, yoga, physical activities, and introspective
          writing, all in a luxurious setting. Addiction impacts physical,
          psychological, social, and spiritual well-being. Our holistic method
          addresses all these areas, promoting long-term recovery. Daily
          routines feature spiritual activities, exercise, games, and meditation
          to enhance focus and reduce anxiety. We support families through
          organized gatherings, allowing them to share strength and hope. Our
          team, composed of recovering addicts, is dedicated to helping others
          find a new way of life. Recognized as one of Chennai’s best rehab
          centers, Peace Life Care Centre fosters transformation and growth.
        </p>

        <hr />
      </div>
    </div>
  );
}

export default Hero2;
