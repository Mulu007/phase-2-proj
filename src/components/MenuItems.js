import React from 'react'
import { Link } from 'react-router-dom'

const MenuItems = () => {
  return (
    <div>
       <ul className=''>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Reviews</Link></li>
        </ul>
    </div>
  )
}

export default MenuItems
