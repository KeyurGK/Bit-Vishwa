import React from "react";
// import { UserAuth } from "../context/AuthContext";

const Account = () => {
  // const { user } = UserAuth();
  const regex = /\d{2}:\d{2}:\d{2}.*/;
  // const creationTime = user.metadata.creationTime.split(regex);
  // console.log(user);
  return (
    <div className="flex justify-center items-center h-screen">
      <table className="bg-gray-500 border-4 border-purple-900 ">
        <tr className="px-2">
          <td className="border-r-2 border-purple-900 px-2 py-4">User Email</td>
          {/* <td className="px-2 py-4">{user.email}</td> */}
        </tr>
        <tr className="border-t-2 border-purple-900">
          <td className="border-r-2 border-purple-900 px-2 py-4">Created on</td>
          {/* <td className="px-2 py-4">{creationTime}</td> */}
        </tr>
      </table>
    </div>
  );
};

export default Account;
