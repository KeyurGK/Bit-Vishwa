import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/useAuthStore";

const Navbar = () => {
  // const { user, logOut } = UserAuth();
  const {isAuthenticated,logoutAccount}=useAuthStore()
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAccount();
    navigate("/")
    // try {
    //   // await logOut();
    //   console.log("called")
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    // }
  };
 
  return (
    <div className="flex justify-between mt-[2%]">
      {isAuthenticated ? (
        <Link to="/home">
          <h3 className="text-purple-500 font-rowdies text-4xl">Bit-Vishwa</h3>
        </Link>
      ) : (
        <Link to="/">
          <h3 className="text-purple-500 font-rowdies text-4xl">Bit-Vishwa</h3>
        </Link>
      )}
      {isAuthenticated ? (
        <div className="flex justify-around w-[20%]">
          {/* <Link to="/account"> */}
            <button className="text-purple-400 border border-purple-600 rounded-md px-4 py-2 hover:rounded-md hover:bg-purple-500">
              Account
            </button>
          {/* </Link> */}
        
            <button
              onClick={handleLogout}
              className="text-purple-400 border border-purple-600 rounded-md px-4 py-2 hover:rounded-md hover:bg-purple-500 cursor-pointer"
            >
              Log Out
            </button>
         
        </div>
      ) : (
        <div className="flex justify-around w-[20%]">
          <Link to="/login">
            <button className="text-purple-400 border border-purple-500 rounded-md cursor-pointer px-4 py-2 hover:rounded-md hover:bg-purple-500">
              Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className="text-purple-400 border border-purple-500 rounded-md cursor-pointer px-4 py-2 hover:rounded-md hover:bg-purple-500">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
