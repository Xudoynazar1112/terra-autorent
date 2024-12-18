import { useEffect, useState } from "react";
import api from "../../shared/api/api";
import HomeCars from "../../components/home/HomeCars";
import HomeServices from "../../components/home/HomeServices";
import HomeAbout from "../../components/home/HomeAbout";
import HomeFAQ from "../../components/home/HomeFAQ";
import CarsPage from "../CarsPage/CarsPage";
import BrandsPage from "../brands/BrandsPage";
import { useTranslation } from "react-i18next";


const Carousel = () => {

  const images = [
    "/cars/car1.png", // Replace with your image URLs
    "/cars/car2.png", // Replace with your image URLs
    "/cars/car3.png", // Replace with your image URLs
    "/cars/car4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start from 1 (middle section for smooth loop)
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedImages = [images[images.length - 1], ...images, images[0]]; // Clone first and last images

  // Handle Next Click
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Handle Prev Click
  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Reset position for seamless looping
  useEffect(() => {
    if (currentIndex === 0) {
      // Jump to the last real image
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 300); // Match this timeout to transition duration
      return () => clearTimeout(timeout);
    }

    if (currentIndex === extendedImages.length - 1) {
      // Jump to the first real image
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 300);
      return () => clearTimeout(timeout);
    }

    // Enable transitions for other cases
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [currentIndex, extendedImages.length, images.length]);

  // Auto-scroll effect
  useEffect(() => {
    const autoScroll = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      {/* Carousel track */}
      <div
        className={`flex transition-transform duration-300 ease-in-out ${
          isTransitioning ? "" : "duration-0"
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex justify-center items-center"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className={`w-4/5 rounded-lg shadow-md transition-transform ${
                index === currentIndex
                  ? "scale-110 opacity-100"
                  : "scale-100 opacity-75"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={handlePrev}
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

const HomePage = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    api.get("/brands").then((res) => setBrands(res?.data?.data));
  }, []);
  const { t, i18n } = useTranslation();
  

  return (
    <div className="bg-black w-full text-white">
      <h2 className="mt-32 text-[2.5rem] font-semibold">
        {/* TOP LUXURY CAR RENTAL EMIRATES */}
        {t ("home_page.title1")}
      </h2>
      <p className="text-[2.5rem]">№1</p>
      <p className="my-5">
        {/* Best sports car & supercar rental Emirates, Exclusive offers on luxury
        car rental Emirates Cheap price */}
        {t ("home_page.desc")}
      </p>
      <p className="cursor-pointer">
        {/* RENT A CAR EMIRATES CATALOG  */}
        {t ("home_page.desc2")}
        <span>»</span>
      </p>
      <div className="flex gap-20 overflow-x-auto bg-gradient-to-b from-black to-slate-400">
        <img src="/cars/car1.png" alt="car" />
        <img src="/cars/car2.png" alt="car" />
        <img src="/cars/car3.png" alt="car" />
        <img src="/cars/car4.png" alt="car" />
      </div>
      <div className="bg-gradient-to-b from-slate-400 to-black">
        <h3>Brands</h3>
        <div className="grid grid-cols-6 gap-10 overflow-x-auto mx-28">
        {brands.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-5 rounded bg-slate-900 p-10">
            <img src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`} className="w-[3rem]" alt={item?.title} />
            <p>{item?.title}</p>
          </div>
        ))}
        </div>
      </div>
      <HomeCars />
      <HomeServices />
      <HomeAbout />
      <HomeFAQ />
    </div>
  );
};

export default HomePage;
