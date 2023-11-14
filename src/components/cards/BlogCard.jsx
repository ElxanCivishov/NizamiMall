import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

const BlogCard = () => {
  return (
    <Link
      to="/xeber/id"
      className=" rounded-md w-full hover:-translate-y-2 transition-all duration-200"
    >
      <div className="w-full relative rounded-lg ">
        <img
          src="https://images.unsplash.com/photo-1682685797736-dabb341dc7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
          alt="yenilik"
          className="w-full rounded-lg"
        />
      </div>
      <div className="p-4 bg-white rounded-lg mt-2 flex flex-col gap-2 md:gap-3 shadow-lg">
        <h5 className="text-sm md:text-base text-colorBlack font-semibold">
          Lorem ipsum dolor sit.
        </h5>
        <p className="text-[13px]  font-normal text-colorLight">
          <span className=" text-xs md:text-sm"> 27 Fevral, 2023</span>
        </p>
        <p className="text-[13px]  font-normal text-colorLight">
          You’re only as good as your last collection, which is an enormous
          people need, but it’s what they…
        </p>
        <p className="font-medium px-3">
          <span className="flex items-center border-b  max-w-max text-xs md:text-sm  text-colorBlack hover:text-colorPrimary hover:border-colorPrimary">
            Ətraflı <MdArrowRightAlt className="ms-1" />
          </span>
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
