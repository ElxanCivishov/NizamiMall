import { useState } from "react";
import { BlogCard } from "../components/cards";
import { Meta } from "../components/layout";
import { FaSearch } from "react-icons/fa";

const Blogs = () => {
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Meta title="Xəbərlər və Yeniliklər" />
      <section className="container p-4 my-5">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center  z-10 relative">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-600 md:text-5xl lg:text-4xl ">
            Yeniliklər və Xəbərlər
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48 ">
            Yeniliklər, endirimlər və xəbərlərdən məlumatınız olun.
          </p>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="flex w-full items-center justify-end">
            <div className="flex gap-2 w-full items-center justify-end rounded-lg bg-white p-2 shadow-lg md:w-[300px]">
              <input
                placeholder="axtar..."
                className=" text-gray-900 text-xs md:text-sm  focus:ring-gray-300 focus:border-gray-300 block outline-none p-1 transition duration-200 no-spin placeholder:text-gray-400  w-full "
                value={search}
                onChange={(e) => handleChange(e)}
              />
              <FaSearch />
            </div>
          </div>

          <div className="grid  md:grid-cols-3   gap-4 md:gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
