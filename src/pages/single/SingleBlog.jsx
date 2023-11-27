import { useDispatch, useSelector } from "react-redux";
import { Meta } from "../../components/layout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { RESET, getBlog } from "../../features/blogs/blogSlice";
import { Loader } from "../../components";
import { NotResult } from "../../admin/components";
import TruncatedHtml from "../../components/TruncatedHtml";
import { convertDateTimeAgo } from "../../helper/date-fns";

const SingleBlog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { blog, isSuccess, isLoading } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getBlog(id));
  }, [id]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [dispatch, blog, isSuccess]);

  return (
    <div>
      <Meta title={isLoading ? "Yüklənir" : blog?.title} />

      <section className="container p-4">
        {isLoading ? (
          <Loader classLoader="h-600px" />
        ) : blog ? (
          <>
            <div className="p-3 bg-white rounded-lg my-4  grid grid-cols-2 gap-4">
              <div className="p-4 w-full flex flex-col gap-2">
                <p className="text-xs md:text-sm  font-normal text-colorLight">
                  {convertDateTimeAgo(blog.created_at)}
                </p>
                <div className="flex items-center w-full ">
                  <h5 className="text-base md:text-xl font-semibold">
                    {blog.title}
                  </h5>
                </div>
                <div className="text-xs md:text-sm  font-normal text-colorLight">
                  <TruncatedHtml html={blog.content || ""} />
                </div>
              </div>
              <div className="p-4 w-full group">
                <div className=" min-h-[200px] max-h-[350px] md:h-full overflow-hidden rounded-lg w-full">
                  <img
                    className="h-full w-full max-w-full object-contain rounded-lg group-hover:scale-105 transition-all duration-200"
                    src={blog.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <NotResult title="Xəbər və ya yenilik tapılmadı." />
        )}
      </section>
    </div>
  );
};

export default SingleBlog;
