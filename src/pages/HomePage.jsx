import React from 'react'
import HomeBg from '../components/HomeBg'
import HomeService from '../components/HomeService'
import CircleSlider from '../components/CircleSlider'
import ImageSlider from '../components/ImageSlider'

const HomePage = () => {
  return (
    <div >
      <HomeBg />
      <ImageSlider />
      <CircleSlider />
      <HomeService />
    </div>
  )
}

export default HomePage