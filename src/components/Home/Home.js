import React from 'react'
import CategoryNav from '../AllDetails/CategoryNav'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Slider  from '../AllProducts/ImageSlider/ImageSlider'

import Trending from '../AllProducts/Trending/Trending'
import { TrendingData } from '../AllProducts/Trending/TrendingData'

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