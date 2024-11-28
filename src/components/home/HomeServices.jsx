import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeServices = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col justify-start md:px-28 px-10 py-10 bg-gray-900">
      <p className="text-start">
        {/* Luxury Cars for Rent in Dubai / Services */}
        {t ("services.direction")}
        </p>
      <div className="flex md:flex-row flex-col md:gap-10 gap-5 w-full mt-10">
        <div className="md:w-[25rem] flex flex-col gap-5 justify-start items-start">
          <img src="/cars/service1.jpg" alt="service 1" className="rounded" />
          <p className="md:text-3xl text-xl text-start">
            {/* Ride a buggy in Dubai and have fun */}
            {t ("services.title1")}
          </p>
          <p className="text-start md:text-base text-sm">
            {/* Experience the thrill of a dune buggy tour in Dubai with us. We
            offer free hotel pick-up & drop-off service. Book now */}
            {t ("services.text1")}
          </p>
          <Link to={"/services/detail"} className="text-white">
          {/* LEARN MORE */}
          {t ("services.btn1")}
          </Link>
          
        </div>
        <div className="md:w-[25rem] flex flex-col gap-5 justify-start items-start">
          <img src="/cars/service2.jpg" alt="service 1" className="rounded" />
          <p className="md:text-3xl text-xl text-start">
            {/* Photoshoot with luxury car rental Dubai */}
            {t ("services.title2")}
          </p>
          <p className="text-start md:text-base text-sm">
            {/* Professional car photoshoot as an additional type of service at
            Terra Car Rental */}
            {t ("services.text2")}
          </p>
          <Link to={"/services/detail"} className="text-white">
          {/* LEARN MORE */}
          {t ("services.btn1")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
