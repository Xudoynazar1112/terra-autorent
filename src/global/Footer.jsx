import { useEffect, useState } from "react";
import api from "../shared/api/api";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [categories, setCategories] = useState({}); // Grouped cars by category
  const { t, i18n } = useTranslation();

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
          {/* LUXURY CAR RENTAL IN EMIRATES */}
          {t ("footer.title")}
        </p>
        <p className="text-start w-3/4 text-gray-400">
          {/* Rent sports and luxury cars directly without intermediaries. Rent a
          car in Dubai with Auto Zoom Car Rental - safety and driving pleasure */}
          {t ("footer.desc")}
        </p>
        <p className="p-6 rounded-xl bg-transparent border mt-8 transition-all duration-500 hover:border-red-700 hover:bg-red-700 cursor-pointer">
          {/* GET BEST OFFER */}
          {t ("footer.btn")}
        </p>
      </div>
      <div className="md:w-3/4 flex flex-col gap-5 items-center bg-[url('/cars/footer.png')] bg-right-bottom saturate-50 bg-cover">
        <div className="bg-gradient-to-r from-black/70 via-gray-900/70 to-black">
          <div className="grid grid-cols-3 place-items-center gap-5 items-start">
            <div className="flex flex-col gap-2 items-start">
              <p className="md:text-3xl text-md mb-3">
                {/* Cars */}
                {t ("footer.text1")}
                </p>
              {Object.keys(categories).map((car, i) => (
                <p key={i} className="text-gray-500 text-start">
                  {car}
                </p>
              ))}
            </div>
            <div>
              <ul className="flex flex-col justify-between items-start h-[15rem]">
                <li>
                  {/* Blog */}
                  {t ("footer.text2")}
                  </li>
                <li>
                  {/* Service */}
                  {t ("footer.text3")}
                  </li>
                <li className="text-start">
                  <p>
                    {/* Contact */}
                    {t ("footer.text4")}
                    </p>
                  <div className="flex flex-col">
                    <span className="text-gray-500">
                      Elite 3 Sports City, Dubai 26W8 24J,
                       {/* United Arab Emirates */}
                       {t ("footer.country")}
                    </span>
                    <span className="text-gray-500">+998 99 0000441</span>
                    <span className="text-gray-500">
                      {/* Working hours: 24/7 */}
                      {t ("footer.remote_working")}
                      </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="h-full flex flex-col justify-between px-3">
              <ul className="text-start flex flex-col gap-4">
                <li>
                  {/* About */}
                  {t ("footer.text5")}
                  </li>
                <li className="text-gray-500">
                  {/* Our team */}
                  {t ("footer.team")}
                  </li>
                <li className="text-gray-500">FAQ</li>
              </ul>
              <div>
                <p className="text-start mb-3">
                  {/* Follow us */}
                  {t ("footer.follow")}
                  </p>
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
              © 2024 Terra Car Rental.
               {/* United Arab Emirates. */}
               {t ("footer.country")}
            </p>
            <p>
              {/* Terms and Conditions */}
              {t ("footer.footer_desc")}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
