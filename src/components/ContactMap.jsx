import React from 'react';
import ContactForm from '../components/ContactForm'
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineEnvironment } from 'react-icons/ai';

const ContactPage = () => {
  return (
    <section className="mb-32">
      <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62205.81511082331!2d80.05537654863281!3d12.980584699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f9ac9a74fe9%3A0xe56cb1f80ea3e01c!2sPeace%20Life%20Care%20Centre!5e0!3m2!1sen!2sin!4v1718463705118!5m2!1sen!2sin"
          width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
      </div>
      <div className="container px-6 md:px-12 mt-28">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <ContactForm />
            </div>
            <div className="w-full md:w-7/12">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <h2 className="text-3xl font-semibold leading-[1.2] mb-4 text-neutral-900">Contact Information</h2>
                  <p className="mb-2 text-lg text-neutral-700">You can reach us via email, phone or visit us in person by scheduling an appointment.</p>
                </div>
                <div className="w-full mt-10">
                  <div className="mb-6 flex items-center">
                    <div className="mr-6">
                    <FiPhone className="w-8 h-8 fill-current text-primary" />                   
                     </div>
                    <div>
                      <p className="mb-1 text-neutral-700">Phone:</p>
                      <p className="text-lg font-semibold text-neutral-900">+91 9789053645</p>
                    </div>
                  </div>
                  <div className="mb-6 flex items-center">
                    <div className="mr-6">
                    <AiOutlineMail className="w-8 h-8 fill-current text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 text-neutral-700">Email:</p>
                      <p className="text-lg font-semibold text-neutral-900">pandian121212@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-6">
                    <AiOutlineEnvironment className="w-8 h-8 fill-current text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 text-neutral-700">Address:</p>
                      <p className="text-lg font-semibold text-neutral-900"> No.3, 12th Street, Balaji Nagar, Anakaputhur, Pallavaram, Chennai-600070.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
