import React from 'react';
import '../styles/contact.css';
function Contact() {
  return (
    <div className='contactContainer'>
      <h1>Contact</h1>
      <div className='contact'>
       <div className='contactLeftSide'>
        <form id='contact-form' method='Post'>
          <label htmlFor="fname">First Name:</label>
          <input type="text" name="firstname" placeholder='First Name..' required></input>
          <label htmlFor="lname">Last Name:</label>
          <input type="text" name="lastname" placeholder='Last Name..' required></input>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" placeholder='Email' required></input>
          <label htmlFor="Phone no">Phone Number(Optional)</label>
          <input type="number" name="quantity" placeholder='Phone NO' required ></input>
          <textarea rows='6' placeholder='Enter Message...' name='message' required></textarea>
           <button type='submit'>Send Message</button>
        </form>
        </div>
        <div className='contactRightSide'>
          <h2>Have questions, suggestions or concerns?<br/>
            We’re here for you.
           </h2>
           <p>Thank you in advance.</p>
           <p>For Rewards questions, please click the button and fill out the form.<br/>
              (please note using the general inquiry for Rewards may cause delay in response time)
            </p>
            <button type='submit'>PROVIDE FEEDBACK</button>
        </div>
     </div>
    </div>
  )
}

export default Contact;
