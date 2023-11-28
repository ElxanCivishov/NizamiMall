import { Link } from "react-router-dom";
import { BiSolidHomeAlt2 } from "react-icons/bi";

const BreadCrumb = ({ title, path, prev }) => {
  return (
    <section className="bg-white h-14  ">
      <div
        className={`container p-4  flex items-center ${
          prev ? "justify-between" : "justify-center"
        }`}
      >
        <div className="flex items-center">
          <p className="flex items-center gap-2 text-xs md:text-base text-black font-semibold tracking-wide">
            {title}
          </p>
        </div>
        {prev && (
          <p className="text-center">
            <Link
              to={path}
              className="text-black flex items-center tracking-wide"
            >
              <BiSolidHomeAlt2 className="text-base md:text-xl mb-1" />
              <span className="text-black font-semibold text-xs md:text-base ">
                / {prev}
              </span>
            </Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default BreadCrumb;
