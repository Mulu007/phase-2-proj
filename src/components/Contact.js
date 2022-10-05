import React, { useState } from 'react'

const Contact = () => {

  return (
    <div className='bg-black'>
      <h1 className="text-3xl text-center font-extrabold text-white">Contact</h1>
      <div className="text-center text-white">
        <h3>
          <strong>CALL US</strong>
        </h3>
        <h4>423-529-6948</h4>
        <h4>617-647-3660</h4>
        <h3>

          <strong>LOCATION</strong>
        </h3>
        <h4>8616 Hudson St. Scotch Plains, NJ 07076 </h4>

        <h3>

          <strong>BUSSINESS HOURS</strong>
        </h3>
        <h4>Mon-Fri ....10am - 8pm</h4>
        <h4>Sat,Sun .....Closed</h4>
      </div>
    </div>
  );
}

export default Contact;
