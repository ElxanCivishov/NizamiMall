import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <>
      {service && (
        <Link to={`/magaza-ve-restoranlar/${service.id}`}>
          <div className="w-full h-full border border-slate-100 p-4 flex flex-col  transition-all duration-200 rounded-lg shadow-lg group hover:-translate-y-3">
            <div className="w-full flex overflow-hidden items-center justify-center rounded-lg">
              <img
                src={service.logo}
                alt=""
                className="w-full h-full group-hover:scale-105 transition-all duration-200  object-cover rounded-lg"
              />
            </div>
            <h2 className="group-hover:text-colorPrimary text-sm md:text-base mt-4">
              {service.name}
            </h2>
            <p className=" text-sm flex gap-1 group-hover:text-colorPrimary ">
              {`Mərtəbə ${
                service.floor === 1
                  ? "bir"
                  : service.floor === 2
                  ? "iki"
                  : service.floor === 3
                  ? "üç"
                  : null
              } - ${service.subcategory_name}`}
              {}
            </p>
          </div>
        </Link>
      )}
    </>
  );
};

export default ServiceCard;
