import { useSelector } from "react-redux";

const FormInput = ({
  label,
  type = "text",
  placeholder = "yazın...",
  register,
  classInput,
  errors,
  disabled,
  value,
  onPaste,
  required,
  min,
  max,
  trigger,
}) => {
  const selectValid = useSelector((state) => state.data.validation);

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="block  text-xs md:text-sm font-medium text-gray-500 dark:text-white">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        onPaste={onPaste}
        type={type}
        placeholder={placeholder}
        {...register}
        className={` text-gray-900 text-xs md:text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-2.5 transition duration-200 no-spin shadow-md placeholder:text-gray-400 ${classInput} ${
          errors && selectValid
            ? "border-red-300 border-3"
            : "border-slate-100 border"
        }`}
        min={min}
        max={max}
        disabled={disabled}
        value={value}
      />
      {errors && selectValid && (
        <span className="text-xs text-red-500">{errors.message}</span>
      )}
    </div>
  );
};

export default FormInput;
