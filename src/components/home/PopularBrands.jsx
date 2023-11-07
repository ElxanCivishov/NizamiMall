import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const data = [
  {
    id: 1,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWjrDHoXsu6pPvsSuHCiG-nbC0mf8nnBXKtNYwE5GNFUCkPz1NC-8SBHUiXt-Dg5Li44&usqp=CAU",
    title: "Suzuki",
    subTitle: "Hayabusa",
  },
  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2owd_i3Vxtn2Loy4oJL5EHcwJ7MtwlQgmEqVAqoaB5wRF5h6ItHBtxuxkxpHaYwayUio&usqp=CAU",
    title: "Harley-Davidson",
    subTitle: "Sportster S",
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2owd_i3Vxtn2Loy4oJL5EHcwJ7MtwlQgmEqVAqoaB5wRF5h6ItHBtxuxkxpHaYwayUio&usqp=CAU",
    title: "Kawasaki",
    subTitle: "Ninja 400",
  },
  {
    id: 4,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWjrDHoXsu6pPvsSuHCiG-nbC0mf8nnBXKtNYwE5GNFUCkPz1NC-8SBHUiXt-Dg5Li44&usqp=CAU",
    title: "Yamaha",
    subTitle: "Mt-15",
  },
  {
    id: 5,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDhcvreusebKoS8keP74StPjCyzBVvjo-wg&usqp=CAU",
    title: "Ducati",
    subTitle: "Panigale V4 R",
  },
  {
    id: 6,
    url: "https://www.cycleworld.com/resizer/6gxAwsuP1WwrU5f6MzqK-n8ohBk=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/6W57OZ7X5R5HHGNNCWKVPNMQVY.jpg",
    title: "Honda",
    subTitle: "Gold Wing",
  },
  {
    id: 7,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDhcvreusebKoS8keP74StPjCyzBVvjo-wg&usqp=CAU",
    title: "Apreliya",
    subTitle: "RS 660 Extrema",
  },
  {
    id: 8,
    url: "https://www.cycleworld.com/resizer/6gxAwsuP1WwrU5f6MzqK-n8ohBk=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/6W57OZ7X5R5HHGNNCWKVPNMQVY.jpg",
    title: "BMW",
    subTitle: "F 900 R",
  },
];

const PopularBrands = () => {
  return (
    <div className="container px-4 my-5">
      <div className="flex flex-wrap">
        <div className="w-full mb-5">
          <h3 className="text-sm md:text-xl text-colorSecondary font-medium">
            Məhşur Markalar
          </h3>
        </div>
        <div className="bg-white w-full px-4 py-4 pt-6 rounded-lg select-none">
          <Swiper
            slidesPerView={1}
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
              },
              1200: {
                slidesPerView: 4,
              },
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
    </div>
  );
};

export default PopularBrands;
