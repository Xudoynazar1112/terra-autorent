import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-5 px-28 flex justify-between gap-7 bg-black">
      <div className="flex items-center gap-5">
        <div className="flex gap-3 items-center">
          <button className="p-0 rounded-full">
            <img src="/images/en-img.png" alt="til-en" className="w-6" />
          </button>
          <button className="p-0 rounded-full">
            <img src="/images/ru-img.png" alt="til-en" className="w-6" />
          </button>
        </div>
        <input
          type="text"
          className="px-5 rounded-xl h-12 w-[25rem] bg-gradient-to-r from-gray-700 to-black mr-6"
          placeholder="Search ..."
        />
        <img src="/images/logo.png" alt="logo" className="w-32" />
      </div>
      <div className="flex flex-col items-end">
        <ul className="flex gap-10">
          <li>
            <Link to={"/cars"} className="text-white font-normal">CARS</Link>
          </li>
          <li>
            <Link to={"/brand"} className="text-white font-normal">BRAND</Link>
          </li>
          <li>
            <Link to={"/services"} className="text-white font-normal">SERVICES</Link>
          </li>
          <li>
            <Link to={"/about"} className="text-white font-normal">ABOUT US</Link>
          </li>
          <li>
            <Link to={"/contact"} className="text-white font-normal">CONTACTS</Link>
          </li>
          <li>
            <Link to={"/blog"} className="text-white font-normal">BLOG</Link>
          </li>
        </ul>
        <a href="tel:+998990000441" className="text-white font-normal">+998 (99) 000 04 41</a>
      </div>
    </nav>
  );
};

export default Navbar;
