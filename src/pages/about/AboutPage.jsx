import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-gray-900 text-white text-start w-full flex flex-col items-start md:px-40 px-10 py-20">
      <h5 className="text-4xl">
        {/* ABOUT US */}
        {t("about.title1")}
        </h5>
      <p className="text-2xl py-3">
        {/* Welcome to Auto Zoom Car Rental Co LLC – Your Partner in Unforgettable
        Journeys in Dubai! */}
        {t("about.text1")}
      </p>
      <p>
        {/* In a world where every trip is an adventure, Auto Zoom Car Rental Co LLC
        offers you a unique car rental experience in the heart of Dubai. */}
        {t("about.text2")}
      </p>
      <p className="text-3xl py-3 mt-14">
        {/* Why Auto Zoom? */}
        {t("about.title2")}
        </p>
      <p className="why-zoom">
        <span className="text-xl font-semibold">
          {/* Elegant Car Fleet: */}
          {t("about.span1")}
          </span>
          {/* We
        provide you the opportunity to choose from our luxurious car fleet –
        from sleek sedans to powerful SUVs. We have a vehicle to match your
        style and meet your needs. */}
        {t("about.desc1")}
      </p>
      <p className="why-zoom">
        <span className="text-xl font-semibold">
          {/* Worry-Free Rental:  */}
          {t("about.span2")}
          </span>
        {/* Our goal is to make your journey as comfortable as possible. Flexible
        rental terms, the option to hire with a driver, and a wide range of
        additional services – all for your convenience. */}
        {t("about.desc2")}
      </p>
      <p className="why-zoom">
        <span className="text-xl font-semibold">
          {/* Transparency and Trust:  */}
          {t("about.span3")}
          </span>
        {/* We value every customer, so our prices are honest and transparent. No
        hidden fees, no unexpected surprises. Trust us, and we will make your
        rental experience straightforward and clear. */}
        {t("about.desc3")}
      </p>
      <p className="why-zoom">
        <span className="text-xl font-semibold">
          {/* Service at Your Level:  */}
          {t("about.span4")}
          </span>
        {/* Our friendly and professional team is ready to bring your ideas to life.
        We aim not just to provide a car but to create a genuine automotive
        experience for you. */}
        {t("about.desc4")}
      </p>
      <p className="why-zoom">
        <span className="text-xl font-semibold">
          {/* Our Mission: */}
          {t("about.span5")}
          </span>
        {/* Auto Zoom Car Rental Co LLC is created with one goal – to make every
        journey unforgettable. We strive to offer you not just a car but the key
        to new experiences and adventures. */}
        {t("about.desc5")}
      </p>
      <p className="why-zoom">
        <span className="text-xl font-semibold">
          {/* Contact Us:  */}
          {t("about.span6")}
          </span>
          {/* Trust the
        professionals – trust Auto Zoom Car Rental Co LLC. Get in touch with us
        today to start your exciting journey through Dubai in our stylish and
        reliable cars. Allow yourself to savor every moment of your trip. */}
        {t("about.desc6")}
      </p>
    </div>
  );
};

export default AboutPage;
