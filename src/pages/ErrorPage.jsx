import { useLocation, useNavigate } from "react-router-dom";
import { Meta } from "../components/layout";

const ErrorPage = () => {
  const error = useLocation()?.state?.error;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1, { replace: true });
  };

  return (
    <div>
      <Meta title="Xəta" />
      <section className="container p-4">
        <div className="bg-white p-5 flex items-center justify-center">
          <div className="w-full md:max-w-2xl flex flex-col items-center gap-5 text-center px-4">
            <img src="/images/errorpage.png" alt="" />
            <p className="text-sm text-black font-semibold ">
              Üzr istəyirik, xəta ilə qarşılaşdıq. Yenidən cəhd etməyinizi
              təklif edirik.
            </p>
            {error && (
              <p className="text-sm text-black font-semibold ">
                <b className="me-2 text-base text-black"> Error: </b> {error}
              </p>
            )}

            <div className="flex items-center justify-center">
              <button
                onClick={() => handleNavigate()}
                className="p-2 text-xs md:text-base md:p-3 font-medium text-center rounded-full no-underline bg-colorPrimary  text-white hover:text-zinc-800 border-0 w-40 md:w-48"
              >
                Geri qayıt
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
