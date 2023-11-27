import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { useEffect, useState } from "react";
import { ServiceCard } from "./cards";
import serviceService from "../features/service/serviceService";
import Loader from "./Loader";

const SimilarServices = ({ item }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const search = `category=${item.category_id}`;
        const response = await serviceService.getServices({ search });
        setData(response);

        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchServices();
  }, [item]);

  console.log("data", data);

  if (isLoading) return <Loader />;

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
