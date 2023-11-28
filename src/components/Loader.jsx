import { FiLoader } from "react-icons/fi";

const Loader = ({ classLoader }) => {
  return (
    <div
      className={`w-full mx-auto min-h-[200px] flex items-center justify-center  backdrop-blur-lg ${classLoader}`}
    >
      <FiLoader className="text-colorPrimary text-3xl animate-spin" />
    </div>
  );
};

export default Loader;
