import { useEffect, useState } from "react";
import { BreadCrumb, Meta } from "../../components/layout";
import FloorOne from "./floorOne/FloorOne";
import FloorTwo from "./floorTwo/FloorTwo";
import FloorThree from "./floorThree/FloorThree";
import { useSearchParams } from "react-router-dom";

const floorTabs = [
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
  let [searchParams, setSearchParams] = useSearchParams();

  const parseAndValidateFloor = (floor) => {
    const parsedFloor = parseInt(floor);
    return floorTabs.some((item) => item.num === parsedFloor) ? parsedFloor : 1;
  };

  const [floorNumber, setFloorNumber] = useState(
    parseAndValidateFloor(searchParams.get("floor"))
  );

  useEffect(() => {
    const newFloor = parseAndValidateFloor(searchParams.get("floor"));

    if (newFloor !== floorNumber) {
      setFloorNumber(newFloor);
    }

    if (newFloor !== parseInt(searchParams.get("floor"))) {
      searchParams.delete("floor");
      setSearchParams(searchParams, {
        replace: true,
      });
    }
  }, [searchParams.get("floor"), floorNumber]);

  const handleChangeFloor = (num) => {
    searchParams.set("floor", num);
    setSearchParams(searchParams, {
      replace: true,
    });
  };

  return (
    <div>
      <Meta title="Mall xəritəsi" />
      <BreadCrumb title="Mall xəritəsi" />
      <section className="container p-4">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="flex flex-col gap-2 w-full h-full">
            <div className="flex items-center justify-center bg-white rounded-lg p-2 gap-2 w-full select-none">
              {floorTabs.map((item) => (
                <div
                  key={item.num}
                  className={`border-2 flex items-center justify-center p-3 w-12 h-12 font-semibold  rounded-lg cursor-pointer hover:bg-colorPrimary hover:text-white ${
                    floorNumber === item.num
                      ? "bg-colorPrimary text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => {
                    handleChangeFloor(item.num);
                  }}
                >
                  <span>{item.num}</span>
                </div>
              ))}
            </div>

            {floorTabs.map(
              (item, index) =>
                item.num === floorNumber && (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white rounded-lg p-2 gap-2 w-full"
                  >
                    {item.component}
                  </div>
                )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
