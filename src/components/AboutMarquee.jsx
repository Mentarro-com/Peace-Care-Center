import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';

const TechStackMarquee = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.tech-item');

    let totalWidth = 0;
    items.forEach(item => {
      totalWidth += item.clientWidth;
    });

    const clonedItems = Array.from(items).map(item => item.cloneNode(true));
    clonedItems.forEach(clonedItem => {
      container.appendChild(clonedItem);
    });

    let animationFrame;
    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 1;
      container.scrollTo(scrollAmount, 0);
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    scroll();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="text-white font-extrabold text-3xl py-9 mb-12">
      <h1 className='text-black ml-20 mb-12 py-3'><span className='text-red-600'>Our</span> Services </h1>
      <Marquee pauseOnClick>
        <div className="overflow-hidden px-4 md:px-0">
          <div ref={containerRef} className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 xl:space-x-28 text-6xl">
            <div className="tech-item flex items-center" style={{ marginLeft: '20px' }}>
              <img src="./images/service1.jpg" className="h-40 w-40" />
            </div>
            <div className="tech-item flex items-center">
              <img src="./images/service2.jpg" className="h-40 w-40" />
            </div>
            <div className="tech-item flex items-center">
              <img src="./images/service3.jpg" className="h-40 w-40" />
            </div>
            <div className="tech-item flex items-center">
              <img src="./images/service4.webp" className="h-40 w-40" />
            </div>
            <div className="tech-item flex items-center">
              <img src="./images/service5.webp" className="h-40 w-40" />
            </div>
            <div className="tech-item flex items-center">
              <img src="./images/service6.jpg" className="h-40 w-40" />
            </div>
            <div className="tech-item flex items-center">
              <img src="./images/service7.jpg" className="h-40 w-40" />
            </div>
            <div className="tech-item flex items-center">
              <img src="./images/service8.jpg" className="h-40 w-40" />
            </div>
            <div className="tech-item flex items-center">
              <img src="./images/service9.jpg" className="h-40 w-40" />
            </div>
            <div className="tech-item flex items-center" style={{ marginRight: '20px' }}>
              <img src="./images/service10.jpg" className="h-40 w-40" />
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default TechStackMarquee;
