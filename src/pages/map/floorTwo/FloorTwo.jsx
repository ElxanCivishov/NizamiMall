import { useEffect, useState } from "react";

import { svgPaths, svgPolygons, svgTexts } from "./svgData";
import { convertToText } from "../mapHooks";

import { Link, Navigate, useSearchParams } from "react-router-dom";
import { Loader } from "../../../components";
import mapService from "../../../features/map/mapService";
import { Meta } from "../../../components/layout";

const FloorTwo = () => {
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
    console.log(item);
  };

  if (isLoading) return <Loader />;

  if (isError) return <Navigate to="/error" state={{ error: message }} />;

  const activeMap = maps.find((item) => item?.uid === selected?.uid);
  return (
    <>
      <Meta title="İkinci mərtəbə" />
      <div className="bg-white rounded-lg w-full select-none h-auto">
        <div className=" p-2 rounded-lg text-black text-xs  md:text-base shadow-lg max-w-max ">
          {activeMap?.company_name ? (
            <Link
              to={`/magaza-ve-restoranlar/${activeMap?.company_id}`}
              className="flex gap-2 items-center text-black hover:underline hover:text-colorPrimary   cursor-pointer min-w-[100px] px-2"
            >
              <img
                src={activeMap.company_logo}
                className="w-10 h-10 md:w-14 md:h-14 object-cover rounded-full"
                alt="logo"
              />
              {activeMap?.company_name}
            </Link>
          ) : (
            <span className="text-black hover:text-colorPrimary px-4">
              {selected ? "Boş zona " : "Seçin..."}
            </span>
          )}
        </div>

        <div className="relative w-full max-full mx-auto group text-colorPrimary  mb-5 h-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1072.13 505.31"
            className="w-full h-full p-4"
          >
            <defs>
              <style>
                {`
                 .cls-10{font-weight:700 ;cursor:pointer;font-size:10px;letter-spacing:-.01em;}
              .cls-39,.cls-40{fill:#fff;}
              .cls-70{fill:#22b37f;}
              .cls-80{fill:#918291;}
              .cls-87{fill:none;}
              .cls-87,
              .cls-40{stroke:#4d4d4d;stroke-miterlimit:10;}
              .cls-104{fill:#57be92;}`}
              </style>
            </defs>

            {svgPaths.map((item) => (
              <path
                key={item.uid}
                {...item}
                style={{
                  fill: selected?.uid === item?.uid ? "currentcolor" : "#fff",
                }}
                onClick={() => handleClick(item)}
              />
            ))}
            {svgPolygons.map((item) => (
              <polygon
                key={item.uid}
                {...item}
                className="cls-40"
                style={{
                  fill: selected?.uid === item?.uid ? "currentcolor" : "#fff",
                }}
                onClick={() => handleClick(item)}
              />
            ))}

            {svgTexts.map((item) => (
              <text
                key={item.uid}
                {...item}
                className="fill-[#4d4d4d] font-extrabold  cursor-pointer text-[9px]"
                style={{
                  fill: selected?.uid === item?.uid ? "#fff" : "#000",
                }}
                onClick={() => handleClick(item)}
              >
                {maps?.length > 0 &&
                  convertToText({ dynamicNames: maps, item, maxlength: 11 })}
              </text>
            ))}

            {/* additionals*/}
            <path
              style={{ fill: "transparent" }}
              className="cls-40"
              d="M4.98,264.73C-.02,285.93,.08,303.73,.98,315.73c.6,7.9,1.8,21.9,7.9,39,7.1,19.7,17.3,34,25.1,43,7.8,9.1,18,18.9,31,28,3.7,2.6,7.4,4.9,11,7"
            />
            <path
              style={{ fill: "transparent" }}
              className="cls-40"
              d="M4.98,265.73c.3-18.3,.7-36.7,1-55h15"
            />
            <line
              className="cls-87"
              x1="26.98"
              y1="209.73"
              x2="37.98"
              y2="209.73"
            />
            <path
              className="cls-87"
              d="M400.98,413.73c45.8,6.9,91.6,13.8,137.4,20.7l14.4-77.2h22.6l4.1-168.8,58.7-14.4,45.3-5.1,1-51.5,62.3-.5,3.6,53,84.4-3.1-1-25.7h15.4v-23.7l72-1,4.1,122.5c46.3-1.4,92.6-2.7,138.9-4.1"
            />
            <polyline
              className="cls-40"
              points="436.48 362.43 432.38 362.43 433.38 342.83 506.48 351.13 496.18 411.83 429.28 401.53 430.28 383.03 435.48 383.03"
            />
            <line
              className="cls-87"
              x1="469.88"
              y1="373.23"
              x2="468.88"
              y2="385.23"
            />
            <path
              className="cls-40"
              d="M501.78,381.13c-10.9-.7-21.8-1.4-32.8-2.1"
            />
            <g>
              <path
                className="cls-104"
                d="M79.98,401.73l-5.4,10.1c-.1,.2-.4,.3-.7,.2l-4.7-2.5c-.2-.1-.3-.4-.2-.7l5.4-10.1c.1-.2,.4-.3,.7-.2l4.7,2.5c.3,.1,.3,.4,.2,.7Z"
              />
              <path
                className="cls-70"
                d="M74.38,398.63l-.4,.8c.1-.2,.4-.3,.7-.2l4.7,2.5c.2,.1,.3,.4,.2,.7l.4-.8c.1-.2,0-.6-.2-.7l-4.7-2.5c-.2-.1-.5,0-.7,.2h0Z"
              />
              <g>
                <path
                  className="cls-39"
                  d="M79.38,401.63l-5.2,9.7c0,.1-.2,.1-.3,.1l-4.3-2.3c-.1,0-.1-.2-.1-.3l5.2-9.7c0-.1,.2-.1,.3-.1l4.3,2.3c.1,.1,.2,.2,.1,.3Zm-5.5,9.3l5-9.3-3.9-2.1-5,9.3,3.9,2.1Z"
                />
                <g>
                  <path
                    className="cls-39"
                    d="M73.38,405.03l1.9,1h.2c.1-.1,0-.2-.1-.3l-1.9-1c-.1,0-.2,0-.3,.1h0l.2,.2Z"
                  />
                  <path
                    className="cls-39"
                    d="M72.08,407.73c0-.1,0-.2-.1-.3s-.2,0-.3,.1l-.4,.8c0,.1,0,.2,.1,.2l1.9,1c.1,0,.2,0,.3-.1l.4-.8c0-.1,0-.2-.1-.3s-.2,0-.3,.1l-.3,.6-.6-.3,.3-.6c0-.1,0-.2-.1-.3s-.2,0-.3,.1l-.3,.6-.6-.3,.4-.5Z"
                  />
                  <path
                    className="cls-39"
                    d="M73.68,406.43l-.5-1c0-.1-.2-.1-.3-.1s-.1,.2-.1,.3l.4,.9-1,.1c-.1,0-.2,.1-.2,.2s.1,.2,.2,.2l1.1-.1,.6,1.2c0,.1,.2,.1,.3,.1q.1-.1,.1-.3l-.5-1,1.2-.1c.1,0,.2-.1,.2-.2s-.1-.2-.2-.2h-1.3Z"
                  />
                  <path
                    className="cls-39"
                    d="M74.18,403.03l-.6,1.1c-.1,.1,0,.2,.1,.3,.1,0,.2,0,.2-.1l.2-.4,1.8,1c.1,.1,.2,0,.2-.1s0-.2-.1-.3l-1.8-1,.3-.3c.1-.1,0-.2-.1-.3,0,0-.1,0-.2,.1h0Z"
                  />
                  <path
                    className="cls-39"
                    d="M76.68,401.43h0c0-.1-.1-.2-.2-.1l-1,.3c-.1,0-.2,.1-.1,.2,0,.1,.1,.2,.2,.1l.6-.2-.7,1.3c0,.1,0,.2,.1,.3s.2,0,.3-.1l.7-1.3,.2,.6c0,.1,.1,.2,.2,.1,.1,0,.1-.1,.1-.2l-.4-1Z"
                  />
                </g>
              </g>
            </g>
            <g>
              <path
                className="cls-104"
                d="M31.58,226.13l-18.1,.2c-.4,0-.8-.4-.8-.8l-.1-8.4c0-.4,.4-.8,.8-.8l18.1-.1c.4,0,.8,.4,.8,.8l.1,8.4c0,.4-.4,.7-.8,.7Z"
              />
              <path
                className="cls-70"
                d="M31.48,216.13h-1.5c.4,0,.8,.4,.8,.8l.1,8.4c0,.4-.4,.8-.8,.8h1.5c.4,0,.8-.4,.8-.8l-.1-8.4c0-.4-.4-.8-.8-.8h0Z"
              />
              <g>
                <path
                  className="cls-39"
                  d="M31.18,225.23l-17.3,.1c-.2,0-.3-.1-.3-.3l-.1-7.6c0-.2,.1-.3,.3-.3l17.3-.1c.2,0,.3,.1,.3,.3l.1,7.6c0,.2-.2,.3-.3,.3Zm-17-.4l16.7-.1v-7l-16.7,.1v7Z"
                />
                <g>
                  <path
                    className="cls-39"
                    d="M21.98,219.53v3.5c0,.1,.1,.3,.2,.3,.2,0,.4-.1,.4-.3v-3.5c0-.2-.1-.3-.3-.3h0c-.2,0-.3,.1-.3,.3Z"
                  />
                  <path
                    className="cls-39"
                    d="M17.28,219.83c.2,0,.3-.1,.3-.3s-.1-.3-.3-.3h-1.4c-.2,0-.3,.1-.3,.3v3.4c0,.2,.1,.3,.3,.3h1.4c.2,0,.3-.1,.3-.3s-.1-.3-.3-.3h-1.1v-1.2h1c.2,0,.3-.1,.3-.3s-.1-.3-.3-.3h-1v-1.1l1.1,.1Z"
                  />
                  <path
                    className="cls-39"
                    d="M20.18,221.13l1-1.4c.1-.1,.1-.3-.1-.4-.1-.1-.3-.1-.4,.1l-.9,1.3-.9-1.3c-.1-.1-.3-.2-.4-.1s-.2,.3-.1,.4l1,1.4-1.2,1.7c-.1,.1-.1,.3,.1,.4,.1,.1,.3,.1,.4-.1l1.1-1.5,1.1,1.5c.1,.1,.3,.2,.4,.1s.2-.3,.1-.4l-1.2-1.7Z"
                  />
                  <path
                    className="cls-39"
                    d="M25.28,219.13h-1.9c-.2,0-.3,.1-.3,.3s.1,.3,.3,.3h.7v3.2c0,.2,.1,.3,.3,.3s.3-.1,.3-.3v-3.2h.7c.2,0,.3-.1,.3-.3-.1-.1-.2-.3-.4-.3h0Z"
                  />
                  <path
                    className="cls-39"
                    d="M29.48,221.33h0c.1-.1,.1-.3,0-.4l-1.2-1.2c-.1-.1-.3-.1-.4,0s-.1,.3,0,.4l.7,.7h-2.2c-.2,0-.3,.1-.3,.3s.1,.3,.3,.3h2.3l-.7,.7c-.1,.1-.1,.3,0,.4s.3,.1,.4,0l1.1-1.2Z"
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <path
                  className="cls-82"
                  d="M7.68,306.43v2.2c0,.6,.3,1.1,1,1.1h.7l11-.1c.6,0,1.1-.5,1.1-1.1v-.2l-.3-.8v-1.2l-13.5,.1Z"
                />
                <path
                  className="cls-108"
                  d="M21.28,306.33l.3,.4v1.6c-.3,.2-.7,.4-1.1,.4l-11.7,.1h0c-.2,0-.3,.2-.2,.3,.2,.4,.6,.7,1.1,.7h-.9c-.6,0-1.1-.5-1.1-1.1v-2.2l13.6-.2Z"
                />
                <path
                  className="cls-80"
                  d="M20.38,307.83l-11,.1h-.7c-.6,0-1.1-.5-1.1-1.2v-7.8c0-.6,.5-1.2,1.2-1.2h.6l11-.1c.6,0,1.1,.5,1.1,1.1l.1,7.9c-.1,.7-.6,1.2-1.2,1.2h0Z"
                />
                <path
                  className="cls-82"
                  d="M9.48,307.93h-.9c-.6,0-1.1-.5-1.1-1.1l-.1-7.9c0-.6,.5-1.1,1.1-1.1h.9c-.6,0-1.1,.5-1.1,1.1l.1,7.9c0,.6,.5,1.1,1.1,1.1Z"
                />
              </g>
              <g>
                <path
                  className="cls-65"
                  d="M13.08,301.13h0c-.1,0-.2,.1-.2,.2v2.4l-1.7-2.5c-.1-.1-.2-.1-.3-.1s-.1,.1-.1,.2v3c0,.1,.1,.2,.2,.2s.2-.1,.2-.2v-2.3l1.7,2.4c.1,.1,.2,.1,.3,.1s.2-.1,.2-.3v-2.9c-.1-.1-.2-.2-.3-.2h0Z"
                />
                <path
                  className="cls-65"
                  d="M10.18,301.53c.1,0,.2-.1,.2-.2s-.1-.2-.2-.2h-1.2c-.1,0-.2,.1-.2,.2v3c0,.1,.1,.2,.2,.2h1.2c.1,0,.2-.1,.2-.2s-.1-.2-.2-.2h-1v-1.1h.9c.1,0,.2-.1,.2-.2s-.1-.2-.2-.2h-.9v-1.1h1Z"
                />
                <path
                  className="cls-65"
                  d="M17.68,301.43c.1,0,.2-.1,.2-.3,0-.1-.1-.2-.2-.2h-1.3c-.1,0-.2,.1-.2,.2v3c0,.1,.1,.2,.2,.2h1.2c.1,0,.2-.1,.2-.2s-.1-.2-.2-.2h-1v-1.1h.9c.1,0,.2-.1,.2-.2s-.1-.2-.2-.2h-.9v-1.1l1.1,.1h0Z"
                />
                <path
                  className="cls-65"
                  d="M15.58,301.13h-1.7c-.1,0-.2,.1-.2,.2s.1,.2,.2,.2h.6v2.8c0,.1,.1,.2,.2,.2s.2-.1,.2-.2v-2.8h.6c.1,0,.2-.1,.2-.2,.1-.2,0-.3-.1-.2h0Z"
                />
                <path
                  className="cls-65"
                  d="M19.48,303.03c.5,0,1-.5,1-1s-.5-1-1-1h-.8c-.1,0-.2,.1-.2,.2v3c0,.1,.1,.2,.2,.2s.3-.1,.2-.2v-1.2h0l1.2,1.4s.1,.1,.2,.1c0,0,.1,0,.1-.1,.1-.1,.1-.2,0-.3l-.9-1.1Zm-.1-1.6c.3,0,.6,.3,.6,.6s-.3,.6-.6,.6h-.6v-1.2h.6Z"
                />
              </g>
            </g>
            <g>
              <path
                className="cls-38"
                d="M453.78,372.53c-.1-.1-.3-.2-.4-.2h-.1c-.2,0-.4,.1-.5,.4l-1.1,3.4-1.1-3.4c-.1-.2-.3-.4-.5-.4h0c-.2,0-.4,.1-.5,.4l-1.1,3.4-1.1-3.4c-.1-.2-.3-.4-.5-.4h-.1c-.2,0-.3,.1-.4,.2-.1,.1-.1,.3-.1,.5l1.6,4.8c.1,.2,.3,.4,.5,.4h0c.2,0,.4-.1,.5-.4l1.1-3.4,1.1,3.4c.1,.2,.3,.4,.5,.4h0c.2,0,.4-.1,.5-.4l1.6-4.8c.2-.2,.2-.4,.1-.5h0Zm4.8,4.1c-.2-.2-.5-.2-.7,0-.3,.3-.8,.5-1.3,.5-1.1,0-1.9-.8-1.9-1.9,0-1,.9-1.8,1.9-1.8,.5,0,.9,.2,1.3,.4,.2,.2,.5,.2,.7,0h0c.2-.2,.2-.5,0-.7h0c-.5-.5-1.2-.7-1.9-.7-1.6,0-3,1.3-3,2.9s1.3,2.9,3,2.9c.7,0,1.4-.3,1.9-.7,.1-.1,.2-.2,.2-.4,0-.2-.1-.4-.2-.5h0Z"
              />
              <path
                className="cls-38"
                d="M457.18,367.23h-9.4c-1.8,0-3.3,1.5-3.3,3.3v9.4c0,1.8,1.5,3.3,3.3,3.3h9.4c1.8,0,3.3-1.5,3.3-3.3v-9.4c0-1.8-1.5-3.3-3.3-3.3Zm0,15.4h-9.4c-1.5,0-2.7-1.2-2.7-2.7v-9.4c0-1.5,1.2-2.7,2.7-2.7h9.4c1.5,0,2.7,1.2,2.7,2.7v9.4c0,1.5-1.2,2.7-2.7,2.7Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default FloorTwo;
