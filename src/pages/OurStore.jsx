import { useState } from "react";
import { BreadCrumb, Meta } from "../components/layout";

import { Checkbox, FormInput, SelectWithSearch } from "../components/elements";
import { ProductCard } from "../components/cards";

const sortParametr = ["Default", "ASC", "DESC"];

const OurStore = () => {
  const [grid, setGrid] = useState(3);
  const [activeFilter, setActiveFilter] = useState(true);

  return (
    <div>
      <Meta title="Elanlar" />
      <BreadCrumb title="Elanlar" />
      <section className="container p-4">
        <div className="w-full flex items-center justify-end mb-2">
          <span
            className="block lg:hidden max-w-max cursor-pointer bg-colorBlack text-white border rounded-md  text-sm py-1 px-3 select-none"
            onClick={() => setActiveFilter(!activeFilter)}
          >
            Filter
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div
            className={`${
              activeFilter ? "inline-block" : "hidden"
            } lg:inline-block lg:max-w-[250px]`}
          >
            <div className="flex flex-col gap-3 w-full  text-sm select-none">
              <div className="flex flex-col gap-2 w-full items-center justify-end">
                <div className="flex  lg:flex-wrap items-center gap-2 bg-white w-full rounded-lg p-2">
                  <Checkbox label="Barter" value={false} />
                </div>

                <div className="flex gap-2 w-full">
                  <FormInput
                    placeholder="Min yürüş"
                    classSelect="text-xs w-full"
                    type="number"
                    min={0}
                  />
                </div>
              </div>

              <div className="flex gap-2 bg-white rounded-lg mb-4">
                <div className="p-3 md:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="cursor-pointer bg-colorBlack text-white hover:text-colorBlack hover:bg-colorPrimary rounded-lg  text-sm py-1 px-3">
                      Yamaha
                    </span>
                    <span className="cursor-pointer bg-colorBlack text-white hover:text-colorBlack hover:bg-colorPrimary rounded-lg  text-sm py-1 px-3">
                      Suzuki
                    </span>

                    <span className="cursor-pointer bg-colorBlack text-white hover:text-colorBlack hover:bg-colorPrimary rounded-lg  text-sm py-1 px-3">
                      Yağlama
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between bg-white rounded-lg p-2 gap-2 w-full">
              <p className="max-w-max min-w-36 font-semibold text-sm md:text-base select-none">
                Xəbər sayı: 234
              </p>
              <div className="flex items-center justify-end gap-2 w-[100px] md:w-[200px]">
                <SelectWithSearch
                  options={sortParametr}
                  value="Default"
                  classSelect="text-xs cursor-pointer w-full shadow-none"
                />
                <div className=" items-center gap-2 ms-3 pr-3  hidden sm:flex">
                  <img
                    onClick={() => setGrid(3)}
                    src="images/gr3.svg"
                    className="w-4  h-4  text-white cursor-pointer "
                    alt="img"
                  />
                  <img
                    onClick={() => setGrid(2)}
                    src="images/gr2.svg"
                    className="w-4 h-4 cursor-pointer hidden md:inline-block"
                    alt="img"
                  />
                  <img
                    onClick={() => setGrid(1)}
                    src="images/gr.svg"
                    className="w-4  h-4 cursor-pointer"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div
              className={`grid ${
                grid !== 1 ? "sm:grid-cols-2" : ""
              }  md:grid-cols-${grid} gap-4`}
            >
              <ProductCard grid={grid} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStore;
