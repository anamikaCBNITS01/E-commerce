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
import { HouseHold } from './components/HomeAndKicthen/Data';
import ProfilePage from './components/Profile';
import EditProfile from './components/EditProfile';
import Fans from './components/Fans';
import WaterPurifeirs from './components/WaterPurifeirs'
import Mixer from './components/Mixer';
import Furniture from './components/Furniture';


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
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/editProfile' element={<EditProfile/>}/>
        <Route path='/fans' element={<Fans/>}/>
        <Route path='/water_purifeirs' element={<WaterPurifeirs/>}/>
        <Route path='/mixer' element={<Mixer/>}/>
        <Route path='/furniture' element={<Furniture/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
