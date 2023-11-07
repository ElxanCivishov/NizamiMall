const ImgWithDelete = ({ item, onDelete }) => {
  return (
    <div className="flex  items-center justify-center p-8 text-center bg-white border border-gray-200 rounded-lg   dark:bg-gray-800 dark:border-gray-700 relative h-full">
      <img
        className="w-full max-h-40 object-contain"
        src={"http://localhost:5000/images/" + item}
        alt={"img"}
      />
      <button
        type="button"
        onClick={() => onDelete(item)}
        className="space-y-0.5 font-medium dark:text-white absolute top-3 right-3 
    text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  rounded-lg text-sm px-2 flex items-center justify-center"
      >
        x
      </button>
    </div>
  );
};

export default ImgWithDelete;
