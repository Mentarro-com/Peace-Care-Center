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
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.864004592304!2d80.12908827507655!3d12.9805488873357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzUwLjAiTiA4MMKwMDcnNTQuMCJF!5e0!3m2!1sen!2sin!4v1718204192531!5m2!1sen!2sin"
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
                      <p className="text-lg font-semibold text-neutral-900">+91 96770 95098</p>
                    </div>
                  </div>
                  <div className="mb-6 flex items-center">
                    <div className="mr-6">
                    <AiOutlineMail className="w-8 h-8 fill-current text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 text-neutral-700">Email:</p>
                      <p className="text-lg font-semibold text-neutral-900">gogreencare2020@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-6">
                    <AiOutlineEnvironment className="w-8 h-8 fill-current text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 text-neutral-700">Address:</p>
                      <p className="text-lg font-semibold text-neutral-900">1No:15/179, Rajaji Street, Moovar Nagar, Pozhichalur, Chennai - 600074.</p>
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
