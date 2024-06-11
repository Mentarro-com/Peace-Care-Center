import React from "react";

const Images = (props) => {
  const { data,onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-12 p-7 bg-slate-900">
      {data.map((slide, index) => (
        <div
          className="image group relative rounded overflow-hidden "
          onClick={() => handleClickImage(index)}
          key={index}
        >
          <img
            src={slide.src}
            alt={slide.description}
            className="w-full transition duration-200 group-hover:scale-110"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center text-2xl  text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            {slide.description}
          </p>
        </div>
      ))}


    </div>
  );
};

export default Images;
