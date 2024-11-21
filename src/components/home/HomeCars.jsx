import { useEffect, useState } from "react";
import api from "../../shared/api/api";
import { Link } from "react-router-dom";

const HomeCars = () => {
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
    <div className="container mx-auto px-4 bg-gradient-to-b from-black to-slate-700 py-10">
      {Object.keys(categories).map((category) => (
        <div key={category} className="mb-8">
          {/* Category Title */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">
              {category.toUpperCase()}
            </h2>
            <button className="text-sm text-gray-400 hover:text-black">
              <Link to={'/cars'}>SEE ALL &rarr;</Link>
            </button>
          </div>
  
          {/* Cars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories[category].slice(0, 3).map((item) => (
              <Link to={`/cars/${item.id}`}
                key={item.id}
                className="bg-gray-800 p-4 rounded-lg shadow-lg text-white transition-all hover:bg-indigo-700"
              >
                {/* Car Image */}
                <img
                  src={
                    item?.car_images?.[0]?.image?.src
                      ? `https://realauto.limsa.uz/api/uploads/images/${item?.car_images[0]?.image?.src}`
                      : "https://via.placeholder.com/300"
                  }
                  alt={item?.model?.name || "Car image"}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
  
                {/* Car Details */}
                <h3 className="text-lg font-semibold">
                  {item?.model?.name || "Unknown Model"}
                </h3>
                <p className="text-sm text-gray-300">
                  AED {item?.price_in_aed || "0"} / $
                  {item?.price_in_usd || "0"}
                </p>
                <p className="text-sm text-gray-400">per day</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCars;
