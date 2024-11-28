import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-gray-900 w-full text-white flex flex-col items-start md:px-40 px-10 py-10">
      <p className="text-gray-400">
        {/* Luxury Cars for Rent in Dubai / Contacts */}
        {t("contact.direction")}
      </p>
      <p className="text-4xl py-10">
        {/* HAVE ANY QUESTIONS? */}
        {t("contact.title1")}
      </p>
      <p className="text-gray-400">
        {/* We will be glad to help */}
        {t("contact.direction2")}
        </p>
      <div className="flex flex-col gap-3 items-start border-b w-full pb-8">
        <p className="text-4xl pl-7 mt-16">
          {/* Head office */}
          {t("contact.title2")}
          </p>
        <div className="flex gap-3">
          <FaLocationDot />
          <p>
            {/* Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates */}
            {t("contact.location")}
            </p>
        </div>
        <div className="flex gap-3">
          <FaPhone />
          <p>+998 (99) 000 04 41</p>
        </div>
        <div className="flex gap-3">
          <MdEmail />
          <p>terra-rentacar.mail.ru</p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d28917.687984900655!2d55.215449!3d25.04388!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzQxLjUiTiA1NcKwMTInNTUuMSJF!5e0!3m2!1sen!2sus!4v1732275642348!5m2!1sen!2sus"
        width="100%"
        height="500"
        style={{border: 0, borderRadius: '14px', marginTop: '30px'}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactPage;
