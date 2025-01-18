import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/LOGO.svg";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual authentication logic

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "#resources", label: "Resources" },
    { href: "#instructors", label: "Instructors" },
  ];

  return (
    <nav
      className={`w-full h-[7ch] bg-neutral-100/90 flex items-center justify-between 
      rounded-b-lg border-b-2 border-gray-300 shadow-md 
      px-5 fixed top-0 z-50`}
    >
      {/* Logo Section */}
      <Link to="/" className="text-xl text-neutral-800 font-bold mr-16">
        <span>
          <img className="max-w-44 h-32 pt-2" src={logo} alt="Logo" />
        </span>
      </Link>

      {/* Conditional Rendering for Navigation Links */}
      {isLoggedIn ? (
        <div className="flex space-x-5">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-neutral-800 hover:text-blue-600 font-medium text-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex items-center w-full justify-between">
          {/* Centered Navigation Links */}
          <div className="flex-grow flex justify-center space-x-5">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-neutral-800 hover:text-blue-600 font-medium text-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Login Button */}
          <div className="ml-auto">
            <Link
              to="/signup"
              className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 font-medium"
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
