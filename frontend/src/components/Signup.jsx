import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignUpValidation } from '../validation/SignUpValidation'
import useAuthStore from '../zustand/useAuthStore'
import { toast } from 'sonner';
// import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  useEffect(()=>{

  },[])
  const {loading,responseMessage,signUpAccount,error}=useAuthStore();
  const [formState,setFormState]=useState({
    firstName:"",
    lastName:"",
    emailId:"",
    password:""
  })
  const [errors,setErrors]=useState({});

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationResult = SignUpValidation(formState);
    if (Object.keys(validationResult).length > 0) {
      setErrors(validationResult);
      return;
    }
  
    await signUpAccount(formState,toast,navigate);
  
    // Show toast for both success and error
    // if (responseMessage) {
    //   toast.success(responseMessage);
    //   navigate('/login'); // redirect after success if needed
    // } else if (error) {
    //   toast.error(error);
    // }
  };
  const handleChange = (e)=>{
    const{name,value}=e.target;   
    setFormState((prev)=>{
    return{
      ...prev,
     [name]:value
    }
     
    })
  }
  return (
    <div className=' mx-[25%] mt-[5%] bg-gray-500 border-4 border-purple-900'>
 
      <div className='flex flex-col  justify-center pt-8'>

        <form className ='flex flex-col items-center justify-center mx-4' onSubmit = {handleSubmit}>
         
          <input name="firstName" className='w-[60%] mx-[25%] text-purple-300 px-2 py-3 border-4 rounded border-purple-900' type="text" placeholder='First Name' onChange={(e)=>handleChange(e)}/>
          {errors.firstName && <p className='text-purple-300 text-xs mr-[40%]'>{errors.firstName}</p>}
          <input name="lastName" className='w-[60%] text-purple-300 mx-[25%] mt-2 px-2 py-3 border-4 rounded border-purple-900' placeholder="Last Name" type="text" onChange={(e)=>handleChange(e)}/>
          {errors.lastName &&  <p className='text-purple-300 text-xs mr-[40%]'>{errors.lastName}</p>}
          <input name="emailId" className='w-[60%] text-purple-300 mx-[25%] mt-2 px-2 py-3 border-4 rounded border-purple-900' type='email' placeholder='Email' onChange={(e)=>handleChange(e)}/>
          {errors.emailId &&  <p className='text-purple-300 text-xs mr-[40%]'>{errors.emailId}</p>}
          <input name="password" className='w-[60%] text-purple-300 mx-[25%] mt-2 px-2 py-3 border-4 rounded border-purple-900' type='password' placeholder='Password' onChange={(e)=>handleChange(e)}/>
          {errors.password &&  <p className='text-purple-300 text-xs ml-[20%]'>{errors.password}</p>}
          <button className=' w-32 h-16 mx-[40%] mt-[5%]  text-purple-300 font-rowdies text-lowercase border-4 border-purple-900 bg-purple-300 hover:bg-purple-500 ' onClick={handleSubmit}>{loading ? 'Signing Up...':"Sign Up"}</button>

        </form>

      </div>

          

      <p className='text-white flex justify-center mt-4'>Have an Account ?<Link to ='/login'><span className='text-purple-300 font-rowdies hover:text-purple-900 ml-2'>{' '}Sign In</span></Link></p>
    
    </div>
  )
}

export default Signup