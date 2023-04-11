import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h4>Log In</h4>
      <div className='flex flex-col'>
      <form className='flex flex-col align-center'>
        <input type='email' placeholder='Email'/>
        <input type='password' placeholder='Password'/>
      </form>
      <button className='text-white'>Log In</button>
      </div>
      <div className='flex'>
      <input type='checkbox'/>
      <p className='text-white'>Remeber Me</p>
      <p className='text-white'>Need Help?</p>
      </div>      
      <p className='text-white'>New to Bit-Vishwa<Link to ='/signup'><span>Sign Up</span></Link></p>
    </div>
  )
}

export default Login