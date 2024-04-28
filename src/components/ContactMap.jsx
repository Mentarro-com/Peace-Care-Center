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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
      </div>
      <div className="container px-6 md:px-12 mt-28">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              {/* <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="exampleInput90" />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    htmlFor="exampleInput90">Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input type="email"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="exampleInput91" />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    htmlFor="exampleInput91">Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="exampleFormControlTextarea1" rows="3"></textarea>
                  <label htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Message</label>
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
                    className="peer opacity-0 absolute h-0 w-0"
                    id="formCheck-1"
                    type="checkbox"
                    
                  />
                </div>
                <button
                  className="w-full px-6 py-3 mt-3 text-lg font-semibold bg-green-400 rounded shadow-md hover:bg-[#3d5eff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
                  type="submit">Send Message</button>
              </form> */}
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
                      <p className="text-lg font-semibold text-neutral-900">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="mb-6 flex items-center">
                    <div className="mr-6">
                    <AiOutlineMail className="w-8 h-8 fill-current text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 text-neutral-700">Email:</p>
                      <p className="text-lg font-semibold text-neutral-900">info@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-6">
                    <AiOutlineEnvironment className="w-8 h-8 fill-current text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 text-neutral-700">Address:</p>
                      <p className="text-lg font-semibold text-neutral-900">1234 Example St, San Francisco, CA 94110</p>
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
