import React, { useEffect, useState } from 'react';
import { CiStar } from 'react-icons/ci';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const MensClothing = () => {
    const [mensWear, setMensWear] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 800, offset: 10 });

        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(res => res.json())
            .then(data => setMensWear(data))
            .catch(err => console.error("Failed to fetch men's clothing:", err));
    }, []);

    const handleAddToCart = item => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(localStorage.getItem('cart'))
        toast.success(`${item.title} added to cart!`)
    }

    const handleBuyNow = item => toast.info(`Proceed to buy: ${item.title}`);

    return (
        <div className="container mx-auto px-4 py-10">
            <ToastContainer position="top-right" autoClose={1500} />
            <h2 className="text-2xl font-bold mb-6">Men's Clothing</h2>

            {mensWear.length === 0 ? (
                <p className="text-gray-500 text-center">Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {mensWear.map(item => (
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
                            <h3 className="font-semibold text-lg line-clamp-1">{item.title}</h3>
                            <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                            <div className="flex items-center mt-2 text-yellow-500">
                                {[...Array(Math.round(item.rating?.rate || 0))].map((_, i) => (
                                    <CiStar key={i} />
                                ))}
                                <span className="ml-2 text-gray-600 text-sm">
                                    {item.rating?.rate || 0} / 5
                                </span>
                            </div>
                            <p className="text-md font-semibold text-gray-800 mt-2">${item.price}</p>
                            <div className="mt-4 flex gap-2">
                                <button
                                    onClick={() => handleAddToCart(item)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm"
                                >
                                    Add to Cart
                                </button>
                                <Link to="/buy">
                                <button
                                    onClick={() => handleBuyNow(item)}
                                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-sm"
                                    >
                                    Buy Now
                                </button>
                                    </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MensClothing;
