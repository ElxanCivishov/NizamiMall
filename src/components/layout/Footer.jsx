import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-colorBlack text-white  rounded-t-[80px]">
      <div className="container p-4 md:p-0">
        <div className="p-4 text-center py-12">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 md:mt-3 gap-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-white font-semibold">Bizimlə əlaqə</h4>
              <p className="text-white text-sm">Lorem ipsum dolor sit</p>
              <a
                href="tel:0516944685"
                className=" text-white block hover:underline text-sm "
              >
                <span className="font-medium me-1">Tel:</span>(+994) 51 694 46
                85
              </a>
            </div>

            <div className="text-center">
              <h4 className="text-white font-semibold">Keçidlər</h4>
              <div className="flex flex-col gap-1 md:gap-2 text-center">
                <Link className="text-white hover:underline text-sm" to="">
                  Yeniliklər
                </Link>
                <Link className="text-white hover:underline text-sm " to="">
                  Əlaqə
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 pb-16 md:pb-4 flex items-center justify-between gap-4 border-t  border-t-colorLight">
          <p className="text-center mb-0 text-white">
            &copy; {new Date().getFullYear()} Nizami Mall
          </p>
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <Link
              to="/"
              className="bg-colorBlack text-center font-medium p-2 rounded-full  hover:bg-colorPrimary flex items-center gap-1 text-[10px]  border whitespace-nowrap border-white text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              to="/"
              className="bg-colorBlack text-center font-medium p-2 rounded-full  hover:bg-colorPrimary flex items-center gap-1 text-[10px]  border whitespace-nowrap border-white text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              to="/"
              className="bg-colorBlack text-center font-medium p-2 rounded-full  hover:bg-colorPrimary flex items-center gap-1 text-[10px]  border whitespace-nowrap border-white text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
