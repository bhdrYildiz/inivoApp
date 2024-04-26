import React from "react";
import Navbar from "./Navbar";

const Profile = () => {
  
  return (
    <div>
      <Navbar />
      <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <img
          class="w-50 h-50 rounded mx-auto mt-2"
          src="https://picsum.photos/200"
          alt=""
        />
        <div class="mt-8 flex flex-col gap-5">
          <span class="text-l font-semibold">Full Name : </span>
          <span class="text-l font-semibold">Country : </span>
          <span class="text-l font-semibold">Email : </span>
          <span class="text-l font-semibold">Phone : </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
