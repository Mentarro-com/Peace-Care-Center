import React from "react";
import pic1 from "./images/disabled-man-wheelchair-working-his-office-job.jpg";
import pic2 from"./images/full-shot-adults-community-meeting.jpg";
import pic3 from "./images/group-people-encouraging-each-other.jpg"
import pic4 from "./images/man-with-addiction-sharing-mental-health-issues-with-group-aa-meeting-talking-therapist-people-having-conversation-about-depression-rehabilitation-therapy-session.jpg";

const PhotoOne = () => {
  return (
    <div>
      <div className="bg-white dark:bg-slate-900  h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                Gallery
              </h2>
              <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text.
              </p>
            </div>

            <a
              href="#"
              className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              More
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src={pic1}
                loading="lazy"
                alt=" Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                VR
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src={pic2}
                loading="lazy"
                alt="Magicle"
                className="absolute inset-0 h--1/2 w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tech
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src={pic3}
                loading="lazy"
                alt=" Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Dev
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src={pic4}
                loading="lazy"
                alt=" Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Retro
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoOne;
