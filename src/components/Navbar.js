import React , { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import TocIcon from '@mui/icons-material/Toc';
import './Navbar.css';
function Navbar() {
  const [openLinks , setOpenLinks] = useState(false);

  useEffect(()=>{
    let handler = () =>{
      setOpenLinks(false);
    };
    document.addEventListener("mousedown",handler);
  })

  return (
    <div className='NavContainer'>
        <div className='NavRightSide' id={openLinks ? "open" : "close"}>
        <h1 className='Logo'>LOGO</h1>
        <div className='hiddenLinks'>
            <Link to="/" className='home'>Home</Link>
            <Link to="menu" className='menu'>Menu</Link>
            <Link to="about" className='about'>About</Link>
            <Link to="contact" className='contact'>Contact</Link>
        </div>
        </div>
        <div className='NavLeftSide'>
            <Link to="/">Home</Link>
            <Link to="menu">Menu</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <button onClick={()=>{ setOpenLinks(!openLinks)}}>
              <TocIcon/>
            </button>
        </div>
    </div>
  );
};

export default Navbar
