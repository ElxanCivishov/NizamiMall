import { Link, NavLink } from "react-router-dom";
import MobileNavigation from "../MobileNavigation";
import { FaSearch } from "react-icons/fa";
import LinkBtn from "../elements/LinkBtn";
import { FaLocationDot } from "react-icons/fa6";

const navs = [
  {
    path: "/",
    title: "Ana Səhifə",
  },
  {
    path: "/magaza-ve-restoranlar",
    title: " MAĞAZA VƏ RESTORAN",
  },
  {
    path: "/xeberler-ve-yenilikler",
    title: "XƏBƏR",
  },
  {
    path: "/icare",
    title: "İcarə",
  },
];

const Header = () => {
  return (
    <header className="bg-white sticky  border-b top-0 z-50">
      <div className="container py-1  select-none">
        <nav class="w-full z-20 top-0 start-0 ">
          <div class="flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              to="/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/images/logo.jpg" class="h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-500">
                Nizami Mall
              </span>
            </Link>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto ">
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8  md:flex-row md:mt-0 md:border-0 ">
                {navs.map((nav) => (
                  <li class="block py-2 px-3 text-gray-500 rounded  md:p-0 ">
                    <NavLink
                      to={nav.path}
                      className="text-sm uppercase hover:text-colorPrimary"
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <LinkBtn
                label={
                  <span className="flex items-center gap-2">
                    <FaLocationDot />
                    <span className="hidden md:inline-block">
                      Mall xəritəsi
                    </span>
                  </span>
                }
                path="/map"
                classBtn="max-w-max p-2 text-xs md:text-base font-medium text-center rounded-lg   text-white select-none hover:opacity-80 bg-colorPrimary"
              />
              {/* <LinkBtn
                label={
                  <span className="flex items-center gap-2">
                    <span className="hidden md:inline-block">Axtarış</span>
                    <FaSearch />
                  </span>
                }
                path="/axtaris"
                classBtn="max-w-max p-2 text-xs md:text-base font-medium text-center rounded-lg   text-white select-none hover:opacity-80 bg-colorPrimary"
              /> */}
            </div>
          </div>
        </nav>
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
