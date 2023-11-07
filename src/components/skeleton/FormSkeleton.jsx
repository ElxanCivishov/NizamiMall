import FormInputSkeleton from "./FormInputSkeleton";
import CheckBoxSkeleton from "./CheckBoxSkeleton";
const FormSkeleton = () => {
  return (
    <div className="animate-pulse container p-5">
      <div className="mx-auto w-full bg-white  shadow-lg rounded-lg py-4 mt-5">
        <div className="p-5 mb-3">
          <div className="flex flex-col space-y-3 gap-3">
            <div className="flex flex-wrap md:flex-nowrap gap-2 w-full ">
              <FormInputSkeleton />
              <FormInputSkeleton />
              <FormInputSkeleton />
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-2 w-full ">
              <FormInputSkeleton />
              <FormInputSkeleton />
              <FormInputSkeleton />
            </div>
            <div className="hidden md:flex gap-5 lg:gap-2 w-full">
              <FormInputSkeleton />
              <FormInputSkeleton />
              <FormInputSkeleton />
            </div>
            <div className="hidden md:flex gap-5 lg:gap-2 w-full">
              <FormInputSkeleton />
              <FormInputSkeleton />
              <FormInputSkeleton />
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
              <CheckBoxSkeleton />
              <CheckBoxSkeleton />
              <CheckBoxSkeleton />
            </div>
            <div className="flex items-center justify-center">
              <div className="w-28 h-10 p-2 text-xs md:text-base font-medium text-center rounded-full bg-gray-200 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSkeleton;
