import { Link, NavLink, useLocation } from "react-router-dom";
import MobileNavigation from "../MobileNavigation";
import LinkBtn from "../elements/LinkBtn";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import defLogo from "/images/logo.png";

import { RESET, getLayout } from "../../features/layout/layoutSlice";

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
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const { isSuccess, layout } = useSelector((state) => state.layout);

  useEffect(() => {
    dispatch(getLayout());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [isSuccess, dispatch]);

  return (
    <header className="bg-white sticky  border-b top-0 z-50">
      <div className="container py-1  select-none">
        <nav className="w-full z-20 top-0 start-0 ">
          <div className="flex  items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={layout ? layout.logo : defLogo}
                className="h-8"
                alt="Logo"
              />
              {layout?.title && (
                <span className="text-base md:text-xl font-semibold whitespace-nowrap text-black  transition-all duration-150">
                  {layout.title}
                </span>
              )}
            </Link>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto ">
              <ul className="flex gap-1 font-medium">
                {navs.map((nav, index) => (
                  <li
                    key={index}
                    className="block py-2 px-3 text-black rounded font-bold "
                  >
                    <NavLink
                      to={nav.path}
                      className={`text-sm uppercase hover:text-colorPrimary transition-all duration-100 ${
                        pathname === nav.path
                          ? "text-colorPrimary scale-110"
                          : "text-zinc-800 scale-100"
                      }`}
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
                  <span className="flex items-center gap-2 px-2">
                    <span className="text-sm">Mall xəritəsi</span>
                  </span>
                }
                path="/map"
                classBtn="max-w-max p-2 text-xs md:text-base font-medium text-center rounded-lg   text-white select-none hover:opacity-80 bg-colorPrimary"
              />
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
