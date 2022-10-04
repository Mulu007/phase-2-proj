import React from 'react'
import MenuItems from './MenuItems'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className='fixed w-full text-white flex justify-between p-4 items-center'>

      <div className="text-2xl font-bold text-center uppercase">
        <h1>e <span className='block text-4xl'>RARE</span></h1>
      </div>

      <nav>
           <div >
                <svg onClick= {showMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div> 
        <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Reviews</Link></li>
        </ul>

            <MenuItems />


      </nav>
    </div>
  )
}

export default Navbar
