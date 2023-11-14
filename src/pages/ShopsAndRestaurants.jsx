import { useState } from "react";
import { ServiceCard } from "../components/cards";
import { Meta } from "../components/layout";
import { Link } from "react-router-dom";

const tabs = [
  {
    id: 1,
    title: "Hamısı",
    component: <ServiceCard />,
  },
  {
    id: 2,
    title: "Servislər",
    component: <ServiceCard />,
  },
  {
    id: 3,
    title: "Salonlar",
    component: <ServiceCard />,
  },
  {
    id: 4,
    title: "Aksesuarlar",
    component: <ServiceCard />,
  },
];

const data = [
  {
    id: 1,
    url: "/images/photo/p1.jpeg",
    title: "Brawo market",
  },
  {
    id: 2,
    url: "/images/photo/p1.jpeg",
    title: "Brawo market",
  },
  {
    id: 3,
    url: "/images/photo/p1.jpeg",
    title: "Brawo market",
  },
];

const ShopsAndRestaurants = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main className="flex flex-col gap-14 pb-10">
      <Meta title="Mağaza və Restoranlar" />

      <section class="container px-4">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 z-10 relative">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-600 md:text-5xl lg:text-6xl dark:text-white">
            Mağaza və Restoranlar
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            3 mərtəbədən ibarət olan Nizami Mall 100-dən çox mağazaya ev
            sahibliyi edir. Hazırda mall-da təhsil, turizm, gözəllik sahəsində
            xidmət göstərilir. Mall-da yerləşən restorantları ziyarət edərək,
            ləziz təamlardan dada biilərsiniz.
          </p>
        </div>

        <div className="px-4  my-5 ">
          <ul className="flex flex-wrap justify-between md:justify-start md:gap-2 w-full md:w-auto my-3 font-medium text-center text-gray-500">
            {tabs?.map((tab, index) => (
              <li
                className="mr-1 sm:mr-2 mb-2 cursor-pointer"
                key={tab.id}
                onClick={() => setActiveTab(index)}
              >
                <p
                  className={`${
                    activeTab === index
                      ? "text-zinc-800 border-colorBorder"
                      : " text-gray-500 border-transparent"
                  } inline-flex items-center justify-center  border-b-2  rounded-t-lg hover:text-zinc-800 hover:border-colorBorder group gap-1 md:gap-2 text-[9px] sm:text-xs md:text-base transition-all duration-200`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.title}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="wishlist px-4 bg-white ">
          {data?.map((item, index) =>
            activeTab === index ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-3 transition-all duration-400">
                <Link to={item.path}>
                  <div className="w-full h-[150px] p-4 flex items-center justify-center gap-2 bg-white hover:bg-colorPrimary transition-all duration-200 rounded-lg shadow-lg group hover:-translate-y-2">
                    <span className="group-hover:text-white text-base md:text-xl">
                      {item.title}
                    </span>
                  </div>
                </Link>
              </div>
            ) : null
          )}
        </div>
      </section>
    </main>
  );
};

export default ShopsAndRestaurants;
