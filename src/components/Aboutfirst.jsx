import React from "react";

const AboutUsPage = () => {
    
  return (
    <div className="flex justify-center items-center flex-wrap mb-4 mt-9">
      <div className="w-full md:w-1/2 p-4 md:p-9">
        <img src="./images/service1.jpg" alt="Left Image" className="w-full h-auto rounded-lg" />
      </div>
      
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        
        <p className="text-lg mb-4">
          Welcome to our sanctuary of healing and renewal, where hope finds its home and lives are transformed. At [Business Name], we're dedicated to guiding individuals towards a brighter, healthier tomorrow through a holistic approach to rehabilitation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 border border-red-600 shadow-xl">
            <p className="text-lg font-bold mb-2">Alcohol De-Addiction 🍷</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 border border-red-600 shadow-xl">
            <p className="text-lg font-bold mb-2">Drug De-Addiction 💊</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 border border-red-600 shadow-xl">
            <p className="text-lg font-bold mb-2">Psychiatric Services 🧠</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 border border-red-600 shadow-xl">
            <p className="text-lg font-bold mb-2">Smoking De-Addiction 🚭</p>
          </div> 
          <div className="bg-gray-100 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 border border-red-600 shadow-xl">
            <p className="text-lg font-bold mb-2">Ayurveda & Homeopathy 🌿</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 border border-red-600 shadow-xl">
            <p className="text-lg font-bold mb-2">Yoga & Meditation 🧘‍♂️</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 border border-red-600 shadow-xl">
            <p className="text-lg font-bold mb-2">Medically Qualified Doctor Team 👩‍⚕️👨‍⚕️</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 border border-red-600 shadow-xl">
            <p className="text-lg font-bold mb-2">Lifestyle & Dietary Management 🥗</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 border border-red-600 shadow-xl ">
            <p className="text-lg font-bold mb-2">Psychologist Evaluation & Support 🧑‍⚕️</p>
          </div>
        </div>
        <p className="text-lg mt-3">
          Embark on your path to recovery with us, where every step is met with understanding, encouragement, and unwavering support. Together, let's embrace the journey towards a brighter, addiction-free future. 🌟
        </p>
      </div>
      
    </div>
  );
};

export default AboutUsPage;
