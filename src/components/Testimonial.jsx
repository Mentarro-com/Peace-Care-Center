//import React, { useState, useEffect } from 'react';
import SwiperCore from 'swiper/core';
import  { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Testimonial() {
    const testimonials = [
        {
            id: 1,
            rating: 4.9,
            content: "GoGreenCare's Alcohol De-Addiction Centre saved me from despair. Their dedicated team and effective methods gave me a second chance at life. Forever grateful and i extend my sincere gratitude.",
            author: "Jane D",
            avatar: "https://pagedone.io/asset/uploads/1696229969.png"
        },
        {
            id: 2,
            rating: 4.9,
            content: "GoGreenCare's Drug De-Addiction Centre provided a lifeline when I was lost. Their compassionate approach and unwavering support helped me reclaim my future. I'm experiencing a significant improvement..",
            author: "Jonas P.",
            avatar: "https://pagedone.io/asset/uploads/1696229994.png"
        },
        {
            id: 3,
            rating: 4.9,
            content: "Thanks to GoGreenCare's Psychiatric Service, I found stability and hope. Their expertise and genuine care guided me through my darkest moments, restoring my confidence and purpose.",
            author: "Adam M.",
            avatar: "https://pagedone.io/asset/uploads/1696230027.png"
        },
        {
            id:4,
            rating: 4.9,
            content: "Gratitude fills my heart for GoGreenCare's Counseling. Their empathetic therapists offered me solace and wisdom, empowering me to navigate life's challenges with resilience and optimism.",
            author: "Regina P.",
            avatar: "https://pagedone.io/asset/uploads/1696238396.png"
        }
    ];

    return (
        <section className="py-24 bg-slate-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <span className="text-sm text-white font-medium text-center block mb-2">TESTIMONIAL</span>
                    <h2 className="text-4xl text-center font-bold text-white">What our happy user says!</h2>
                </div>
                <SwiperReact
                    slidesPerView={1}
                    spaceBetween={32}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    effect="slide"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 32,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 32,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 32,
                        },
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="swiper-slide">
                                <div className="group text-gray-300 hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-xl p-6 w-full mx-auto overflow-hidden relative">
                                    <div>
                                        <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                                            <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                    fill="currentColor" />
                                            </svg>
                                            <span className="text-base font-semibold text-indigo-600">{testimonial.rating}</span>
                                        </div>
                                        <p className="text-base text-gray-400 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-300 slide_active:text-gray-400">
                                            {testimonial.content}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                                        <img className="h-10 w-10 rounded-full" src={testimonial.avatar} alt="avatar" />
                                        <div className="block">
                                            <h5 className="text-gray-300 font-medium transition-all duration-500 mb-1">{testimonial.author}</h5>
                                        </div>
                                    </div>
                                    <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
                                    <div className="group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="mt-8"></div>
                    <div className="swiper-pagination "></div>
                </SwiperReact>
            </div>
        </section>
    );
}

export default Testimonial;
