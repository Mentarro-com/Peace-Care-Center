import React from 'react'
import pic from './images/admin.jpg'

function Hero2() {
  return (
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16 bg-slate-50">

    <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
        <h1 href="#"
            className="max-w-3xl mx-auto text-xl sm:text-4xl font-semibold hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
        PEACE LIFE CARE CENTER</h1>
            <img className="w-full my-4"
                src={pic}
                alt="Sunset in the mountains" />
        
        <p className="text-gray-700 text-base leading-8 max-w-2xl mx-auto">
            Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 metres (7,970 ft) above sea
            level. It is located in the Cusco Region.
        </p>

        <hr />

    </div>

</div>
  )
}

export default Hero2