import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";

import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";

import {
  FaCopy,
  FaMobile,
  FaUser,
  FaFileAlt,
  FaArrowRight,
  FaEye,
} from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Meta, BreadCrumb } from "../../components/layout";
import { ProductCard } from "../../components/cards";

const SingleProduct = () => {
  const [like, setLike] = useState(false);

  const handleCopy = (e) => {
    navigator.clipboard.writeText("Copied text");
  };

  return (
    <div>
      <Meta title="Yamaha MT-15" />
      <BreadCrumb title="Yamaha MT-15" path="/store" prev="Elanlar" />
      <section className="container p-4 ">
        <div className="grid md:grid-cols-2 gap-2 bg-white rounded-lg">
          <div className="w-full p-4 ">
            <div className="shadow-lg rounded-lg mt-4 ">
              <SlideshowLightbox className="flex flex-wrap w-full gap-3 !p-4">
                <img
                  className="w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <img
                  className="w-14 h-14 rounded-lg"
                  src="https://images.unsplash.com/photo-1679216219717-cd2bd22050ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXQxNXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <img
                  className="w-14 h-14 rounded-lg"
                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <img
                  className="w-14 h-14 rounded-lg"
                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <img
                  className="w-14 h-14 rounded-lg"
                  src="https://images.unsplash.com/photo-1679216219717-cd2bd22050ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXQxNXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <img
                  className="w-14 h-14 rounded-lg"
                  src="https://images.unsplash.com/photo-1638517900432-6ee4655d76f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXQxNXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />

                <img
                  className="w-14 h-14 rounded-lg"
                  src="https://images.unsplash.com/photo-1638517900432-6ee4655d76f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXQxNXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <img
                  className="w-14 h-14 rounded-lg"
                  src="https://images.unsplash.com/photo-1679216219717-cd2bd22050ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXQxNXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <img
                  className="w-14 h-14 rounded-lg"
                  src="https://images.unsplash.com/photo-1638517900432-6ee4655d76f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXQxNXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <img
                  className="w-14 h-14 rounded-lg"
                  src="https://images.unsplash.com/photo-1638517900432-6ee4655d76f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXQxNXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </SlideshowLightbox>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 px-4 my-5">
              <div className="flex flex-col gap-2 py-3">
                <div className="flex items-center w-full justify-between mt-3">
                  <p className="flex items-center text-xs  md:text-base">
                    <FaEye />
                    <span className="ms-1 md:ms-2 text-[12px] md:text-base ">
                      200.232
                    </span>
                  </p>
                  <p className="text-[12px] md:text-sm uppercase font-medium">
                    18 dec 2023
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <GiCheckMark className="me-1 text-sm " />
                  <h5 className="text-bas font-semibold me-1">Qiymət:</h5>
                  <p className="text-xs  md:text-base  font-bold text-colorBlack">
                    2788 AZN
                  </p>
                </div>
                <span className="flex items-center text-sm md:text-base">
                  <GiCheckMark className="me-1 text-sm " />
                  <span className="font-semibold me-2">Marka:</span>
                  Yamaha
                </span>
                <span className="flex items-center text-sm md:text-base">
                  <GiCheckMark className="me-1 text-sm " />
                  <span className="font-semibold me-2">Model:</span>
                  MT-15
                </span>
                <span className="flex items-center text-sm md:text-base">
                  <GiCheckMark className="me-1 text-sm " />
                  <span className="font-semibold me-2">Rəng:</span>
                  Ağ
                </span>
                <span className="flex items-center text-sm md:text-base">
                  <GiCheckMark className="me-1 text-sm " />
                  <span className="font-semibold me-2">
                    Mühərrik sm<sup>3</sup>:
                  </span>
                  50
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center text-sm md:text-base">
                    <GiCheckMark className="me-1 text-sm " />
                    <span className="font-semibold me-2">Buraxılış ili:</span>
                    2023
                  </span>
                  <span className="flex items-center text-sm md:text-base">
                    <GiCheckMark className="me-1 text-sm " />
                    <span className="font-semibold me-2">Yürüş km:</span>
                    36 000
                  </span>
                </div>

                <div className="flex flex-wrap w-full items-center gap-3">
                  <span className="flex items-center text-sm md:text-base">
                    <GiCheckMark className="me-1 text-sm " />
                    <span className="font-semibold me-2">Yeni:</span>
                    Yox
                  </span>
                  <span className="flex items-center text-sm md:text-base">
                    <GiCheckMark className="me-1 text-sm " />
                    <span className="font-semibold me-2">Kredit:</span>
                    Bəli
                  </span>
                  <span className="flex items-center text-sm md:text-base">
                    <GiCheckMark className="me-1 text-sm " />
                    <span className="font-semibold me-2">Barter:</span>
                    Bəli
                  </span>
                </div>
                <span className="flex items-center text-sm md:text-base">
                  <GiCheckMark className="me-1 text-sm " />
                  <span className="font-semibold me-2">Şəhər:</span>
                  Bakı
                </span>
              </div>

              <hr />
              <div className="flex flex-col gap-2 pt-3">
                <span className="flex items-center text-sm md:text-base">
                  <FaUser className="me-1 text-sm " />
                  <span className="font-semibold me-2">İstifadəçi:</span>
                  Elxan Civishov
                </span>
                <a
                  href="tel:0558729486"
                  className="flex items-center text-sm md:text-base "
                >
                  <FaMobile className=" me-1" />
                  <span className="font-semibold me-2">Tel:</span>
                  <span className="hover:text-colorPrimary">055 872 94 86</span>
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="##" className="font-medium flex w-full ">
                  <span className="flex items-center   max-w-max text-sm hover:text-colorPrimary ">
                    <FaFileAlt className="me-1" />
                    İstifadəçinin bütün moto elanları
                    <FaArrowRight className="ms-1" />
                  </span>
                </a>
                <a href="##" className="font-medium flex w-full">
                  <span className="flex items-center  max-w-max text-sm hover:text-colorPrimary ">
                    <FaFileAlt className="me-1" />
                    İstifadəçinin bütün aksesuar elanları
                    <FaArrowRight className="ms-1" />
                  </span>
                </a>
              </div>
              <div className="flex items-center flex-wrap gap-2 py-3 mb-4">
                <span className="flex items-center cursor-pointer text-xs md:text-base hover:text-colorPrimary">
                  <FaShareNodes className="text-sm me-1" />
                  Paylaş
                </span>
                <span
                  className="flex items-center cursor-pointer text-xs md:text-base  hover:text-colorPrimary"
                  onClick={(e) => {
                    handleCopy(e);
                  }}
                >
                  <FaCopy className="text-sm md:text-base me-1" />
                  Linki kopyala
                </span>
                <span
                  className="flex items-center cursor-pointer text-xs md:text-base  hover:text-colorPrimary"
                  onClick={() => setLike(!like)}
                >
                  {like ? (
                    <>
                      <AiFillHeart className="text-red-500 text-sm md:text-base me-1 hover:text-colorPrimary" />
                      Seçilmişlər
                    </>
                  ) : (
                    <>
                      <AiOutlineHeart className="text-black  hover:text-colorPrimary text-sm md:text-base me-1" />
                      Seçilmişlər
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg my-4">
          <h5 className="text-base font-semibold text-zinc-700">Açıqlama</h5>
          <p className="text-sm  font-normal text-zinc-500  tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            eligendi est fugiat earum in. Reiciendis, nesciunt asperiores? Est
            iusto possimus in facere autem, quo dignissimos fuga commodi qui,
            vel similique. Lorem ipsum dolor sit amet consectetur adipisicing
            <br />
            elit. Vel eligendi est fugiat earum in. Reiciendis, nesciunt
            <br />
          </p>
          <p className="text-sm  font-normal text-zinc-500 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            <br />
            dignissimos fuga commodi qui, vel similique. Lorem ipsum dolor sit
            quo dignissimos fuga commodi qui, vel similique.
          </p>
        </div>
        <div className="flex gap-2 bg-white rounded-lg my-5">
          <div className="p-3 md:p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Yamaha
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Suzuki
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Avtomat
              </span>

              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Avtomat
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Mexanika
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Benzin
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Dizel
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Led işıq
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Yağlama
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Mexanika
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Benzin
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Dizel
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Led işıq
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Yağlama
              </span>
            </div>
          </div>
        </div>
        <div className=" p-3 my-5 rounded-lg bg-white">
          <h5 className="text-base font-semibold text-zinc-700 my-3">
            Digər elanlar
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
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
