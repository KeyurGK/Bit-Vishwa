import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify:'>
        <h3 className='text-purple-500 font-Rowdies text-4xl'>Bit-Vishwa</h3>
        <Link to ='/login'><button className='text-white'>Sign In</button></Link>
        <button className='text-white'>Sign Up</button>

    </div>
  )
}

export default Navbar