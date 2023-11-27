import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import noimage from "/images/noImage.png";
import { convertDateTime } from "../../helper/date-fns";
import TruncatedHtml from "../TruncatedHtml";
const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/xeber/${blog.id}`}
      className=" rounded-md w-full  hover:-translate-y-2 transition-all duration-200 h-full overflow-hidden"
    >
      <div className="w-full relative rounded-lg p-2 bg-white ">
        <img
          src={blog.image || noimage}
          alt="yenilik"
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="p-4 bg-white rounded-lg mt-2 flex flex-col gap-2 md:gap-3 shadow-lg h-full">
        <h5 className="text-sm md:text-base text-colorBlack font-semibold">
          {blog.title}
        </h5>
        <p className="text-[13px]  font-normal text-colorLight">
          <span className=" text-xs md:text-sm">
            {convertDateTime(blog.created_at)}
          </span>
        </p>
        <p className="text-[13px]  font-normal text-colorLight">
          <TruncatedHtml html={blog.content} maxLength={200} />
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
