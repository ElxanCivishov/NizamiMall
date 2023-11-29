import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { svgPaths, svgTexts, svgPolygons } from "./svgData";
import { convertToText } from "../mapHooks";

import { Link, Navigate, useSearchParams } from "react-router-dom";
import { Loader } from "../../../components";
import mapService from "../../../features/map/mapService";
import { Meta } from "../../../components/layout";

const FloorThree = () => {
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
      <Meta title="Üçüncü mərtəbə" />
      <div className="bg-white rounded-lg w-full select-none">
        <div className="flex gap-2 items-center max-w-max  p-2 rounded-lg text-black text-xs  md:text-base shadow-lg">
          <AiFillCheckCircle className="text-colorPrimary" />
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

        <div className=" w-full  mx-auto group  text-colorPrimary  mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1042.86 491.13"
            className="w-full h-full p-4"
          >
            <defs>
              <style>{`.cls-1{letter-spacing:-.02em;}.cls-2{letter-spacing:0em;}.cls-3{font-size:16.29px;font-weight:600 ;cursor:pointer;}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19,.cls-20,.cls-21,.cls-22,.cls-23,.cls-24,.cls-25,.cls-26,.cls-27,.cls-28,.cls-29,.cls-30,.cls-31,.cls-32,.cls-33,.cls-34,.cls-35,.cls-36,.cls-37{fill:#4d4d4d;}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19,.cls-20,.cls-21,.cls-22,.cls-23,.cls-24,.cls-25,.cls-26,.cls-27,.cls-28,.cls-29,.cls-30,.cls-31,.cls-32,.cls-33,.cls-34,.cls-35,.cls-36,.cls-37{font-family:Raleway-Regular, Raleway;isolation:isolate;}.cls-4{font-size:16.3px;font-weight:600 ;cursor:pointer;}.cls-38{letter-spacing:-.03em;}.cls-39{letter-spacing:-.03em;}.cls-5{font-size:26.77px;font-weight:600 ;cursor:pointer;}.cls-40{letter-spacing:0em;}.cls-41{letter-spacing:0em;}.cls-42{letter-spacing:-.01em;}.cls-43{letter-spacing:0em;}.cls-6{font-size:14.62px;font-weight:600 ;cursor:pointer;}.cls-44{letter-spacing:-.01em;}.cls-45{letter-spacing:0em;}.cls-7{font-size:16.3px;font-weight:600 ;cursor:pointer;}.cls-46{letter-spacing:0em;}.cls-8{font-size:11.94px;font-weight:600 ;cursor:pointer;}.cls-47{letter-spacing:0em;}.cls-9{font-size:15.84px;font-weight:600 ;cursor:pointer;}.cls-48{letter-spacing:0em;}.cls-49{letter-spacing:-.03em;}.cls-10{font-size:11.8px;font-weight:600 ;cursor:pointer;}.cls-50{letter-spacing:0em;}.cls-51{letter-spacing:0em;}.cls-52{letter-spacing:-.01em;}.cls-53{letter-spacing:0em;}.cls-54{letter-spacing:0em;}.cls-55{letter-spacing:0em;}.cls-11{font-size:16.24px;font-weight:600 ;cursor:pointer;}.cls-56{letter-spacing:-.03em;}.cls-57{letter-spacing:-.02em;}.cls-13{font-size:16.34px;font-weight:600 ;cursor:pointer;}.cls-58{letter-spacing:-.03em;}.cls-59{letter-spacing:-.03em;}.cls-60{letter-spacing:-.02em;}.cls-61{letter-spacing:0em;}.cls-62{letter-spacing:-.03em;}.cls-63{letter-spacing:-.02em;}.cls-64{letter-spacing:0em;}.cls-65{letter-spacing:-.03em;}.cls-66{letter-spacing:-.02em;}.cls-67{letter-spacing:0em;}.cls-68{letter-spacing:0em;}.cls-69{letter-spacing:0em;}.cls-70{letter-spacing:-.01em;}.cls-71{letter-spacing:0em;}.cls-14{font-size:16.1px;font-weight:600 ;cursor:pointer;}.cls-72{letter-spacing:0em;}.cls-15{font-size:14.94px;font-weight:600 ;cursor:pointer;}.cls-16{font-size:14.21px;font-weight:600 ;cursor:pointer;}.cls-17{font-size:13.56px;font-weight:600 ;cursor:pointer;}.cls-73{letter-spacing:0em;}.cls-18{font-size:16.34px;font-weight:600 ;cursor:pointer;}.cls-74{letter-spacing:-.06em;}.cls-19{font-size:16.34px;font-weight:600 ;cursor:pointer;}.cls-20{font-size:12.53px;font-weight:600 ;cursor:pointer;}.cls-75{letter-spacing:0em;}.cls-21{font-size:12.77px;font-weight:600 ;cursor:pointer;}.cls-76{letter-spacing:0em;}.cls-77{letter-spacing:0em;}.cls-78{letter-spacing:-.02em;}.cls-22{font-size:16.02px;font-weight:600 ;cursor:pointer;}.cls-23{font-size:16.05px;font-weight:600 ;cursor:pointer;}.cls-24{font-size:15.39px;font-weight:600 ;cursor:pointer;}.cls-79{letter-spacing:0em;}.cls-80{letter-spacing:-.03em;}.cls-25{font-size:14.76px;font-weight:600 ;cursor:pointer;}.cls-81{letter-spacing:-.01em;}.cls-82{letter-spacing:0em;}.cls-83{letter-spacing:0em;}.cls-84{fill:none;}.cls-84,.cls-85{stroke:#4d4d4d;stroke-miterlimit:10;}.cls-26{font-size:14.44px;font-weight:600 ;cursor:pointer;}.cls-86{letter-spacing:0em;}.cls-87{letter-spacing:-.11em;}.cls-27{font-size:13.33px;font-weight:600 ;cursor:pointer;}.cls-28{font-size:11.96px;font-weight:600 ;cursor:pointer;}.cls-88{letter-spacing:0em;}.cls-89{letter-spacing:0em;}.cls-29{font-size:13px;font-weight:600 ;cursor:pointer;}.cls-90{letter-spacing:0em;}.cls-91{letter-spacing:-.02em;}.cls-92{letter-spacing:-.03em;}.cls-93{letter-spacing:0em;}.cls-30{font-size:15.61px;font-weight:600 ;cursor:pointer;}.cls-94{letter-spacing:-.03em;}.cls-95{letter-spacing:-.03em;}.cls-96{letter-spacing:-.02em;}.cls-97{letter-spacing:-.01em;}.cls-98{letter-spacing:-.01em;}.cls-31{font-size:13.29px;font-weight:600 ;cursor:pointer;}.cls-99{letter-spacing:0em;}.cls-100{letter-spacing:0em;}.cls-101{letter-spacing:0em;}.cls-102{letter-spacing:0em;}.cls-103{letter-spacing:0em;}.cls-104{letter-spacing:-.01em;}.cls-105{letter-spacing:0em;}.cls-106{letter-spacing:-.03em;}.cls-107{letter-spacing:-.01em;}.cls-85{fill:#fff;}.cls-108{letter-spacing:0em;}.cls-109{letter-spacing:0em;}.cls-32{font-size:16.89px;font-weight:600 ;cursor:pointer;}.cls-33{font-size:12.62px;font-weight:600 ;cursor:pointer;}.cls-34{font-size:14.78px;font-weight:600 ;cursor:pointer;}.cls-35{font-size:13.19px;font-weight:600 ;cursor:pointer;}.cls-110{letter-spacing:0em;}.cls-36{font-size:15.73px;font-weight:600 ;cursor:pointer;}.cls-111{letter-spacing:0em;}.cls-112{letter-spacing:0em;}.cls-37{font-size:13.05px;font-weight:600 ;cursor:pointer;}.cls-113{letter-spacing:0em;}.cls-114{letter-spacing:-.08em;}.cls-115{letter-spacing:0em;}`}</style>
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

            {svgPolygons.map((item) => (
              <polygon
                key={item.uid}
                {...item}
                style={{
                  fill: selected?.uid === item?.uid ? "currentcolor " : "#fff ",
                }}
                onClick={(e) => handleClick(item, e)}
              />
            ))}

            {svgTexts.map((item) => (
              <text
                key={item.uid}
                {...item}
                style={{
                  fill: selected?.uid === item?.uid ? "#FFF" : "#000",
                }}
                onClick={(e) => handleClick(item, e)}
              >
                {maps?.length > 0 &&
                  convertToText({ dynamicNames: maps, item })}
              </text>
            ))}

            {/* additionals */}

            <polyline
              className="cls-85"
              points="425.33 352.03 421.33 352.03 422.33 333.03 493.33 341.03 483.33 400.03 418.33 390.03 419.33 372.03 424.33 372.03"
            />
            <line
              className="cls-84"
              x1="438.33"
              y1="353.03"
              x2="437.33"
              y2="376.03"
            />
            <path
              className="cls-85"
              d="M489.33,372.03c-16.9-2.5-33.7-5.1-50.6-7.6"
            />
            <path
              className="cls-12"
              d="M41.33,323.43l-4.1,2.3c-.6,.4-1.1,.9-1.3,1.7l-1.4,4.9-1.3-1.4c-.6-.6-1.3-1-2.1-1.1,.2-.8,0-1.6-.4-2.3-.9-1.6-3-2.2-4.6-1.3s-2.2,3-1.3,4.6c.4,.8,1.1,1.3,1.9,1.6-.2,.7-.2,1.5,.2,2.2l4.5,8.2-.7,2.3-1.4,.8c-2.4,1.3-3.3,4.4-2,6.9,1.3,2.4,4.4,3.3,6.9,2h0l4.1-2.3c.6-.4,1.1-.9,1.3-1.6l5.1-17.7,1.4-.8c2.4-1.3,3.3-4.4,2-6.9s-4.4-3.5-6.8-2.1h0Zm2.3,8.2c-.2,.1-.4,.3-.4,.5l-5.2,18.1c-.1,.2-.2,.4-.4,.5l-4.1,2.3c-1.6,.9-3.5,.3-4.4-1.3s-.3-3.5,1.3-4.4l1.7-.9c.2-.1,.4-.3,.4-.6l5.2-18.1c.1-.2,.2-.4,.4-.6l4.1-2.3c1.6-.9,3.5-.3,4.4,1.3s.3,3.5-1.3,4.4l-1.7,1.1Zm-16.5-3.9c.7-.4,1.7-.1,2.1,.6,.4,.7,.1,1.7-.6,2.1-.7,.4-1.7,.1-2.1-.6s-.2-1.7,.6-2.1Zm1.4,5.9c-.2-.4-.1-1,.4-1.2l1.1-.6c.6-.3,1.4-.2,1.9,.3l2,2.2-1.7,5.9-3.7-6.6Zm20.9,2.2l-3.2,1.8c-.4,.2-.6,.8-.4,1.2s.8,.6,1.2,.4l1.3-.7-1.3,4.5c-.1,.5,.1,1,.6,1.1,.2,.1,.5,0,.7-.1s.4-.3,.4-.5l1.3-4.5,.7,1.3c.2,.4,.8,.6,1.2,.4s.6-.8,.4-1.2l-1.8-3.2c-.1-.6-.6-.7-1.1-.5Z"
            />
            <polyline
              className="cls-85"
              points="440.83 231.53 434.83 236.53 433.83 245.53"
            />
            <path
              className="cls-84"
              d="M.73,284.83c-.7,12.7-.3,34.7,9.1,59.7,8.4,22.2,20.4,37.8,28.6,46.8"
            />
            <polyline
              className="cls-84"
              points="388.33 402.03 524.33 422.03 538.33 347.03 560.33 347.03 564.33 183.03 621.33 169.03 665.33 164.03 666.33 114.03 726.83 113.53 730.33 165.03 812.33 162.03 811.33 137.03 826.33 137.03 826.33 114.03 896.33 113.03 900.33 232.03 1035.33 228.03"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default FloorThree;
