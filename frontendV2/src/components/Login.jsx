import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginValidation } from "../validation/LoginVlidation";
import useAuthStore from "../zustand/useAuthStore";
import { toast } from "sonner";
// import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const {loginAccount,loading,responseMessage,error}=useAuthStore();
  const [formState,setFormState]=useState({
    emailId:"",
    password:""
  })
const handleChange = (e)=>{
const {name,value}=e.target;
setFormState((prev)=>({
  ...prev,
  [name]:value
}))
}
  const [errors, setErrors] = useState("");
  // const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationResult = LoginValidation(formState);
  
    if(Object.keys(validationResult).length > 0){
      setErrors(validationResult);
      return;
    }

      await loginAccount(formState);
    
      if(responseMessage){
       
        toast.success(responseMessage)
        // navigate("/home");
      }else if(error){
      
      toast.error(error)
        
      }     
   
  };
  return (
    <div className=" mx-[25%] mt-[5%] bg-gray-500 border-4 border-purple-900">
      <div className="flex flex-col  justify-center pt-8">
        <form
          className="flex flex-col items-center justify-center mx-4"
          onSubmit={handleSubmit}
        >
          <input
            className="w-[60%] mx-[25%] px-2 py-3 border-4 rounded border-purple-900"
            type="email"
            placeholder="Email"
            name="emailId"
            onChange={(e) => handleChange(e)}
          />
          {
            errors.emailId && <p className='text-red-700 text-xs mr-[40%]'>{errors.emailId}</p>
          }
          <input
            className="w-[60%] mx-[25%] mt-2 px-2 py-3 border-4 rounded border-purple-900"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </form>
        {
            errors.password && <p className='text-red-700 text-xs mt-[1%] ml-[10%]'>{errors.password}</p>
          }
        <button
          className=" w-32 h-16 mx-[40%] mt-[5%] text-black font-rowdies text-lowercase border-4 border-purple-900 bg-purple-300 hover:bg-purple-500 "
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </div>

      <div className="flex justify-around mt-4">
        <div className="flex">
          <input type="checkbox" />
          <p className="text-white ml-2">Remember Me</p>
        </div>
        <p className="text-white">Need Help?</p>
      </div>

      <p className="text-white flex justify-center mt-4">
        New to Bit-Vishwa ?
        <Link to="/signup">
          <span className="text-black font-rowdies hover:text-purple-900 ml-2">
            {" "}
            Sign Up
          </span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
