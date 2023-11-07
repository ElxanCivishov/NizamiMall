import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { MdContactPage, MdHelpCenter } from "react-icons/md";

const Menus = [
  { name: "Ana Səhifə", icon: <AiFillHome />, url: "/" },
  { name: "Yeniliklər", icon: <FaBlog />, url: "/blogs" },
  { name: "Əlaqə", icon: <MdContactPage />, url: "/elaqe" },
  { name: "Yardım", icon: <MdHelpCenter />, url: "/yardım" },
];

const MobileNavigation = () => {
  return (
    <div className="dropdown w-full fixed bottom-0 left-0 z-50 select-none">
      <div className="h-16 flex justify-between items-center bg-colorBlack container mx-auto px-4 rounded-t-lg">
        {Menus.map((menu, index) => (
          <Link
            key={index}
            to={menu.url}
            className="text-2xl text-white hover:text-colorPrimary"
          >
            {menu.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
