import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogCard } from "../components/cards";
import { Meta } from "../components/layout";
import { Loader, ProgressBarLoader, SearchBar } from "../components";
import { RESET, getBlogs } from "../features/blogs/blogSlice";
import { NotResult } from "../admin/components";
import { Navigate, useSearchParams } from "react-router-dom";
import {
  getBlogInfo,
  RESET as BLOGBANNERRESET,
} from "../features/blogs/blogInfoSlice";
import TruncatedText from "../components/TruncatedText";

const Blogs = () => {
  const dispatch = useDispatch();

  const [search] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const { blogs, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.blogs
  );

  const {
    isLoading: bannerLoading,
    isSuccess: bannerSuccess,
    blogText,
  } = useSelector((state) => state.blogText);

  useEffect(() => {
    dispatch(getBlogInfo());
  }, []);

  useEffect(() => {
    if (blogText) {
      dispatch(BLOGBANNERRESET());
    }
  }, [bannerSuccess]);

  useEffect(() => {
    dispatch(getBlogs(search));
  }, [dispatch, search]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    setLoading(false);
  }, [blogs]);

  if (isError) return <Navigate to="/error" state={{ error: message }} />;

  return (
    <div>
      <Meta title="Xəbərlər və Yeniliklər" />
      <div className="h-1 w-full">
        {isLoading && <ProgressBarLoader isLoading={isLoading} />}
      </div>
      <section className="container p-4 my-5">
        {bannerLoading ? (
          <Loader />
        ) : (
          blogText && (
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 z-10 relative">
              <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-zinc-800 md:text-5xl lg:text-6xl dark:text-white">
                {blogText.title}
              </h1>
              <div className="md:mb-8 text-sm font-medium tracking-wide text-zinc-700 md:text-base lg:text-xl sm:px-10 lg:px-40 dark:text-gray-200">
                <TruncatedText text={blogText.content || ""} />
              </div>
            </div>
          )
        )}

        <div className="w-full flex flex-col gap-5">
          <div className="flex w-full items-center justify-end">
            <SearchBar />
          </div>
          {loading ? (
            <Loader />
          ) : blogs?.length === 0 ? (
            <NotResult title="Xəbər və ya yenilik tapılmadı" />
          ) : (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  h-full gap-4 md:gap-8 mb-10">
              {blogs.map((b) => (
                <BlogCard key={b.id} blog={b} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default memo(Blogs);
