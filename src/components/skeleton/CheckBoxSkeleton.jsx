export default function CheckBoxSkeleton({ classCheckBox }) {
  return (
    <div className={`flex items-center max-w-max ${classCheckBox}`}>
      <p className="mr-2 text-xs md:text-sm w-20 bg-gray-200 rounded-full h-6"></p>
      <div className="bg-gray-200 relative inline-flex h-6 w-11 items-center rounded-full transition-all">
        <span className="inline-block h-4 w-4  rounded-full bg-white " />
      </div>
    </div>
  );
}
