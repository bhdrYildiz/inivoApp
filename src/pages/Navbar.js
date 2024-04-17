import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-4 bg-gray-800 text-white">
    <div className="text-xl font-serif">
      <div className="flex items-center my-2 cursor-pointer">
        <span className="mx-10 hover:underline">Dashboard</span>
        <span className="mx-10 hover:underline">Product Analyze</span>
        <span className="mx-10 hover:underline">Profile</span>
      </div>
    </div>
  </nav>
  )
}

export default Navbar