import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import {
  RESET,
  getServiceInfo,
} from "../../features/home/service/serviceInfoSlice";
import Loader from "../Loader";
import TruncatedText from "../TruncatedText";

const HomeInformation = () => {
  const dispatch = useDispatch();

  const { isLoading, serviceInfo, isSuccess } = useSelector(
    (state) => state.serviceInfo
  );

  useEffect(() => {
    dispatch(getServiceInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(RESET());
  }, [isSuccess, dispatch]);

  return (
    <section className="container px-4 ">
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          serviceInfo && (
            <div className="p-6 bg-white rounded-lg   md:p-20 flex flex-col gap-4 md:gap-6 shadow-lg transition-all duration-200 group hover:-translate-y-0.5">
              <h5 className="text-2xl md:text-4xl text-black tracking-wide  font-bold  text-center h-auto">
                {serviceInfo.title}
              </h5>

              <div className="text-xl md:text-2xl  text-center tracking-wide font-normal text-black">
                <TruncatedText text={serviceInfo?.content || ""} />
              </div>
              <p className="flex items-center justify-center gap-3 group">
                <Link to="/magaza-ve-restoranlar">
                  <span className="flex items-center border-b  max-w-max my-5 text-xl text-black hover:text-colorPrimary hover:border-colorPrimary">
                    Mağazalar və Restoranlar
                    <MdArrowRightAlt className="ms-1 animate-pulse text-xl md:text-3xl" />
                  </span>
                </Link>
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default HomeInformation;
