import Navs from './components/Navbar/Navs';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Trending from './components/Trending/Trending';
import { TrendingData } from './components/Trending/TrendingData';
import Header from './components/Header/Header';
import Category from './components/Category/Category';
import Wishlist from './components/Wishlist/Wishlist';
import SideBar from './components/Sidebar/SideBar';
import Products from './components/TrendingProducts/Products';
import About from './components/About/About';
import HomeAndKicthen from './components/HomeAndKicthen';
import { HouseHold } from './components/HomeAndKicthen/HouseHoldData';

function App() {
  return (
    <BrowserRouter>
      <Navs />
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/home-and-kicthen' element={<HomeAndKicthen slides={HouseHold}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
