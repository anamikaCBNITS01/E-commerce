import React from 'react'
import Category from '../Category/Category'
import CategoryNav from '../CategoryNav'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Slider from '../ImageSlider/ImageSlider'
import ImageSlider from '../ImageSlider/ImageSlider'
import Trending from '../Trending/Trending'
import { TrendingData } from '../Trending/TrendingData'

const Home = () => {
  return (
    <div>
        <CategoryNav/>
        <Slider/>
        <Trending slides={TrendingData}/>
        <Footer/>
    </div>
  )
}

export default Home