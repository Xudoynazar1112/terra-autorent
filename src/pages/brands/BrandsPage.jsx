import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BrandsPage = () => {
  const [allCars, setAllCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  const fetchAllCars = async () => {
    try {
      const res = await fetch("https://realauto.limsa.uz/api/cars");
      const data = await res.json();
      setAllCars(data?.data || []);
      setFilteredCars(data?.data || []);
    } catch (error) {
      console.error("Error fetching all cars:", error);
    }
  };

  useEffect(() => {
    fetchAllCars();
  }, []);

  return (
    <div className="container mx-auto py-12 p-5 bg-black">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Brands</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {filteredCars.map((car) => (
          <div
            key={car.id}
            className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-md shadow-md"
          >
            <Link
              to={`/cars?brandId=${car.brand.id}`}
              className="flex flex-col items-center"
            >
              <img
                 src={`https://realauto.limsa.uz/api/uploads/images/${car?.brand.image_src}`}
                alt={car.brand.title}
                className="w-16 h-16 object-contain mb-2"
              />
             
              <h3 className="text-gray-400 font-bold">{car.brand.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
