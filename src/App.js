import Navs from './components/Navbar/Navs';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
      <Navs/>
    </BrowserRouter>
  );
}

export default App;
