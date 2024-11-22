import { useEffect, useState } from "react";
import api from "../../shared/api/api";

const BrandsPage = () => {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    api.get("/brands").then((res) => setBrand(res?.data?.data));
  });
  return (
    <div className="bg-gradient-to-b from-slate-400 to-black text-white">
      <h3 className="text-6xl my-5 text-white">Brands</h3>
      <div className="grid grid-cols-6 gap-10 overflow-x-auto mx-28">
        {brand.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-5 rounded bg-slate-900 p-10 h-40"
          >
            <div className="h-1/2">
              <img
                src={`https://realauto.limsa.uz/api/uploads/images/${item?.image_src}`}
                className="h-full"
                alt={item?.title}
              />
            </div>
            <div className="h-1/2">
              <p>{item?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
