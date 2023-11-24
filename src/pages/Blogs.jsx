import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogCard } from "../components/cards";
import { Meta } from "../components/layout";
import { Loader, ProgressBarLoader, SearchBar } from "../components";
import { RESET, getBlogs } from "../features/blogs/blogSlice";
import { NotResult } from "../admin/components";
import { useSearchParams } from "react-router-dom";

const Blogs = () => {
  const dispatch = useDispatch();

  const [search] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const { blogs, isSuccess, isError, isLoading } = useSelector(
    (state) => state.blogs
  );

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

  return (
    <div>
      <Meta title="Xəbərlər və Yeniliklər" />
      <div className="h-1 w-full">
        {isLoading && <ProgressBarLoader isLoading={isLoading} />}
      </div>
      <section className="container p-4 my-5">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center  z-10 relative">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-600 md:text-5xl lg:text-4xl ">
            Yeniliklər və Xəbərlər
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48 ">
            Yeniliklər, endirimlər və xəbərlərdən məlumatınız olun.
          </p>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="flex w-full items-center justify-end">
            <SearchBar />
          </div>
          {loading ? (
            <Loader />
          ) : blogs?.length === 0 ? (
            <NotResult title="Xəbər və ya yenilik tapılmadı" />
          ) : (
            <div className="grid md:grid-cols-3 gap-4 md:gap-8 ">
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
