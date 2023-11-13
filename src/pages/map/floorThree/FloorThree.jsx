import { useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const FloorThree = () => {
  const [isActive, setIsActive] = useState(false);
  const dynamicText = "Buddu org assc";
  const handleClick = (e) => {
    const target = e.target;

    const allActiveElements = document.querySelectorAll(".active");

    // Remove the "active" class from all of them
    allActiveElements.forEach((item) => {
      item.classList.remove("active");
    });

    const isAlreadyActive = target.classList.contains("active");

    if (isAlreadyActive) {
      target.classList.remove("active");
    } else {
      target.classList.add("active");
    }

    setIsActive(!isAlreadyActive);
  };

  const convertToText = (text, x1 = 10, x2 = 0, y1 = 15, y2 = -15) => {
    const words = text.split(" ").map((word, index) => {
      if (text.split(" ").length === 1) {
        return (
          <tspan x={word.length < 5 ? x1 : x2} dy={index > 0 ? y1 : y2}>
            {word}
          </tspan>
        );
      } else if (word.length > 7) {
        const firstPart = word.slice(0, 7);
        const secondPart = word.slice(7);

        return (
          <>
            <tspan x={x1} dy={index > 0 ? y1 : y2}>
              {firstPart + "-"}
            </tspan>
            <tspan x={x1} dy={y1}>
              {secondPart}
            </tspan>
          </>
        );
      } else {
        return (
          <tspan
            x={index > 0 || word.length < 5 ? x1 : x2}
            dy={index > 0 ? y1 : y2}
          >
            {word}
          </tspan>
        );
      }
    });

    return words;
  };

  return (
    <div className="bg-white rounded-lg w-full select-none">
      <div className="flex gap-2 items-center justify-between  px-2 py-1 mb-2">
        <div className="flex gap-1 items-center justify-between  p-2 rounded-lg text-black text-xs  md:text-base shadow-lg">
          <AiFillCheckCircle className="text-emerald-500 " />
          <span className=" hover:underline hover:text-colorPrimary cursor-pointer">
            Bravo Supermarket
          </span>
        </div>
        <div className="flex gap-1 items-center justify-between  px-2 py-1 rounded-lg text-black text-xs  md:text-base shadow-lg cursor-pointer group">
          <span className="text-black text-xs  md:text-base group-hover:text-colorPrimary ">
            Bağla
          </span>
          <AiFillCloseCircle className="text-red-500 group-hover:opacity-80" />
        </div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto group h-[400px]  bg-slate-100 mb-5">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 951.1 757.69"
          className="w-full h-full"
        >
          <defs>
            <style>{`.cls-1{letter-spacing:-.01em;}
            .cls-2{letter-spacing:0em;}
            .cls-3,.cls-4{fill:#fff;}.cls-5{letter-spacing:0em;}.cls-6{font-size:19.44px;}.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16{fill:#4d4d4d;font-family:Raleway-Regular, Raleway;isolation:isolate;}.cls-7{font-size:20.27px;}.cls-8{font-size:18.29px;}.cls-9{font-size:18.7px;}.cls-17{letter-spacing:-.02em;}.cls-10{font-size:20.75px;}.cls-18{letter-spacing:-.02em;}.cls-19{letter-spacing:-.11em;}.cls-11{font-size:19.56px;}.cls-20{letter-spacing:-.01em;}.cls-21{letter-spacing:0em;}.cls-12{font-size:26.86px;}.cls-22{letter-spacing:-.03em;}.cls-23{letter-spacing:-.01em;}.cls-24{fill:#22b37f;}.cls-25{letter-spacing:-.01em;}.cls-13{font-size:20.9px;}.cls-26{letter-spacing:-.02em;}.cls-27{letter-spacing:0em;}.cls-28{letter-spacing:0em;}.cls-29{letter-spacing:0em;}.cls-30{fill:none;}.cls-30,.cls-4{stroke:#4d4d4d;stroke-miterlimit:10;}.cls-31{letter-spacing:-.03em;}.cls-14{font-size:22px;}.cls-32{letter-spacing:0em;}.cls-15{font-size:12.08px;}.cls-33{letter-spacing:0em;}.cls-34{letter-spacing:0em;}.cls-35{letter-spacing:-.02em;}.cls-36{letter-spacing:0em;}.cls-37{letter-spacing:-.02em;}.cls-16{font-size:21.02px;}.cls-38{letter-spacing:-.11em;}.cls-39{letter-spacing:0em;}.cls-40{letter-spacing:0em;}.cls-41{letter-spacing:-.01em;}.cls-42{letter-spacing:-.03em;}.cls-43{letter-spacing:-.03em;}.cls-44{fill:#57be92;}.cls-45{letter-spacing:-.03em;}.cls-46{letter-spacing:-.03em;}
            .active{fill:#ff0000;stroke:#fff;}`}</style>
          </defs>
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M903.28,.6c-29.3,7.2-58.6,14.3-87.7,21.5,15.1,55.8,30.3,111.5,45.4,167.3,29.8-7,59.7-14.2,89.5-21.2-15.7-55.8-31.4-111.8-47.2-167.6Z"
          />
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M758.48,213.7c-14.6-55.8-29.3-111.8-43.9-167.6l100.9-24.4,.2,.3c15.1,55.8,30.3,111.5,45.4,167.3-34.2,8.2-68.4,16.3-102.6,24.4Z"
          />
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M436.38,112.9c8.1,29.8,16.3,59.7,24.4,89.5-48.8,13-97.6,26-146.4,39.1-11.9-29.3-23.9-58.6-35.8-87.9,52.5-13.6,105.2-27.2,157.8-40.7Z"
          />
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M145.08,197.5c12.5,27.7,24.9,55.3,37.4,83,43.9-13,87.9-26,131.8-39.1-11.9-29.3-23.9-58.6-35.8-87.9-44.4,14.7-89,29.3-133.4,44Z"
          />
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M398.88,438.3c-7,22.3-14.2,44.4-21.2,66.7-47.2-8.1-94.4-16.3-141.6-24.4-4.6-.8-27.2-5.5-40.2-26.2-9.3-14.8-8.3-30.1-8.3-36.8,0,0,.7-15.3,8.3-30.1,15.8-30.4,63.5-44.6,110.6-57.9,55.3-15.8,98.3-27.7,123-34.3,2.8,25.5,5.4,50.9,8.1,76.5-21.2,4.4-42.3,8.9-63.6,13.3-.7,11.7-.8,24.1-.3,36.8,.2,3.4,.2,6.7,.3,10.1,8.7,2.1,16.8,4.2,24.9,6.3Z"
          />
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M429.88,295.1c2.8,25.5,5.4,50.9,8.1,76.5,29.3-6,58.6-11.9,87.9-17.9-3.3-26.5-6.5-53.2-9.8-79.7-28.8,6.9-57.4,14.1-86.2,21.1Z"
          />
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M472.98,364.3c-2.8,29.9-5.5,59.7-8.3,89.7"
          />
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M476.98,456.2c-26-6-52.1-11.9-78.1-17.9-7,22.3-14.2,44.4-21.2,66.7,26,6,52.1,11.9,78.1,17.9,7.1-22.3,14.2-44.4,21.2-66.7Z"
          />
          <path
            className="cls-30"
            onClick={(e) => handleClick(e)}
            d="M626.68,757.2c-165.5-35.8-330.8-71.6-496.3-107.4-23.9-12-68.5-39.1-99.3-91.1-69.6-118,.8-248.1,4.9-255.5,33-58.6,80.7-90.5,108-105.6"
          />
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M546.38,740c10.6-30.6,21.2-61.2,31.6-91.8-39.1-8.6-78.1-17.4-117.2-26-12.2,30.3-24.4,60.5-36.6,90.8l122.2,27Z"
          />
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M286.68,682.4c13-30.4,26-60.7,39.1-91.1,45.1,10.3,90,20.7,135.1,30.9l-36.6,90.8c-45.9-10.3-91.8-20.4-137.6-30.6Z"
          />
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M630.48,493.8c-8.3,23.3-16.6,46.5-24.9,69.8,25.5,6,50.9,11.9,76.5,17.9,7.6-23.3,15.1-46.7,22.8-70-24.8-5.8-49.5-11.9-74.4-17.7Z"
          />
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M556.78,475.7c-6.5,22.3-13,44.4-19.5,66.7-27.2-6.5-54.2-13-81.4-19.5,7-22.3,14.2-44.4,21.2-66.7,26.5,6.5,53.1,13,79.7,19.5Z"
          />
          <text
            style={{
              fontWeight: "600",
            }}
            className="cls-13"
            transform="translate(492.71 726.78) rotate(-73.96)"
          >
            {convertToText("Donviand", 0)}
          </text>
          <text
            style={{
              fontWeight: "600",
            }}
            className="cls-14"
            transform="translate(429.05 511.62) rotate(-73.96)"
          >
            {convertToText("Lluvia", 10, 5, 20, -20)}
          </text>
          <text
            style={{
              fontWeight: "600",
            }}
            className="cls-9"
            transform="translate(478.61 361.23) rotate(-98.27)"
          >
            {convertToText("Chumak fasion", 10, 5, 20, -10)}
          </text>
          <text
            style={{
              fontWeight: "600",
            }}
            className="cls-12"
            transform="translate(796.15 177.62) rotate(-104.32)"
          >
            {convertToText("Exclusive travel", 10, 5, 20, -10)}
          </text>
          <text
            style={{
              fontWeight: "600",
            }}
            className="cls-12"
            transform="translate(909.73 138.47) rotate(-104.32)"
          >
            {convertToText("Life teiecom", 10, 5, 20, -20)}
          </text>
          <text
            style={{
              fontWeight: "600",
            }}
            className="cls-10"
            transform="translate(242.27 260.66) rotate(-107.8) scale(1.1 1)"
          >
            {convertToText("Express telecom", 10, 5, 20, -20)}
          </text>
          <text
            style={{
              fontWeight: "600",
            }}
            className="cls-16"
            transform="translate(372.1 226.29) rotate(-104.43) scale(1.1 1)"
          >
            {convertToText("Trend 37 outlet", 10, 5, 20, -20)}
          </text>
          <text
            style={{
              fontWeight: "600",
            }}
            className="cls-8"
            transform="translate(501.57 533.39) rotate(-73.96)"
          >
            {convertToText("Shtonak", 10, 5, 20, 0)}
          </text>
          <text
            style={{
              fontWeight: "600",
            }}
            className="cls-11"
            transform="translate(367.63 698.81) rotate(-73.96)"
          >
            {convertToText("By Amina Collection", 10, 5, 20, -20)}
          </text>
          <path
            className="cls-30"
            onClick={(e) => handleClick(e)}
            d="M625.88,756.4l79.7-245.7-331.3-78.9v-46.9l272.7-56.5-4.9-84.6c102.8-25.7,205.5-51.6,308.3-77.3"
          />
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M436.38,112.9c8.1,29.8,16.3,59.7,24.4,89.5,40.7-9.3,81.4-18.4,122-27.7-6-32.5-11.9-65.1-17.9-97.6-13.2-2.4-38.4-5-68.3,3.3-30,8.2-50.2,23.5-60.2,32.5Z"
          />
          <text
            style={{
              fontWeight: "600",
            }}
            className="cls-6"
            transform="translate(505.11 167.78) rotate(-103.34) scale(1.1 1)"
          >
            {convertToText("Brawo men style", 10, 5, 20, -20)}
          </text>

          <text
            style={{
              fontWeight: "600",
            }}
            className="cls-15"
            transform="translate(601.27 169.88) rotate(-101.69) scale(1.1 1)"
          >
            {convertToText("Amara-parfume", 10, 5, 20, 0)}
          </text>

          <path
            className="cls-30"
            onClick={(e) => handleClick(e)}
            d="M582.78,174.7c11.4-2.1,22.8-4.4,34.2-6.5-7.3-32.2-14.6-64.6-22-96.8-10.1,2-20,3.7-30.1,5.7"
          />
          <line
            className="cls-30"
            x1="594.98"
            y1="71.4"
            x2="717.68"
            y2="45.5"
          />
          <g
            className="bg-red-500"
            style={{
              fill: "#000",
            }}
          >
            <path
              className="cls-30"
              style={{ strokeWidth: "2" }}
              d="M116.28,561.1h-1.6c-1.3,0-2.4,1.1-2.4,2.4v9.1l7.5-7.5-.3-1.6c-.4-1.4-1.7-2.4-3.2-2.4Z"
            />
            <circle className="cls-30" cx="115.48" cy="557.9" r="3.3" />
            <path
              className="cls-30"
              style={{ strokeWidth: "3" }}
              d="M132.68,571.9h2.6c2.9,0,5.4-2.1,5.7-5,.3-3.4-2.3-6.5-5.7-6.5h-6.5c-.7,0-1.3,.3-1.8,.8l-18.5,18.5h-2.6c-2.9,0-5.4,2.1-5.7,5-.3,3.4,2.3,6.5,5.7,6.5h6.5c.7,0,1.3-.3,1.8-.8l18.5-18.5Z"
            />
            <path
              className="cls-30"
              style={{ strokeWidth: "2" }}
              d="M135.78,579.2h-5c-.3,0-.5,.2-.7,.3-.8,1,0,2.1,.8,2.1h2l-4.6,4.6c-.2,.2-.3,.5-.3,.7,.2,.8,.7,1.1,1.3,1.1,.3,0,.7-.2,.8-.3l4.4-4.4v2.1c0,.3,.2,.5,.3,.7,1,.8,2.1,0,2.1-.8v-4.7c.2-.9-.3-1.4-1.1-1.4h0Z"
            />
          </g>
          <path
            className="cls-4"
            onClick={(e) => handleClick(e)}
            d="M208.58,369.9c-3.3,3.1-20.5,19.9-21.2,47.2-.7,29.3,18.1,47.7,21.2,50.4-16.3,5.4-32.5,10.9-48.8,16.3-5-3.9-26.4-21.5-30.9-52.1-6.2-42.1,25.1-70.9,27.7-73.2,17.3,3.8,34.5,7.7,52,11.4Z"
          />
          <g>
            <text
              className="cls-7"
              transform="translate(158.81 459.14) rotate(-87.88)"
            >
              <tspan x="0" y="0">
                SHR lux
              </tspan>
            </text>
            <text
              className="cls-7"
              transform="translate(175.88 442.35) rotate(-87.88)"
            >
              <tspan x="0" y="0">
                sa
              </tspan>
              <tspan className="cls-33" x="20.92" y="0">
                a
              </tspan>
              <tspan className="cls-36" x="31.88" y="0">
                t
              </tspan>
            </text>
          </g>
          <g>
            <path
              className="cls-44"
              d="M694.28,103.1l-49.8,9.8c-1.3,.2-2.4-.5-2.6-1.8l-4.6-23.1c-.2-1.3,.5-2.4,1.8-2.6l49.8-9.8c1.3-.2,2.4,.5,2.6,1.8l4.6,23.1c.1,1.1-.7,2.3-1.8,2.6Z"
            />
            <path
              className="cls-24"
              onClick={(e) => handleClick(e)}
              d="M688.88,75.4l-4.1,.8c1.3-.2,2.4,.5,2.6,1.8l4.6,23.1c.2,1.3-.5,2.4-1.8,2.6l4.1-.8c1.3-.2,2-1.5,1.8-2.6l-4.6-23.1c-.3-1.1-1.5-1.9-2.6-1.8h0Z"
            />
            <g>
              <path
                className="cls-3"
                onClick={(e) => handleClick(e)}
                d="M692.58,100.8l-47.8,9.3c-.5,.2-.8-.2-1-.7l-4.1-21c-.2-.5,.2-.8,.7-1l47.8-9.3c.5-.2,.8,.2,1,.7l4.1,21c.1,.5-.2,1-.7,1Zm-47.2,7.7l46.2-8.9-3.7-19.4-46.2,8.9,3.7,19.4Z"
              />
              <g>
                <path
                  className="cls-3"
                  onClick={(e) => handleClick(e)}
                  d="M664.18,89.6l1.8,9.6c0,.3,.3,.7,.8,.7s1-.5,.8-1l-1.8-9.6c-.2-.5-.5-.8-1-.7h0c-.5,.2-.6,.7-.6,1Z"
                />
                <path
                  className="cls-3"
                  onClick={(e) => handleClick(e)}
                  d="M651.48,93c.5-.2,.8-.5,.7-1,0-.5-.5-.8-1-.7l-3.9,.8c-.5,.2-.7,.5-.7,1l1.8,9.4c.2,.5,.5,.8,1,.7l3.7-.8c.5-.2,.8-.5,.7-1,0-.5-.5-.8-1-.7l-3.1,.7-.7-3.1,2.8-.5c.5-.2,.8-.5,.7-1,0-.5-.5-.8-1-.7l-2.8,.5-.7-3.3,3.5-.3Z"
                />
                <path
                  className="cls-3"
                  onClick={(e) => handleClick(e)}
                  d="M660.08,95.1l2-4.6c.2-.5,0-1-.5-1.1-.5-.2-1,0-1.1,.5l-1.8,3.9-3.1-2.9c-.3-.3-.8-.3-1.1,0s-.3,.8,0,1.1l3.6,3.4-2.4,5.2c-.2,.5,0,1,.5,1.1,.5,.2,.8,0,1.1-.5l2.1-4.7,3.7,3.6c.5,.3,.8,.3,1.1,0s.3-.8,0-1.1l-4.1-3.9Z"
                />
                <path
                  className="cls-3"
                  onClick={(e) => handleClick(e)}
                  d="M673.28,87.2l-5.2,1c-.5,0-.8,.5-.7,1,.2,.5,.5,.8,1,.7l1.8-.3,1.6,8.6c.2,.5,.5,.8,1,.7,.5-.2,.8-.5,.7-1l-1.6-8.6,1.8-.3c.5-.2,.8-.5,.7-1-.2-.7-.6-1-1.1-.8h0Z"
                />
                <path
                  className="cls-3"
                  onClick={(e) => handleClick(e)}
                  d="M685.78,91.1c.2,0,.2-.2,0,0,.2-.5,.2-.8-.2-1.1l-3.9-2.6c-.3-.3-.8-.2-1.1,.2-.3,.3-.2,.8,.2,1.1l2.3,1.5-6.2,1.1c-.5,.2-.8,.5-.7,1,0,.5,.5,.8,1,.7l6.2-1.1-1.5,2.3c-.3,.3-.2,.8,.2,1.1,.5,.2,.8,.2,1.1-.2l2.6-4Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default FloorThree;
