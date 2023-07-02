import React from 'react'
import MenuData from '../components/menuData';
import AddressForm from '../components/addressForm';
import '../styles/menu.css';
import Context from '../components/Context';
import { useState} from 'react';

function Menu() {
  const [openTag , setOpenTag] = useState(false);

  return (
    <Context.Provider value={{openTag , setOpenTag}}>
      <div className='menuTagContainer' >
        <h1>Today Menu</h1>
        <MenuData/>
        <AddressForm/>
      </div>
    </Context.Provider>
  )
}

export default Menu
