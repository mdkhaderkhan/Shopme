import React, { useEffect, useState } from 'react';
import { CiStar } from 'react-icons/ci';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WomenDresses = () => {
  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, offset: 10 });

    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(res => res.json())
      .then(data => setDresses(data))
      .catch(err => console.error("Failed to fetch dresses:", err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Women's Dresses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dresses.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-60 w-full object-contain rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
            <div className="flex items-center mt-2 text-yellow-500">
              {[...Array(Math.round(item.rating?.rate || 0))].map((_, i) => (
                <CiStar key={i} />
              ))}
              <span className="ml-2 text-gray-600 text-sm">
                {item.rating?.rate || 0} / 5
              </span>
            </div>
            <p className="text-md font-medium text-gray-800 mt-2">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenDresses;
