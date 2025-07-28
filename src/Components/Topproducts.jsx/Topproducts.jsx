import React from 'react';
import { toast } from 'react-toastify';

const imglist = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7BtI80KTe5YLqQ36HzH4KKWhaSwWhWTz4Q&s",
    title: "Up to 20% Off",
    description:
      "Fuel your style with high-performance streetwear inspired by Formula 1. Precision design, bold attitude — now at exclusive prices.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5B_qxsNQwsUKsTSiIK-jEJgvkblxVLJk5A&s",
    title: "Summer Drop",
    description:
      "The heat is on. Explore our latest summer collection featuring breathable fabrics, race-inspired details, and street-smart edge.",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aIjOKVEmn6OzGAJphvoXrPxa4A55q2kwO4KWVhv-H1zETLfYa0IU-hyhzRZ62hcA53c&usqp=CAU",
    title: "Flash Sale",
    description:
      "Own the street like a circuit. Limited-time flash deals on premium styles that merge motorsport energy with urban flair.",
  },
];

const Topproducts = () => {
 const handleorder = (item) => {
    toast.info(`Proceeding to buy: ${item.title}`);
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log(localStorage.getItem('cart'))
            toast.success(`${item.title} added to cart!`)
    // Insert checkout logic here
  };
  return (
    <div className="min-h-screen bg-zinc-900 py-12 px-4 sm:px-10">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-sky-400 text-lg font-medium uppercase tracking-wider">
          Top Rated Products For You
        </h2>
        <h1 className="text-white text-3xl sm:text-4xl font-bold mt-2">
          Best Products
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Explore our exclusive F1-inspired drops, crafted for style and speed lovers.
          Performance-grade looks that rule both the street and the circuit.
        </p>
      </div>

      {/* Card Grid */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center"
      >
        {imglist.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-xl hover:shadow-2xl rounded-2xl p-5 w-full max-w-xs transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[220px] h-[220px] object-contain mx-auto -translate-y-10"
            />
            <h2 className="text-xl font-bold text-gray-800 text-center mt-[-20px]">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600 mt-3 text-center">
              {item.description}
            </p>

            {/* Order Now Button */}
            <div className="mt-5 flex justify-center">
              <button onClick={()=>handleorder(item)} className="px-5 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topproducts;


