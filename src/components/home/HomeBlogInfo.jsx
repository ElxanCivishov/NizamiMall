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
              <h5 className="text-3xl md:text-5xl font-bold flex flex-col text-zinc-700 ">
                <span>Ən son </span>
                <span>Yeniliklərdən </span>
                <span>Xəbərdar Olun!</span>
              </h5>
              <p className="text-zinc-700  flex items-center text-xl ">
                {blogInfo.content}
              </p>
              <Link
                to="/xeberler-ve-yenilikler"
                className="text-zinc-700  mt-8 hover:text-colorPrimary hover:underline flex items-center text-xl "
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
