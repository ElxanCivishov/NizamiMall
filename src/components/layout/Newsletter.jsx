import { useState } from "react";

import { FaCircleCheck } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
const Newsletter = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [email, setEmail] = useState("");

  const isSuccess = false;

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleClick = () => {
    setEmail("");
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
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
        <div className="flex w-full rounded-lg border md:max-w-[400px]">
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
              showMessage ? "bg-emerald-600" : "bg-colorPrimary"
            } `}
            disabled={!email || !isEmailValid(email)}
          >
            {showMessage ? (
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
