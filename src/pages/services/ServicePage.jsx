import { Link } from "react-router-dom"

const ServicePage = () => {
  return (
    <div className="flex flex-col justify-start md:px-28 px-10 py-10 bg-gray-900 w-full text-white">
      <p className="text-start">Luxury Cars for Rent in Dubai / Services</p>
      <div className="flex gap-10 mt-10">
        <div className="md:w-[25rem] w-1/2 flex flex-col gap-5 justify-start items-start">
          <img src="/cars/service1.jpg" alt="service 1" className="rounded" />
          <p className="text-3xl text-start">
            Ride a buggy in Dubai and have fun
          </p>
          <p className="text-start">
            Experience the thrill of a dune buggy tour in Dubai with us. We
            offer free hotel pick-up & drop-off service. Book now
          </p>
          <Link to={"/services/detail"} className="text-white hover:text-red-600 transition-all">LEARN MORE</Link>
        </div>
        <div className="md:w-[25rem] w-1/2 flex flex-col gap-5 justify-start items-start">
          <img src="/cars/service2.jpg" alt="service 1" className="rounded" />
          <p className="text-3xl text-start">
            Photoshoot with luxury car rental Dubai
          </p>
          <p className="text-start">
            Professional car photoshoot as an additional type of service at
            Terra Car Rental
          </p>
          <Link to={"/services/detail"} className="text-white hover:text-red-600 transition-all">LEARN MORE</Link>
        </div>
      </div>
    </div>
  )
}

export default ServicePage