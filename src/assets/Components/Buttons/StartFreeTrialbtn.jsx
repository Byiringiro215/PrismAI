import React from 'react'

const NavbarButtons = ({setShowLogin}) => {
  return (
    <div className='hidden lg:flex justify-between gap-5 items-center '>
        <button
      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      onClick={() => setShowLogin(true)}
    >
      Login
    </button>
      <button className='text-white font-bold rounded-full bg-gradient-to-r from-purple-400 to-blue-400 h-[2.5rem] w-[9rem]'>
Start Free Trial
      </button>
    </div>
  )
}

export default NavbarButtons
