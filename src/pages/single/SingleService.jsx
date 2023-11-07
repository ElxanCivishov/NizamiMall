import { useState } from "react";
import { Meta, BreadCrumb } from "../../components/layout";
import { FaCopy, FaMobile, FaUser, FaClock } from "react-icons/fa";
import { FaLocationDot, FaShareNodes } from "react-icons/fa6";
import {
  AiFillDislike,
  AiFillHeart,
  AiFillLike,
  AiOutlineHeart,
} from "react-icons/ai";

const SingleService = () => {
  const [like, setLike] = useState(null);
  const [favorite, setFavorite] = useState(false);

  const handleCopy = (e) => {
    navigator.clipboard.writeText("Copied text");
  };
  return (
    <div>
      <Meta title="Servis" />
      <BreadCrumb title="Servis MT-15" path="/services" prev="Servislər" />

      <section className="container p-4 ">
        <div className="grid md:grid-cols-2 gap-2 bg-white rounded-lg">
          <div className="w-full p-4 ">
            <div className="shadow-lg mt-4 ">
              <img
                className="w-full h-full object-contain rounded-lg md:rounded-tl-lg"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 px-4 mt-5">
            <h5 className="text-base text-colorBlack font-semibold">
              Lorem ipsum dolor sit.
            </h5>
            <div className="flex flex-col gap-2 py-3">
              <span className="flex items-center text-sm md:text-base">
                <FaUser className="me-1" />
                <span className="font-semibold me-2">Baş usta:</span>
                Elkhan Civishov
              </span>
              <a
                href="tel:0558729486"
                className="flex items-center text-sm md:text-base"
              >
                <FaMobile className=" me-1" />
                <span className="font-semibold me-2">Tel:</span> 055 872 94 86 ,
                055 872 94 86
              </a>
              <span className="flex items-center text-sm md:text-base">
                <FaLocationDot className="me-1 " />
                <span className="font-semibold me-2">Ünvan:</span>
                Lorem ipsum dolor, sit amet consectetur
              </span>

              <span className="flex items-center text-sm md:text-base">
                <FaClock className="me-1" />
                <span className="font-semibold  me-2 whitespace-nowrap">
                  İş vaxtı:
                </span>
                Bazar ertəsi-Cümə: 09:00-18:00; Şənbə: 10:00-16:00
              </span>
            </div>

            <div className="flex items-center flex-wrap gap-2 py-3">
              <span className="flex items-center cursor-pointer text-xs md:text-base select-none">
                <FaShareNodes className="text-sm me-1" />
                Paylaş
              </span>
              <span
                className="flex items-center cursor-pointer text-xs md:text-base select-none"
                onClick={(e) => {
                  handleCopy(e);
                }}
              >
                <FaCopy className="text-sm md:text-base me-1" />
                Linki kopyala
              </span>
              <span className="flex items-center cursor-pointer text-xs md:text-base select-none">
                {favorite ? (
                  <span
                    onClick={() => setFavorite(!favorite)}
                    className="flex items-center"
                  >
                    <AiFillHeart
                      onClick={() => setFavorite(!favorite)}
                      className="text-red-500 text-sm md:text-base me-1"
                    />
                    Seçilmişlər
                  </span>
                ) : (
                  <span
                    onClick={() => setFavorite(!favorite)}
                    className="flex items-center"
                  >
                    <AiOutlineHeart className="text-black text-sm md:text-base me-1" />
                    Seçilmişlər
                  </span>
                )}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4 select-none">
              <span className="flex items-center gap-1">
                <AiFillLike
                  className={`cursor-pointer text-base md:text-xl ${
                    like === 1 && "text-red-500"
                  }`}
                  onClick={() => setLike(like === 1 ? null : 1)}
                />
                <span>23</span>
              </span>
              <span className="flex items-center gap-1">
                <AiFillDislike
                  className={`cursor-pointer text-base md:text-xl ${
                    like === -1 && "text-red-500"
                  }`}
                  onClick={() => setLike(like === -1 ? null : -1)}
                />
                <span>5</span>
              </span>
            </div>
          </div>
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
                Mexanika
              </span>
              <span className=" bg-colorBlack text-white rounded-lg  text-sm py-1 px-3">
                Benzin
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
        <div className="bg-white p-3 rounded-lg">
          <h5 className="text-base font-semibold text-zinc-700">Açıqlama</h5>
          <p className="text-sm  font-normal text-colorBlack tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            eligendi est fugiat earum in. Reiciendis, nesciunt asperiores? Est
            iusto possimus in facere autem, quo dignissimos fuga commodi qui,
            vel similique. Lorem ipsum dolor sit amet consectetur adipisicing
            <br />
            elit. Vel eligendi est fugiat earum in. Reiciendis, nesciunt
            <br />
          </p>
          <p className="text-sm  font-normal text-zinc-600 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            <br />
            dignissimos fuga commodi qui, vel similique. Lorem ipsum dolor sit
            quo dignissimos fuga commodi qui, vel similique.
          </p>
        </div>
        <div className="bg-white p-3 my-5 rounded-lg">
          <h5 className="text-base font-semibold text-zinc-700 my-3">
            Qalereya
          </h5>
          <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/moto-04.jpg"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/mt-15.avif"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/mt-15.avif"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/moto-04.jpg"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/moto-04.jpg"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/mt-15.avif"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/moto-01.jpg"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/mt-15.avif"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/moto-04.jpg"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/mt-15.avif"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/moto-01.jpg"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/mt-15.avif"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/moto-04.jpg"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/mt-15.avif"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/moto-01.jpg"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/mt-15.avif"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/moto-04.jpg"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/mt-15.avif"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/moto-01.jpg"
              alt=""
            />
            <img
              className="w-full h-full  rounded-lg md:rounded-tl-lg"
              src="https://motoaz.netlify.app/images/moto/mt-15.avif"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
