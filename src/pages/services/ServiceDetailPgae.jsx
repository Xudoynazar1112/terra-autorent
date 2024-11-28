function Detail({ img, person, number }) {
  const { t, i18n } = useTranslation();

  return (
    
    <div className="w-[23rem] flex flex-col gap-5 justify-start items-start">
      <img src={img} alt="service 1" className="rounded" />
      <p className="text-3xl text-start">
        {/* Basic */}
        {t ("services2.title1")}
        </p>
      <p>
        <span className="border border-green-600 px-6 py-2 rounded-lg mr-5 text-lg">{number}</span> {person}
      </p>
      <p className="text-start">
        {/* Dune buggies in Dubai Book your ride on the most exciting adventure 
        activity to hit the desert and later pamper your self to a traditional
        Arabian hospitality. */}
        {t ("services2.desc")}
      </p>
      <div className="tick flex flex-col gap-5">
        <h4 className="text-4xl">
          {/* Package Inclusions: */}
          {t ("services2.title2")}
          </h4>
        <div>
          <img src="/images/tick.png" alt="tick" />
          <p>
            {/* Premium Transfer to camp */}
            {t ("services2.body_content1")}
            </p>
        </div>
        <div>
          <img src="/images/tick.png" alt="tick" />
          <p>
            {/* Dune Buggy riding 1.5 hours */}
            {t ("services2.body_content2")}
            </p>
        </div>
        <div>
          <img src="/images/tick.png" alt="tick" />
          <p>
            {/* Falcone shoting */}
            {t ("services2.body_content3")}
            </p>
        </div>
        <div>
          <img src="/images/tick.png" alt="tick" />
          <p>
            {/* Camel */}
            {t ("services2.body_content4")}
            </p>
        </div>
        <div>
          <img src="/images/tick.png" alt="tick" />
          <p>
            {/* VIP room */}
            {t ("services2.body_content5")}
            </p>
        </div>
        <div>
          <img src="/images/tick.png" alt="tick" />
          <p>
            {/* Fruits, Drinks, BBQ */}
            {t ("services2.body_content6")}
            </p>
        </div>
      </div>
      <a href="tel:+998990000441" className="bg-red-500 rounded-3xl w-full text-3xl text-white py-5">
        {/* BOOK NOW */}
        {t ("services2.btn")}
        </a>
    </div>
  );
}
import { useTranslation } from "react-i18next";



const ServiceDetailPgae = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col justify-start px-28 py-10 bg-gray-900 w-full text-white">
      <p className="text-start">
        {/* Luxury Cars for Rent in Dubai / Services */}
        {t ("services.direction")}
        </p>
      <p className="text-4xl text-start my-16">
        {/* Ride a buggy in Dubai and have fun */}
        {t ("services2.direction")}
      </p>
      <div className="flex gap-10">
        <Detail img={"/images/ride1.jpg"} number={1000} person={t ("services2.person1")} />
        <Detail img={"/images/ride2.jpg"} number={2000} person={t ("services2.person2")} />
        <Detail img={"/images/ride3.jpg"} number={3000} person={t ("services2.person3")} />
      </div>
    </div>
  );
};

export default ServiceDetailPgae;
