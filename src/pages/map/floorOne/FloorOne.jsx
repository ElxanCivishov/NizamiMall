import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { convertToText } from "../mapHooks";
import { svgPaths, svgTexts } from "./svgData";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { Loader } from "../../../components";
import mapService from "../../../features/map/mapService";
import { Meta } from "../../../components/layout";

const FloorOne = () => {
  let [searchParams] = useSearchParams();
  const [selected, setSelected] = useState(null);

  const [maps, setMaps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await mapService.getMaps(searchParams);
        setMaps(response);

        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setMessage(error);
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleClick = (item) => {
    setSelected(item);
  };

  if (isLoading) return <Loader />;

  if (isError) return <Navigate to="/error" state={{ error: message }} />;

  const activeMap = maps.find((item) => item?.uid === selected?.uid);

  return (
    <>
      <Meta title="Birinci mərtəbə" />
      <div className="bg-white rounded-lg w-full select-none">
        <div className="flex gap-1 items-center  p-2 rounded-lg text-black text-xs  md:text-base shadow-lg max-w-max">
          <AiFillCheckCircle className="text-emerald-500 animate-bounce" />
          {activeMap?.company_name ? (
            <Link
              to={`/magaza-ve-restoranlar/${activeMap?.company_id}`}
              className=" hover:underline hover:text-colorPrimary cursor-pointer min-w-[200px]"
            >
              {activeMap?.company_name}
            </Link>
          ) : (
            <span className=" hover:underline hover:text-colorPrimary cursor-pointer min-w-[200px]">
              {selected ? "Boş zona " : "Seçin..."}
            </span>
          )}
        </div>

        <div className="relative w-full max-w-4xl mx-auto group h-[500px]  text-colorPrimary  mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 951.1 757.69"
            className="w-full h-full p-4"
          >
            <defs>
              <style>{`.cls-1{letter-spacing:-.01em;font-weight:600 ;cursor:pointer;}
            .cls-2{letter-spacing:0em;font-weight:600 ;cursor:pointer;}
            .cls-3,.cls-4{fill:#000;font-weight:600 ;cursor:pointer;}.cls-5{letter-spacing:0em;}.cls-6{font-size:19.44px;}.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16{fill:#4d4d4d;font-family:Raleway-Regular, Raleway;isolation:isolate;font-weight:600 ;cursor:pointer;}.cls-7{font-size:20.27px;}.cls-8{font-size:18.29px;}.cls-9{font-size:18.7px;}.cls-17{letter-spacing:-.02em;}.cls-10{font-size:20.75px;}.cls-18{letter-spacing:-.02em;}.cls-19{letter-spacing:-.11em;}.cls-11{font-size:19.56px;}.cls-20{letter-spacing:-.01em;}.cls-21{letter-spacing:0em;}.cls-12{font-size:26.86px;}.cls-22{letter-spacing:-.03em;}.cls-23{letter-spacing:-.01em;}.cls-24{fill:#22b37f;}.cls-25{letter-spacing:-.01em;}.cls-13{font-size:20.9px;}.cls-26{letter-spacing:-.02em;}.cls-27{letter-spacing:0em;}.cls-28{letter-spacing:0em;}.cls-29{letter-spacing:0em;}.cls-30{fill:none;}.cls-30,.cls-4{stroke:#4d4d4d;stroke-miterlimit:10;}.cls-31{letter-spacing:-.03em;}.cls-14{font-size:22px;font-weight:600 ;cursor:pointer;}.cls-32{letter-spacing:0em;}.cls-15{font-size:16px;font-weight:600 ;cursor:pointer;}.cls-33{letter-spacing:0em;}.cls-34{letter-spacing:0em;}.cls-35{letter-spacing:-.02em;}.cls-36{letter-spacing:0em;}.cls-37{letter-spacing:-.02em;}.cls-16{font-size:21.02px;}.cls-38{letter-spacing:-.11em;}.cls-39{letter-spacing:0em;}.cls-40{letter-spacing:0em;}.cls-41{letter-spacing:-.01em;}.cls-42{letter-spacing:-.03em;}.cls-43{letter-spacing:-.03em;}.cls-44{fill:#57be92;}.cls-45{letter-spacing:-.03em;}.cls-46{letter-spacing:-.03em;}
          `}</style>
            </defs>

            {svgPaths.map((item) => (
              <path
                key={item.uid}
                {...item}
                style={{
                  fill: selected?.uid === item?.uid ? "currentcolor" : "#fff",
                }}
                onClick={(e) => handleClick(item, e)}
              />
            ))}
            {svgTexts.map((item) => (
              <text
                key={item.uid}
                transform
                {...item}
                style={{
                  fill:
                    selected?.uid === item?.uid && item?.uid !== 16
                      ? "#FFF"
                      : "#000",
                }}
                onClick={(e) => handleClick(item, e)}
              >
                {maps?.length > 0 &&
                  convertToText({ dynamicNames: maps, item })}
              </text>
            ))}

            {/* additional */}
            <path
              className="cls-4"
              d="M472.98,364.3c-2.8,29.9-5.5,59.7-8.3,89.7"
            />
            <path
              className="cls-30"
              d="M625.88,756.4l79.7-245.7-331.3-78.9v-46.9l272.7-56.5-4.9-84.6c102.8-25.7,205.5-51.6,308.3-77.3"
            />
            <path
              className="cls-30"
              d="M582.78,174.7c11.4-2.1,22.8-4.4,34.2-6.5-7.3-32.2-14.6-64.6-22-96.8-10.1,2-20,3.7-30.1,5.7"
            />
            <path
              className="cls-30"
              d="M626.68,757.2c-165.5-35.8-330.8-71.6-496.3-107.4-23.9-12-68.5-39.1-99.3-91.1-69.6-118,.8-248.1,4.9-255.5,33-58.6,80.7-90.5,108-105.6"
            />
            <line
              className="cls-30"
              x1="594.98"
              y1="71.4"
              x2="717.68"
              y2="45.5"
            />
            <g>
              <path
                className="cls-30"
                d="M116.28,561.1h-1.6c-1.3,0-2.4,1.1-2.4,2.4v9.1l7.5-7.5-.3-1.6c-.4-1.4-1.7-2.4-3.2-2.4Z"
              />
              <circle className="cls-30" cx="115.48" cy="557.9" r="3.3" />
              <path
                className="cls-30"
                d="M132.68,571.9h2.6c2.9,0,5.4-2.1,5.7-5,.3-3.4-2.3-6.5-5.7-6.5h-6.5c-.7,0-1.3,.3-1.8,.8l-18.5,18.5h-2.6c-2.9,0-5.4,2.1-5.7,5-.3,3.4,2.3,6.5,5.7,6.5h6.5c.7,0,1.3-.3,1.8-.8l18.5-18.5Z"
              />
              <path
                className="cls-30"
                d="M135.78,579.2h-5c-.3,0-.5,.2-.7,.3-.8,1,0,2.1,.8,2.1h2l-4.6,4.6c-.2,.2-.3,.5-.3,.7,.2,.8,.7,1.1,1.3,1.1,.3,0,.7-.2,.8-.3l4.4-4.4v2.1c0,.3,.2,.5,.3,.7,1,.8,2.1,0,2.1-.8v-4.7c.2-.9-.3-1.4-1.1-1.4h0Z"
              />
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
                    d="M660.08,95.1l2-4.6c.2-.5,0-1-.5-1.1-.5-.2-1,0-1.1,.5l-1.8,3.9-3.1-2.9c-.3-.3-.8-.3-1.1,0s-.3,.8,0,1.1l3.6,3.4-2.4,5.2c-.2,.5,0,1,.5,1.1,.5,.2,.8,0,1.1-.5l2.1-4.7,3.7,3.6c.5,.3,.8,.3,1.1,0s.3-.8,0-1.1l-4.1-3.9Z"
                  />
                  <path
                    className="cls-3"
                    d="M673.28,87.2l-5.2,1c-.5,0-.8,.5-.7,1,.2,.5,.5,.8,1,.7l1.8-.3,1.6,8.6c.2,.5,.5,.8,1,.7,.5-.2,.8-.5,.7-1l-1.6-8.6,1.8-.3c.5-.2,.8-.5,.7-1-.2-.7-.6-1-1.1-.8h0Z"
                  />
                  <path
                    className="cls-3"
                    d="M685.78,91.1c.2,0,.2-.2,0,0,.2-.5,.2-.8-.2-1.1l-3.9-2.6c-.3-.3-.8-.2-1.1,.2-.3,.3-.2,.8,.2,1.1l2.3,1.5-6.2,1.1c-.5,.2-.8,.5-.7,1,0,.5,.5,.8,1,.7l6.2-1.1-1.5,2.3c-.3,.3-.2,.8,.2,1.1,.5,.2,.8,.2,1.1-.2l2.6-4Z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default FloorOne;
