import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed'>

      <div className="logo">
        <h1>e <span>RARE</span></h1>
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
