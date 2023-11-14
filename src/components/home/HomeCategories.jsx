import { Link } from "react-router-dom";
import { FaShoppingCart, FaBlog } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";

const categories = [
  {
    id: 1,
    path: "/",
    title: "Mağazalar",
    icon: (
      <FaShoppingCart className="group-hover:text-white text-xl md:text-2xl" />
    ),
  },
  {
    id: 2,
    path: "/",
    title: "Restoranlar",
    icon: (
      <MdRestaurant className="group-hover:text-white text-xl md:text-2xl" />
    ),
  },
  {
    id: 3,
    path: "/",
    title: "Xəbər və yeniliklər",
    icon: <FaBlog className="group-hover:text-white text-xl md:text-2xl" />,
  },
  {
    id: 4,
    path: "/",
    title: "Mall xəritəsi",
    icon: (
      <FaLocationDot className="group-hover:text-white text-xl md:text-2xl" />
    ),
  },
];

const HomeCategories = () => {
  return (
    <section className="container px-4 ">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {categories.map((item) => (
          <Link to={item.path}>
            <div className="w-full h-[150px] p-4 flex items-center justify-center gap-2 bg-white hover:bg-colorPrimary transition-all duration-200 rounded-lg shadow-lg group hover:-translate-y-2">
              {item.icon}
              <span className="group-hover:text-white text-base md:text-xl">
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeCategories;
