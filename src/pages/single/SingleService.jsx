import { Meta } from "../../components/layout";
import { MdCategory } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RESET, getService } from "../../features/service/serviceSlice";
import { Loader } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import SimilarServices from "../../components/SimilarServices";
import { NotResult } from "../../admin/components";
import TruncatedText from "../../components/TruncatedText";

const SingleService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { service, isSuccess, isLoading } = useSelector(
    (state) => state.services
  );

  useEffect(() => {
    dispatch(getService(id));
  }, [id]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [dispatch, service, isSuccess]);

  return (
    <div>
      <Meta title={isLoading ? "Yüklənir" : service?.name} />

      <section className="container p-4 ">
        <p
          className="cursor-pointer bg-white rounded-lg p-3 max-w-max my-3 flex items-center gap-2 text-black"
          onClick={() => navigate(-1)}
        >
          <FaArrowAltCircleLeft className="text-black md:text-base" />
          <span className="md:text-base font-semibold">Geri</span>
        </p>
        {isLoading ? (
          <Loader />
        ) : service ? (
          <div className="grid md:grid-cols-2 gap-2 bg-white rounded-lg py-10">
            <div className="w-full p-4 group">
              <div className=" mt-4 w-full rounded-lg flex items-center justify-center  overflow-hidden shadow-lg p-6 ">
                <img
                  className="w-full h-full object-contain max-h-60 rounded-lg group-hover:scale-105 transition-all duration-200"
                  src={service.logo}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 px-3 py-10 mt-5">
              <h5 className="text-base text-black font-semibold">
                {service.name}
              </h5>
              <div className="flex flex-col gap-2 py-3">
                <span className="flex items-center text-sm md:text-base text-black">
                  <MdCategory className="me-1 " />
                  {service.floor === 1
                    ? "Birinci mərtəbə - "
                    : service.floor === 2
                    ? "Ikinci mərtəbə - "
                    : service.floor === 3
                    ? "Üçüncü mərtəbə - "
                    : ""}
                  {service.subcategory_name}
                </span>
              </div>
              <div className="text-sm md:text-base font-medium text-black tracking-wide ">
                <TruncatedText text={service.description || ""} />
              </div>
            </div>
          </div>
        ) : (
          <NotResult title="Tapılmadı." />
        )}

        {service && <SimilarServices item={service} />}
      </section>
    </div>
  );
};

export default SingleService;
