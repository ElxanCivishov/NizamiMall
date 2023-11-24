import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { RESET, getSliders } from "../../features/home/slider/sliderSlice";
import Loader from "../Loader";
import TruncatedHtml from "../TruncatedHtml";
import { Navigate } from "react-router-dom";

const HomeSlider = () => {
  const dispatch = useDispatch();

  const { sliders, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.homeSlider
  );

  useEffect(() => {
    dispatch(getSliders());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [dispatch, isSuccess]);

  if (isError) return <Navigate to="/error" state={{ error: message }} />;

  return (
    <div className="container  flex flex-wrap my-4">
      <div className="bg-white w-full h-auto rounded-lg p-4  select-none">
        {isLoading ? (
          <Loader />
        ) : (
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
            {sliders?.map((slider) => (
              <SwiperSlide key={slider?.id}>
                <div className="flex items-center group mb-6 w-full">
                  <div className="w-full transition-all duration-100 rounded-lg overflow-hidden relative">
                    <img
                      src={slider.image}
                      alt="marka"
                      className="w-full h-full max-h-[300px] md:max-h-[500px] rounded-lg object-contain"
                    />
                    {/* Overlay for improved text readability */}
                    {/* <div className="absolute inset-0 rounded-lg bg-black bg-opacity-30"></div> */}

                    <div className="flex flex-col gap-1 absolute bottom-20 left-20 text-white text-2xl z-10">
                      <div className="text-base md:text-4xl shadow-inner bg-black bg-opacity-30 px-2 rounded-lg">
                        <TruncatedHtml html={slider.title} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HomeSlider;
