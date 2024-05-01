import React, { useEffect } from "react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../supaBaseClient";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      localStorage.removeItem(supabase.auth.token); 
      navigate("/"); 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""
        }`}
      >
        <div className="flex items-center justify-center text-xl">
          <div className="lg:flex items-center gap-3 hidden text-body">
          <NavLink to="/dashboard" className="block text-primary hover:text-indigo-600 py-2 px-4 cursor-pointer hover:underline">
              Dashboard
            </NavLink>
            <NavLink to="/product-analyze" className="block hover:text-indigo-600 py-2 px-4 cursor-pointer hover:underline">
              Product Analyze
            </NavLink>
            <NavLink to="/profile" className="block  hover:text-indigo-600 py-2 px-4 cursor-pointer hover:underline">
              Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="block bg-red-800 rounded-md hover:text-black py-2 px-4 cursor-pointer hover:underline"
            >
              Log Out
            </button>
          </div>

         
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

       
        {isMenuOpen && (
          <div className="mt-4 bg-body p-4 rounded-lg text-indigo-600">
            <NavLink to="/dashboard" className="block hover:text-gray-400 py-2 cursor-pointer">
              Dashboard
            </NavLink>
            <NavLink to="/product-analyze" className="block hover:text-gray-400 py-2">
              Product Analyze
            </NavLink>
            <NavLink to="/profile" className="block hover:text-gray-400 py-2">
              Profile
            </NavLink>
           
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;