import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  const [like, setLike] = useState(false);
  return (
    <Link to="/services/id" className="bg-white rounded-lg relative">
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
      <div className="w-full p-4">
        <img
          src="data:image/png;base64,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"
          alt="service"
          className="w-full"
        />
      </div>
      <div className="p-2 md:p-4 flex flex-col gap-2">
        <div className="flex items-center w-full justify-between">
          <h5 className="text-base font-semibold">Ninja 400 R</h5>
        </div>
        <p className="text-[13px]  font-normal text-colorLight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          adipisicing elit. Ducimus,adipisicing elit. Ducimus, neque!
        </p>
        <div className="font-medium flex w-full justify-end">
          <span className="flex items-center border-b  max-w-max text-sm  text-colorBlack hover:text-colorPrimary hover:border-colorPrimary">
            ətraflı <MdArrowRightAlt className="ms-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
