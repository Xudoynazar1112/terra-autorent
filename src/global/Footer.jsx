import { useEffect, useState } from "react";
import api from "../shared/api/api";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [categories, setCategories] = useState({}); // Grouped cars by category

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get("/cars");
        const carsData = response?.data?.data || [];

        // Group cars by `category.name_en`
        const groupedByCategory = carsData.reduce((acc, car) => {
          const categoryName = car?.category?.name_en;
          if (categoryName) {
            if (!acc[categoryName]) {
              acc[categoryName] = [];
            }
            acc[categoryName].push(car);
          }
          return acc;
        }, {});

        setCategories(groupedByCategory);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);
  return (
    <div className="bg-black text-white px-40 py-20 flex">
      <div className="flex flex-col items-start w-1/4">
        <img className="w-28" src="/images/logo.png" alt="logo" />
        <p className="text-start text-4xl my-5 font-bold">
          LUXURY CAR RENTAL IN EMIRATES
        </p>
        <p className="text-start w-3/4 text-gray-400">
          Rent sports and luxury cars directly without intermediaries. Rent a
          car in Dubai with Auto Zoom Car Rental - safety and driving pleasure
        </p>
        <p className="p-6 rounded-xl bg-transparent border mt-8 transition-all duration-500 hover:border-red-700 hover:bg-red-700 cursor-pointer">
          GET BEST OFFER
        </p>
      </div>
      <div className="w-3/4 flex flex-col items-center bg-[url('/cars/footer.png')] bg-right-bottom saturate-50 bg-cover">
        <div className="bg-gradient-to-r from-black/70 via-gray-900/70 to-black">
          <div className="grid grid-cols-3 place-items-center items-start">
            <div className="flex flex-col gap-2 items-start">
              <p className="text-3xl mb-3">Cars</p>
              {Object.keys(categories).map((car, i) => (
                <p key={i} className="text-gray-500 text-start">
                  {car}
                </p>
              ))}
            </div>
            <div>
              <ul className="flex flex-col justify-between items-start h-[15rem]">
                <li>Blog</li>
                <li>Service</li>
                <li className="text-start">
                  <p>Contact</p>
                  <div className="flex flex-col">
                    <span className="text-gray-500">
                      Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
                    </span>
                    <span className="text-gray-500">+998 99 0000441</span>
                    <span className="text-gray-500">Working hours: 24/7</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="h-full flex flex-col justify-between px-3">
              <ul className="text-start flex flex-col gap-4">
                <li>About</li>
                <li className="text-gray-500">Our team</li>
                <li className="text-gray-500">FAQ</li>
              </ul>
              <div>
                <p className="text-start mb-3">Follow us</p>
                <ul className="flex gap-5 text-xl">
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaYoutube />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-10 w-10/12" />
          <div className="grid grid-cols-2 place-self-end">
            <p className="w-2/3 text-start">
              © 2024 Terra Car Rental. United Arab Emirates.
            </p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
