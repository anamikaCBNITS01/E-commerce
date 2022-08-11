import Navs from './components/Navbar/Navs';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import HomeAndKicthen from './components/AllProducts/HomeAndKicthen'
import { HouseHold } from './components/AllProducts/HomeAndKicthen/Data'
import CartContainer from './components/CartContainer/CartContainer';
import Fans from './components/AllProducts/Fans';
import Mixer from './components/AllProducts/Mixer';
import Chairs from './components/AllProducts/Chairs';
import WaterPurifeirs from './components/AllProducts/WaterPurifeirs';
import Products from './components/AllProducts/TrendingProducts/Products';
import Tables from './components/AllProducts/Tables';
import Sofa from './components/AllProducts/Sofa';
import Furniture from './components/AllProducts/Furniture';
import SAF from './components/AllProducts/SportsAndFitness';
import MyOrder from './components/AllDetails/MyOrder';
import BuyProccessStepper from './components/AllDetails/BuyProcess/Buy';
import TrackOrder from './components/AllDetails/TrackOrder'
import Contact from './components/AllDetails/ContactUs/Contact'
import EditProfile from './components/AllDetails/EditProfile'
import ProfilePage from './components/AllDetails/Profile'
import Category from './components/AllDetails/Category/Category'
import Wishlist from './components/AllDetails/Wishlist/Wishlist'
import About from './components/AllDetails/About/About';

function App() {
  return (
    <BrowserRouter>
      <Navs />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category/>} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/home-and-kicthen' element={<HomeAndKicthen slides={HouseHold} />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/editProfile' element={<EditProfile />} />
        <Route path='/fans' element={<Fans />} />
        <Route path='/water_purifeirs' element={<WaterPurifeirs />} />
        <Route path='/mixer' element={<Mixer />} />
        <Route path='/furniture' element={<Furniture />} />
        <Route path='/contactUs' element={<Contact />} />
        <Route path="/buyProcess" element={<BuyProccessStepper />} />
        <Route path="/chairs" element={<Chairs />} />
        <Route path='/tables' element={<Tables />} />
        <Route path='/sofa' element={<Sofa />} />
        <Route path='/sports-and-fitness' element={<SAF />} />
        <Route path='/myOrder' element={<MyOrder />} />
        <Route path='/trackOrder' element={<TrackOrder/>} />
        <Route path='/Your-shopping-cart' element={<CartContainer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
