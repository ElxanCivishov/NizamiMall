import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  const [search, setSearch] = useSearchParams();

  const onSearchChange = (e) => {
    const text = e.target.value;

    if (text.length === 0) {
      search.delete("search");
    } else {
      search.set("search", text);
    }
    setSearch(search, {
      replace: true,
    });
  };

  return (
    <div className="flex gap-2 w-full items-center justify-end rounded-lg bg-white p-2 shadow-lg md:w-[300px]">
      <input
        placeholder={placeholder || "axtar..."}
        className=" text-black text-xs md:text-sm  focus:ring-gray-300 focus:border-gray-300 block outline-none p-1 transition duration-200 no-spin placeholder:text-black  w-full bg-white "
        value={search.get("search") ?? ""}
        onChange={onSearchChange}
      />
      <FaSearch />
    </div>
  );
};
export default SearchBar;
