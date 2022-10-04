import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full text-white flex justify-between p-4 items-center'>

      <div className="text-2xl font-bold text-center uppercase">
        <h1>e <span className='block text-4xl'>RARE</span></h1>
      </div>

      <nav>

        <ul className='md:flex gap-8 p-6 uppercase bg-white/10'>
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
