import React from 'react';
import '../styles/addressForm.css';
import { useContext } from 'react';
import Context from './Context';
import { Link } from 'react-router-dom'
function AddressForm() {
    const {openTag , setOpenTag} = useContext(Context);
  return (
    <form className='FormContainer' id={openTag ? "open" : "close"}>
        <h1>YOUR DELIVERY ADDRESS</h1>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" required></input>
        <label htmlFor="address">Apartment,suite,etc.(Optional)</label>
        <input type="text" name="address" required></input>
        <label htmlFor="city">City</label>
        <input type="text" name="city" required></input>
        <label htmlFor="number">Postal Code</label>
        <input type="number" name="postalCode" required></input>
        <label htmlFor="Phone no">Phone Number(Optional)</label>
        <input type="number" name="phoneNo" required></input>
        <button type='submit'>START ORDER</button>
    </form>
  )
}

export default AddressForm
