import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const data = [
  {
    id: 1,
    url: "/images/photo/p5.jpeg",
    title: "Alış-veriş üçün ən rahat məkan!",
  },
  {
    id: 2,
    url: "/images/photo/p1.jpeg",
    title: "Alış-veriş üçün ən rahat məkan!",
  },
  {
    id: 3,
    url: "/images/photo/p2.jpeg",
    title: "Alış-veriş üçün ən rahat məkan!",
  },
];

const HomeSlider = () => {
  return (
    <div className="container  flex flex-wrap my-4">
      <div className="bg-white w-full h-auto rounded-lg p-4  select-none">
        <Swiper
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {data?.map((item) => (
            <SwiperSlide key={item?.id}>
              <div className="flex items-center group mb-6 w-full">
                <div className="w-full transition-all duration-100 rounded-lg overflow-hidden relative">
                  <img
                    src={item.url}
                    alt="marka"
                    className="w-full h-[300px] md:h-[500px] rounded-lg"
                  />
                  {/* Overlay for improved text readability */}
                  <div className="absolute inset-0 rounded-lg bg-black bg-opacity-30"></div>

                  <div className="flex flex-col gap-1 absolute bottom-20 left-20 text-white text-2xl z-10">
                    <h6 className="text-xs md:text-4xl shadow-inner">
                      {item.title}
                    </h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
