import React from "react";

const Stepper = ({ tab, setTab, title1, title2 }) => {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500  sm:text-base select-none">
      <li
        className={`flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ${
          tab === 0 ? "text-emerald-600 " : "text-zinc-800"
        }`}
      >
        <span
          className={`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200  cursor-pointer hover:text-emerald-600 ${
            tab === 0
              ? "text-emerald-600 dark:text-emerald-500"
              : "text-zinc-800"
          }`}
          onClick={() => setTab(0)}
        >
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          {title1}
        </span>
      </li>

      <li
        className={`flex md:w-full items-center ${
          tab === 1 ? "text-emerald-600" : "text-zinc-800"
        }`}
      >
        <span
          className={`flex items-center  sm:after:hidden after:mx-2 cursor-pointer hover:text-emerald-600 ${
            tab === 1 ? "after:text-emerald-200" : "after:text-gray-200  "
          }`}
          onClick={() => setTab(1)}
        >
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          {title2}
        </span>
      </li>
    </ol>
  );
};

export default Stepper;
