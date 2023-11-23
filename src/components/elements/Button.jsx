import { FiLoader } from "react-icons/fi";

const Button = ({
  isLoading,
  type = "button",
  disabled,
  label,
  classBtn,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-[full] p-2 text-xs md:text-base font-medium text-center rounded-lg bg-colorBlack  text-white select-none  ${
        isLoading || disabled
          ? "text-gray-600  bg-gray-600 cursor-not-allowed"
          : "hover:text-zinc-800 hover:bg-colorPrimary"
      } ${classBtn}`}
      disabled={disabled ? disabled : isLoading}
    >
      {isLoading ? (
        <FiLoader className="animate-spin mx-auto text-white text-base my-1" />
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
