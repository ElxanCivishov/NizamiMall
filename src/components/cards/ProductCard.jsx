import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const [like, setLike] = useState(false);
  const { grid } = props;
  return (
    <div className="gap-2 bg-white rounded-lg w-full overflow-hidden select-none">
      <div
        className={`w-full grid ${
          grid === 1 ? "grid-cols-2" : "grid-cols-1"
        } relative mb-3`}
      >
        <div className="top-3 left-0 z-10 absolute flex flex-col gap-2">
          <span className="bg-colorBlack rounded-r-lg text-white px-2 py-1 text-xs  md:text-base">
            Kavasaki
          </span>
          <span className="bg-emerald-600 rounded-r-lg text-white px-2 py-1 w-14 text-xs  md:text-base">
            Yeni
          </span>
        </div>

        <div className="relative flex w-full h-full  overflow-hidden  group">
          <div className="top-3 right-3 z-10 absolute">
            <div
              className="rounded-full shadow-lg p-1 cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              {like ? (
                <AiFillHeart
                  onClick={() => setLike(!like)}
                  className="text-red-500 text-2xl wish-icon"
                />
              ) : (
                <AiOutlineHeart
                  onClick={() => setLike(!like)}
                  className="text-slate-100 text-2xl wish-icon"
                />
              )}
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1508357941501-0924cf312bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="product"
            className="max-w-full w-full h-full top-0 relative  pointer-events-auto group-hover:-translate-x-[100%]  transition-all duration-500 group-hover:absolute "
          />
          <img
            src="https://images.unsplash.com/photo-1470945780341-171b6da56841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="product"
            className="max-w-full w-full h-full top-0 left-[100%] pointer-events-none absolute  group-hover:relative group-hover:-translate-x-[100%]  transition-all duration-500"
          />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-center w-full justify-between">
            <p className="flex items-center pb-0 text-xs  md:text-base">
              <FaEye />
              <span className="ms-1 md:ms-2 text-[12px] md:text-base ">
                200.232
              </span>
            </p>
            <p className="text-[10px] md:text-xs uppercase font-normal text-colorLight">
              18 dec 2023
            </p>
          </div>
          <hr />

          <div className="flex items-center w-full justify-between">
            <h5 className="text-xs  md:text-base  font-semibold">
              Ninja 400 R
            </h5>
            <p className="text-xs  md:text-base  font-bold text-colorBlack">
              2788 AZN
            </p>
          </div>
          <hr />
          {grid === 1 ? (
            <p className="text-[12px]  font-normal text-colorLight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              neque!
            </p>
          ) : (
            <p className="text-[12px]   font-normal text-colorLight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              neque!
            </p>
          )}

          <Link
            to="/store/123"
            className="bg-colorBlack text-center font-medium px-3 py-1 md:px-4 md:py-2 rounded-lg hover:text-colorBlack hover:bg-colorPrimary  text-xs  md:text-base text-white  mt-2 w-20 md:w-28"
          >
            Ətraflı
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
