import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";


const kidsProducts = [
  {
    id: 1,
    title: "Kids Floral Summer Dress",
    description: "Cute colorful floral cotton dress for girls aged 4‑6",
    price: 29.99,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCw9j3q_UVi98iRFmh6bvHQicDHhLkGoJbFA&s"],
    category: { name: "clothing" },
  },
  {
    id: 2,
    title: "kids Denim Jacket",
    description: "Stylish denim jacket for boys aged 57",
    price: 39.99,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMQ1guBDuiOAUIl3lrm96sd6aOlavOApHBw&s"],
    category: { name: "clothing" },
  },{
    id: 3,
    title: "Traditional kids wear",
    description: "Cute colorful floral cotton dress for girls aged 46",
    price: 29.99,
    images: ["data:image/jpeg;base64,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"],
    category: { name: "clothing" },
  }, {
    id: 4,
    title: "Kids Floral Summer Dress",
    description: "Cute colorful floral cotton dress for girls aged 4‑6",
    price: 29.99,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCw9j3q_UVi98iRFmh6bvHQicDHhLkGoJbFA&s"],
    category: { name: "clothing" },
  }, {
    id: 5,
    title: "Kids Floral Summer Dress",
    description: "Cute colorful floral cotton dress for girls aged 4‑6",
    price: 29.99,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2o843fJW_3PKozxijWOo9fWtXMNmSzGmGg&s"],
    category: { name: "clothing" },
  }, {
    id: 6,
    title: "Kids Floral Summer Dress",
    description: "Cute colorful floral cotton dress for girls aged 4‑6",
    price: 29.99,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCw9j3q_UVi98iRFmh6bvHQicDHhLkGoJbFA&s"],
    category: { name: "clothing" },
  }, {
    id: 7,
    title: "Kids Floral Summer Dress",
    description: "Cute colorful floral cotton dress for girls aged 4‑6",
    price: 29.99,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2o843fJW_3PKozxijWOo9fWtXMNmSzGmGg&s"],
    category: { name: "clothing" },
  },{
    id: 8,
    title: "Kids Floral Summer Dress",
    description: "Cute colorful floral cotton dress for girls aged 4‑6",
    price: 29.99,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2o843fJW_3PKozxijWOo9fWtXMNmSzGmGg&s"],
    category: { name: "clothing" },
  },

];
const Kidswear = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, offset: 10 });
   
    setProducts(kidsProducts.slice(0, 30)); 
  }, []);

  const handleAddToCart = (item) => {
    toast.success(`${item.title} added to cart!`);
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log(localStorage.getItem('cart'))
            toast.success(`${item.title} added to cart!`)
  
  };



const handleBuyNow = (product) => {
  localStorage.setItem("buynow", JSON.stringify(product));
 
};


  return (
    <div className="container mx-auto px-4 py-10">
      <ToastContainer position="top-right" autoClose={1500} />
      <h2 className="text-3xl font-bold text-center mb-8">
        Kidswear Collection
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No kidswear products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
            >
              <img
                src={item.images?.[0]}
                alt={item.title}
                className="h-60 w-full object-contain rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold line-clamp-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center mt-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <CiStar key={i} />
                ))}
                <span className="ml-2 text-gray-600 text-sm">4.0 / 5</span>
              </div>
              <p className="text-md font-semibold text-gray-800 mt-2">
                ${item.price}
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  Add to Cart
                </button>
                <Link  to="/buy">
                <button
                  onClick={() => handleBuyNow(products)}
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

export default Kidswear;

