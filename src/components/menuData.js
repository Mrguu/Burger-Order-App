import React from 'react'
import { useState , useEffect } from 'react';
import '../styles/menuData.css';
import { useContext } from 'react';
import Context from './Context';
const url = 'https://free-food-menus-api-production.up.railway.app/burgers';
function MenuData() {
    const {openTag , setOpenTag} = useContext(Context);
const [products , setProducts] = useState([]);
 async function getProducts() {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
 }

 useEffect(()=>{
    getProducts();
 },[]);

 return(
    <div className='menuDataContainer'>
        <ul>
            {products.map((product) => {
                return(
                    <li key={product.id}>
                        <div className='card' onClick={()=>{setOpenTag(!openTag)}}>
                            <img src={product.img} className='productImg'/>
                            <h3 className='productName'>{product.name}</h3>
                            <p className='productDsc'>{product.dsc}</p>
                            <h4 className='productPrice'>${product.price}</h4>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
 )
}

export default MenuData
