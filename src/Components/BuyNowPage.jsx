import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BuyNowPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const data = location.state?.product;
    if (data) {
      setProduct(data);
    } else {
      const stored = localStorage.getItem("buynow");
      if (stored) {
        setProduct(JSON.parse(stored));
      } else {
        navigate("/");
      }
    }
  }, [location, navigate]);

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    navigate("/"); 
  };

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 grid md:grid-cols-2 gap-8">
        
      
        <div>
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <img src={product.image} alt={product.title} className="w-full h-64 object-contain rounded-xl mb-4" />
          <h3 className="text-xl font-bold">{product.title}</h3>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-lg font-semibold text-green-700 mb-1">₹{product.price}</p>
          <p className="text-sm text-gray-500">Quantity: 1</p>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Shipping & Payment</h2>

         
          <div className="space-y-2 mb-4">
            <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-lg" />
            <input type="text" placeholder="Address" className="w-full p-2 border rounded-lg" />
            <input type="text" placeholder="City" className="w-full p-2 border rounded-lg" />
            <input type="text" placeholder="Pincode" className="w-full p-2 border rounded-lg" />
          </div>

        
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Payment Method</label>
            <select className="w-full border p-2 rounded-lg">
              <option>Cash on Delivery</option>
              <option>UPI</option>
              <option>Credit/Debit Card</option>
            </select>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNowPage;
