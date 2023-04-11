import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between mt-[2%]'>
        <Link to ='/'><h3 className='text-purple-500 font-Rowdies text-4xl'>Bit-Vishwa</h3></Link>
        <div  className='flex justify-around w-[20%]'>
        <Link to ='/login'><button className='text-white hover:border-pink-300 hover:px-4 hover:py-2 hover:rounded-md hover:bg-pink-300'>Sign In</button></Link>
        <Link to ='/signup'><button className='text-white  hover:border-pink-300 hover:px-4 hover:py-2 hover:rounded-md hover:bg-pink-300'>Sign Up</button></Link>
        </div>
    </div>
  )
}

export default Navbar