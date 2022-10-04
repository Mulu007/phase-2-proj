import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full text-white flex justify-between p-4 items-center'>

      <div className="text-2xl font-bold text-center">
        <h1>e <span className='block uppercase text-4xl'>RARE</span></h1>
      </div>

      <nav>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Reviews</Link></li>
        </ul>



      </nav>
    </div>
  )
}

export default Navbar
