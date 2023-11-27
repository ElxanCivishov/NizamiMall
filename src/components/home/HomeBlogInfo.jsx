import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { RESET, getBlogInfo } from "../../features/home/blog/blogInfoSlice";
import Loader from "../Loader";
import HomeLatestBlogs from "./HomeLatestBlogs";

const HomeBlogInfo = () => {
  const dispatch = useDispatch();

  const { isLoading, blogInfo, isSuccess } = useSelector(
    (state) => state.blogInfo
  );

  useEffect(() => {
    dispatch(getBlogInfo());
  }, []);

  useEffect(() => {
    dispatch(RESET());
  }, [isSuccess, dispatch]);

  return (
    <section className="container p-4">
      {isLoading ? (
        <Loader />
      ) : (
        blogInfo && (
          <div className="flex flex-col md:flex-row gap-10">
            <div className="rounded-lg shadow-lg w-full md:max-w-max bg-white p-3 flex flex-col gap-4 px-5 md:px-10 justify-center min-h-[350px]">
              <h5 className="text-sm md:text-base text-gray-600 font-semibold  ">
                {blogInfo.title}
              </h5>
              <p className="text-gray-600  flex items-center text-base ">
                {blogInfo.content}
              </p>
              <Link
                to="/xeberler-ve-yenilikler"
                className="text-gray-600   hover:text-colorPrimary hover:underline flex items-center text-base md:text-xl animate-pulse"
              >
                Yeniliklər və xəbərlər
                <FaArrowRight className="ms-1 text-sm md:text-base" />
              </Link>
            </div>
            <HomeLatestBlogs />
          </div>
        )
      )}
    </section>
  );
};

export default HomeBlogInfo;
