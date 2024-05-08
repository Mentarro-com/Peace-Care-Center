import React from "react";
import img1 from "./images/full-shot-adults-community-meeting.jpg";
import img2 from "./images/group-people-encouraging-each-other.jpg";
import img3 from "./images/man-with-addiction-sharing-mental-health-issues-with-group-aa-meeting-talking-therapist-people-having-conversation-about-depression-rehabilitation-therapy-session.jpg";
import img4 from "./images/medium-shot-doctor-helping-patient.jpg";
import img5 from "./images/person-expressing-appreciation-their-workmates.jpg";
import img6 from "./images/senior-women-doing-yoga-exercises-gym-yoga-mats.jpg";
import img7 from "./images/psychological-therapy-support-group-meeting.jpg";
import img8 from "./images/workers-celebrating-their-success-with-trophy.jpg";

const PhotoTwo = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-12 p-7 bg-slate-900">
      <div className="group relative rounded overflow-hidden">
        <img
          src={img1}
          alt="Candle Stand"
          className="transition  group-hover:scale-110 w-full"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center text-2xl  text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Al De-addiction
        </p>
      </div>

      <div className="group relative rounded overflow-hidden">
        <img
          src={img2}
          alt="Candle Stand"
          className="w-full h-full transition duration-200 group-hover:scale-110"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center text-2xl  text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Group Rehab
        </p>
      </div>

      <div className="group relative rounded overflow-hidden">
        <img
          src={img3}
          alt="Candle Stand"
          className="w-full transition duration-200 group-hover:scale-110"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center text-2xl  text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Drug De-Addiction
        </p>
      </div>

      <div className="group relative rounded overflow-hidden">
        <img
          src={img4}
          alt="Candle Stand"
          className="w-full transition duration-200 group-hover:scale-110"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center text-2xl  text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Privacy
        </p>
      </div>

      <div className="group relative rounded overflow-hidden">
        <img
          src={img5}
          alt="Candle Stand"
          className="w-full group-hover:scale-110"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center text-2xl  text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Mental Peace
        </p>
      </div>

      <div className="group relative rounded overflow-hidden">
        <img
          src={img6}
          alt="Candle Stand"
          className="w-full transition duration-200 group-hover:scale-110"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center text-2xl  text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Psychic Rehab Center
        </p>
      </div>

      <div className="group relative rounded overflow-hidden">
        <img
          src={img6}
          alt="Candle Stand"
          className="w-full h-full transition duration-200 group-hover:scale-110"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center text-2xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Smoking De-Addiction
        </p>
      </div>
      <div className="group relative rounded overflow-hidden">
        <img
          src={img7}
          alt="Candle Stand"
          className="w-full h-full group-hover:scale-110"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center text-2xl  text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Larsel
        </p>
      </div>

      <div className="group relative rounded overflow-hidden">
        <img
          src={img8}
          alt="Candle Stand"
          className="w-full transition duration-200 group-hover:scale-110"
        />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center text-2xl  text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Hanging Planters
        </p>
      </div>
    </div>
  );
};

export default PhotoTwo;
