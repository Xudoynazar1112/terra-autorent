import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <div className="flex flex-col justify-start px-28 py-10 bg-gray-900">
      <p className="text-start">Luxury Cars for Rent in Dubai / Services</p>
      <div className="flex gap-10 mt-10">
        <div className="w-[25rem] flex flex-col gap-5 justify-start items-start">
          <img src="/cars/service1.jpg" alt="service 1" className="rounded" />
          <p className="text-3xl text-start">
            Ride a buggy in Dubai and have fun
          </p>
          <p className="text-start">
            Experience the thrill of a dune buggy tour in Dubai with us. We
            offer free hotel pick-up & drop-off service. Book now
          </p>
          <Link to={"/service"} className="text-white">LEARN MORE</Link>
        </div>
        <div className="w-[25rem] flex flex-col gap-5 justify-start items-start">
          <img src="/cars/service2.jpg" alt="service 1" className="rounded" />
          <p className="text-3xl text-start">
            Photoshoot with luxury car rental Dubai
          </p>
          <p className="text-start">
            Professional car photoshoot as an additional type of service at
            Terra Car Rental
          </p>
          <Link to={"/service"} className="text-white">LEARN MORE</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
