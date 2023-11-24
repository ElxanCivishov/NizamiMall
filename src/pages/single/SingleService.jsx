import { Meta } from "../../components/layout";
import { MdCategory } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ServiceCard } from "../../components/cards";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RESET, getServices } from "../../features/service/serviceSlice";
import { Loader } from "../../components";
import { NotResult } from "../../admin/components";

const SingleService = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { services, isSuccess, isLoading } = useSelector(
    (state) => state.services
  );

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  useEffect(() => {
    setLoading(false);
  }, [services]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [dispatch, isSuccess]);

  return (
    <div>
      <Meta title="Restaurant" />

      <section className="container p-4 ">
        <p className=" bg-white rounded-lg p-3 max-w-max my-3 flex items-center gap-2">
          <FaArrowAltCircleLeft className="animate-bounce md:text-base" />
          <span className="md:text-base font-semibold">Geri</span>
        </p>
        <div className="grid md:grid-cols-2 gap-2 bg-white rounded-lg py-10">
          <div className="w-full p-4 group">
            <div className=" mt-4 w-full rounded-lg flex items-center justify-center  overflow-hidden shadow-lg p-6 ">
              <img
                className="w-full h-full object-contain max-h-60 rounded-lg group-hover:scale-105 transition-all duration-200"
                src="http://localhost:5173/images/shops/flame.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 px-3 py-10 mt-5">
            <h5 className="text-base text-gray-600 font-semibold">
              Brawo supermarket
            </h5>
            <div className="flex flex-col gap-2 py-3">
              <span className="flex items-center text-sm md:text-base">
                <MdCategory className="me-1 " />
                Birinci mərtəbə - Uşaqlar üçün
              </span>
            </div>
            <p className="text-sm md:text-base font-normal text-gray-500 tracking-wide ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              eligendi est fugiat earum in. Reiciendis, nesciunt asperiores? Est
              iusto possimus in facere autem, quo dignissimos fuga commodi qui,
              vel similique. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vel eligendi est fugiat earum in. Reiciendis, nesciunt
            </p>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : (
          services?.length > 0 && (
            <div className=" p-3 my-5 rounded-lg bg-white">
              <h5 className="text-base font-semibold text-zinc-700 my-3">
                Oxşar Mağazalar
              </h5>

              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                grabCursor={true}
                loop={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                {services.map((s) => (
                  <SwiperSlide>
                    <ServiceCard key={s.id} service={s} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default SingleService;
