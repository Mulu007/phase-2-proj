import React from 'react'
import { Link } from 'react-router-dom'

const MenuItems = ({showMenu, active}) => {
  return (
    <div>
        {/* if active show drop down list else hide it */}
       <ul className={active ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black-40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden" : "hidden"}>
            <svg classname='cursor-pointer' onClick={showMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
        </ul>
    </div>
  )
}

export default MenuItems
