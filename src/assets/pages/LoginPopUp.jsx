import React, { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrstate] = useState('Login')

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 grid">
<form className="place-self-center w-[90%] sm:w-[400px] text-gray-500 bg-gradient-to-br from-[#3C0D99] via-[#5B1FA8] to-[#1C0D4D] flex flex-col gap-6 p-6 rounded-md text-sm ">
        <div className="flex justify-between items-center text-black">
          <h2 className='text-white text-[18px] font-bold'>{currState}</h2>
          <XMarkIcon
            onClick={() => setShowLogin(false)}
            className="w-5 h-5 cursor-pointer hover:bg-black hover:text-white rounded-full transition-all"
          />
        </div>

        <div className="flex flex-col gap-5">
          {currState !== 'Login' && (
            <input
              type="text"
              placeholder="Your name..."
              required
              className="outline-none border border-gray-300 p-2 rounded"
            />
          )}
          <input
            type="email"
            placeholder="Your email..."
            required
            className="outline-none border border-gray-300 p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none border border-gray-300 p-2 rounded"
          />
        </div>

        <button className="border-none py-2 rounded text-white bg-purple-500 text-base cursor-pointer">
          {currState === 'Signup' ? 'Create account' : 'Login'}
        </button>

        <div className="flex items-start gap-2 -mt-3">
          <input type="checkbox" className="mt-1" />
          <p className="text-gray-500 text-xs">
            By continuing, I agree to the terms of use & privacy policy
          </p>
        </div>

        <p className="text-gray-500 text-sm">
          {currState === 'Login' ? (
            <>
              Create account?
              <span
                className="text-gray-400 font-medium cursor-pointer ml-1"
                onClick={() => setCurrstate('Signup')}
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Already have an account?
              <span
                className="text-gray-400 font-medium cursor-pointer ml-1"
                onClick={() => setCurrstate('Login')}
              >
                Login here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  )
}

export default LoginPopUp
