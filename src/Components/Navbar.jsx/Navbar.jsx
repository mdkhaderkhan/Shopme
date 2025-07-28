import React, { useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { TiShoppingCart } from 'react-icons/ti';
import { FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Menu = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Top rated', link: '/toprated' },
  { id: 3, name: "Kid's wear", link: '/kidswear' },
  { id: 4, name: "Men's wear", link: '/menswear' },
  { id: 5, name: 'Electronics', link: '/electronics' }
];

const Dropdownlist = [
  { id: 1, name: 'Trending products', link: '/trending' },
  { id: 2, name: 'Best selling', link: '/bestselling' }
];

const Navbar = ({ handleorderpopup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full shadow-md bg-gray-100 dark:bg-gray-800 z-50 relative">
      {/* Top Bar */}
      <div className="bg-sky-400 dark:bg-white duration-200 py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl text-white dark:text-black flex items-center gap-2">
            <FiShoppingBag className="text-2xl" />
            ShopMe
          </Link>

          {/* Desktop Search + Cart */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg py-1 px-3 text-sm focus:outline-none focus:bg-blue-200 border border-gray-400"
              />
              <IoSearch className="text-slate-400 group-hover:text-blue-300 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <Link
              to="/cart"
              className="bg-gradient-to-t from-sky-500 to-sky-400 text-white py-1 px-4 rounded-full flex items-center gap-2 hover:gap-3 transition-all duration-150"
            >
              <TiShoppingCart className="text-2xl" />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <FaBars className="text-white text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div data-aos="zoom-in" className="hidden sm:flex justify-center items-center bg-gray-100 py-2">
        <ul className="flex items-center">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link to={data.link} className="inline-block px-4 hover:text-sky-950 duration-200">
                {data.name}
              </Link>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <span className="flex items-center gap-[2px] px-4 py-2 hover:text-sky-950">
              Trending items <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute left-0 mt-1 hidden group-hover:block z-[999] w-[250px] bg-white shadow-lg rounded-md">
              <ul className="flex flex-col">
                {Dropdownlist.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="block px-4 py-3 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-800 px-4 py-4 space-y-2">
          {Menu.map((data) => (
            <Link
              key={data.id}
              to={data.link}
              className="block text-gray-800 dark:text-white py-2 border-b border-gray-200"
            >
              {data.name}
            </Link>
          ))}

          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 w-full text-left text-gray-800 dark:text-white py-2"
            >
              Trending items{' '}
              <FaCaretDown className={`transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="pl-4 space-y-2">
                {Dropdownlist.map((data) => (
                  <Link
                    key={data.id}
                    to={data.link}
                    className="block text-gray-600 dark:text-gray-300 py-1"
                  >
                    {data.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Cart button for mobile */}
          <Link
            to="/cart"
            className="w-full bg-sky-500 text-white py-2 rounded-md flex items-center justify-center gap-2 mt-2"
          >
            <TiShoppingCart className="text-xl" /> View Cart
          </Link>
        </div>
      )}
    </div>
  );
};


export default Navbar;

