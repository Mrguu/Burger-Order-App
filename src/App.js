import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';
import Contact from './pages/contact';
import backgroundImg from './img/burgerbg.jpg';
import Footer from './components/footer';
function App() {
  return (
    <BrowserRouter>
    <div className='MainContainer' style={{backgroundImage: `url(${backgroundImg})`}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Burger-Order-App' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
} 

export default App;
