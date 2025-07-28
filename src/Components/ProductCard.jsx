import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    try {
      const parsed = stored ? JSON.parse(stored) : [];
      setItem(parsed);
    } catch (err) {
      console.error("Invalid JSON in localStorage:", err);
      setItem([]);
    }
  }, []);

  const handleRemove = (index) => {
    const updatedItems = [...item];
    updatedItems.splice(index, 1);
    setItem(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      {item.length > 0 ? (
        item.map((e, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white rounded-xl shadow-sm p-4 mb-4 hover:shadow-md transition"
          >
            {/* Optional thumbnail if available */}
            {e.image && (
              <img
                src={e.image}
                alt={e.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
            )}

            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">{e.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-2">{e.description}</p>
              <p className="mt-1 text-blue-600 font-medium">₹{e.price}</p>
            </div>

            <button
              onClick={() => handleRemove(i)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500 text-lg font-medium mt-12">
          Your cart is empty.
        </div>
      )}

      {item.length > 0 && (
        <div className="mt-8 bg-gray-100 border-t p-4 text-right rounded-lg shadow-inner">
          <span className="text-xl font-bold text-gray-800">
            Total: ₹
            {item
              .reduce((total, curr) => total + parseFloat(curr.price || 0), 0)
              .toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

