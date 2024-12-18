import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const HomeAbout = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section className="bg-[#272933] relative">
        <div className="text-start text-white py-14 md:px-36 px-8 relative z-[1]">
          <h3 className="md:text-[3rem] text-2xl font-semibold">
            {/* LUXURY CAR RENTAL IN EMIRATES */}
            {t ("home_about.title")}
          </h3>
          <p className="md:leading-[30px] md:text-base text-sm">
            {/* Are you ready to feel the adrenaline rush and unleash your inner
            speed demon? Look no further than Terra luxury car rental Dubai, the
            city where dreams become reality. In this ultimate guide to sports
            car rental Dubai, we will take you on a thrilling journey through
            the world of luxury and supercar rental Dubai. Imagine cruising down
            the iconic Sheikh Zayed Road in a sleek and powerful sports car
            rental Dubai style, turning heads and leaving everyone in awe of
            your style. Whether you are a car enthusiast or simply looking to */}
            {t ("home_about.desc")}
          </p>
          <h3 className="md:text-[3rem] text-2xl font-semibold mt-[30px]">
            {/* What are the requirements to rent a luxury car in Dubai? */}
            {t ("home_about.title2")}
          </h3>
          <p className="md:leading-[30px] md:text-base text-sm">
            {/* To rent a car Dubai, it&apos;s enough to have a valid driving
            license and enough funds. & you&apos;ll need to show your foreign
            passport and prove that you have come of age and have driving
            experience.The age limit and the requirements for the license depend
            on where you&apos;re from. Visitors from Europe, the UK, the US and
            the Middle East can drive with their national licenses. People from
            other parts of the world need an international license. The age
            limit for the driver might vary from 21 to 25 years. Please get in
            touch with us before placing an order to discuss your individual
            situation.Cars in the UAE have steering wheels on the left side.
            Drivers stick to the right side of the road.If needed, you can add a
            second driver to your rental contract. The requirements for this
            person will be the same as for the first driver. If you let someone
            who isn&apos;t mentioned in your rental contract take a place behind
            the wheel, you can get a fine.The duration of a premium car rental
            in Dubai can vary from one day to several weeks. Discounts are
            common for luxury car rental Dubai monthly car rental plan. Use this
            chance to have fun, increase your high social status and please your
            dearest and nearest!Please avoid smoking inside the rented vehicle. */}
            {t ("home_about.desc2")}
          </p>
        </div>
        <img
          className="absolute top-0 left-0 h-full opacity-70 md:block hidden"
          src="/cars/left-car.png"
          alt="left car"
        />
        <img
          className="absolute top-0 right-0 h-full opacity-70 md:block hidden"
          src="/cars/right-car.png"
          alt="right car"
        />
      </section>
      <div className="py-14 flex md:flex-row flex-col md:gap-14 gap-5 md:px-0 px-2">
        <iframe
          // width="57%"
          // height="530"
          className="pt-7 md:w-[57%] md:h-[30rem] w-full h-60"
          src="https://www.youtube.com/embed/rsHmvxJ86PA?si=aaCwO20t0Afat04C"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="md:w-[33%] md:pr-20 relative">
          <div className="z-20 flex flex-col items-start">
            <h3 className="md:text-[2.3rem] text-2xl text-start md:leading-[2.5rem] tracking-widest">
              {/* SPORTS CAR RENTAL DUBAI */}
              {t ("home_about.title3")}
            </h3>
            <p className="text-start md:text-[1.3rem] text-lg py-7">
              {/* Terra L L C a Car is a Top Luxury Car Rental Dubai based company,
              We offer sports car rental, and supercar rental in Dubai. The best
              luxury car rental process provided by our fleet . We own a diverse
              range of luxury supercar rental and sports car rental Dubai style
              , including Rolls Royce, Lamborghini, Maserati, Ferrari, Mercedes
              Benz, Porsche, and Range Rover, to name a few. Rent a car with the
              best car rental company in Dubai. */}
              {t ("home_about.title4")}
            </p>
            <Link to={"/cars"} className="text-start text-white">
              {/* ALL CARS */}
              {t ("home_about.btn")}
            </Link>
          </div>
          <img
            src="/images/bg-tower.png"
            alt=" about tower"
            className="absolute md:w-[23rem] w-[15rem] right-0 top-0 z-10 opacity-60"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col bg-gray-900 gap-10">
        <div className="bg-gray-800 bg-[url('/images/about-car.webp')] bg-no-repeat bg-cover bg-center md:w-[50%] h-[18rem]"></div>
        <div className="flex flex-col items-start py-10 md:px-0 px-3">
          <h4 className="md:text-5xl text-3xl pb-3 font-semibold">
            {/* SUPERCAR RENTAL DUBAI */}
            {t ("home_about.title4")}
            </h4>
          <p className="text-lg">
            {/* Hire the latest supercar */}
            {t ("home_about.desc4")}
            </p>
          <Link to={"/cars"} className="text-start text-white hover:text-red-500 transition-all mt-12">
            {/* ALL CARS */}
            {t ("home_about.btn")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
