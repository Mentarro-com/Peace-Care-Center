import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaAddressBook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-gray-900 pt-9">
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          <div className="md:w-[316px] ">
            <h1 className="text-white font-extrabold text-[18px]">
              <span className="text-green-800">P </span>L
            </h1>
            <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
              Peace Life Care Centre in Chennai is one of the leading businesses
              in the Rehabilitation Centre For Alcohol. Also known for
              Rehabilitation Centre For Alcohol, Rehabilitation Centre For Drug
              Addiction and much more Healing Hands Hub, Chennai.
            </p>
            <div className="mt-[18px] flex gap-4 text-white">
              <a
                href="tel:+919789053645"
                target="_blank"
                className="hover:scale-110 hover:text-green-800"
                rel="noopener noreferrer"
              >
                <FiPhone className="text-[30px]" />
              </a>
              <a
                href="https://www.instagram.com/peace_life_care_center?igsh=MTAxNWUyZmhqaXBkaA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-pink-800"
              >
                <FaInstagram className="text-[30px]" />
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=+919789053645"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-green-800"
              >
                <FaWhatsapp className="text-[30px]" />
              </a>
              <a
                href="mailto:pandian121212@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-red-800"
              >
                <FiMail className="text-[30px]" />
              </a>
            </div>
          </div>
          <div className="md:w-[316px] mt-7">
            <div className="mt-[23px] flex">
              <div className="flex h-[28px] w-[38px] items-center justify-center rounded-[75%] text-white text-[22px] hover:text-green-600">
                <FiPhone />
              </div>
              <div className="ml-[18px]">
                <a
                  href="tel:+919789053645"
                  className="font-Inter text-[16px] font-medium text-white"
                >
                  +91 9789053645
                </a>
              </div>
            </div>
            <div className="mt-[23px] flex">
              <div className="flex h-[28px] w-[38px] items-center justify-center rounded-[75%] text-white text-[22px] hover:text-red-500">
                <FiMail />
              </div>
              <div className="ml-[18px]">
                <a
                  href="mailto:pandian121212@gmail.com"
                  className="font-Inter text-[16px] font-medium text-white"
                >
                  pandian121212@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-[23px] flex">
              <div className="flex h-[28px] w-[74px] items-center justify-center rounded-[75%] text-white text-[22px] hover:text-blue-600">
                <FaAddressBook />
              </div>
              <div className="ml-[18px]">
                <a
                  href="mailto:pandian121212@gmail.com"
                  className="font-Inter text-[16px] font-medium text-white"
                >
                  No.3, 12th Street, Balaji Nagar, Anakaputhur, Pallavaram, Chennai-600070.
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px] mt-20">
            <div className="">
              <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
                Pages
              </p>
              <ul className="mt-2 sm:mt-3 p-0">
                {" "}
                {/* Adjusted margin for small screens */}
                <li className="lg:mt-[9px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="lg:mt-[9px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/AboutPage"
                  >
                    About
                  </a>
                </li>
                <li className="lg:mt-[9px]">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/ServicePage"
                  >
                    Services
                  </a>
                </li>
                <li className="lg:mt-[9px] ">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/GalleryPage"
                  >
                    Gallery
                  </a>
                </li>
                <li className="lg:mt-[9px] ">
                  <a
                    className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                    href="/ContactPage"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:mt-0 ml-[40px]">
              <p className="text-deutziawhite font-inter text-[18px] text-white font-medium">
                Our Location
              </p>
              <div className="relative h-[200px] w-[200px]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  title="Google Maps"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8717841750426!2d80.1275065117444!3d12.980051511049496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f9ac9a74fe9%3A0xe56cb1f80ea3e01c!2sPeace%20LIfe%20Care%20Centre!5e0!3m2!1sen!2sin!4v1718463332648!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-[30px] text-white" />
        <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
          <p className="text-[10px] font-normal text-white md:text-[12px]">
            © Copyright 2024, All Rights Reserved by PEACE LIFE CARE CENTER
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
