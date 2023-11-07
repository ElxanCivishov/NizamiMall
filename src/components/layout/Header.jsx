import { Link } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import MobileNavigation from "../MobileNavigation";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" bg-colorBlack">
      <div className="container p-4 select-none">
        <div className="flex items-center justify-between">
          <div className="w-1/4 ">
            <h2>
              <Link className="text-colorPrimary" to="/">
                <div className="flex items-center">
                  <img
                    src="/images/logo.jpg"
                    alt="logo"
                    className="w-5 md:w-8 lg:w-10 object-cover me-3"
                  />
                  <span className="whitespace-nowrap uppercase text-xl tracking-wide">
                    Nizami <span className="text-blue-400">m</span>
                    <span className="text-red-500">a</span>
                    <span className="text-orange-500">l</span>
                    <span className="text-emerald-500">l</span>
                  </span>
                </div>
              </Link>
            </h2>
          </div>

          <div>
            <div className="flex items-center justify-end gap-3">
              <div className="bg-colorBlack text-center font-medium p-2 rounded-full  hover:bg-colorPrimary flex items-center gap-1 text-[10px]  border whitespace-nowrap border-white text-white">
                <FaSearch className="text-base" />
              </div>
              <Link
                to="/"
                className="bg-colorBlack text-center font-medium p-2 rounded-full  hover:bg-colorPrimary flex items-center gap-1 text-[10px]  border whitespace-nowrap border-white text-white"
              >
                <MdAddCircle className="text-base" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <div className="block md:hidden w-full px-4">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
