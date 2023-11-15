import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

const HomeInformation = () => {
  return (
    <section className="container px-4 ">
      <div className="  gap-10">
        <div className="p-6 bg-white rounded-lg   md:p-20 flex flex-col gap-4 md:gap-6 shadow-lg transition-all duration-200 group hover:-translate-y-0.5">
          <h5 className="text-base md:text-3xl text-gray-600 tracking-wide  font-semibold  text-center h-auto">
            Alış-veriş edərək ailənizlə Nizami Mall-da xoş vaxt keçirəcəksiniz.
          </h5>

          <p className="text-base md:text-xl  text-center tracking-wide font-normal text-colorLight">
            3 mərtəbədən ibarət olan Nizami Mall 100-dən çox mağazaya ev
            sahibliyi edir. Hazırda mall-da təhsil, turizm, gözəllik sahəsində
            xidmət göstərilir. Mall-da yerləşən restorantları ziyarət edərək,
            ləziz təamlardan dada biilərsiniz.
          </p>
          <p className="flex items-center justify-center gap-3 group">
            <Link to="/magaza-ve-restoranlar">
              <span className="flex items-center border-b  max-w-max text-base md:text-xl text-gray-600 hover:text-colorPrimary hover:border-colorPrimary">
                Mağazalar və Restoranlar
                <MdArrowRightAlt className="ms-1 animate-pulse text-xl md:text-3xl" />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeInformation;
