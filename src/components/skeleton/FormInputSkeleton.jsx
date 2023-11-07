const FormInputSkeleton = ({ classLabel = "w-40 h-5", classInput }) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label
        className={`bg-gray-200 rounded-full  max-w-[360px] ${classLabel}`}
      ></label>
      <input
        disabled={true}
        className="rounded-3xl  w-full p-1.5 transition duration-200  shadow-md  border-slate-100 border"
      />
    </div>
  );
};

export default FormInputSkeleton;
