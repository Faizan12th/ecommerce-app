import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-gray-900 py-16 px-6 text-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* Left Section - Logo and Description */}
        <div className="space-y-6 sm:space-y-10">
          <img src={assets.logo} className="w-32 mx-auto sm:mx-0 mb-4" alt="Logo" />
          <p className="text-sm sm:text-base text-gray-400">
            Elevating your style with exclusive collections. Join us and stay ahead with the best deals and updates.
          </p>
        </div>

        {/* Middle Section - Company Links */}
        <div className="space-y-6 sm:space-y-10">
          <h4 className="text-xl font-semibold text-teal-300 mb-5">COMPANY</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-teal-400 transition-all duration-300">Home</li>
            <li className="hover:text-teal-400 transition-all duration-300">About Us</li>
            <li className="hover:text-teal-400 transition-all duration-300">Delivery</li>
            <li className="hover:text-teal-400 transition-all duration-300">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section - Contact Information */}
        <div className="space-y-6 sm:space-y-10">
          <h4 className="text-xl font-semibold text-teal-300 mb-5">GET IN TOUCH</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-teal-400 transition-all duration-300">+92-345-9999999</li>
            <li className="hover:text-teal-400 transition-all duration-300">forever@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-12">
        <hr className="border-gray-700" />
        <p className="text-sm text-center text-gray-400 py-5">
          &copy; 2025 forever.com - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
