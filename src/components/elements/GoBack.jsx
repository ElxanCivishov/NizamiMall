import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const GoBack = ({ title, path, text = "go list" }) => {
  return (
    <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center gap-2">
      <h2 className="font-semibold text-xl md:text-2xl text-slate-600 dark:text-slate-100">
        {title}
      </h2>
      <Link
        to={path}
        className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 flex max-w-max items-center"
      >
        <BiArrowBack className="md:me-2" />
        <span className="hidden md:inline">{text}</span>
      </Link>
    </header>
  );
};

export default GoBack;
