import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=' mx-[25%] mt-[5%] bg-gray-300'>

      <div className='flex flex-col'>

        <form className='flex flex-col align-center justify-center mx-4'>
          <input className='w-[60%] mx-[25%] px-2 py-3 border-4 rounded border-purple-500' type='email' placeholder='Email'/>
          <input className='w-[60%] mx-[25%] mt-2 px-2 py-3 border-4 rounded border-purple-500' type='password' placeholder='Password'/>
        </form>

        <button className=' w-32 h-16 mx-[40%] text-white border-4 border-purple-900 bg-purple-300 hover:bg-purple-500 '>Log In</button>
      </div>

      <div className='flex border border-red-500 justify-around mt-2'>
      <div className='flex'>
      <input type='checkbox'/>
      <p className='text-white ml-2'>Remember Me</p>
      </div>
      <p className='text-white'>Need Help?</p>
      </div>      
      <p className='text-white flex justify-center mt-2'>New to Bit-Vishwa ?<Link to ='/signup'><span className='text-purple-300 hover:text-purple-500 ml-2'>{' '}Sign Up</span></Link></p>
    </div>
  )
}

export default Login