import { useEffect, useState } from "react";
import api from "../../shared/api/api";
import HomeCars from "../../components/home/HomeCars";
import HomeServices from "../../components/home/HomeServices";
import HomeAbout from "../../components/home/HomeAbout";

const HomePage = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    api.get("/brands").then((res) => setBrands(res?.data?.data));
  }, []);
  console.log(brands);
  

  return (
    <div className="bg-black w-full text-white">
      <h2 className="mt-32 text-[24px] font-semibold">
        TOP LUXURY CAR RENTAL EMIRATES
      </h2>
      <p>№</p>
      <p className="my-5">
        Best sports car & supercar rental Emirates, Exclusive offers on luxury
        car rental Emirates Cheap price
      </p>
      <p className="cursor-pointer">
        RENT A CAR EMIRATES CATALOG <span>»</span>
      </p>
      <div className="flex gap-20 my-10 overflow-x-auto">
        <img src="/cars/car1.png" alt="car" />
        <img src="/cars/car2.png" alt="car" />
        <img src="/cars/car3.png" alt="car" />
        <img src="/cars/car4.png" alt="car" />
      </div>
      <div className="my-5">
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
    </div>
  );
};

export default HomePage;
