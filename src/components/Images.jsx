import React from "react";

const Images = (props) => {
  const { data,onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-12 p-7 bg-slate-700">
      {data.map((slide, index) => (
        <div
          className="image group relative rounded overflow-hidden "
          onClick={() => handleClickImage(index)}
          key={index}
        >
          <img
            src={slide.src}
            alt={slide.title}
            className="w-full transition duration-200 group-hover:scale-110"
          />
          <p className="cursor-pointer absolute inset-0 bg-black h-10 bg-opacity-25 border-b-2 border-slate-300 flex items-end justify-center text-2xl  text-white font-roboto font-bold group-hover:bg-opacity-60 transition">
            {slide.title}
          </p>
        </div>
      ))}


    </div>
  );
};

export default Images;
