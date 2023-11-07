import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

const BlogCard = () => {
  return (
    <Link to="/blog/id" className=" rounded-md w-full">
      <div className="w-full relative rounded-lg">
        <div className="top-3 left-0 z-5 absolute flex flex-col gap-2">
          <span className="bg-colorBlack rounded-r-lg text-white px-2 py-1  text-xs md:text-sm">
            Yeni
          </span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1638517900432-6ee4655d76f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXQxNXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="yenilik"
          className="w-full rounded-lg"
        />
      </div>
      <div className="p-4 bg-white rounded-lg mt-2 flex flex-col gap-2 md:gap-3 shadow-lg">
        <h5 className="text-sm md:text-base text-colorBlack font-semibold">
          Lorem ipsum dolor sit.
        </h5>
        <p className="text-[13px]  font-normal text-colorLight">
          <span className=" text-xs md:text-sm"> 27 Fevral, 2023</span> - 0 şərh
        </p>
        <p className="text-[13px]  font-normal text-colorLight">
          You’re only as good as your last collection, which is an enormous
          people need, but it’s what they…
        </p>
        <Link to="" className="  font-medium px-3  ">
          <span className="flex items-center border-b  max-w-max text-xs md:text-sm  text-colorBlack hover:text-colorPrimary hover:border-colorPrimary">
            Ətraflı <MdArrowRightAlt className="ms-1" />
          </span>
        </Link>
      </div>
    </Link>
  );
};

export default BlogCard;
