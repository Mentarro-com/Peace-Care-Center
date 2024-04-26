import React from 'react'

const PhotoTwo = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-12 p-7">

    <div className="relative rounded overflow-hidden">
      <img src="https://source.unsplash.com/400x300/?hanging-planters" alt="Hanging Planters" className="w-full" />
       
      <p
        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center text-2xl  text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
        Hanging Planters
      </p>
    </div>
    
    <div className="relative rounded overflow-hidden">
      <img src="https://source.unsplash.com/400x300/?candle-stand" alt="Candle Stand" className="w-full" /> 
      <p
        className="cursor-pointer aniamte- absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
        Candle Stand
      </p>
    </div>

    
    <h1
      className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-black font-bold">
      Hello World
    </h1>
   
  </div>
  )
}

export default PhotoTwo