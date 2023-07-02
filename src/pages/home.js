import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="homeTagContainer">
      <div className='homeTag'>
        <h1>Legendary Burger</h1>
        <h3>Burger To Fit Any Taste</h3>
        <Link to="menu">
        <button type="submit">Order Now!</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
