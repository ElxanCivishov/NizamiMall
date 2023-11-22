import { useSelector } from "react-redux";

const FormTextarea = ({
  label,
  placeholder = "yazın...",
  register,
  classInput,
  defaultValue,
  errors,
  maxLength,
  minLength,
  required,
  trigger,
  rows,
  cols,
}) => {
  const selectValid = useSelector((state) => state.data.validation);

  return (
    <div className="flex flex-col gap-1 md:gap-2 w-full">
      {label && (
        <label className="block  text-xs md:text-sm font-medium text-gray-500 dark:text-white">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        {...register}
        autoComplete="off"
        value={defaultValue}
        className={` text-gray-900 text-sm md:text-base rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-1 mdIp-2.5 transition duration-200 no-spin shadow-md min-h-[40px] ${classInput} ${
          errors && selectValid
            ? "border-red-300 border-3"
            : "border-slate-100 border"
        }`}
        maxLength={maxLength}
        minLength={minLength}
        rows={rows}
        cols={cols}
      />
      {errors && selectValid && (
        <span className="text-xs text-red-500">{errors.message}</span>
      )}
    </div>
  );
};

export default FormTextarea;
