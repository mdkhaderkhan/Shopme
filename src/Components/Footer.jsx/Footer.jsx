import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const footerLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "Shop", link: "/category" }
];

const socialLinks = [
  { icon: <FaInstagram />, link: "/instagram" },
  { icon: <FaFacebook />, link: "/facebook" },
  { icon: <FaTwitter />, link: "/twitter" }
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 border-t">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-black">Shop Me</h2>
          <p className="text-sm">
            Fuel your style with high-performance streetwear inspired by Formula 1. Designed for the bold.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-black">Quick Links</h2>
          <ul className="space-y-2">
            {footerLinks.map((item, index) => (
              <li key={index}>
                <Link to={item.link} className="hover:underline hover:text-red-500 transition">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info & Social */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-black">Get in Touch</h2>
          <p>Email: support@shopme.com</p>
          <p>Phone: +91 9876 43210</p>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((item, index) => (
              <Link to={item.link} key={index} className="text-xl hover:text-red-500 transition">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 text-center py-4 text-sm">
        © {new Date().getFullYear()} Shop Me. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

