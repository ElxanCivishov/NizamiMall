import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBlog, FaShoppingCart } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";

const Menus = [
  { name: "Ana Səhifə", icon: <AiFillHome />, url: "/" },
  {
    name: "Mağaza və Restoranlar",
    icon: <FaShoppingCart />,
    url: "/magaza-ve-restoranlar",
  },
  { name: "Yeniliklər", icon: <FaBlog />, url: "/xeberler-ve-yenilikler" },
  { name: "Əlaqə", icon: <MdContactPage />, url: "/icare" },
];

const MobileNavigation = () => {
  const pathname = useLocation().pathname;
  return (
    <div className="dropdown w-full fixed bottom-0 left-0 z-50 select-none">
      <div className="h-16 flex justify-between items-center bg-white border-2 container mx-auto px-4 rounded-t-lg">
        {Menus.map((menu, index) => (
          <Link
            key={index}
            to={menu.url}
            className={`text-2xl hover:text-colorPrimary hover:scale-110  transition-all duration-100 ${
              pathname === menu.url
                ? "text-colorPrimary scale-110"
                : "text-zinc-800 scale-100"
            }`}
          >
            {menu.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
