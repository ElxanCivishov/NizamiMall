import { LinkBtn } from "../components/elements";
import { Meta } from "../components/layout";

const NotFound = () => {
  return (
    <div>
      <Meta title="Səhifə tapılmadı" />
      <section className="container p-4">
        <div className="bg-white p-5 flex items-center justify-center">
          <div className="w-full md:max-w-2xl flex flex-col items-center gap-3 text-center px-4">
            <h3 className="text-7xl text-zinc-600 font-semibold">404</h3>
            <h3 className="text-xl text-zinc-600 font-semibold">
              Xəta! Səhifə Tapılmadı.
            </h3>
            <p className="text-sm text-zinc-500 font-semibold ">
              Üzr istəyirik, axtardığınız səhifəni tapa bilmədik. Geri
              qayıtmağınızı təklif edirik.
            </p>
            <div className="flex items-center justify-center">
              <LinkBtn
                path="/"
                replace={true}
                classBtn="p-2 text-xs md:text-base md:p-3 font-medium text-center rounded-full no-underline bg-colorBlack hover:bg-colorPrimary text-white hover:text-zinc-800 border-0 w-40 md:w-48"
                label="Geri qayıt"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
