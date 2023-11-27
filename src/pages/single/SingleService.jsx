import { Meta } from "../../components/layout";
import { MdCategory } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ServiceCard } from "../../components/cards";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RESET, getService } from "../../features/service/serviceSlice";
import { Loader } from "../../components";
import { useParams } from "react-router-dom";
import TruncatedHtml from "../../components/TruncatedHtml";
import SimilarServices from "../../components/SimilarServices";

const SingleService = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { service, isSuccess, isLoading } = useSelector(
    (state) => state.services
  );

  useEffect(() => {
    dispatch(getService(id));
  }, [id]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [dispatch, service, isSuccess]);

  console.log(service);

  return (
    <div>
      <Meta title="Restaurant" />

      <section className="container p-4 ">
        <p className=" bg-white rounded-lg p-3 max-w-max my-3 flex items-center gap-2">
          <FaArrowAltCircleLeft className="animate-bounce md:text-base" />
          <span className="md:text-base font-semibold">Geri</span>
        </p>
        {service && (
          <div className="grid md:grid-cols-2 gap-2 bg-white rounded-lg py-10">
            <div className="w-full p-4 group">
              <div className=" mt-4 w-full rounded-lg flex items-center justify-center  overflow-hidden shadow-lg p-6 ">
                <img
                  className="w-full h-full object-contain max-h-60 rounded-lg group-hover:scale-105 transition-all duration-200"
                  src={service.logo}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 px-3 py-10 mt-5">
              <h5 className="text-base text-gray-600 font-semibold">
                {service.name}
              </h5>
              <div className="flex flex-col gap-2 py-3">
                <span className="flex items-center text-sm md:text-base">
                  <MdCategory className="me-1 " />
                  {service.floor === 1
                    ? "Birinci mərtəbə - "
                    : service.floor === 2
                    ? "Ikinci mərtəbə - "
                    : service.floor === 3
                    ? "Üçüncü mərtəbə - "
                    : ""}
                  {service.subcategory_name}
                </span>
              </div>
              <div className="text-sm md:text-base font-normal text-gray-500 tracking-wide ">
                <TruncatedHtml html={service.description || ""} />
              </div>
            </div>
          </div>
        )}

        <SimilarServices item={service} />
      </section>
    </div>
  );
};

export default SingleService;
