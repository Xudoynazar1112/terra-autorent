import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import terra from "../../assets/icons/terra.png";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [uniqueType, setUniqueType] = useState([]);
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [optionItems, setOptionItems] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("https://realauto.limsa.uz/api/cars");
        const data = await response.json();
        setCars(data.data);
        const uniqueTypeSet = new Set(
          data.data.map((item) => item.category.name_en)
        );
        setUniqueType([...uniqueTypeSet]);
        const uniqueBrandSet = new Set(
          data.data.map((item) => item.brand.title)
        );
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
      optionItems.length === 0 || optionItems.includes(car.brand.title);
    const modelMatch = selectedModel === "" || car.model.name === selectedModel;
    return typeMatch && brandMatch && modelMatch;
  });

  const resetFilters = () => {
    setSelectedType([]);
    setOptionItems([]);
    setSelectedModel("");
    console.log("Filters reset");
  };

  const goToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="w-[98.9vw] flex gap-20 p-4 bg-gray-900">
      <div className="w-[350px] bg-gray-800 p-4 text-white">
        <img src={terra} alt="Logo" className="w-[250px]" />
        <p className="text-left text-2xl mt-8">Filter by</p>
        <p className="text-left mb-4 mt-2 text-2xl">Offers</p>
        <hr />

        <div className="my-4">
          <p className="text-left text-2xl mb-5">Car type</p>
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
          <br />
          <hr className="pt-5" />
          <p className="text-left text-2xl mb-5">Brand</p>
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

          <p className="text-left text-2xl my-5">Model</p>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="w-[250px] p-2 text-lg text-black rounded-2xl text-left "
          >
            <option
              onClick={window.scrollTo(0, 0)}
              className="text-black"
              value=""
            >
              Select a model
            </option>
            {options?.map((option) => (
              <option
                onClick={window.scrollTo(0, 0)}
                className="text-black text-left w-[250px] "
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={resetFilters}
            className="w-[100px]  text-white border border-red-600 rounded-lg py-2 bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>

      <div>
        <p className=" text-white mb-12 text-3xl">
          Luxury Cars for Rent in Dubai / Hire the latest supercar
        </p>
        <div className="flex flex-wrap gap-4 justify-around">
          {filteredCars?.map((item) => (
            <div
              key={item.id}
              className="w-[290px] h-[420px] p-2 pb-5 flex flex-col bg-gradient-to-b from-gray-600 via-gray-800 to-gray-900 rounded-lg cursor-pointer "
            >
              <img
                onClick={() => goToDetails(item.id)}
                src={`https://realauto.limsa.uz/api/uploads/images/${item.car_images[0].image.src}`}
                alt=""
                className="w-[250px] mx-auto"
              />
              <p
                className="text-lg font-bold text-white py-4 px-2 border-b border-white truncate w-[250px] text-left"
                onClick={() => goToDetails(item.id)}
              >
                {item?.brand?.title} {item?.model?.name}
              </p>
              <p className="text-gray-300">
                <p className="text-white text-left mt-2">AED 0 / 0 $</p>
              </p>
              <p className="text-gray-500 text-left">per day</p>
              <div className="flex items-center gap-4 mt-5">
                <a
                  className="flex items-center gap-2 p-2 pb-3 bg-green-600 rounded-xl text-white hover:text-white"
                  href="https://web.whatsapp.com/"
                  target="_"
                >
                  <FaWhatsapp />
                  Whatsapp
                </a>
                <a
                  className="flex items-center gap-2 p-2 pb-3 bg-blue-700  rounded-xl text-white hover:text-white"
                  href="https://t.me/Shamsiddin_69_75"
                  target="_"
                >
                  <RiTelegramLine />
                  Telegramm
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
