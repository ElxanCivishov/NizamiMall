import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500">
      <div className="container p-4 md:p-0">
        <Newsletter />
        <div className="p-4 border-t border-t-slate-200">
          <div className="grid md:grid-cols-3">
            <div className="mt-4 ">
              <h4 className="text-gray-500 mb-2 font-semibold">Keçidlər</h4>
              <div className="flex flex-col gap-1 md:gap-2">
                <Link
                  className="text-gray-500 hover:underline text-sm md:text-base"
                  to=""
                >
                  Ana Səhifə
                </Link>
                <Link
                  className="text-gray-500 hover:underline text-sm md:text-base"
                  to=""
                >
                  Xəbərlər
                </Link>
                <Link
                  className="text-gray-500 hover:underline text-sm md:text-base"
                  to=""
                >
                  Əlaqə
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-gray-500 mb-2 font-semibold">
                Kateqoriyalar
              </h4>
              <div className="flex flex-col gap-1 md:gap-2">
                <Link
                  className="text-gray-500 hover:underline text-sm md:text-base"
                  to=""
                >
                  Mağazalar
                </Link>
                <Link
                  className="text-gray-500 hover:underline text-sm md:text-base"
                  to=""
                >
                  Restoranlar
                </Link>
                <Link
                  className="text-gray-500 hover:underline text-sm md:text-base"
                  to=""
                >
                  Xidmətlər
                </Link>
              </div>
            </div>
            <div className="mt-10  md:mt-4 flex w-full flex-col items-center justify-center">
              <Link
                to="/map"
                className="flex w-full flex-col items-center justify-center group hover:text-colorPrimary"
              >
                <h4 className="text-gray-500 mb-2 font-semibold group-hover:text-colorPrimary">
                  Mall xəritəsi
                </h4>
                <FaLocationDot className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4 pb-16 md:pb-4 grid place-content-center border-t border-t-slate-200">
          <p className="text-center mb-0 text-gray-500">
            &copy; {new Date().getFullYear()} Bütün hüquqlar qorunur!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
