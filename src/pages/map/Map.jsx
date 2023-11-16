import { useState } from "react";
import { BreadCrumb, Meta } from "../../components/layout";
import FloorOne from "./floorOne/FloorOne";
import FloorTwo from "./floorTwo/FloorTwo";
import FloorThree from "./floorThree/FloorThree";

const floor = [
  {
    num: 1,
    component: <FloorOne />,
  },
  {
    num: 2,
    component: <FloorTwo />,
  },
  {
    num: 3,
    component: <FloorThree />,
  },
];

const Map = () => {
  const [floorNumber, setFloorNumber] = useState(1);

  return (
    <div>
      <Meta title="Mall xəritəsi" />
      <BreadCrumb title="Mall xəritəsi" />
      <section className=" p-4">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="flex flex-col gap-2 w-full h-full">
            <div className="flex items-center justify-center bg-white rounded-lg p-2 gap-2 w-full select-none">
              {floor.map((item) => (
                <>
                  <div
                    className={`border flex items-center justify-center p-3 w-12 h-12 font-semibold  rounded-full cursor-pointer hover:bg-colorPrimary hover:text-white ${
                      floorNumber === item.num
                        ? "bg-colorPrimary text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setFloorNumber(item.num)}
                  >
                    <span>{item.num}</span>
                  </div>
                </>
              ))}
            </div>
            <div className="flex items-center justify-between bg-white rounded-lg p-2 gap-2 w-full">
              {floor.map((item) => item.num === floorNumber && item.component)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
