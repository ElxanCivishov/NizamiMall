import { AiFillCloseCircle } from "react-icons/ai";

// import floorOneSVG from "/images/map/floorOne/nizami-1-mertebe.svg";
const FloorTwo = () => {
  return (
    <div className="gap-2 bg-white rounded-lg w-full overflow-hidden select-none">
      <div className={`w-full relative mb-3`}>
        <div className="top-2 right-3 z-10 absolute flex gap-2 items-center rounded-lg bg-white">
          <span className=" rounded-lg text-white px-2 py-1 w-14 text-xs  md:text-base">
            Bağla
          </span>
          <AiFillCloseCircle className="text-red-500 text-2xl" />
        </div>
        <div className="relative flex   overflow-hidden  group">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1080 1080"
            style={{
              enableBackground: "new 0 0 1080 1080",

              background: "red",
            }}
          >
            <style type="text/css">
              {`
              .st0{fill:#FFFFFF;stroke:#4D4D4D;stroke-miterlimit:10;}
              .st1{fill:#4D4D4D;}
              .st2{font-family:'Raleway-Regular';}
              .st3{font-size:7.4233px;}
            `}
            </style>
            <path
              className="st0"
              d="M503.7,551.8c7-1.3,14-2.7,21-4c-4.5-19.8-9-39.7-13.5-59.5c-6.2,1.2-12.3,2.3-18.5,3.5L503.7,551.8z"
            />
            <g>
              <text
                transform="matrix(-0.2221 -1.0733 0.9793 -0.2026 515.1052 548.8788)"
                className="st1 st2 st3"
              >
                Amara parfume
              </text>
            </g>
          </svg>

          {/* <img
              src="https://images.unsplash.com/photo-1508357941501-0924cf312bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="product"
              className="max-w-full w-full h-full top-0 relative   transition-all duration-500 "
            /> */}
        </div>
      </div>
    </div>
  );
};

export default FloorTwo;
