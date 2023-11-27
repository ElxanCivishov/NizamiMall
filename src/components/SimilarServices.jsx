import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

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

  console.log("data", data);

  if (isError || data?.length === 0) return null;

  return (
    <div className=" p-3 my-5 rounded-lg bg-white">
      <h5 className="text-base font-semibold text-zinc-700 my-3">
        {item?.category_name}
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
        {data.map((s) => (
          <SwiperSlide className="h-full">
            <ServiceCard key={s.id} service={s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarServices;
