import { Meta } from "../../components/layout";
import { MdCategory } from "react-icons/md";
import { FaStairs } from "react-icons/fa6";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const SingleService = () => {
  return (
    <div>
      <Meta title="Restaurant" />

      <section className="container p-4 ">
        <p className=" bg-white rounded-lg p-3 max-w-max my-3 flex items-center gap-2">
          <FaArrowAltCircleLeft className="animate-bounce md:text-base" />
          <span className="md:text-base font-semibold">Geri</span>
        </p>
        <div className="grid md:grid-cols-2 gap-2 bg-white rounded-lg">
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
                <FaStairs className="me-1 -rotate-12" />
                Birinci mərtəbə
              </span>

              <span className="flex items-center text-sm md:text-base">
                <MdCategory className="me-1 " />
                Uşaqlar üçün
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white my-4 p-3 rounded-lg">
          <h5 className="text-base font-semibold text-gray-600">Açıqlama</h5>
          <p className="text-sm md:text-base font-normal text-gray-500 tracking-wide ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            eligendi est fugiat earum in. Reiciendis, nesciunt asperiores? Est
            iusto possimus in facere autem, quo dignissimos fuga commodi qui,
            vel similique. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vel eligendi est fugiat earum in. Reiciendis, nesciunt
          </p>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
