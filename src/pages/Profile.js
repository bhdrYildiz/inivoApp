import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state);
  return (
    <div>
      <Navbar />
      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <div className="flex items-center justify-center">
          <img
            className="w-44 h-44 rounded-full"
            src="avatar2.jpg"
            alt="Avatar"
          />
        </div>
        <div className="mt-8 flex flex-col gap-5">
          <span className="text-l font-semibold">Name : {user?.fullname}</span>
          <span className="text-l font-semibold">
            Email : {user?.auth?.email}
          </span>
          <span className="text-l font-semibold">
            Password : {user?.password}{" "}
          </span>
          <span className="text-l font-semibold">
            Country : {user?.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
