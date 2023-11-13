import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const data = [
  {
    id: 1,
    url: "/images/photo/p5.jpeg",
    title: "Suzuki",
    subTitle: "Hayabusa",
  },
  {
    id: 2,
    url: "/images/photo/p1.jpeg",
    title: "Harley-Davidson",
    subTitle: "Sportster S",
  },
  {
    id: 3,
    url: "/images/photo/p2.jpeg",
    title: "Kawasaki",
    subTitle: "Ninja 400",
  },
  {
    id: 4,
    url: "/images/photo/p3.jpeg",
    title: "Yamaha",
    subTitle: "Mt-15",
  },
  {
    id: 5,
    url: "/images/photo/p4.jpeg",
    title: "Ducati",
    subTitle: "Panigale V4 R",
  },
];

const HomeSlider = () => {
  return (
    <div className="flex flex-wrap">
      <div className="bg-white w-full px-4 py-4 pt-6 rounded-lg select-none">
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
              <div className="flex flex-col items-center justify-between md:flex-row py-1 px-2  sm:border-r-2 sm:border-gray-100 group mb-6 w-full">
                <div className="flex flex-col gap-1 ">
                  <h6 className="text-xs md:text-base">{item.title}</h6>
                  <p className="text-[10px] md:text-base whitespace-nowrap">
                    {item.subTitle}
                  </p>
                </div>
                <div className="group-hover:scale-105 transition-all duration-100 ">
                  <img
                    src={item.url}
                    alt="marka"
                    className="w-[120px] h-[100px]"
                  />
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
