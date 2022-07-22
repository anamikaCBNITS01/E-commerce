import React from 'react'
import Footer from '../Footer/Footer'
import Slider from '../ImageSlider/ImageSlider'
import ImageSlider from '../ImageSlider/ImageSlider'
import Trending from '../Trending/Trending'
import { TrendingData } from '../Trending/TrendingData'

const Home = () => {
  return (
    <div>
       
        <Slider/>
        <Trending slides={TrendingData}/>
        <Footer/>
    </div>
  )
}

export default Home