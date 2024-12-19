import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <header className="py-10 px-4 container max-w-screen-xl mx-auto flex flex-wrap md:flex-nowrap items-center">
      <div className="flex items-center w-full md:w-2/3">
        <Link href="/" className="font-black text-[#F27405] hover:text-red-500">
          Hotelzz
        </Link>
        <ul className="flex items-center ml-5 space-x-4">
          <li>
            <Link href="/auth">
              <FaUserCircle className="cursor-pointer" />
            </Link>
          </li>
          <li>
            <MdDarkMode className="cursor-pointer" />
          </li>
        </ul>
      </div>
      <ul className="flex items-center justify-end w-full md:w-auto ml-auto mt-4 md:mt-0 space-x-6">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/Rooms">Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
