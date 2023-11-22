import { useEffect, useState } from "react";

import { FaCircleCheck } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import {
  RESET,
  createNewsletter,
} from "../../features/newsletter/newsletterSlice";
import { MdError } from "react-icons/md";

const Newsletter = () => {
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(true);
  const [email, setEmail] = useState("");

  const { isLoading, isSuccess, isError } = useSelector(
    (state) => state.newsletters
  );

  useEffect(() => {
    if (isError || isSuccess) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        dispatch(RESET());
      }, 3000);
    }
    if (isSuccess) {
      setEmail("");
    }
  }, [isSuccess, isError, dispatch]);

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleClick = () => {
    if (email !== "" && isEmailValid(email)) {
      dispatch(createNewsletter({ email }));
    }
  };

  return (
    <div className="flex  w-full flex-col md:flex-row items-center p-4">
      <div className="w-full ">
        <div className="flex gap-2 items-center">
          <IoSend className="text-gray-400 w-4 md:w-6" />
          <h4 className="mb-0 text-gray-500 text-sm md:text-base">
            Yeniliklərdən xəbərdar olmaq üçün
          </h4>
        </div>
      </div>
      <div className="w-full mt-3 md:mt-0 flex justify-end">
        <div className="flex w-full rounded-lg bg-white border md:max-w-[400px]">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full  py-1 border-none outline-none rounded-l-md focus:ring-0 text-gray-600"
            placeholder="Email ünvanı"
          />
          <button
            onClick={() => handleClick()}
            className={` rounded-r-lg p-2 m-[1px]  hover:bg-colorPrimaryHover  text-white ${
              showMessage && isSuccess
                ? "bg-emerald-600"
                : showMessage && isError
                ? "bg-red-500"
                : "bg-colorPrimary"
            } ${
              isLoading || !email || !isEmailValid(email)
                ? "cursor-not-allowed opacity-80"
                : "cursor-pointer opacity-100"
            }`}
            disabled={isLoading || !email || !isEmailValid(email)}
          >
            {showMessage && isError ? (
              <span className="flex items-center gap-1">
                Göndərilmədi
                <span className="flex items-center pl-3 text-white">
                  <MdError className="w-5 h-5 " aria-hidden="true" />
                </span>
              </span>
            ) : showMessage && isSuccess ? (
              <span className="flex items-center gap-1">
                Göndərildi
                <span className="flex items-center pl-3 text-white">
                  <FaCircleCheck className="w-5 h-5 " aria-hidden="true" />
                </span>
              </span>
            ) : (
              "Göndər"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
