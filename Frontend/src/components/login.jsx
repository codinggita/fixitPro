import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Technicians", path: "/technicians" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#cfc1b9] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Fixit<span className="text-white">Pro</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-800 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Button */}
        <Link
          to="/book-service"
          className="hidden md:inline-block bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
        >
          Book Repair
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;