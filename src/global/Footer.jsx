import { useEffect, useState } from "react";
import api from "../shared/api/api";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <div className="bg-black text-white md:px-40 px-10 py-20 flex md:flex-row flex-col gap-5">
      <div className="flex flex-col items-start md:w-1/4">
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
      <div className="md:w-3/4 flex flex-col gap-5 items-center bg-[url('/cars/footer.png')] bg-right-bottom saturate-50 bg-cover">
        <div className="bg-gradient-to-r from-black/70 via-gray-900/70 to-black">
          <div className="grid grid-cols-3 place-items-center gap-5 items-start">
            <div className="flex flex-col gap-2 items-start">
              <p className="md:text-3xl text-md mb-3">Cars</p>
              {Object.keys(categories).map((car, i) => (
                <Link to={'/cars'} key={i} className="text-gray-500 text-start hover:text-white transition-all">
                  {car}
                </Link>
              ))}
            </div>
            <div>
              <ul className="flex flex-col justify-between items-start h-[15rem]">
                <li><Link to={'/blog'} className="text-white cursor-pointer hover:text-red-600 transition-all">Blog</Link></li>
                <li><Link to={'/services'} className="text-white cursor-pointer hover:text-red-600 transition-all">Service</Link></li>
                <li className="text-start">
                  <Link to={'/contact'} className="text-white cursor-pointer hover:text-red-600 transition-all">Contact</Link>
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
                <li className="text-gray-500 cursor-pointer hover:text-white transition-all">Our team</li>
                <li className="text-gray-500 cursor-pointer"><Link to={'#faq'} className="text-gray-500 hover:text-white transition-all">FAQ</Link></li>
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
