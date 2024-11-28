import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import terra from "../../assets/icons/terra.png";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";import { useTranslation } from "react-i18next";


const CarsPage = () => {
  const { t, i18n } = useTranslation();

  const [cars, setCars] = useState([]);
  const [uniqueType, setUniqueType] = useState([]);
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [optionItems, setOptionItems] = useState([]); 
  const [options, setOptions] = useState([]); 
  const [selectedModel, setSelectedModel] = useState(""); 
  const [showFilters, setShowFilters] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const brandId = queryParams.get("brandId");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("https://realauto.limsa.uz/api/cars");
        const data = await response.json();
        setCars(data.data);

     
        const uniqueTypeSet = new Set(data.data.map((item) => item.category.name_en));
        setUniqueType([...uniqueTypeSet]);


        const uniqueBrandSet = new Set(data.data.map((item) => item.brand.title));
        setUniqueBrand([...uniqueBrandSet]);

        const models = [...new Set(data.data.map((item) => item?.model?.name))];
        setOptions(models);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCars();
  }, []);


  const filteredCars = cars.filter((car) => {
    const typeMatch =
      selectedType.length === 0 || selectedType.includes(car.category.name_en);
    const brandMatch =
      !brandId || car.brand.id === brandId; 
    const modelMatch = selectedModel === "" || car.model.name === selectedModel;
    return typeMatch && brandMatch && modelMatch;
  });

  const resetFilters = () => {
    setSelectedType([]);
    setOptionItems([]); 
    setSelectedModel(""); 
  };

  const goToDetails = (id) => {
    navigate(`/cars/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row bg-gray-900">
      <div
        className={`${
          showFilters ? "block" : "hidden lg:block"
        } w-full lg:w-[350px] bg-gray-800 p-4 text-white`}
      >
        <div className="flex justify-between items-center lg:mb-4">
          <img src={terra} alt="Logo" className="w-[200px]" />
          <button
            onClick={() => setShowFilters(false)}
            className="text-red-500 font-bold lg:hidden"
          >
            ✕
          </button>
        </div>
        <p className="text-left text-2xl mt-8">Filter by</p>
        <hr className="my-4" />
        <div>
          <p className="text-left text-2xl mb-4">Car type</p>
          <div>
            {uniqueType?.map((item) => (
              <div key={item} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value={item}
                  checked={selectedType.includes(item)}
                  onChange={() => {
                    setSelectedType((prev) =>
                      prev.includes(item)
                        ? prev.filter((type) => type !== item)
                        : [...prev, item]
                    );
                  }}
                  className="mr-2"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <p className="text-left text-2xl mb-4">Brand</p>
          <div>
            {uniqueBrand?.map((item) => (
              <div key={item} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value={item}
                  checked={optionItems.includes(item)}
                  onChange={() => {
                    setOptionItems((prev) =>
                      prev.includes(item)
                        ? prev.filter((brand) => brand !== item)
                        : [...prev, item]
                    );
                  }}
                  className="mr-2"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-left text-2xl my-4">Model</p>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="w-full p-2 text-lg text-black rounded-md"
          >
            <option value="">Select a model</option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={resetFilters}
            className="w-full text-white border border-red-600 rounded-lg py-2 bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="flex-1 p-4">
        <button
          onClick={() => setShowFilters(true)}
          className="text-white bg-blue-600 px-4 py-2 rounded-lg mb-4 lg:hidden"
        >
          Show Filters
        </button>
        <p className="text-white mb-8 text-3xl">
          {/* Luxury Cars for Rent in Dubai / Hire the latest supercar */}
          {t ("cars_page.title")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredCars?.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                onClick={() => goToDetails(item.id)}
                src={`https://realauto.limsa.uz/api/uploads/images/${item.car_images[0].image.src}`}
                alt="Car image"
                className="w-full h-[200px] object-cover rounded-md cursor-pointer"
              />
              <p
                className="text-lg font-bold mt-4 truncate cursor-pointer"
                onClick={() => goToDetails(item.id)}
              >
                {item?.brand?.title} {item?.model?.name}
              </p>
              <p className="text-gray-400 mt-2">AED 0 / 0 $ per day</p>
              <div className="flex gap-2 mt-4">
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  <FaWhatsapp /> Whatsapp
                </a>
                <a
                  href="https://t.me/Shamsiddin_69_75"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <RiTelegramLine /> Telegram
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
