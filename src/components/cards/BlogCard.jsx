import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import noimage from "/images/noImage.png";
import { convertDateTime } from "../../helper/date-fns";
import TruncatedHtml from "../TruncatedText";
const BlogCard = ({ blog }) => {
  return (
    blog && (
      <div className="w-full h-full bg-white  transition-all duration-200  group md:hover:-translate-y-3 shadow-lg rounded-lg">
        <Link to={`/xeber/${blog.id}`} className="h-full w-full">
          <div className="w-full h-full overflow-hidden flex items-center justify-center   max-h-[300px] bg-white">
            <img
              src={blog.image || noimage}
              alt=""
              className="w-full m-5 h-full group-hover:scale-105 transition-all duration-200  object-contain "
            />
          </div>
          <div className="p-4 bg-white mt-2 flex flex-col justify-between gap-2 md:gap-3">
            <h5 className="text-sm md:text-base text-black font-semibold">
              {blog.title}
            </h5>
            <p className="text-[13px]  font-normal text-black">
              <span className=" text-xs md:text-sm">
                {convertDateTime(blog.created_at)}
              </span>
            </p>
            <div className="text-[15px]  font-medium text-black">
              {blog.content?.length > 150
                ? blog.content?.substring(0, 150) + "..."
                : blog.content}
            </div>
            <p className="font-medium">
              <span className="flex items-center border-b  max-w-max text-xs md:text-sm  text-black hover:text-colorPrimary hover:border-colorPrimary">
                Ətraflı <MdArrowRightAlt className="ms-1" />
              </span>
            </p>
          </div>
        </Link>
      </div>
    )
  );
};

export default BlogCard;
