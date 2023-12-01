import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { RESET, getBlogInfo } from "../../features/home/blog/blogInfoSlice";
import Loader from "../Loader";
import HomeLatestBlogs from "./HomeLatestBlogs";
import TruncatedText from "../TruncatedText";

const HomeBlogInfo = () => {
  const dispatch = useDispatch();

  const { isLoading, blogInfo, isSuccess } = useSelector(
    (state) => state.blogInfo
  );

  useEffect(() => {
    dispatch(getBlogInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(RESET());
  }, [isSuccess]);

  return (
    <section className="container p-4">
      {isLoading ? (
        <Loader />
      ) : (
        blogInfo && (
          <div className="flex flex-col md:flex-row gap-10 relative">
            <div className="rounded-lg shadow-lg w-full md:max-w-max p-3 overflow-hidden bg-white flex flex-col gap-4 px-5 md:px-10 justify-center min-h-[350px] relative group">
              <img
                src={blogInfo?.image}
                alt=""
                className="absolute w-full h-full inset-0  group-hover:scale-105 transition-all duration-300   !z-1  rounded-lg object-cover"
              />
              <div
                style={{ opacity: `${blogInfo?.opacity}%` }}
                className="absolute inset-0 !z-[3] bg-black   text-white "
              ></div>
              <h5 className="text-3xl md:text-5xl font-bold flex flex-col text-white transition-all duration-150  !z-10 ">
                <TruncatedText text={blogInfo?.title || ""} />
              </h5>
              <div className="text-white transition-all duration-150 flex items-center text-2xl z-10">
                <TruncatedText text={blogInfo?.content || ""} />
              </div>
              <Link
                to="/xeberler-ve-yenilikler"
                className="text-white transition-all duration-150 mt-8 hover:text-colorPrimary hover:underline flex items-center text-2xl z-10"
              >
                Yeniliklər və xəbərlər
                <FaArrowRight className="ms-1 text-base md:text-xl" />
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
