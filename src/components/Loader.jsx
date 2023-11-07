import { FiLoader } from "react-icons/fi";

const Loader = () => {
  return (
    <div className="w-full mx-auto min-h-[200px] flex items-center justify-center  backdrop-blur-lg">
      <FiLoader className="text-emerald-700 text-3xl animate-spin" />
    </div>
  );
};

export default Loader;
