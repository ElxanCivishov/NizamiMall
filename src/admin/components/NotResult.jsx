const NotResult = ({ title }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-5 gap-5">
      <img
        src="/images/notResult.png"
        alt=""
        className="w-full max-w-xl h-80"
      />
      <h3
        className="
  font-semibold text-xs sm:text-sm  text-gray-600 tracking-widest"
      >
        {title}
      </h3>
    </div>
  );
};

export default NotResult;
