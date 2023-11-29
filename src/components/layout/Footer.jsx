import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaMobile,
  FaEnvelope,
} from "react-icons/fa";

import { RESET, getLayout } from "../../features/layout/layoutSlice";
import { FaLocationDot } from "react-icons/fa6";

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
    <footer className="bg-white text-black">
      <div className="container p-4 md:p-0">
        <Newsletter />
        <div className="p-4 border-t border-t-slate-200">
          <div className="grid md:grid-cols-5">
            <div className="flex mt-4 flex-col  col-span-2 gap-1 md:gap-2 text-black">
              {layout && (
                <>
                  <h4 className="  font-semibold">Bizimlə əlaqə</h4>
                  <div className="flex items-center gap-2">
                    {(layout.number_1 || layout.number_2) && (
                      <>
                        <FaMobile />
                        <Link
                          to={`tel:${layout.number_1}`}
                          className=" hover:underline text-sm md:text-base flex items-center gap-1"
                        >
                          {layout.number_1}
                        </Link>
                        {layout.number_2 && (
                          <>
                            ,{" "}
                            <Link
                              to={`tel:${layout.number_2}`}
                              className=" hover:underline text-sm md:text-base flex items-center gap-1"
                            >
                              {layout.number_2}
                            </Link>
                          </>
                        )}
                      </>
                    )}
                  </div>
                  {layout.email && (
                    <Link
                      to={`mailto:${layout.email}`}
                      className=" hover:underline text-sm md:text-base flex items-center gap-2"
                    >
                      <FaEnvelope />
                      {layout.email}
                    </Link>
                  )}

                  {layout.address_url && layout.address && (
                    <Link
                      to={layout.address_url}
                      target="_blank"
                      className=" hover:underline text-sm md:text-base flex items-center gap-2"
                    >
                      <FaLocationDot />
                      {layout.address}
                    </Link>
                  )}
                </>
              )}
            </div>
            <div className="mt-4 ">
              <h4 className="text-black mb-2 font-semibold">Kateqoriyalar</h4>
              <div className="flex flex-col gap-1 md:gap-2">
                <Link
                  className="text-black hover:underline text-sm md:text-base"
                  to="/magaza-ve-restoranlar"
                >
                  Mağaza və Restoran
                </Link>

                <Link
                  className="text-black hover:underline text-sm md:text-base"
                  to="/xeberler-ve-yenilikler"
                >
                  Xəbər və Yenilik
                </Link>
                <Link
                  className="text-black hover:underline text-sm md:text-base"
                  to="/icare"
                >
                  Icarə
                </Link>
              </div>
            </div>
            <div className="mt-4 w-full order-first md:order-last col-span-2 rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3542436385214!2d49.830518999999995!3d40.378840800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307de69fc9e033%3A0x414a5a4c82342759!2sNizami%20Mall!5e0!3m2!1saz!2saz!4v1701168885057!5m2!1saz!2saz"
                className="w-full h-full border-0 order-first rounded-lg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
          <p className="mb-0 text-black text-xs sm:text-sm font-medium">
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
