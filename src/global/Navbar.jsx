import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {t, i18n} = useTranslation();

  const handleChange = (event) =>{
    // const selectedLanguage = event.target.value;
    i18n.changeLanguage(event)
  }
  return (
    <nav className="w-full py-5 px-28 flex justify-between gap-7 bg-black">
      <div className="flex items-center gap-5">
        <div className="flex gap-3 items-center">
          <button className="p-0 rounded-full bg-transparent" onClick={() => handleChange('uz')}>
            <img src="/images/uzbekistan.png" alt="til-uz" className="w-6" />
          </button>
          <button className="p-0 rounded-full" onClick={() => handleChange('en')}>
            <img src="/images/en-img.png" alt="til-en" className="w-6" />
          </button>
          <button className="p-0 rounded-full" onClick={() => handleChange('ru')}>
            <img src="/images/ru-img.png" alt="til-ru" className="w-6" />
          </button>
        </div>
        <input
          type="text"
          className="px-5 rounded-xl h-12 w-[25rem] bg-gradient-to-r from-gray-700 to-black mr-6 text-white"
          placeholder="Search ..."
        />
        <Link to={'/'}><img src="/images/logo.png" alt="logo" className="w-32" /></Link>
      </div>
      <div className="flex flex-col items-end">
        <ul className="flex gap-10">
          <li>
            <Link to={"/cars"} className="text-white font-normal">{t('navbar.car')}</Link>
          </li>
          <li>
            <Link to={"/brand"} className="text-white font-normal">{t('navbar.brand')}</Link>
          </li>
          <li>
            <Link to={"/services"} className="text-white font-normal">{t('navbar.service')}</Link>
          </li>
          <li>
            <Link to={"/about"} className="text-white font-normal">{t('navbar.about')}</Link>
          </li>
          <li>
            <Link to={"/contact"} className="text-white font-normal">{t('navbar.contact')}</Link>
          </li>
          <li>
            <Link to={"/blog"} className="text-white font-normal">{t('navbar.blog')}</Link>
          </li>
        </ul>
        <a href="tel:+998990000441" className="text-white font-normal">+998 (99) 000 04 41</a>
      </div>
    </nav>
  );
};

export default Navbar;
