import { useEffect, useState } from "react";
import api from "../../shared/api/api";

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
        {/* <img
          src="data:image/svg+xml,%3csvg%20width='91'%20height='17'%20viewBox='0%200%2091%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2016H89.5L74.5%201'%20stroke='white'/%3e%3c/svg%3e"
          alt="right arrow"
        />
        <img
          src="data:image/svg+xml,%3csvg%20width='92'%20height='17'%20viewBox='0%200%2092%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M91.5%2016H2L17%201'%20stroke='white'/%3e%3c/svg%3e"
          alt="left arrow"
        /> */}
      </div>
      <div className="my-5">
        <h3>Brands</h3>
        {brands.map((item, i) => (
          <>
            <p key={i}>{item?.title}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
