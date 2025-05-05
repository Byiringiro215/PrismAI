import React from 'react'
import { Link } from 'react-router-dom'
const NavbarButtons = ({setShowLogin}) => {
  return (
    <div className='hidden lg:flex justify-between gap-5 items-center '>
      <Link className='text-gray-400 hover:text-purple-600 font-bold  h-[2.5rem] w-[6rem] mt-5 ' to='http://localhost:3000/login'>Login</Link>
      
      
    
      <Link to='http://localhost:3000/register'
      className="bg-gradient-to-r from-purple-600  via-purple-700  to-pink-400 text-white px-4 py-2 rounded hover:bg-purple-700"
      
    >
      SignUp
    </Link>
    </div>
  )
}

export default NavbarButtons
