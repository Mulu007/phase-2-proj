import React from 'react'
import { Link } from 'react-router-dom'

const MenuItems = () => {
  return (
    <div>
       <ul className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
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
