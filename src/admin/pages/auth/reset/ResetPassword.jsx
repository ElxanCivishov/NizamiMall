import { useEffect, useState } from "react";
import { Loader, Logo, Title } from "../../../components";
import ResetForm from "./ResetForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RESET, getLoginStatus } from "../../../features/auth/authSlice";

const Resetpassword = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getLoginStatus());
    if (isLoggedIn) {
      navigate("/");
    }
    setLoading(false);
    dispatch(RESET());
  }, [isLoggedIn, dispatch, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="bg-gray-50 dark:bg-gray-900 h-screen">
          <div className="py-4 md:py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 place-content-center h-full">
            <div className="flex flex-col items-center justify-center gap-3 md:gap-5">
              <Logo />
              <Title />
            </div>
            <div>
              <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-600">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Reset your password!
                  </h2>
                </div>
                <ResetForm />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Resetpassword;
