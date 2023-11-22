import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white text-gray-500">
      <div className="container p-4 md:p-0">
        <Newsletter />
        <div className="p-4 border-t border-t-slate-200">
          <div className="grid md:grid-cols-3">
            <div className="flex mt-4 flex-col gap-1 md:gap-2 text-gray-500">
              <h4 className="  font-semibold">Bizimlə əlaqə</h4>
              {/* <p className="text-white text-sm md:text-base ">
                Lorem ipsum dolor sit
              </p> */}
              <a
                href="tel:(+994) 51 694 46 85"
                className=" block hover:underline text-sm md:text-base"
              >
                <span className="font-medium me-1">Tel:</span>+994 51 694 46 85
              </a>
              <a
                href="mailto:nizamimall2019@gmail.com"
                className=" block hover:underline text-sm md:text-base"
              >
                <span className="font-medium me-1">Email:</span>
                nizamimall2019@gmail.com
              </a>
              <p className=" block text-sm md:text-base">
                <span className="font-medium me-1">Ünvan:</span>
                Şıxəli Qurbanov 23, Baku, Azerbaijan
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-gray-500 mb-2 font-semibold">
                Kateqoriyalar
              </h4>
              <div className="flex flex-col gap-1 md:gap-2">
                <Link
                  className="text-gray-500 hover:underline text-sm md:text-base"
                  to="/magaza-ve-restoranlar"
                >
                  Mağazalar
                </Link>
                <Link
                  className="text-gray-500 hover:underline text-sm md:text-base"
                  to="/magaza-ve-restoranlar"
                >
                  Restoranlar
                </Link>
                <Link
                  className="text-gray-500 hover:underline text-sm md:text-base"
                  to="/xeberler-ve-yenilikler"
                >
                  Xəbər
                </Link>
                <Link
                  className="text-gray-500 hover:underline text-sm md:text-base"
                  to="/icare"
                >
                  Icarə
                </Link>
              </div>
            </div>

            <div className="mt-10 mb-10 md:mb-0  md:mt-4 flex w-full flex-col items-center justify-center order-first md:order-last">
              <Link
                to="/map"
                className="flex w-full flex-col items-center justify-center group hover:text-colorPrimary"
              >
                <h4 className="text-gray-500 mb-2 text-2xl font-semibold group-hover:text-colorPrimary">
                  Mall xəritəsi
                </h4>
                <FaLocationDot className="text-4xl" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="p-4 pb-16 md:pb-4  xs:border-t xs:border-t-slate-200 flex items-center justify-between gap-2
        "
        >
          <p className="text-center mb-0 text-gray-500">
            &copy; {new Date().getFullYear()} Bütün hüquqlar qorunur!
          </p>
          <div className="flex  gap-1 items-center">
            <Link
              to="https://www.instagram.com/nizamimall"
              target="_blank"
              className="flex w-full flex-col items-center justify-center group hover:text-red-500"
            >
              <FaInstagramSquare className="text-3xl" />
            </Link>
            <Link
              to="https://www.facebook.com/nizamimallticaretmerkezi"
              target="_blank"
              className="flex w-full flex-col items-center justify-center group hover:text-blue-500"
            >
              <FaFacebookSquare className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
