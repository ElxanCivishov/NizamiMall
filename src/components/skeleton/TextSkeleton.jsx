const TextSkeleton = () => {
  return (
    <section className="container p-5 mb-5">
      <div className="space-y-2.5 animate-pulse ">
        <div className="h-6 bg-gray-300  rounded-full py-1 my-2  w-48 mb-4"></div>
        <div className="flex items-center w-full gap-4">
          <div className="h-2.5 bg-gray-200  rounded-full  py-1 my-2 w-32"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-1/5"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-60"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-32"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2   w-1/5"></div>
        </div>
        <div className="flex items-center gap-4 w-full">
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-1/5"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2   w-1/5"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-32"></div>
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-32"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2 hidden md:inline-block w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-1/5"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2 hidden md:inline-block w-60"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-48"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2   w-1/5"></div>
        </div>
        <div className="flex items-center gap-4 w-full">
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2 hidden md:inline-block w-32"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-48"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-60"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2 hidden md:inline-block w-1/5"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2 hidden md:inline-block w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2   w-1/5"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-32"></div>
        </div>
        <div className="flex items-center w-full gap-3">
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2 hidden md:inline-block w-32"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-60"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-32"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-48"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2   w-1/5"></div>
        </div>
        <div className="flex items-center  gap-4 w-full">
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-48"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2   w-1/5"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-32"></div>
        </div>

        <div className="hidden  md:flex items-center w-full gap-4">
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-32"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2 hidden md:inline-block w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-1/5"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2 hidden md:inline-block w-60"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-48"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2   w-1/5"></div>
        </div>
        <div className="hidden  md:flex items-center gap-4 w-full">
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2 hidden md:inline-block w-32"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-48"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-60"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2 hidden md:inline-block w-1/5"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2 hidden md:inline-block w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2   w-1/5"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-32"></div>
        </div>
        <div className="hidden  lg:flex items-center w-full gap-3">
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2 hidden md:inline-block w-32"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-60"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-32"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-48"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2   w-1/5"></div>
        </div>
        <div className="hidden  lg:flex items-center  gap-4 w-full">
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-48"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2  w-24"></div>
          <div className="h-2.5 bg-gray-300  rounded-full py-1 my-2   w-1/5"></div>
          <div className="h-2.5 bg-gray-200  rounded-full py-1 my-2  w-32"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </section>
  );
};

export default TextSkeleton;
