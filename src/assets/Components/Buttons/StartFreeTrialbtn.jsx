import React from 'react'

const NavbarButtons = ({setShowLogin}) => {
  return (
    <div className='hidden lg:flex justify-between gap-5 items-center '>
      
      <button className='text-gray-400 hover:text-purple-600 font-bold  h-[2.5rem] w-[6rem] '>
Login
      </button>
      <button
      className="bg-gradient-to-r from-purple-600  via-purple-700  to-pink-400 text-white px-4 py-2 rounded hover:bg-purple-700"
      
    >
      SignUp
    </button>
    </div>
  )
}

export default NavbarButtons
