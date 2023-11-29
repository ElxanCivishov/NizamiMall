import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import { useEffect, useState } from "react";
import { ServiceCard } from "./cards";
import serviceService from "../features/service/serviceService";

const SimilarServices = ({ item }) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await serviceService.getServices({
          search: `category=${item.category_id}`,
        });
        setData(response);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchServices();
  }, [item]);

  if (isError || data?.length === 0) return null;

  return (
    <div className=" p-3 my-5 rounded-lg bg-white">
      <h5 className="text-base font-semibold text-black my-3">
        {item?.category_name}
      </h5>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: false,
          dynamicBullets: false,
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
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className=" w-full mb-8 grid transition-all duration-400 h-full mySwiper"
      >
        {data.map((s) => (
          <SwiperSlide key={s.id} className="h-full w-full">
            <ServiceCard service={s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarServices;
