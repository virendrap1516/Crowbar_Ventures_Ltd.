import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="bg-violet-500 text-white p-2 flex justify-between">
      <div className="text-xl font-bold">
        <Link to="/">
        <img src={logo} className='w-25'/>
        </Link>
        </div>
      <nav className="space-x-5 my-auto">
        <a href="/" className="hover:text-blue-900 text-xl">Home</a>
        <a href="/about" className="hover:text-blue-900 text-xl">About</a>
        <a href="/services" className="hover:text-blue-900 text-xl">Services</a>
        <a href="/contact" className="hover:text-blue-900 text-xl">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
