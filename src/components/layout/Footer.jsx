import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

import { RESET, getLayout } from "../../features/layout/layoutSlice";

const Footer = () => {
  const dispatch = useDispatch();

  const { isSuccess, layout } = useSelector((state) => state.layout);

  useEffect(() => {
    dispatch(getLayout());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [isSuccess, dispatch]);
  return (
    <footer className="bg-white text-gray-500">
      <div className="container p-4 md:p-0">
        <Newsletter />
        <div className="p-4 border-t border-t-slate-200">
          <div className="grid md:grid-cols-3">
            <div className="flex mt-4 flex-col gap-1 md:gap-2 text-gray-500">
              {layout && (
                <>
                  <h4 className="  font-semibold">Bizimlə əlaqə</h4>
                  {layout.number_1 && (
                    <Link
                      to={`tel:${layout.number_1}`}
                      className=" block hover:underline text-sm md:text-base"
                    >
                      <span className="font-medium me-1">Tel:</span>
                      {layout.number_1}
                    </Link>
                  )}
                  {layout.number_2 && (
                    <Link
                      to={`tel:${layout.number_2}`}
                      className=" block hover:underline text-sm md:text-base"
                    >
                      <span className="font-medium me-1">Tel:</span>
                      {layout.number_2}
                    </Link>
                  )}
                  {layout.email && (
                    <Link
                      to={`mailto:${layout.email}`}
                      className=" block hover:underline text-sm md:text-base"
                    >
                      <span className="font-medium me-1">Email:</span>
                      {layout.email}
                    </Link>
                  )}

                  {layout.address_url && layout.address && (
                    <Link
                      to={layout.address_url}
                      target="_blank"
                      className=" block hover:underline text-sm md:text-base"
                    >
                      <span className="font-medium me-1">Ünvan:</span>
                      {layout.address}
                    </Link>
                  )}
                </>
              )}
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
                  Mağaza və Restoran
                </Link>

                <Link
                  className="text-gray-500 hover:underline text-sm md:text-base"
                  to="/xeberler-ve-yenilikler"
                >
                  Xəbər və Yenilik
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
          className={`p-4 pb-16 md:pb-4  xs:border-t xs:border-t-slate-200 flex items-center  gap-2 ${
            layout?.instagram || layout?.facebook
              ? "justify-between"
              : "justify-center"
          }`}
        >
          <p className="mb-0 text-gray-500 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Bütün hüquqlar qorunur!
          </p>
          {(layout?.instagram || layout?.facebook) && (
            <div className="flex  gap-1 items-center">
              <Link
                to={layout?.instagram}
                target="_blank"
                className="flex w-full flex-col items-center justify-center group hover:text-red-500"
              >
                <FaInstagramSquare className="text-3xl" />
              </Link>
              <Link
                to={layout?.facebook}
                target="_blank"
                className="flex w-full flex-col items-center justify-center group hover:text-blue-500"
              >
                <FaFacebookSquare className="text-3xl" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
