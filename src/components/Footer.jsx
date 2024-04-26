import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
      <footer className="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40">
        <div className="container z-[1] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
            <div className="col-span-1 md:col-span-2 sm:text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4 text-white">Go Green Care Centre</h2>
              <p className="text-gray-300">
              Go Green Care Centre in Chennai is one of the leading businesses in the Rehabilitation Centre For Alcohol. Also known for Rehabilitation Centre For Alcohol, Rehabilitation Centre For Drug Addiction and much more Go Green Care Centre, Chennai.  
              </p>
              <div className="flex space-x-5 mt-7 ">
                <a href="/" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="/" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="/" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="/" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
  
            <div className='sm:text-center md:text-left text-gray-300'>
              <h3 className="text-xl font-bold text-white mb-4">Useful Links</h3>
              <ul>
                <li><a href="/" className="hover:text-sky-400 transition">Home</a></li>
                <li><a href="/" className="hover:text-sky-400 transition">About Us</a></li>
                <li><a href="/" className="hover:text-sky-400 transition">Gallery</a></li>
                <li><a href="/" className="hover:text-sky-400 transition">Contact Us</a></li>
                <li><a href="/" className="hover:text-sky-400 transition">Terms of service</a></li>
                <li><a href="/" className="hover:text-sky-400 transition">Privacy policy</a></li>
              </ul>
            </div>
  
            {/* Services */}
            <div className='sm:text-center md:text-left text-gray-300'>
              <h3 className="text-xl text-white font-bold mb-4">Our Services</h3>
              <ul>
                <li><a href="/" className="hover:text-sky-400 transition">Alcohol De-Addiction Centre</a></li>
                <li><a href="/" className="hover:text-sky-400 transition">Drug De Addiction Centre</a></li>
                <li><a href="/" className="hover:text-sky-400 transition">Psychiatric Service</a></li>
                <li><a href="/" className="hover:text-sky-400 transition">All Types Of Counseling</a></li>
                <li><a href="/" className="hover:text-sky-400 transition">Smoking De-Addiction Centre</a></li>
                
              </ul>
            </div>
  
         
            <div className='sm:text-center md:text-left text-gray-300'>
              <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
              <ul>
                <li>No:15/179, Rajaji Street, Moovar Nagar,</li>
                <li>Pozhichalur,</li>
                <li>Chennai - 600074</li>
                <li>gogreencare2020@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
  
        <p className="text-center z-[1] mt-8 text-white-300">&copy; Copyright Go Green Care Centre Pozhichalur. All rights reserved</p>

      
        <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
            <div aria-hidden="true" className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
        </div>

       
        <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"></div>
      </footer>
    );
  }
  
 
  
export default Footer;
