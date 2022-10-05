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
      <div>
        <iframe className="w-100 h=100" src="https://www.google.com/maps/d/embed?mid=1SuwNJ-HqTWSF2Bmaur7HqmVqZBk&ie=UTF8&hl=en&msa=0&ll=-1.2897330000000091%2C36.80705299999999&spn=0.008581%2C0.010707&z=16&iwloc=0004817447742f770a649&output=embed" width={1000} height={500}></iframe>
      </div>
    </div>
  );
}

export default Contact;
