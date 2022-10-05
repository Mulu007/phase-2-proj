import React from 'react'

const Contact = () => {

  return (
    <div className="bg-black">
      <div className="space-y-8">
        <h1 className="text-5xl text-center font-extrabold text-white">
          Contact
        </h1>
        <div className="text-center text-white">
          <div className='space-y-7'>
            <h3 className="text-3xl">
              <strong>CALL US</strong>
            </h3>
            <h4>423-529-6948</h4>
            <h4>617-647-3660</h4>

          <h3 className="text-3xl">
            <strong>LOCATION</strong>
          </h3>
          <h4>8616 Hudson St. Scotch Plains, NJ 07076 </h4>

          <h3 className="text-3xl">
            <strong>BUSINESS HOURS</strong>
          </h3>
          <h4>Mon-Fri ....10am - 8pm</h4>
          <h4>Sat,Sun .....Closed</h4>
        </div>
          </div>
      </div>
     
    </div>
  );
}

export default Contact;
