import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#6A0572] text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* لوگو */}
        <div className="text-2xl font-bold tracking-wider">
          وب<span className="text-[#FF4791]"> 2</span>
        </div>

        {/* منو دسکتاپ */}
        <ul className="hidden md:flex space-x-8 font-semibold text-[#FFFFFF]">
          <Link to="/#hero">
            <li className="hover:text-[#FF4791] transition-colors cursor-pointer">
              خانه
            </li>
          </Link>
          <Link to="/#course">
            <li className="hover:text-[#FF4791] transition-colors cursor-pointer">
              مشخصات دوره
            </li>
          </Link>
          <Link to="/#students">
            <li className="hover:text-[#FF4791] transition-colors cursor-pointer">
              پرتال دانشجویان
            </li>
          </Link>
          <Link to="/#teacher">
            <li className="hover:text-[#FF4791] transition-colors cursor-pointer">
              مدرس
            </li>
          </Link>
        </ul>

        {/* آیکون منو موبایل */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* منو موبایل */}
      {menuOpen && (
        <ul className="md:hidden bg-[#6A0572] text-[#FFFFFF] font-semibold space-y-4 px-6 py-4 animate-slideDown flex flex-col">
          <Link to="/#hero">
            <li className="hover:text-[#FF4791] transition-colors cursor-pointer">
              خانه
            </li>
          </Link>
          <Link to="/#course">
            <li className="hover:text-[#FF4791] transition-colors cursor-pointer">
              مشخصات دوره
            </li>
          </Link>
          <Link to="/#students">
            <li className="hover:text-[#FF4791] transition-colors cursor-pointer">
              پرتال دانشجویان
            </li>
          </Link>
          <Link to="/#teacher">
            <li className="hover:text-[#FF4791] transition-colors cursor-pointer">
              مدرس
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
