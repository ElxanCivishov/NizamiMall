import { useState } from "react";
import HelpText from "../HelpText";
const accardionData = [
  {
    id: 1,
    title: "Yardım",
    component: <HelpText />,
  },
];

const HomeAccardion = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="container mb-5">
      <div className="w-full mt-3 flex flex-col gap-3">
        {accardionData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg">
            <div
              className="flex items-center justify-between gap-3 cursor-pointer select-none p-4"
              onClick={() => setActive(active === index ? null : index)}
            >
              <span
                className="text-base text-gray-600 font-semibold"
                type="button"
              >
                <h3 className="text-sm md:text-base text-colorSecondary font-medium">
                  {item.title}
                </h3>
              </span>
              <span className="text-base text-colorSecondary  cursor-pointer hover:opacity-80 hover:scale-110 transition-all duration-300">
                {active === index ? "-" : "+"}
              </span>
            </div>
            {active === index && (
              <div className="text-xs md:text-sm">{item.component}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeAccardion;
