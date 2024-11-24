import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    // const selectedLanguage = event.target.value;
    i18n.changeLanguage(event);
  };

  const toggleHandle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="w-full py-5 md:px-28 px-10 flex justify-between items-center gap-7 bg-black">
        <div className="flex items-center gap-5">
          <div className="flex gap-3 items-center">
            <button
              className="p-0 rounded-full bg-transparent"
              onClick={() => handleChange("uz")}
            >
              <img src="/images/uzbekistan.png" alt="til-uz" className="w-6" />
            </button>
            <button
              className="p-0 rounded-full"
              onClick={() => handleChange("en")}
            >
              <img src="/images/en-img.png" alt="til-en" className="w-6" />
            </button>
            <button
              className="p-0 rounded-full"
              onClick={() => handleChange("ru")}
            >
              <img src="/images/ru-img.png" alt="til-ru" className="w-6" />
            </button>
          </div>
          <input
            type="text"
            className="px-5 rounded-xl h-12 w-[25rem] bg-gradient-to-r from-gray-700 to-black mr-6 text-white md:block hidden"
            placeholder="Search ..."
          />
          <Link to={"/"}>
            <img src="/images/logo.png" alt="logo" className="w-32" />
          </Link>
        </div>
        <div className="md:flex flex-col items-end hidden">
          <ul className="flex gap-10">
            <li>
              <Link to={"/cars"} className="text-white font-normal">
                {t("navbar.car")}
              </Link>
            </li>
            <li>
              <Link to={"/brand"} className="text-white font-normal">
                {t("navbar.brand")}
              </Link>
            </li>
            <li>
              <Link to={"/services"} className="text-white font-normal">
                {t("navbar.service")}
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="text-white font-normal">
                {t("navbar.about")}
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="text-white font-normal">
                {t("navbar.contact")}
              </Link>
            </li>
            <li>
              <Link to={"/blog"} className="text-white font-normal">
                {t("navbar.blog")}
              </Link>
            </li>
          </ul>
          <a href="tel:+998990000441" className="text-white font-normal">
            +998 (99) 000 04 41
          </a>
        </div>
        <button
          onClick={toggleHandle}
          className="p-1 h-8 ml-7 transition-all duration-300 md:hidden bg-black text-white dark:bg-gray-800 dark:text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isOpen && (
        <div className="fixed right-0 top-0 h-full w-full  bg-black text-white z-10">
          <div className="flex flex-col h-full md:hidden">
            <div className="flex items-center justify-between px-10 py-6">
              <img src="/images/logo.png" className="w-28" alt="logo" />
              <button
                onClick={toggleHandle}
                className="p-1 h-8 ml-7 transition-all duration-300 md:hidden bg-black text-white dark:bg-gray-800 dark:text-white"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center gap-10">
              <li onClick={toggleHandle}>
                <Link to={"/cars"} className="text-white font-normal">
                  {t("navbar.car")}
                </Link>
              </li>
              <li onClick={toggleHandle}>
                <Link to={"/brand"} className="text-white font-normal">
                  {t("navbar.brand")}
                </Link>
              </li>
              <li onClick={toggleHandle}>
                <Link to={"/services"} className="text-white font-normal">
                  {t("navbar.service")}
                </Link>
              </li>
              <li onClick={toggleHandle}>
                <Link to={"/about"} className="text-white font-normal">
                  {t("navbar.about")}
                </Link>
              </li>
              <li onClick={toggleHandle}>
                <Link to={"/contact"} className="text-white font-normal">
                  {t("navbar.contact")}
                </Link>
              </li>
              <li onClick={toggleHandle}>
                <Link to={"/blog"} className="text-white font-normal">
                  {t("navbar.blog")}
                </Link>
              </li>
            </ul>
            <a href="tel:+998990000441" className="text-white font-normal">
              +998 (99) 000 04 41
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
