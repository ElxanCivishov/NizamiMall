import { useState } from "react";
import { BreadCrumb, Meta } from "../../components/layout";
import { FormInput } from "../../components/elements";
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
  const [activeFilter, setActiveFilter] = useState(false);
  const [floorNumber, setFloorNumber] = useState(1);

  return (
    <div>
      <Meta title="Mall xəritəsi" />
      <BreadCrumb title="Mall xəritəsi" />
      <section className="container p-4">
        {/* <div className="w-full flex items-center justify-end mb-2">
          <span
            className="block lg:hidden max-w-max cursor-pointer bg-colorBlack text-white border rounded-md  text-sm py-1 px-3 select-none"
            onClick={() => setActiveFilter(!activeFilter)}
          >
            Axtar
          </span>
        </div> */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* <div
            className={`${
              activeFilter ? "inline-block" : "hidden"
            } lg:inline-block lg:w-[350px]`}
          >
            <div className="flex flex-col gap-3 w-full  text-sm select-none">
              <div className="flex flex-col gap-2 w-full items-center justify-end">
                <div className="flex gap-2 w-full">
                  <FormInput
                    placeholder="axtar..."
                    classSelect="text-xs w-full"
                  />
                </div>
              </div>

              <div className="flex gap-2 bg-white rounded-lg mb-4">
                <div className="p-3 md:p-5">
                  <div className="flex flex-col items-center gap-2">
                    <span className="cursor-pointer bg-colorBlack text-white hover:text-colorBlack hover:bg-colorPrimary rounded-lg  text-sm py-1 px-3">
                      Supermarket
                    </span>
                    <span className="cursor-pointer bg-colorBlack text-white hover:text-colorBlack hover:bg-colorPrimary rounded-lg  text-sm py-1 px-3">
                      Restoran
                    </span>
                    <span className="cursor-pointer bg-colorBlack text-white hover:text-colorBlack hover:bg-colorPrimary rounded-lg  text-sm py-1 px-3">
                      Xidmət
                    </span>
                    <span className="cursor-pointer bg-colorBlack text-white hover:text-colorBlack hover:bg-colorPrimary rounded-lg  text-sm py-1 px-3">
                      Supermarket
                    </span>
                    <span className="cursor-pointer bg-colorBlack text-white hover:text-colorBlack hover:bg-colorPrimary rounded-lg  text-sm py-1 px-3">
                      Restoran
                    </span>
                    <span className="cursor-pointer bg-colorBlack text-white hover:text-colorBlack hover:bg-colorPrimary rounded-lg  text-sm py-1 px-3">
                      Xidmət
                    </span>
                    <span className="cursor-pointer bg-colorBlack text-white hover:text-colorBlack hover:bg-colorPrimary rounded-lg  text-sm py-1 px-3">
                      Supermarket
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col gap-2 w-full overflow-auto">
            <div className="flex items-center justify-center bg-white rounded-lg p-2 gap-2 w-full select-none">
              <div
                className={`border flex items-center justify-center p-3 w-12 h-12 font-semibold  rounded-full cursor-pointer hover:bg-colorPrimary hover:text-white ${
                  floorNumber === 1
                    ? "bg-colorPrimary text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setFloorNumber(1)}
              >
                <span>1</span>
              </div>
              <div
                className={`border flex items-center justify-center p-3 w-12 h-12 font-semibold  rounded-full cursor-pointer hover:bg-colorPrimary hover:text-white ${
                  floorNumber === 2
                    ? "bg-colorPrimary text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setFloorNumber(2)}
              >
                <span>2</span>
              </div>
              <div
                className={`border flex items-center justify-center p-3 w-12 h-12 font-semibold  rounded-full cursor-pointer hover:bg-colorPrimary hover:text-white ${
                  floorNumber === 3
                    ? "bg-colorPrimary text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setFloorNumber(3)}
              >
                <span>3</span>
              </div>
            </div>
            <div className="flex items-center justify-between bg-white rounded-lg p-2 gap-2 w-full">
              {/* <FloorOne /> */}
              {floor.map((item) => item.num === floorNumber && item.component)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
