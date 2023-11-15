import { useState } from "react";
import { ServiceCard } from "../components/cards";
import { Meta } from "../components/layout";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const tabs = [
  {
    id: 1,
    title: "Hamısı",
    component: <ServiceCard />,
  },
  {
    id: 2,
    title: "Mağaza",
    component: <ServiceCard />,
  },
  {
    id: 3,
    title: "Restoran",
    component: <ServiceCard />,
  },
];

const data = [
  {
    id: 1,
    url: "/images/shops/esko.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 2,
    url: "/images/shops/flame.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 3,
    url: "/images/shops/narcisse.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 1,
    url: "/images/shops/Sonia.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 2,
    url: "/images/shops/porom.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar ",
  },
  {
    id: 3,
    url: "/images/shops/shtonak.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar ",
  },
  {
    id: 1,
    url: "/images/shops/Saffron-restaurant.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün üçün üçün",
  },
  {
    id: 1,
    url: "/images/shops/esko.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 2,
    url: "/images/shops/flame.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 3,
    url: "/images/shops/narcisse.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 1,
    url: "/images/shops/Sonia.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 2,
    url: "/images/shops/porom.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar ",
  },
  {
    id: 3,
    url: "/images/shops/shtonak.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar ",
  },
  {
    id: 1,
    url: "/images/shops/Saffron-restaurant.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün üçün üçün",
  },
  {
    id: 1,
    url: "/images/shops/esko.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 2,
    url: "/images/shops/flame.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 3,
    url: "/images/shops/narcisse.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 1,
    url: "/images/shops/Sonia.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 2,
    url: "/images/shops/porom.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar ",
  },

  {
    id: 1,
    url: "/images/shops/Saffron-restaurant.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün üçün üçün",
  },
  {
    id: 3,
    url: "/images/shops/narcisse.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 1,
    url: "/images/shops/Sonia.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 2,
    url: "/images/shops/porom.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar ",
  },
  {
    id: 3,
    url: "/images/shops/shtonak.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar ",
  },
  {
    id: 1,
    url: "/images/shops/Saffron-restaurant.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün üçün üçün",
  },
  {
    id: 3,
    url: "/images/shops/narcisse.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 1,
    url: "/images/shops/Sonia.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 2,
    url: "/images/shops/porom.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar ",
  },
  {
    id: 3,
    url: "/images/shops/shtonak.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar ",
  },
  {
    id: 1,
    url: "/images/shops/Saffron-restaurant.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün üçün üçün",
  },
  {
    id: 3,
    url: "/images/shops/narcisse.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 1,
    url: "/images/shops/Sonia.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün",
  },
  {
    id: 2,
    url: "/images/shops/porom.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar ",
  },
  {
    id: 3,
    url: "/images/shops/shtonak.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar ",
  },
  {
    id: 1,
    url: "/images/shops/Saffron-restaurant.jpg",
    title: "Brawo market",
    floor: "Birinci mərtəbə",
    cat: "Uşaqlar üçün üçün üçün",
  },
];

const ShopsAndRestaurants = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <main className="flex flex-col gap-14 pb-10">
      <Meta title="Mağaza və Restoranlar" />

      <section class="container px-4">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 z-10 relative">
          <h1 class="mb-4 text-2xl  font-extrabold tracking-tight leading-none text-gray-600 md:text-5xl lg:text-6xl dark:text-white">
            Mağaza və Restoranlar
          </h1>
          <p class="md:mb-8 text-sm font-normal text-gray-600 md:text-base  lg:text-xl sm:px-10 lg:px-40 dark:text-gray-200">
            3 mərtəbədən ibarət olan Nizami Mall 100-dən çox mağazaya ev
            sahibliyi edir. Hazırda mall-da təhsil, turizm, gözəllik sahəsində
            xidmət göstərilir. Mall-da yerləşən restorantları ziyarət edərək,
            ləziz təamlardan dada biilərsiniz.
          </p>
        </div>

        <div className="my-5 flex flex-col  sm:flex-row items-center justify-between  gap-2">
          <ul className="flex flex-wrap md:justify-start gap-2 w-full md:w-auto font-medium text-center text-gray-500">
            {tabs?.map((tab, index) => (
              <li
                className=" mb-2 cursor-pointer"
                key={tab.id}
                onClick={() => setActiveTab(index)}
              >
                <p
                  className={`${
                    activeTab === index
                      ? "text-colorPrimary border-colorPrimary"
                      : " text-gray-500 border-transparent"
                  } inline-flex items-center justify-center  border-b-2  rounded-t-lg hover:text-colorPrimary hover:border-colorPrimary group gap-1 md:gap-2  text-sm md:text-base transition-all duration-200`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.title}</span>
                </p>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 w-full items-center justify-end rounded-lg bg-white p-2 shadow-lg sm:max-w-[250px] ">
            <input
              placeholder="axtar..."
              className=" text-gray-900 text-xs md:text-sm  focus:ring-gray-300 focus:border-gray-300 block outline-none p-1 transition duration-200 no-spin placeholder:text-gray-400  w-full "
              value={search}
              onChange={(e) => handleChange(e)}
            />
            <FaSearch />
          </div>
        </div>

        <div className="p-4 bg-white ">
          <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-3 transition-all duration-400">
            {data?.map((item, index) => (
              <Link to={`/magaza-ve-restoranlar/${index}`}>
                <div className="w-full h-full border border-slate-100 p-4 flex flex-col  transition-all duration-200 rounded-lg shadow-lg group hover:-translate-y-3">
                  <div className="w-full flex overflow-hidden items-center justify-center">
                    <img
                      src={item.url}
                      alt=""
                      className="w-full h-full group-hover:scale-105 transition-all duration-200  object-cover"
                    />
                  </div>
                  <h2 className="group-hover:text-colorPrimary text-sm md:text-base mt-2">
                    {item.title}
                  </h2>
                  <p className=" text-sm flex gap-1">
                    {item.floor + " - " + item.cat}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShopsAndRestaurants;
