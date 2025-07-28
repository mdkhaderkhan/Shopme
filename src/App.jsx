import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useState } from 'react'; // ✅ import hooks
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ added Routes
import Navbar from './Components/Navbar.jsx/Navbar';
import Home from './Components/Home.jsx/Home';
import Kidswear from './Components/Navbarcomponents.jsx/Kidswear';
import Viewall from './Components/Viewall';
import Topproducts from './Components/Topproducts.jsx/Topproducts';
import MensClothing from './Components/MensClothing';
import Electronics from './Components/Electronics';
import ProductCard from './Components/ProductCard';
import BuyNowPage from './Components/BuyNowPage';
function App() {
  const [orderpopup, setorderpopup] = useState(false);

  const handleorderpopup = () => {
    setorderpopup(!orderpopup);
  };

  useEffect(() => {
    Aos.init({
      offset: 10,
      duration: 500,
      easing: 'ease-in-out-sine',
      delay: 500,
    });
    Aos.refresh();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar handleorderpopup={handleorderpopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dresses" element={<Viewall />} />
          <Route path="/toprated" element={<Topproducts />} />
          <Route path="/kidswear" element={<Kidswear />} />
           <Route path="/menswear" element={<MensClothing />} />
            <Route path="/electronics" element={<Electronics />} />
             <Route path="/cart" element={<ProductCard />} />
             <Route path="/buy" element={<BuyNowPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} />

    </>
  );
}

export default App;
