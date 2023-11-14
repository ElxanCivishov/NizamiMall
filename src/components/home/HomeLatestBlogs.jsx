import { Link } from "react-router-dom";
import BlogCard from "../cards/BlogCard";
import { MdArrowRightAlt } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const HomeLatestBlogs = () => {
  return (
    <section className="container p-4">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="rounded-lg shadow-lg w-full md:max-w-max bg-white p-3 flex flex-col gap-4 px-5 md:px-10 justify-center min-h-[350px]">
          <h5 className="text-sm md:text-base text-gray-600 font-semibold  ">
            Ən son məlumatlardan xəbərdar olun!
          </h5>
          <p className="text-gray-600  flex items-center text-base ">
            Yeniliklər, endirimlər və xəbərlərdən məlumatınız olsun
          </p>
          <Link
            to="/blogs"
            className="text-gray-600   hover:text-colorPrimary hover:underline flex items-center text-base md:text-xl animate-pulse"
          >
            Yeniliklər və xəbərlər
            <FaArrowRight className="ms-1 text-sm md:text-base" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
          {Array.from({ length: 2 }).map((item, index) => (
            <Link to="/blog/id" className=" rounded-md w-full">
              <div className="w-full relative rounded-lg ">
                <img
                  src="/images/photo/p3.jpeg"
                  alt="yenilik"
                  className="w-full max-h-[300px] rounded-lg"
                />
              </div>
              <div className="p-4 bg-white rounded-lg mt-2 flex flex-col gap-2 md:gap-3 shadow-lg">
                <h5 className="text-sm md:text-base text-colorBlack font-semibold">
                  Lorem ipsum dolor sit.
                </h5>
                <p className="text-[13px]  font-normal text-colorLight">
                  You’re only as good as your last collection, which is an
                  enormous people need…
                </p>
                <Link to="" className="  font-medium px-3  ">
                  <span className="flex items-center border-b  max-w-max text-xs md:text-sm  text-colorBlack hover:text-colorPrimary hover:border-colorPrimary">
                    Ətraflı <FaArrowRight className="ms-1" />
                  </span>
                </Link>
              </div>
            </Link>
          ))}
          {/* <BlogCard /> */}
          {/* <BlogCard /> */}
          {/* <BlogCard /> */}
        </div>
      </div>
    </section>
  );
};

export default HomeLatestBlogs;
