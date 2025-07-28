import React from 'react';
import Slider from 'react-slick';

const imglist = [
  {
    id: 1,
    img: "data:image/png;base64,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",
    title: "Up to 20% Off",
    description: "Fuel your style with high-performance streetwear inspired by Formula 1. Precision design, bold attitude — now at exclusive prices."
  },
  {
    id: 2,
    img: "/img2.png",
    title: "Summer Drop",
    description: "The heat is on. Explore our latest summer collection featuring breathable fabrics, race-inspired details, and street-smart edge."
  },
  {
    id: 3,
    img: "/img3.png",
    title: "Flash Sale",
    description: "Own the street like a circuit. Limited-time flash deals on premium styles that merge motorsport energy with urban flair."
  }
];

const Hero = ({ handleorderpopup }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
  };

  return (
    <div className="relative overflow-hidden min-h-[600px] bg-gray-300 flex items-center justify-center">

      <div className="h-[700px] w-[900px] bg-gradient-to-br bg-blue-900 absolute -top-1/3 right-0 rounded-3xl rotate-45 z-[1] opacity-20" />

      <div className="container z-10 px-6 py-12">
        <Slider {...settings}>
          {imglist.map((data) => (
            <div key={data.id}>
              <div className="flex flex-col items-center justify-center object-contain gap-6 text-center">
                
              
                <img
  src={data.img}
  alt={data.title}
  className="w-[250px] sm:w-[320px] h-[250px] sm:h-[320px] object-contain drop-shadow-md"
/>

                <div className="max-w-2xl space-y-4">
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                    {data.title}
                  </h1>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {data.description}
                  </p>
                  <button
                    onClick={handleorderpopup}
                    className="mt-4 px-6 py-2 bg-gradient-to-r from-green-400 to-blue-600 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                  >
                    Order Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
