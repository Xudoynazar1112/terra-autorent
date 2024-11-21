import React, { useEffect, useState } from "react";
import api from "../../shared/api/api";

const HomePage = () => {  
  const [cars, setCars] = useState([]);
  useEffect(() => {
    api.get("/cars").then((res) => setCars(res?.data?.data));
  });
  return (
    <div>
      <h2 className="text-red-800 m-8">cars</h2>
      {cars?.map((car) => (
        <p>{car?.model?.name}</p>
      ))}
    </div>
  );
};

export default HomePage;
