import { useEffect, useState } from "react";
import api from "../../shared/api/api";
import { useTranslation } from "react-i18next";


const HomeFAQ = () => {
  const { t, i18n } = useTranslation();

  const [locate, setLocate] = useState([])
  const [city, setCity] = useState([])
  useEffect(() => {
    api.get("/locations").then((res) => setLocate(res?.data?.data));
    api.get("/cities").then((res) => setCity(res?.data?.data));
  }, []);
  return (
    <div className="pt-16 bg-zinc-900">
      <div className="bg-[url('/images/faq.png')] bg-center bg-contain bg-no-repeat saturate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">FAQ</h2>
          <div className="space-y-4">
            {/* <!-- Question 1 --> */}
            <details className="group bg-transparent p-4 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                {/* What is the minimum age requirement to rent a car in Dubai? */}
                {t ("home_faq.title1")}
                <span className="text-indigo-500 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <p className="mt-2 text-gray-300 bg-slate-500/50 rounded">
                {/* Drivers under 25 must have a license for a minimum of three
                years. The same applies to the person(s) whose name(s) is/are
                mentioned as an additional driver. */}
                {t ("home_faq.desc1")}
              </p>
            </details>
            {/* <!-- Question 2 --> */}
            <details className="group bg-transparent p-4 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                {/* How much is the insurance limit on luxury car rentals in Dubai? */}
                {t ("home_faq.title2")}
                <span className="text-indigo-500 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <p className="mt-2 text-gray-300 bg-slate-500/50 rounded">
                {/* The insurance limit depends on the car type and rental company
                terms. Check with the specific provider for details. */}
                {t ("home_faq.desc2")}
              </p>
            </details>
            {/* <!-- Question 3 --> */}
            <details className="group bg-transparent p-4 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                {/* What are the driving licenses that can be used in Arab
                countries? */}
                {t ("home_faq.title3")}
                <span className="text-indigo-500 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <p className="mt-2 text-gray-300 bg-slate-500/50 rounded">
                {/* A valid international driving license or a license from Gulf
                Cooperation Council countries is typically accepted. */}
                {t ("home_faq.desc3")}
              </p>
            </details>
            {/* <!-- Question 4 --> */}
            <details className="group bg-transparent p-4 rounded-lg transition-all">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold">
                {/* Can anyone else drive the car I rent? */}
                {t ("home_faq.title4")}
                <span className="text-indigo-500 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <p className="mt-2 text-gray-300 bg-slate-500/50 rounded">
                {/* Yes, provided they are registered as an additional driver and
                meet the minimum driving requirements. */}
                {t ("home_faq.desc4")}
              </p>
            </details>
          </div>
        </div>
      </div>
      <div className="md:my-20 my-10">
        <h3 className="md:text-start text-4xl md:ml-32 mb-10">
          {/* FOLLOW US ON INSTAGRAM */}
          {t ("home_faq.follow")}
        </h3>
        <div className="flex overflow-hidden insta md:mx-32 mx-10 gap-2">
          <img src="/insta/img1.jpg" alt="insta img" />
          <img src="/insta/img2.jpg" alt="insta img" />
          <img src="/insta/img3.webp" alt="insta img" />
          <img src="/insta/img4.jpg" alt="insta img" />
          <img src="/insta/img5.jpg" alt="insta img" />
          <img src="/insta/img6.webp" alt="insta img" />
        </div>
      </div>
      <div className="flex gap-10 md:ml-32 pl-10">
        <div className="flex flex-col items-start">
          <h4 className="text-4xl mb-5">
            {/* LOCATION */}
            {t ("home_faq.location")}
            </h4>
          {locate.map((place, i) => (
            <p key={i} className="text-gray-500 text-lg mb-3">{place.name}</p>
          ))}
        </div>
        <div className="flex flex-col items-start">
          <h4 className="text-4xl mb-5">
            {/* CITY */}
            {t ("home_faq.city")}
            </h4>
          {city.map((place, i) => (
            <p key={i} className="text-gray-500 text-lg mb-3">{place.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
