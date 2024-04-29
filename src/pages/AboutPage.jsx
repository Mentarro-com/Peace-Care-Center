import React from 'react'
import Testimonial from '../components/Testimonial'
import AboutStep from '../components/AboutStep'
import Aboutfirst from '../components/Aboutfirst'
import Marquee from '../components/AboutMarquee'

const AboutPage = () => {
  return (
    <div className='text-black' >
      <Aboutfirst />
      <AboutStep />
      <Testimonial />
      <Marquee />
    </div>
  )
}

export default AboutPage