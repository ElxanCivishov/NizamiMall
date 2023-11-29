import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <>
      {service && (
        <Link
          to={`/magaza-ve-restoranlar/${service.id}`}
          className="h-full w-full mb-6"
        >
          <div className="w-full h-full border border-slate-100 p-4 flex flex-col  transition-all duration-200 rounded-lg shadow-lg group md:hover:-translate-y-3">
            <div className="w-full h-full flex overflow-hidden items-center justify-center rounded-lg  max-h-[200px] md:max-h-full">
              <img
                src={service.logo}
                alt=""
                className="w-full h-full group-hover:scale-105 transition-all duration-200  object-contain rounded-lg"
              />
            </div>
            <h2 className="group-hover:text-colorPrimary text-start text-sm md:text-base mt-4 text-black font-medium">
              {service.name}
            </h2>
            <p className="text-sm text-start gap-1 group-hover:text-colorPrimary text-black font-medium">
              {`Mərtəbə ${
                service.floor === 1
                  ? "bir"
                  : service.floor === 2
                  ? "iki"
                  : service.floor === 3
                  ? "üç"
                  : null
              } - ${service.subcategory_name}`}
            </p>
          </div>
        </Link>
      )}
    </>
  );
};

export default ServiceCard;
