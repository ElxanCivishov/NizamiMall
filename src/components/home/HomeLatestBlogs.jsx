import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { RESET, getBlogs } from "../../features/blogs/blogSlice";
import Loader from "../Loader";
import TruncatedHtml from "../TruncatedHtml";
import { convertDateTime } from "../../helper/date-fns";

const HomeLatestBlogs = () => {
  const dispatch = useDispatch();

  const { blogs, isLoading, isSuccess } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [dispatch, isSuccess]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
      {isLoading ? (
        <Loader />
      ) : (
        blogs?.length > 0 &&
        blogs.slice(0, 2).map((blog) => (
          <div key={blog.id} className="w-full h-full ">
            <Link
              to={`xeber/${blog.id}`}
              className=" rounded-md w-full h-full flex flex-col items-center justify-between"
            >
              <div className="w-full relative rounded-lg ">
                <img
                  src={blog.image}
                  alt="yenilik"
                  className="w-full md:max-h-[400px] rounded-lg"
                />
              </div>
              <div className="p-4 bg-white rounded-lg mt-2 flex flex-col gap-2 md:gap-3 shadow-lg w-full h-full ">
                <h5 className="text-sm md:text-base text-zinc-700 font-semibold">
                  {blog.title}
                </h5>
                <div className="text-base  font-medium text-zinc-600 tracking-wide">
                  {blog.content?.length > 100
                    ? blog.content.substring(0, 100) + "..."
                    : blog.content}
                </div>
                <div className="font-medium">
                  <span className="flex items-center justify-end border-b  max-w-max text-xs md:text-sm  text-colorBlack hover:text-colorPrimary hover:border-colorPrimary">
                    Ətraflı <FaArrowRight className="ms-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default HomeLatestBlogs;
