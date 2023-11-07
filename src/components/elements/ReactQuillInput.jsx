import ReactQuill from "react-quill";
import { useSelector } from "react-redux";

const ReactQuillInput = ({
  label,
  placeholder = "yazın...",
  register,
  classInput,
  value,
  errors,
  required,
  name,
  theme = "snow",
}) => {
  const selectValid = useSelector((state) => state.data.validation);
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="block  text-xs md:text-sm font-medium text-gray-500 dark:text-white">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <ReactQuill
        theme={theme}
        value={value}
        onChange={(e) => {
          register.onChange({
            target: {
              name: register.name,
              value: e,
            },
          });
        }}
        className={` text-gray-900  rounded-lg  block w-full shadow-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  transition duration-200 h-auto ${
          errors && selectValid ? "border-red-300 border-3" : ""
        } ${classInput} !text-[10px]`}
        placeholder={placeholder}
        name={name}
      />
      {errors && selectValid && (
        <span className="text-xs text-red-500">{errors.message}</span>
      )}
    </div>
  );
};

export default ReactQuillInput;
