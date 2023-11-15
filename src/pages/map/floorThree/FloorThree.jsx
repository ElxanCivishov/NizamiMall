import { useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const svgPaths = [
  {
    uid: 1,
    className: "cls-4",
    d: "M903.28,.6c-29.3,7.2-58.6,14.3-87.7,21.5,15.1,55.8,30.3,111.5,45.4,167.3,29.8-7,59.7-14.2,89.5-21.2-15.7-55.8-31.4-111.8-47.2-167.6Z",
  },
  {
    uid: 2,
    className: "cls-4",
    d: "M758.48,213.7c-14.6-55.8-29.3-111.8-43.9-167.6l100.9-24.4,.2,.3c15.1,55.8,30.3,111.5,45.4,167.3-34.2,8.2-68.4,16.3-102.6,24.4Z",
  },
  {
    uid: 3,
    className: "cls-4",
    d: "M436.38,112.9c8.1,29.8,16.3,59.7,24.4,89.5-48.8,13-97.6,26-146.4,39.1-11.9-29.3-23.9-58.6-35.8-87.9,52.5-13.6,105.2-27.2,157.8-40.7Z",
  },
  {
    uid: 6,
    className: "cls-4",
    d: "M145.08,197.5c12.5,27.7,24.9,55.3,37.4,83,43.9-13,87.9-26,131.8-39.1-11.9-29.3-23.9-58.6-35.8-87.9-44.4,14.7-89,29.3-133.4,44Z",
  },
  {
    uid: 7,
    className: "cls-4",
    d: "M398.88,438.3c-7,22.3-14.2,44.4-21.2,66.7-47.2-8.1-94.4-16.3-141.6-24.4-4.6-.8-27.2-5.5-40.2-26.2-9.3-14.8-8.3-30.1-8.3-36.8,0,0,.7-15.3,8.3-30.1,15.8-30.4,63.5-44.6,110.6-57.9,55.3-15.8,98.3-27.7,123-34.3,2.8,25.5,5.4,50.9,8.1,76.5-21.2,4.4-42.3,8.9-63.6,13.3-.7,11.7-.8,24.1-.3,36.8,.2,3.4,.2,6.7,.3,10.1,8.7,2.1,16.8,4.2,24.9,6.3Z",
  },
  {
    uid: 8,
    className: "cls-4",
    d: "M429.88,295.1c2.8,25.5,5.4,50.9,8.1,76.5,29.3-6,58.6-11.9,87.9-17.9-3.3-26.5-6.5-53.2-9.8-79.7-28.8,6.9-57.4,14.1-86.2,21.1Z",
  },

  {
    uid: 9,
    className: "cls-4",
    d: "M476.98,456.2c-26-6-52.1-11.9-78.1-17.9-7,22.3-14.2,44.4-21.2,66.7,26,6,52.1,11.9,78.1,17.9,7.1-22.3,14.2-44.4,21.2-66.7Z",
  },
  {
    uid: 10,
    className: "cls-4",
    d: "M546.38,740c10.6-30.6,21.2-61.2,31.6-91.8-39.1-8.6-78.1-17.4-117.2-26-12.2,30.3-24.4,60.5-36.6,90.8l122.2,27Z",
  },
  {
    uid: 11,
    className: "cls-4",
    d: "M286.68,682.4c13-30.4,26-60.7,39.1-91.1,45.1,10.3,90,20.7,135.1,30.9l-36.6,90.8c-45.9-10.3-91.8-20.4-137.6-30.6Z",
  },
  {
    uid: 12,
    className: "cls-4",
    d: "M556.78,475.7c-6.5,22.3-13,44.4-19.5,66.7-27.2-6.5-54.2-13-81.4-19.5,7-22.3,14.2-44.4,21.2-66.7,26.5,6.5,53.1,13,79.7,19.5Z",
  },
  {
    uid: 13,
    className: "cls-4",
    d: "M630.48,493.8c-8.3,23.3-16.6,46.5-24.9,69.8,25.5,6,50.9,11.9,76.5,17.9,7.6-23.3,15.1-46.7,22.8-70-24.8-5.8-49.5-11.9-74.4-17.7Z",
  },
  {
    uid: 14,
    className: "cls-4",
    d: "M436.38,112.9c8.1,29.8,16.3,59.7,24.4,89.5,40.7-9.3,81.4-18.4,122-27.7-6-32.5-11.9-65.1-17.9-97.6-13.2-2.4-38.4-5-68.3,3.3-30,8.2-50.2,23.5-60.2,32.5Z",
  },
  {
    uid: 15,
    className: "cls-4",
    d: "M208.58,369.9c-3.3,3.1-20.5,19.9-21.2,47.2-.7,29.3,18.1,47.7,21.2,50.4-16.3,5.4-32.5,10.9-48.8,16.3-5-3.9-26.4-21.5-30.9-52.1-6.2-42.1,25.1-70.9,27.7-73.2,17.3,3.8,34.5,7.7,52,11.4Z",
  },
  {
    uid: 16,
    className: "cls-4",
    d: "",
  },
];

const dynamicNames = [
  {
    uid: 10,
    text: "Donviand",
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
  },
  {
    uid: 9,
    text: "Lluvia",
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
  },
  {
    uid: 8,
    text: "Chumak fasion",
    x1: 3,
    x2: 3,
    y1: 20,
    y2: -10,
  },
  {
    uid: 2,
    text: "Exclusive travel",
    x1: 0,
    x2: 10,
    y1: 20,
    y2: -10,
  },
  {
    uid: 1,
    text: "Life teiecom",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -20,
  },
  {
    uid: 6,
    text: "Express telecom",
    x1: 5,
    x2: 5,
    y1: 20,
    y2: -10,
  },
  {
    uid: 3,
    text: "Trend 37 outlet",
    x1: 15,
    x2: 10,
    y1: 20,
    y2: -10,
  },
  {
    uid: 12,
    text: "Shtonak",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 11,
    text: "By Amina Collection",
    x1: 10,
    x2: 10,
    y1: 20,
    y2: -30,
  },
  {
    uid: 14,
    text: "Brawo men style",
    x1: -10,
    x2: -10,
    y1: 20,
    y2: -10,
  },
  {
    uid: 16,
    text: "Amara parfume",
    x1: 10,
    x2: 20,
    y1: 15,
    y2: -6,
  },
  {
    uid: 15,
    text: "SHR lux saat",
    x1: 10,
    x2: 20,
    y1: 15,
    y2: -8,
  },
  {
    uid: 13,
    text: "Bos zona",
    x1: 10,
    x2: 10,
    y1: 20,
    y2: -20,
  },
  {
    uid: 7,
    text: "Bos Zonaaa",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
];

const svgTexts = [
  {
    uid: 10,
    className: "cls-13",
    transform: "translate(492.71 726.78) rotate(-73.96)",
  },
  {
    uid: 9,
    className: "cls-14",
    transform: "translate(429.05 511.62) rotate(-73.96)",
  },
  {
    uid: 8,
    className: "cls-9",
    transform: "translate(478.61 361.23) rotate(-98.27)",
  },
  {
    uid: 2,
    className: "cls-12",
    transform: "translate(796.15 177.62) rotate(-104.32)",
  },
  {
    uid: 1,
    className: "cls-12",
    transform: "translate(909.73 138.47) rotate(-104.32)",
  },
  {
    uid: 6,
    className: "cls-10",
    transform: "translate(242.27 260.66) rotate(-107.8) scale(1.1 1)",
  },
  {
    uid: 3,
    className: "cls-16",
    transform: "translate(372.1 226.29) rotate(-104.43) scale(1.1 1)",
  },
  {
    uid: 12,
    className: "cls-8",
    transform: "translate(501.57 533.39) rotate(-73.96)",
  },
  {
    uid: 11,
    className: "cls-11",
    transform: "translate(367.63 698.81) rotate(-73.96)",
  },
  {
    uid: 14,
    className: "cls-6",
    transform: "translate(505.11 167.78) rotate(-103.34) scale(1.1 1)",
  },
  {
    uid: 16,
    className: "cls-15",
    transform: "translate(601.27 169.88) rotate(-101.69) scale(1.1 1)",
  },
  {
    uid: 15,
    className: "cls-7",
    transform: "translate(158.81 459.14) rotate(-87.88)",
  },
  {
    uid: 13,
    className: "cls-7",
    transform: "translate(655.81 570.14) rotate(-75.88)",
  },
  {
    uid: 7,
    className: "cls-7",
    transform: "translate(265.81 438.14) rotate(-47.88)",
  },
];

const FloorThree = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (item, e) => {
    console.log(e.target);
    console.log(item);
    setSelected(item);
  };
  console.log(selected);
  const activeName = dynamicNames.find(
    (item) => item?.uid === selected?.uid
  )?.text;
  const convertToText = ({ dynamicFields, item }) => {
    const field = dynamicNames.find((i) => i?.uid === item?.uid);
    const { text, x1, x2, y1, y2 } = field;
    if (text.trim() !== "") {
      const words = text
        .trim()
        .split(" ")
        .map((word, index) => {
          if (word.length > 8) {
            const firstPart = word.slice(0, 7);
            const secondPart = word.slice(7);

            return (
              <tspan key={index}>
                <tspan x={x1} dy={index > 0 ? y1 : y2}>
                  {firstPart + "-"}
                </tspan>
                <tspan x={x1} dy={y1}>
                  {secondPart}
                </tspan>
              </tspan>
            );
          } else {
            return (
              <tspan
                key={index}
                x={index > 0 || word.length < 5 ? x1 : x2}
                dy={index > 0 ? y1 : y2}
              >
                {word}
              </tspan>
            );
          }
        });

      return words;
    }
  };

  return (
    <div className="bg-white rounded-lg w-full select-none">
      <div className="flex gap-2 items-center justify-between  px-2 py-1 mb-2">
        <div className="flex gap-1 items-center justify-between  p-2 rounded-lg text-black text-xs  md:text-base shadow-lg">
          <AiFillCheckCircle className="text-emerald-500 " />
          <span className=" hover:underline hover:text-colorPrimary cursor-pointer">
            {activeName ? activeName : "Seçin..."}
          </span>
        </div>
        <div className="flex gap-1 items-center justify-between  px-2 py-1 rounded-lg text-black text-xs  md:text-base shadow-lg cursor-pointer group">
          <span className="text-black text-xs  md:text-base group-hover:text-colorPrimary ">
            Bağla
          </span>
          <AiFillCloseCircle className="text-red-500 group-hover:opacity-80" />
        </div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto group h-[400px] bg-slate-100 text-colorPrimary  mb-5">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1072.13 505.31"
        >
          <defs>
            <style>{`.cls-1{letter-spacing:-.03em;}.cls-2{font-size:12.9px;}.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19,.cls-20,.cls-21,.cls-22,.cls-23,.cls-24,.cls-25,.cls-26,.cls-27,.cls-28,.cls-29,.cls-30,.cls-31,.cls-32,.cls-33{fill:#4d4d4d;font-family:Raleway-Regular, Raleway;isolation:isolate;}.cls-34{letter-spacing:-.02em;}.cls-35{letter-spacing:0em;}.cls-3{font-size:17.99px;}.cls-36{letter-spacing:-.02em;}.cls-37{letter-spacing:-.03em;}.cls-38{fill:#1f6524;}.cls-39,.cls-40{fill:#fff;}.cls-41{letter-spacing:0em;}.cls-42{letter-spacing:-.01em;}.cls-43{letter-spacing:-.03em;}.cls-44{letter-spacing:0em;}.cls-4{font-size:11.56px;}.cls-5{font-size:9.78px;}.cls-45{letter-spacing:0em;}.cls-6{font-size:20.93px;}.cls-46{letter-spacing:-.02em;}.cls-47{letter-spacing:0em;}.cls-48{letter-spacing:-.02em;}.cls-49{letter-spacing:0em;}.cls-50{letter-spacing:-.05em;}.cls-51{letter-spacing:0em;}.cls-7{font-size:22.43px;}.cls-52{letter-spacing:0em;}.cls-8{font-size:16.73px;}.cls-53{letter-spacing:0em;}.cls-54{letter-spacing:-.01em;}.cls-55{letter-spacing:-.02em;}.cls-56{letter-spacing:0em;}.cls-9{font-size:10.05px;}.cls-57{letter-spacing:-.11em;}.cls-58{letter-spacing:0em;}.cls-10{font-size:20.93px;}.cls-59{letter-spacing:0em;}.cls-11{font-size:13.75px;}.cls-60{letter-spacing:-.01em;}.cls-61{letter-spacing:0em;}.cls-62{letter-spacing:0em;}.cls-63{letter-spacing:0em;}.cls-64{letter-spacing:-.03em;}.cls-65{fill:#f5f8f9;}.cls-12{font-size:10.05px;}.cls-66{letter-spacing:-.02em;}.cls-67{letter-spacing:-.01em;}.cls-68{letter-spacing:-.11em;}.cls-13{font-size:20.93px;}.cls-69{letter-spacing:0em;}.cls-70{fill:#22b37f;}.cls-71{letter-spacing:0em;}.cls-72{letter-spacing:-.03em;}.cls-73{letter-spacing:-.01em;}.cls-74{letter-spacing:0em;}.cls-75{letter-spacing:-.01em;}.cls-76{letter-spacing:0em;}.cls-14{font-size:14.7px;}.cls-77{letter-spacing:0em;}.cls-15{font-size:14.89px;}.cls-78{letter-spacing:0em;}.cls-79{letter-spacing:0em;}.cls-80{fill:#918291;}.cls-81{letter-spacing:-.01em;}.cls-82{fill:#7a6d79;}.cls-83{letter-spacing:-.03em;}.cls-84{letter-spacing:0em;}.cls-16{font-size:15.86px;}.cls-17{font-size:22.49px;}.cls-85{letter-spacing:0em;}.cls-18{font-size:10.13px;}.cls-19{font-size:11.22px;}.cls-86{letter-spacing:0em;}.cls-87{fill:none;}.cls-87,.cls-40{stroke:#4d4d4d;stroke-miterlimit:10;}.cls-20{font-size:32.8px;}.cls-21{font-size:10.94px;}.cls-22{font-size:10.89px;}.cls-88{letter-spacing:0em;}.cls-89{letter-spacing:0em;}.cls-23{font-size:11.66px;}.cls-24{font-size:13.63px;}.cls-25{font-size:14.78px;}.cls-90{letter-spacing:-.01em;}.cls-91{letter-spacing:-.03em;}.cls-92{letter-spacing:0em;}.cls-93{letter-spacing:0em;}.cls-94{letter-spacing:0em;}.cls-95{letter-spacing:-.09em;}.cls-96{letter-spacing:0em;}.cls-97{letter-spacing:0em;}.cls-98{letter-spacing:-.02em;}.cls-26{font-size:17.99px;}.cls-99{letter-spacing:-.03em;}.cls-100{letter-spacing:-.03em;}.cls-27{font-size:8.82px;}.cls-101{letter-spacing:0em;}.cls-102{letter-spacing:0em;}.cls-28{font-size:18.48px;}.cls-103{letter-spacing:-.01em;}.cls-104{fill:#57be92;}.cls-105{letter-spacing:0em;}.cls-106{letter-spacing:-.03em;}.cls-107{letter-spacing:-.01em;}.cls-29{font-size:21.52px;}.cls-108{fill:#685e68;}.cls-109{letter-spacing:0em;}.cls-110{letter-spacing:-.06em;}.cls-111{letter-spacing:-.03em;}.cls-30{font-size:10.09px;}.cls-112{letter-spacing:-.03em;}.cls-31{font-size:17.28px;}.cls-113{letter-spacing:-.03em;}.cls-114{letter-spacing:-.01em;}.cls-115{letter-spacing:-.03em;}.cls-116{letter-spacing:0em;}.cls-32{font-size:13.63px;}.cls-117{letter-spacing:-.02em;}.cls-118{letter-spacing:0em;}.cls-119{letter-spacing:0em;}.cls-120{letter-spacing:0em;}.cls-121{letter-spacing:-.02em;}.cls-33{font-size:13.63px;}`}</style>
          </defs>

          <path
            class="cls-40"
            d="M577.98,228.13l-1.3,69.8c-42.2-.4-84.4-.8-126.7-1.2,.8-19.4,1.6-38.9,2.5-58.3l20.5-4.7,26-3,79-2.6Z"
          />

          <path
            class="cls-40"
            d="M287.48,265.23l1,.2,120.5,24.3-7-31.5-47-5.6-2.9-10.7-65.1,14.7c.2,2.9,.3,5.8,.5,8.6Z"
          />
          <path
            class="cls-40"
            d="M478.98,158.73c-8.3,2.3-16.7,4.7-25,7l19,68,26-3c-6.7-24-13.3-48-20-72Z"
          />
          <polyline
            class="cls-40"
            points="526.98 229.73 498.98 230.73 478.98 158.73 512.98 150.73 526.88 229.23"
          />

          <path
            class="cls-40"
            d="M381.98,76.73l9,3,30-6c5.7,19.8,11.5,39.6,17.2,59.4l-37.2,9.6c-6.3-22-12.7-44-19-66Z"
          />
          <path
            class="cls-40"
            d="M577.98,228.13c-9.7,.2-19.3,.4-29,.6,.3-11.7,.7-23.3,1-35-5-16.3-10-32.7-15-49,8.5-2.4,17-4.8,25.5-7.2,6.4,17,12.7,34,19,50.9-.5,13.3-1,26.5-1.5,39.7Z"
          />
          <path
            class="cls-40"
            d="M786.98,115.73c1,17.3,2,34.7,3,52-13.3,.7-26.7,1.3-40,2-.5-8.4-.9-16.8-1.4-25.2-.5-9.3-1.1-18.5-1.6-27.8,13.3-.3,26.7-.7,40-1Z"
          />
          <path
            class="cls-40"
            d="M681.98,16.13c-.7,22.3-1.3,44.6-2.1,66.9,22.7-.1,45.4-.2,68.1-.3,0-11.1,0-22.2,.1-33.4,.1-11.3,.1-22.5,.3-33.7-22.2,.2-44.3,.3-66.4,.5Z"
          />
          <path
            class="cls-40"
            d="M593.48,26.43c4.8,20.9,9.6,41.9,14.4,62.8l72-6.2,1.5-67.4c-7.1-3.1-24-9.5-45.8-6.7-21.4,2.7-36.1,12.8-42.1,17.5Z"
          />

          <path
            class="cls-40"
            d="M238.98,303.73c-4.7,15.3-9.3,30.7-14,46-12.2-3-24.3-5.9-36.5-8.9-20.9-5.1-41.9-10.3-62.8-15.4-2.7-2.6-6-6.5-8.8-11.8-4.8-9.3-5.2-18-5.1-22.6,0,0,.4-9.4,5.1-18.5,9.8-18.9,40-27.9,68-35.6,29-8,55.2-14.6,78-20,3.7,14.3,7.3,28.7,11,43-15.8,3.7-31.6,7.4-47.4,11.1-.4,7.2-.5,14.8-.2,22.6,.1,2.1,.1,4.1,.2,6.2,2.1,.7,4.3,1.4,6.4,2.1,2.1,.5,4.1,1.1,6.1,1.8Z"
          />

          <path
            class="cls-40"
            d="M339.98,196.73c2.6,9,5.1,18.2,7.6,27.5,2.6,9.6,5,19,7.3,28.4l47,5.6,2.5-27.8c-4.4-15.2-8.6-30.4-13-45.6-8.3,1.7-16.9,3.5-25.6,5.6-8.8,2-17.4,4.1-25.8,6.3Z"
          />
          <path
            class="cls-40"
            d="M534.98,144.73c4.7,16,9.3,32,14,48v36c-7.3,.3-14.7,.7-22,1-4.7-26.3-9.3-52.7-14-79,7.3-2,14.7-4,22-6Z"
          />
          <path
            class="cls-40"
            d="M453.98,165.73c-6.3,1.9-12.7,3.9-19,5.8l17.5,66.9c6.8-1.6,13.7-3.1,20.5-4.7-6.3-22.7-12.7-45.3-19-68Z"
          />
          <path
            class="cls-40"
            d="M684.48,117.53l-1,51.5-45.3,5.1c-3.6-17.3-7.2-34.7-10.8-52,19.1-1.5,38.1-3.1,57.1-4.6Z"
          />
          <path
            class="cls-40"
            d="M560.48,137.53c10.6-2.8,21.3-5.5,31.9-8.2l17.5,51.5-30.4,7.7c-6.3-17-12.6-34-19-51Z"
          />
          <path
            class="cls-40"
            d="M627.38,122.13l11.1,51.9c-9.6,2.3-19,4.5-28.6,6.8-5.9-17.2-11.6-34.3-17.5-51.5,11.7-2.4,23.4-4.8,35-7.2Z"
          />
          <path
            class="cls-40"
            d="M1068.88,198.23c2,16.5-2,29.6-4.6,36.5-46.3,1.3-92.6,2.8-138.9,4.1l-4.1-122.5-72,1c-.7-11.6-1.5-23.2-2.2-34.8h-99V15.53c4.2-2.9,15.2-9.6,30.7-9.9,13-.2,22.7,4.2,27.2,6.7l45.4-2c5.8-3.3,17.9-9.3,34.5-9.8,16.9-.5,29.5,4.7,35.5,7.7,14-3.9,33.7-7.8,57.1-7.7,26.1,.1,47.5,5.1,62.3,9.8,7,7.9,26.8,32.2,30.3,69.5,3.3,34.6-9.2,60.4-14.4,70-3.9,.5-7.9,1-11.8,1.5,4.8,4.9,20.8,21,24,46.9Z"
          />
          <path
            class="cls-40"
            d="M547.98,39.73l15,60c15-3.5,29.9-7,44.9-10.5-4.8-20.9-9.6-41.9-14.4-62.8-15.2,4.4-30.3,8.9-45.5,13.3Z"
          />
          <path
            class="cls-40"
            d="M547.98,39.73l15,60c-14,3.7-28,7.3-42,11l-18-60c15-3.7,30-7.3,45-11Z"
          />
          <path
            class="cls-40"
            d="M306.98,101.73c4.3,20.7,8.7,41.3,13,62,10.3-2.7,20.7-5.3,31-8-6.3-24.3-12.7-48.7-19-73-2.3,1.2-4.6,2.5-7,4-7.6,4.8-13.5,10.1-18,15Z"
          />
          <path
            class="cls-40"
            d="M459.98,62.73c5.7,20,11.3,40,17,60,14.7-4,29.3-8,44-12l-18-60c-14.3,4-28.7,8-43,12Z"
          />
          <path
            class="cls-40"
            d="M306.98,101.73c4.3,20.7,8.7,41.3,13,62-12.3,3-24.7,6-37,9-4.5-20.6-9-41.3-13.5-61.9,12.5-3,25-6.1,37.5-9.1Z"
          />
          <path
            class="cls-40"
            d="M236.98,118.73c4.7,20.7,9.3,41.3,14,62-11.7,3-23.3,6-35,9-4.7-21-9.3-42-14-63,11.7-2.7,23.3-5.3,35-8Z"
          />
          <path
            class="cls-40"
            d="M161.98,203.73l-24,6c-6-21.3-12-42.7-18-64,9.3-2,18.7-4,28-6,4.7,21.3,9.3,42.7,14,64Z"
          />
          <path
            class="cls-40"
            d="M37.98,209.73c13.7,8.3,27.3,16.7,41,25,12.7-6.3,25.3-12.7,38-19-10.7-20-21.3-40-32-60-7.1,5.2-15.4,12-23.6,20.9-11,11.9-18.4,23.7-23.4,33.1Z"
          />
          <path
            class="cls-40"
            d="M109.98,354.73c-11.3,26-22.7,52-34,78,10.7,3.7,21.3,7.3,32,11,11-27.7,22-55.3,33-83-10.3-2-20.7-4-31-6Z"
          />
          <path
            class="cls-40"
            d="M186.98,369.73c-15.3-3-30.7-6-46-9-11.3,27.7-22.7,55.3-34,83l45,12c11.7-28.7,23.3-57.3,35-86Z"
          />
          <path
            class="cls-40"
            d="M186.98,369.73c-11.7,28.8-23.3,57.5-35,86.3,22.7,5.6,45.3,11.2,68,16.7,11.7-29.7,23.3-59.3,35-89-22.7-4.7-45.3-9.3-68-14Z"
          />
          <path
            class="cls-40"
            d="M323.98,398.73l-69-15c-11.7,29.7-23.3,59.3-35,89,23.7,5.7,47.3,11.3,71,17,11-30.3,22-60.7,33-91Z"
          />
          <path
            class="cls-40"
            d="M400.98,413.73c-11,30.3-22,60.7-33,91-25.7-5-51.3-10-77-15,11-30.3,22-60.7,33-91,25.7,5,51.3,10,77,15Z"
          />
          <polyline
            class="cls-40"
            points="436.48 362.43 432.38 362.43 433.38 342.83 506.48 351.13 496.18 411.83 429.28 401.53 430.28 383.03 435.48 383.03"
          />
          <line
            class="cls-87"
            x1="469.88"
            y1="373.23"
            x2="468.88"
            y2="385.23"
          />
          <path class="cls-40" d="M501.78,381.13c-10.9-.7-21.8-1.4-32.8-2.1" />
          <text
            class="cls-10"
            transform="translate(333.04 491.06) rotate(-71.46)"
          >
            <tspan x="0" y="0">
              Şahm
            </tspan>
            <tspan class="cls-45" x="55.57" y="0">
              a
            </tspan>
            <tspan x="66.89" y="0">
              t{" "}
            </tspan>
          </text>
          <text
            class="cls-10"
            transform="translate(365.01 474.67) rotate(-71.46)"
          >
            <tspan class="cls-42" x="0" y="0">
              e
            </tspan>
            <tspan class="cls-94" x="11.99" y="0">
              vi
            </tspan>
          </text>
          <text
            class="cls-13"
            transform="translate(265.83 478.11) rotate(-73.13)"
          >
            <tspan class="cls-78" x="0" y="0">
              R
            </tspan>
            <tspan x="13.52" y="0">
              am
            </tspan>
            <tspan class="cls-67" x="44.17" y="0">
              z
            </tspan>
            <tspan class="cls-78" x="54.18" y="0">
              o
            </tspan>
            <tspan x="66.48" y="0">
              tti
            </tspan>
          </text>
          <text
            class="cls-6"
            transform="translate(141.9 430.99) rotate(-68.17)"
          >
            <tspan class="cls-48" x="0" y="0">
              Z
            </tspan>
            <tspan x="12.79" y="0">
              e
            </tspan>
            <tspan class="cls-118" x="25.08" y="0">
              r
            </tspan>
            <tspan x="32.28" y="0">
              a
            </tspan>
          </text>
          <text
            class="cls-23"
            transform="translate(808.26 155.85) rotate(-90.72)"
          >
            <tspan class="cls-119" x="0" y="0">
              E
            </tspan>
            <tspan x="7.03" y="0">
              s
            </tspan>
            <tspan class="cls-111" x="12.71" y="0">
              k
            </tspan>
            <tspan x="18.57" y="0">
              o
            </tspan>
          </text>
          <g>
            <text
              class="cls-23"
              transform="translate(765.04 158.07) rotate(-93.65)"
            >
              <tspan class="cls-119" x="0" y="0">
                A
              </tspan>
              <tspan x="7.81" y="0">
                s
              </tspan>
              <tspan class="cls-52" x="13.49" y="0">
                k
              </tspan>
              <tspan class="cls-85" x="19.58" y="0">
                a{" "}
              </tspan>
            </text>
            <text
              class="cls-23"
              transform="translate(779.01 157.18) rotate(-93.65)"
            >
              <tspan x="0" y="0">
                Butik
              </tspan>
            </text>
          </g>
          <g>
            <text
              class="cls-23"
              transform="translate(653.98 160.81) rotate(-93.65)"
            >
              <tspan class="cls-100" x="0" y="0">
                A
              </tspan>
              <tspan x="7.48" y="0">
                y
              </tspan>
              <tspan class="cls-74" x="13.8" y="0">
                N
              </tspan>
              <tspan class="cls-85" x="22.74" y="0">
                a
              </tspan>
            </text>
            <text
              class="cls-23"
              transform="translate(668.57 169.6) rotate(-93.65)"
            >
              <tspan x="0" y="0">
                Boutique
              </tspan>
            </text>
          </g>
          <g>
            <text
              class="cls-22"
              transform="translate(617.13 163.1) rotate(-104.89)"
            >
              <tspan x="0" y="0">
                P
              </tspan>
              <tspan class="cls-91" x="6.77" y="0">
                r
              </tspan>
              <tspan x="10.31" y="0">
                o-
              </tspan>
            </text>
            <text
              class="cls-22"
              transform="translate(633.62 174.14) rotate(-104.89)"
            >
              <tspan class="cls-49" x="0" y="0">
                c
              </tspan>
              <tspan x="5.92" y="0">
                osm
              </tspan>
              <tspan class="cls-92" x="27.71" y="0">
                e
              </tspan>
              <tspan x="34.05" y="0">
                tics
              </tspan>
            </text>
          </g>
          <text
            class="cls-12"
            transform="translate(597.29 182.6) rotate(-108.15)"
          >
            <tspan x="0" y="0">
              Shamplena
            </tspan>
          </text>
          <g>
            <text
              class="cls-9"
              transform="translate(562.78 193.85) rotate(-109.21)"
            >
              <tspan class="cls-44" x="0" y="0">
                L
              </tspan>
              <tspan x="5.8" y="0">
                uxur
              </tspan>
              <tspan class="cls-106" x="26.34" y="0">
                y
              </tspan>
              <tspan x="31.51" y="0">
                {" "}
              </tspan>
            </text>
            <text
              class="cls-9"
              transform="translate(575.85 194.59) rotate(-109.21)"
            >
              <tspan x="0" y="0">
                B
              </tspan>
              <tspan class="cls-71" x="6.69" y="0">
                r
              </tspan>
              <tspan x="10.15" y="0">
                andbiju
              </tspan>
            </text>
          </g>
          <text
            class="cls-9"
            transform="translate(540.76 213.94) rotate(-100.6) scale(.88 1) skewX(-.21)"
          >
            <tspan x="0" y="0">
              P
            </tspan>
            <tspan class="cls-79" x="6.25" y="0">
              r
            </tspan>
            <tspan class="cls-35" x="9.71" y="0">
              ada{" "}
            </tspan>
            <tspan class="cls-77" x="29.48" y="0">
              P
            </tspan>
            <tspan class="cls-35" x="35.68" y="0">
              arfum
            </tspan>
          </text>
          <g>
            <text
              class="cls-21"
              transform="translate(505.3 207.19) rotate(-104.77)"
            >
              <tspan x="0" y="0">
                İ
              </tspan>
              <tspan class="cls-97" x="2.71" y="0">
                n
              </tspan>
              <tspan class="cls-105" x="9.04" y="0">
                time{" "}
              </tspan>
            </text>
            <text
              class="cls-21"
              transform="translate(520.34 212.85) rotate(-104.77)"
            >
              <tspan x="0" y="0">
                A
              </tspan>
              <tspan class="cls-75" x="7.39" y="0">
                z
              </tspan>
              <tspan x="12.62" y="0">
                erbaijan
              </tspan>
            </text>
          </g>
          <text
            class="cls-12"
            transform="translate(488.05 222.9) rotate(-108.15)"
          >
            <tspan x="0" y="0">
              Elpidio Baku
            </tspan>
          </text>
          <text
            class="cls-12"
            transform="translate(464.75 222.9) rotate(-108.15)"
          >
            <tspan x="0" y="0">
              AD D
            </tspan>
            <tspan class="cls-83" x="23.73" y="0">
              r
            </tspan>
            <tspan class="cls-47" x="27" y="0">
              ess
            </tspan>
          </text>
          <path
            class="cls-87"
            d="M4.98,264.73C-.02,285.93,.08,303.73,.98,315.73c.6,7.9,1.8,21.9,7.9,39,7.1,19.7,17.3,34,25.1,43,7.8,9.1,18,18.9,31,28,3.7,2.6,7.4,4.9,11,7"
          />
          <path
            class="cls-87"
            d="M400.98,413.73c45.8,6.9,91.6,13.8,137.4,20.7l14.4-77.2h22.6l4.1-168.8,58.7-14.4,45.3-5.1,1-51.5,62.3-.5,3.6,53,84.4-3.1-1-25.7h15.4v-23.7l72-1,4.1,122.5c46.3-1.4,92.6-2.7,138.9-4.1"
          />
          <text
            class="cls-31"
            transform="translate(100.25 430.8) rotate(-68.46)"
          >
            <tspan x="0" y="0">
              Flame.az
            </tspan>
          </text>
          <text
            class="cls-32"
            transform="translate(95.4 221.73) rotate(-127.97)"
          >
            <tspan x="0" y="0">
              Connect
            </tspan>
          </text>
          <g>
            <text
              class="cls-16"
              transform="translate(184.74 437.65) rotate(-70.74)"
            >
              <tspan x="0" y="0">
                Junio
              </tspan>
              <tspan class="cls-34" x="39.2" y="0">
                r
              </tspan>
            </text>
            <text
              class="cls-16"
              transform="translate(196.24 462.32) rotate(-70.74)"
            >
              <tspan x="0" y="0">
                ge
              </tspan>
              <tspan class="cls-62" x="19.12" y="0">
                n
              </tspan>
              <tspan x="28.29" y="0">
                tleman{" "}
              </tspan>
            </text>
            <text
              class="cls-16"
              transform="translate(220.94 449.55) rotate(-70.74)"
            >
              <tspan x="0" y="0">
                ladies
              </tspan>
            </text>
          </g>
          <path
            class="cls-40"
            d="M50.98,414.73c11.7-21,23.3-42,35-63-6-3.7-12-7.3-18-11-11.3,19-22.7,38-34,57,2.2,2.8,4.9,5.9,8,9s6.2,5.8,9,8Z"
          />
          <path
            class="cls-40"
            d="M45.98,312.73l-36.2,44.7c2.3,6.6,5.8,14.7,11.2,23.3,4.3,6.9,8.9,12.6,13,17,11.3-19,22.7-38,34-57-7.3-9.3-14.7-18.7-22-28Z"
          />
          <path class="cls-87" d="M4.98,265.73c.3-18.3,.7-36.7,1-55h15" />
          <line class="cls-87" x1="26.98" y1="209.73" x2="37.98" y2="209.73" />
          <path
            class="cls-40"
            d="M84.98,155.73c10.3,20,20.7,40,31,60,7.3-2,14.7-4,22-6-6-21.3-12-42.7-18-64-11.7,3.3-23.3,6.7-35,10Z"
          />
          <path
            class="cls-40"
            d="M175.98,132.73c-9.3,2.3-18.7,4.7-28,7,4.7,21.3,9.3,42.7,14,64,9.3-2.3,18.7-4.7,28-7-4.7-21.3-9.3-42.7-14-64Z"
          />
          <path
            class="cls-40"
            d="M175.98,132.73c8.7-2,17.3-4,26-6,4.7,21,9.3,42,14,63-8.7,2.3-17.3,4.7-26,7-4.7-21.3-9.3-42.7-14-64Z"
          />
          <path
            class="cls-40"
            d="M236.98,118.73c4.7,20.7,9.3,41.3,14,62,10.7-2.7,21.3-5.3,32-8-4.5-20.6-9-41.3-13.5-61.9l-32.5,7.9Z"
          />
          <path
            class="cls-40"
            d="M381.98,76.73c6.3,22,12.7,44,19,66-16.7,4.3-33.3,8.7-50,13-6.3-24.3-12.7-48.7-19-73,7.9-4.1,21.9-9.6,39-8,4,.4,7.7,1.1,11,2Z"
          />
          <path
            class="cls-40"
            d="M459.98,62.73c-13,3.7-26,7.3-39,11,5.7,19.7,11.3,39.3,17,59,13-3.3,26-6.7,39-10-5.7-20-11.3-40-17-60Z"
          />
          <text
            class="cls-33"
            transform="translate(126.53 204.31) rotate(-110.27)"
          >
            <tspan x="0" y="0">
              Misstyle
            </tspan>
          </text>
          <text
            class="cls-24"
            transform="translate(152.65 201.27) rotate(-105.67)"
          >
            <tspan class="cls-59" x="0" y="0">
              S
            </tspan>
            <tspan x="8.19" y="0">
              tyle Bag
            </tspan>
          </text>
          <g>
            <text
              class="cls-32"
              transform="translate(198.71 179.09) rotate(-103.62)"
            >
              <tspan x="0" y="0">
                Fio
              </tspan>
              <tspan class="cls-37" x="19.11" y="0">
                r
              </tspan>
              <tspan class="cls-96" x="23.54" y="0">
                e{" "}
              </tspan>
            </text>
            <text
              class="cls-32"
              transform="translate(209.16 175.53) rotate(-103.62)"
            >
              <tspan x="0" y="0">
                si
              </tspan>
              <tspan class="cls-107" x="9.61" y="0">
                l
              </tspan>
              <tspan class="cls-98" x="13.17" y="0">
                v
              </tspan>
              <tspan class="cls-96" x="20.18" y="0">
                e
              </tspan>
              <tspan class="cls-55" x="28.19" y="0">
                r
              </tspan>
            </text>
          </g>
          <g>
            <text
              class="cls-2"
              transform="translate(258.28 153.12) rotate(-101.5)"
            >
              <tspan x="0" y="0">
                İris
              </tspan>
            </text>
            <text
              class="cls-2"
              transform="translate(272.81 172.41) rotate(-101.5)"
            >
              <tspan x="0" y="0">
                Collection
              </tspan>
            </text>
          </g>
          <text
            class="cls-2"
            transform="translate(303.08 162.82) rotate(-101.5)"
          >
            <tspan x="0" y="0">
              D
            </tspan>
            <tspan class="cls-50" x="9.22" y="0">
              r
            </tspan>
            <tspan x="13.15" y="0">
              .B
            </tspan>
            <tspan class="cls-1" x="24.18" y="0">
              r
            </tspan>
            <tspan class="cls-36" x="28.37" y="0">
              o
            </tspan>
            <tspan x="35.8" y="0">
              wn
            </tspan>
          </text>
          <text
            class="cls-2"
            transform="translate(385.56 251.21) rotate(-101.5)"
          >
            <tspan x="0" y="0">
              Mulen{" "}
            </tspan>
            <tspan class="cls-76" x="40.86" y="0">
              R
            </tspan>
            <tspan class="cls-86" x="49.19" y="0">
              uj
            </tspan>
          </text>
          <g>
            <text
              class="cls-5"
              transform="translate(329.25 243.06) rotate(-104.7)"
            >
              <tspan class="cls-56" x="0" y="0">
                P
              </tspan>
              <tspan x="6.03" y="0">
                arfume
              </tspan>
            </text>
            <text
              class="cls-5"
              transform="translate(335.4 235.35) rotate(-104.7)"
            >
              <tspan x="0" y="0" xml:space="preserve">
                {" "}
                de as
              </tspan>
            </text>
          </g>
          <text
            class="cls-5"
            transform="translate(291.99 255.86) rotate(-104.7)"
          >
            <tspan class="cls-112" x="0" y="0">
              {" "}
            </tspan>
            <tspan x="2.16" y="0">
              VM{" "}
            </tspan>
            <tspan class="cls-41" x="19.87" y="0">
              S
            </tspan>
            <tspan class="cls-54" x="25.74" y="0">
              t
            </tspan>
            <tspan x="28.89" y="0">
              o
            </tspan>
            <tspan class="cls-72" x="34.71" y="0">
              r
            </tspan>
            <tspan x="37.89" y="0">
              e
            </tspan>
          </text>
          <text
            class="cls-7"
            transform="translate(381.67 141.15) rotate(-102.38)"
          >
            <tspan x="0" y="0">
              Sonia
            </tspan>
          </text>
          <g>
            <text
              class="cls-25"
              transform="translate(451.37 115.72) rotate(-106.24)"
            >
              <tspan class="cls-60" x="0" y="0">
                R
              </tspan>
              <tspan x="9.43" y="0">
                oni
              </tspan>
            </text>
            <text
              class="cls-25"
              transform="translate(467.71 114.6) rotate(-106.24)"
            >
              <tspan class="cls-110" x="0" y="0">
                W
              </tspan>
              <tspan x="14.51" y="0">
                ea
              </tspan>
              <tspan class="cls-46" x="31.24" y="0">
                r
              </tspan>
            </text>
          </g>
          <g>
            <text
              class="cls-28"
              transform="translate(415.61 129.14) rotate(-106.24)"
            >
              <tspan class="cls-84" x="0" y="0">
                A
              </tspan>
              <tspan x="12.38" y="0">
                s
              </tspan>
              <tspan class="cls-120" x="21.38" y="0">
                k
              </tspan>
              <tspan x="31.04" y="0">
                a
              </tspan>
            </text>
            <text
              class="cls-28"
              transform="translate(430.62 127.37) rotate(-106.24)"
            >
              <tspan x="0" y="0">
                Sport
              </tspan>
            </text>
          </g>
          <text
            class="cls-14"
            transform="translate(500.29 115.45) rotate(-104.17)"
          >
            <tspan x="0" y="0">
              C
            </tspan>
            <tspan class="cls-109" x="10.08" y="0">
              a
            </tspan>
            <tspan x="18.04" y="0">
              t
            </tspan>
            <tspan class="cls-115" x="22.96" y="0">
              r
            </tspan>
            <tspan x="27.74" y="0">
              een
            </tspan>
          </text>
          <g>
            <text
              class="cls-20"
              transform="translate(928.56 69.21) rotate(-.58) scale(1.03 1)"
            >
              <tspan class="cls-81" x="0" y="0">
                A
              </tspan>
              <tspan x="21.78" y="0">
                u
              </tspan>
              <tspan class="cls-101" x="41.26" y="0">
                r
              </tspan>
              <tspan x="52.54" y="0">
                a{" "}
              </tspan>
            </text>
            <text
              class="cls-20"
              transform="translate(919.56 98.5) rotate(-.58) scale(1.03 1)"
            >
              <tspan class="cls-102" x="0" y="0">
                S
              </tspan>
              <tspan x="19.71" y="0">
                tudio
              </tspan>
            </text>
          </g>
          <text
            class="cls-11"
            transform="translate(543.34 102.88) rotate(-104.17)"
          >
            <tspan class="cls-103" x="0" y="0">
              R
            </tspan>
            <tspan x="8.77" y="0">
              ose Gir
            </tspan>
            <tspan class="cls-99" x="52.9" y="0">
              l
            </tspan>
          </text>
          <g>
            <text
              class="cls-30"
              transform="translate(575.19 74.34) rotate(-106.93)"
            >
              <tspan x="0" y="0">
                NB{" "}
              </tspan>
            </text>
            <text
              class="cls-30"
              transform="translate(588.44 90.06) rotate(-106.93)"
            >
              <tspan x="0" y="0">
                a
              </tspan>
              <tspan class="cls-89" x="5.5" y="0">
                cc
              </tspan>
              <tspan x="16.48" y="0">
                essories
              </tspan>
            </text>
          </g>
          <text
            class="cls-3"
            transform="translate(649.01 82.74) rotate(-93.96)"
          >
            <tspan x="0" y="0">
              VN{" "}
            </tspan>
            <tspan class="cls-73" x="30.69" y="0">
              t
            </tspan>
            <tspan class="cls-121" x="36.48" y="0">
              o
            </tspan>
            <tspan class="cls-90" x="46.86" y="0">
              y
            </tspan>
            <tspan class="cls-63" x="56.4" y="0">
              s
            </tspan>
          </text>
          <text
            class="cls-3"
            transform="translate(468.03 271.87) rotate(-1.21)"
          >
            <tspan x="0" y="0">
              Bakust
            </tspan>
            <tspan class="cls-113" x="56.79" y="0">
              r
            </tspan>
            <tspan class="cls-63" x="62.64" y="0">
              e
            </tspan>
            <tspan class="cls-58" x="73.2" y="0">
              e
            </tspan>
            <tspan x="83.69" y="0">
              t
            </tspan>
          </text>
          <text class="cls-19" transform="translate(321.11 263.4) rotate(9.93)">
            <tspan x="0" y="0">
              Unix{" "}
            </tspan>
            <tspan class="cls-114" x="25.98" y="0">
              ay
            </tspan>
            <tspan x="37.89" y="0">
              aqqabı
            </tspan>
          </text>
          <text class="cls-4" transform="translate(330.6 293.23) rotate(10.84)">
            <tspan x="0" y="0">
              Eloo
            </tspan>
            <tspan class="cls-117" x="23.95" y="0">
              r
            </tspan>
          </text>
          <text
            class="cls-4"
            transform="translate(311.85 315.17) rotate(10.84)"
          >
            <tspan x="0" y="0">
              NS moda
            </tspan>
          </text>
          <g>
            <text
              class="cls-18"
              transform="translate(355.82 369.07) rotate(-76.86) scale(.97 1)"
            >
              <tspan class="cls-88" x="0" y="0">
                H
              </tspan>
              <tspan x="7.43" y="0">
                ale
              </tspan>
            </text>
            <text
              class="cls-18"
              transform="translate(360.96 383.07) rotate(-76.86) scale(.97 1)"
            >
              <tspan x="0" y="0">
                a
              </tspan>
              <tspan class="cls-88" x="5.52" y="0">
                cc
              </tspan>
              <tspan x="16.55" y="0">
                essor
              </tspan>
              <tspan class="cls-64" x="41.95" y="0">
                y
              </tspan>
            </text>
          </g>
          <text
            class="cls-8"
            transform="translate(292.31 363.14) rotate(-74.26) scale(.97 1)"
          >
            <tspan x="0" y="0">
              A
            </tspan>
            <tspan class="cls-95" x="11.31" y="0">
              z
            </tspan>
            <tspan class="cls-57" x="18.09" y="0">
              T
            </tspan>
            <tspan class="cls-61" x="26.39" y="0">
              e
            </tspan>
            <tspan class="cls-43" x="36.21" y="0">
              l
            </tspan>
          </text>
          <text
            class="cls-26"
            transform="translate(458.96 320.97) rotate(3.47)"
          >
            <tspan x="0" y="0">
              Dosso dossi
            </tspan>
          </text>
          <text class="cls-17" transform="translate(721.8 77.3) rotate(-89.17)">
            <tspan x="0" y="0">
              Gle
            </tspan>
            <tspan class="cls-51" x="35.42" y="0">
              n
            </tspan>
            <tspan class="cls-53" x="48.42" y="0">
              t
            </tspan>
          </text>
          <g>
            <text
              class="cls-32"
              transform="translate(168.31 184.2) rotate(-103.2)"
            >
              <tspan class="cls-66" x="0" y="0">
                A
              </tspan>
              <tspan x="9.01" y="0">
                g
              </tspan>
              <tspan class="cls-93" x="17.43" y="0">
                a
              </tspan>
              <tspan x="24.81" y="0">
                t{" "}
              </tspan>
            </text>
            <text
              class="cls-32"
              transform="translate(186.03 187.95) rotate(-103.2)"
            >
              <tspan x="0" y="0">
                Am
              </tspan>
              <tspan class="cls-93" x="21.74" y="0">
                e
              </tspan>
              <tspan x="29.68" y="0">
                tist
              </tspan>
            </text>
          </g>
          <text
            class="cls-29"
            transform="translate(235.87 167.02) rotate(-103.2)"
          >
            <tspan x="0" y="0">
              sis
            </tspan>
          </text>
          <path
            class="cls-40"
            d="M271.88,310.93c-11-2.4-21.9-4.8-32.9-7.2-4.7,15.3-9.3,30.7-14,46,10.8,2.9,21.6,5.7,32.5,8.6l14.4-47.4Z"
          />
          <g>
            <text
              class="cls-27"
              transform="translate(246.01 339.42) rotate(-74.26) scale(.97 1)"
            >
              <tspan x="0" y="0">
                İzim{" "}
              </tspan>
            </text>
            <text
              class="cls-27"
              transform="translate(249.02 354.93) rotate(-74.26) scale(.97 1)"
            >
              <tspan x="0" y="0">
                a
              </tspan>
              <tspan class="cls-69" x="4.81" y="0">
                cc
              </tspan>
              <tspan x="14.41" y="0">
                essories
              </tspan>
            </text>
          </g>
          <text class="cls-15" transform="translate(50.46 404.8) rotate(-59.5)">
            <tspan class="cls-68" x="0" y="0">
              T
            </tspan>
            <tspan x="7.49" y="0">
              urkuaz
            </tspan>
          </text>
          <text
            class="cls-15"
            transform="translate(24.61 376.52) rotate(-52.81)"
          >
            <tspan class="cls-116" x="0" y="0">
              R
            </tspan>
            <tspan x="9.65" y="0">
              izanna
            </tspan>
          </text>
          <g>
            <path
              class="cls-104"
              d="M79.98,401.73l-5.4,10.1c-.1,.2-.4,.3-.7,.2l-4.7-2.5c-.2-.1-.3-.4-.2-.7l5.4-10.1c.1-.2,.4-.3,.7-.2l4.7,2.5c.3,.1,.3,.4,.2,.7Z"
            />
            <path
              class="cls-70"
              d="M74.38,398.63l-.4,.8c.1-.2,.4-.3,.7-.2l4.7,2.5c.2,.1,.3,.4,.2,.7l.4-.8c.1-.2,0-.6-.2-.7l-4.7-2.5c-.2-.1-.5,0-.7,.2h0Z"
            />
            <g>
              <path
                class="cls-39"
                d="M79.38,401.63l-5.2,9.7c0,.1-.2,.1-.3,.1l-4.3-2.3c-.1,0-.1-.2-.1-.3l5.2-9.7c0-.1,.2-.1,.3-.1l4.3,2.3c.1,.1,.2,.2,.1,.3Zm-5.5,9.3l5-9.3-3.9-2.1-5,9.3,3.9,2.1Z"
              />
              <g>
                <path
                  class="cls-39"
                  d="M73.38,405.03l1.9,1h.2c.1-.1,0-.2-.1-.3l-1.9-1c-.1,0-.2,0-.3,.1h0l.2,.2Z"
                />
                <path
                  class="cls-39"
                  d="M72.08,407.73c0-.1,0-.2-.1-.3s-.2,0-.3,.1l-.4,.8c0,.1,0,.2,.1,.2l1.9,1c.1,0,.2,0,.3-.1l.4-.8c0-.1,0-.2-.1-.3s-.2,0-.3,.1l-.3,.6-.6-.3,.3-.6c0-.1,0-.2-.1-.3s-.2,0-.3,.1l-.3,.6-.6-.3,.4-.5Z"
                />
                <path
                  class="cls-39"
                  d="M73.68,406.43l-.5-1c0-.1-.2-.1-.3-.1s-.1,.2-.1,.3l.4,.9-1,.1c-.1,0-.2,.1-.2,.2s.1,.2,.2,.2l1.1-.1,.6,1.2c0,.1,.2,.1,.3,.1q.1-.1,.1-.3l-.5-1,1.2-.1c.1,0,.2-.1,.2-.2s-.1-.2-.2-.2h-1.3Z"
                />
                <path
                  class="cls-39"
                  d="M74.18,403.03l-.6,1.1c-.1,.1,0,.2,.1,.3,.1,0,.2,0,.2-.1l.2-.4,1.8,1c.1,.1,.2,0,.2-.1s0-.2-.1-.3l-1.8-1,.3-.3c.1-.1,0-.2-.1-.3,0,0-.1,0-.2,.1h0Z"
                />
                <path
                  class="cls-39"
                  d="M76.68,401.43h0c0-.1-.1-.2-.2-.1l-1,.3c-.1,0-.2,.1-.1,.2,0,.1,.1,.2,.2,.1l.6-.2-.7,1.3c0,.1,0,.2,.1,.3s.2,0,.3-.1l.7-1.3,.2,.6c0,.1,.1,.2,.2,.1,.1,0,.1-.1,.1-.2l-.4-1Z"
                />
              </g>
            </g>
          </g>
          <g>
            <path
              class="cls-104"
              d="M31.58,226.13l-18.1,.2c-.4,0-.8-.4-.8-.8l-.1-8.4c0-.4,.4-.8,.8-.8l18.1-.1c.4,0,.8,.4,.8,.8l.1,8.4c0,.4-.4,.7-.8,.7Z"
            />
            <path
              class="cls-70"
              d="M31.48,216.13h-1.5c.4,0,.8,.4,.8,.8l.1,8.4c0,.4-.4,.8-.8,.8h1.5c.4,0,.8-.4,.8-.8l-.1-8.4c0-.4-.4-.8-.8-.8h0Z"
            />
            <g>
              <path
                class="cls-39"
                d="M31.18,225.23l-17.3,.1c-.2,0-.3-.1-.3-.3l-.1-7.6c0-.2,.1-.3,.3-.3l17.3-.1c.2,0,.3,.1,.3,.3l.1,7.6c0,.2-.2,.3-.3,.3Zm-17-.4l16.7-.1v-7l-16.7,.1v7Z"
              />
              <g>
                <path
                  class="cls-39"
                  d="M21.98,219.53v3.5c0,.1,.1,.3,.2,.3,.2,0,.4-.1,.4-.3v-3.5c0-.2-.1-.3-.3-.3h0c-.2,0-.3,.1-.3,.3Z"
                />
                <path
                  class="cls-39"
                  d="M17.28,219.83c.2,0,.3-.1,.3-.3s-.1-.3-.3-.3h-1.4c-.2,0-.3,.1-.3,.3v3.4c0,.2,.1,.3,.3,.3h1.4c.2,0,.3-.1,.3-.3s-.1-.3-.3-.3h-1.1v-1.2h1c.2,0,.3-.1,.3-.3s-.1-.3-.3-.3h-1v-1.1l1.1,.1Z"
                />
                <path
                  class="cls-39"
                  d="M20.18,221.13l1-1.4c.1-.1,.1-.3-.1-.4-.1-.1-.3-.1-.4,.1l-.9,1.3-.9-1.3c-.1-.1-.3-.2-.4-.1s-.2,.3-.1,.4l1,1.4-1.2,1.7c-.1,.1-.1,.3,.1,.4,.1,.1,.3,.1,.4-.1l1.1-1.5,1.1,1.5c.1,.1,.3,.2,.4,.1s.2-.3,.1-.4l-1.2-1.7Z"
                />
                <path
                  class="cls-39"
                  d="M25.28,219.13h-1.9c-.2,0-.3,.1-.3,.3s.1,.3,.3,.3h.7v3.2c0,.2,.1,.3,.3,.3s.3-.1,.3-.3v-3.2h.7c.2,0,.3-.1,.3-.3-.1-.1-.2-.3-.4-.3h0Z"
                />
                <path
                  class="cls-39"
                  d="M29.48,221.33h0c.1-.1,.1-.3,0-.4l-1.2-1.2c-.1-.1-.3-.1-.4,0s-.1,.3,0,.4l.7,.7h-2.2c-.2,0-.3,.1-.3,.3s.1,.3,.3,.3h2.3l-.7,.7c-.1,.1-.1,.3,0,.4s.3,.1,.4,0l1.1-1.2Z"
                />
              </g>
            </g>
          </g>
          <g>
            <g>
              <path
                class="cls-82"
                d="M7.68,306.43v2.2c0,.6,.3,1.1,1,1.1h.7l11-.1c.6,0,1.1-.5,1.1-1.1v-.2l-.3-.8v-1.2l-13.5,.1Z"
              />
              <path
                class="cls-108"
                d="M21.28,306.33l.3,.4v1.6c-.3,.2-.7,.4-1.1,.4l-11.7,.1h0c-.2,0-.3,.2-.2,.3,.2,.4,.6,.7,1.1,.7h-.9c-.6,0-1.1-.5-1.1-1.1v-2.2l13.6-.2Z"
              />
              <path
                class="cls-80"
                d="M20.38,307.83l-11,.1h-.7c-.6,0-1.1-.5-1.1-1.2v-7.8c0-.6,.5-1.2,1.2-1.2h.6l11-.1c.6,0,1.1,.5,1.1,1.1l.1,7.9c-.1,.7-.6,1.2-1.2,1.2h0Z"
              />
              <path
                class="cls-82"
                d="M9.48,307.93h-.9c-.6,0-1.1-.5-1.1-1.1l-.1-7.9c0-.6,.5-1.1,1.1-1.1h.9c-.6,0-1.1,.5-1.1,1.1l.1,7.9c0,.6,.5,1.1,1.1,1.1Z"
              />
            </g>
            <g>
              <path
                class="cls-65"
                d="M13.08,301.13h0c-.1,0-.2,.1-.2,.2v2.4l-1.7-2.5c-.1-.1-.2-.1-.3-.1s-.1,.1-.1,.2v3c0,.1,.1,.2,.2,.2s.2-.1,.2-.2v-2.3l1.7,2.4c.1,.1,.2,.1,.3,.1s.2-.1,.2-.3v-2.9c-.1-.1-.2-.2-.3-.2h0Z"
              />
              <path
                class="cls-65"
                d="M10.18,301.53c.1,0,.2-.1,.2-.2s-.1-.2-.2-.2h-1.2c-.1,0-.2,.1-.2,.2v3c0,.1,.1,.2,.2,.2h1.2c.1,0,.2-.1,.2-.2s-.1-.2-.2-.2h-1v-1.1h.9c.1,0,.2-.1,.2-.2s-.1-.2-.2-.2h-.9v-1.1h1Z"
              />
              <path
                class="cls-65"
                d="M17.68,301.43c.1,0,.2-.1,.2-.3,0-.1-.1-.2-.2-.2h-1.3c-.1,0-.2,.1-.2,.2v3c0,.1,.1,.2,.2,.2h1.2c.1,0,.2-.1,.2-.2s-.1-.2-.2-.2h-1v-1.1h.9c.1,0,.2-.1,.2-.2s-.1-.2-.2-.2h-.9v-1.1l1.1,.1h0Z"
              />
              <path
                class="cls-65"
                d="M15.58,301.13h-1.7c-.1,0-.2,.1-.2,.2s.1,.2,.2,.2h.6v2.8c0,.1,.1,.2,.2,.2s.2-.1,.2-.2v-2.8h.6c.1,0,.2-.1,.2-.2,.1-.2,0-.3-.1-.2h0Z"
              />
              <path
                class="cls-65"
                d="M19.48,303.03c.5,0,1-.5,1-1s-.5-1-1-1h-.8c-.1,0-.2,.1-.2,.2v3c0,.1,.1,.2,.2,.2s.3-.1,.2-.2v-1.2h0l1.2,1.4s.1,.1,.2,.1c0,0,.1,0,.1-.1,.1-.1,.1-.2,0-.3l-.9-1.1Zm-.1-1.6c.3,0,.6,.3,.6,.6s-.3,.6-.6,.6h-.6v-1.2h.6Z"
              />
            </g>
          </g>
          <g>
            <path
              class="cls-38"
              d="M453.78,372.53c-.1-.1-.3-.2-.4-.2h-.1c-.2,0-.4,.1-.5,.4l-1.1,3.4-1.1-3.4c-.1-.2-.3-.4-.5-.4h0c-.2,0-.4,.1-.5,.4l-1.1,3.4-1.1-3.4c-.1-.2-.3-.4-.5-.4h-.1c-.2,0-.3,.1-.4,.2-.1,.1-.1,.3-.1,.5l1.6,4.8c.1,.2,.3,.4,.5,.4h0c.2,0,.4-.1,.5-.4l1.1-3.4,1.1,3.4c.1,.2,.3,.4,.5,.4h0c.2,0,.4-.1,.5-.4l1.6-4.8c.2-.2,.2-.4,.1-.5h0Zm4.8,4.1c-.2-.2-.5-.2-.7,0-.3,.3-.8,.5-1.3,.5-1.1,0-1.9-.8-1.9-1.9,0-1,.9-1.8,1.9-1.8,.5,0,.9,.2,1.3,.4,.2,.2,.5,.2,.7,0h0c.2-.2,.2-.5,0-.7h0c-.5-.5-1.2-.7-1.9-.7-1.6,0-3,1.3-3,2.9s1.3,2.9,3,2.9c.7,0,1.4-.3,1.9-.7,.1-.1,.2-.2,.2-.4,0-.2-.1-.4-.2-.5h0Z"
            />
            <path
              class="cls-38"
              d="M457.18,367.23h-9.4c-1.8,0-3.3,1.5-3.3,3.3v9.4c0,1.8,1.5,3.3,3.3,3.3h9.4c1.8,0,3.3-1.5,3.3-3.3v-9.4c0-1.8-1.5-3.3-3.3-3.3Zm0,15.4h-9.4c-1.5,0-2.7-1.2-2.7-2.7v-9.4c0-1.5,1.2-2.7,2.7-2.7h9.4c1.5,0,2.7,1.2,2.7,2.7v9.4c0,1.5-1.2,2.7-2.7,2.7Z"
            />
          </g>
        </svg>

        {/* <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 951.1 757.69"
          className="w-full h-full"
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
                zIndex: 10,
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
              {convertToText({ dynamicNames, item })}
            </text>
          ))}
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
        </svg> */}

        {/* <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1080 1080"
          // style="enable-background:new 0 0 1080 1080;"
          xmlSpace="preserve"
          className="w-full h-full "
        >
          <style type="text/css">
            {`	.st0{fill:#FFFFFF;stroke:#4D4D4D;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#4D4D4D;stroke-miterlimit:10;}
	.st2{fill:#4D4D4D;}
	.st3{font-family:'Raleway-Regular';}
	.st4{font-size:20.3395px;}
	.st5{font-size:20.3385px;}
	.st6{font-size:20.3402px;}
	.st7{font-size:18.3009px;}
	.st8{font-size:18.3003px;}
	.st9{font-size:14.7545px;}
	.st10{font-size:12.5272px;}
	.st11{font-size:10.9554px;}
	.st12{font-size:14.9397px;}
	.st13{font-size:13.0505px;}
	.st14{font-size:11.804px;}
	.st15{font-size:9.6189px;}
	.st16{font-size:12.7743px;}
	.st17{font-size:14.7824px;}
	.st18{font-size:11.4448px;}
	.st19{font-size:15.3849px;}
	.st20{font-size:13.3263px;}
	.st21{font-size:22.8904px;}
	.st22{font-size:19.0242px;}
	.st23{font-size:23.1039px;}
	.st24{font-size:18.049px;}
	.st25{font-size:13.5567px;}
	.st26{font-size:11.9379px;}
	.st27{font-size:12.6224px;}
	.st28{font-size:15.7285px;}
	.st29{font-size:13.2936px;}
	.st30{font-size:15.8408px;}
	.st31{font-size:15.6057px;}
	.st32{font-size:19.2376px;}
	.st33{font-size:11.3274px;}
	.st34{font-size:33.7737px;}
	.st35{font-size:14.2065px;}
	.st36{font-size:10.1941px;}
	.st37{font-size:19.2927px;}
	.st38{fill:none;stroke:#4D4D4D;stroke-width:2;stroke-miterlimit:10;}`}
          </style>
          <polygon
            class="st0"
            points="366,548 373,575 362.3,633.8 244,604 244,576 "
          />
          <path
            class="st0"
            d="M585.5,534.5c-14.3,0-28.7,0-43,0l3-29c-5.7-16-11.3-32-17-48c13.3-3.7,26.7-7.3,40-11
	c6.2,16.5,12.3,33,18.5,49.5C586.5,508.8,586,521.7,585.5,534.5z"
          />
          <path
            class="st0"
            d="M808.5,424.5l1.7,51.4L753,478c-1.2-17.2-2.3-34.3-3.5-51.5C769.2,425.8,788.8,425.2,808.5,424.5z"
          />
          <path
            class="st0"
            d="M686.5,328.5c-0.7,21.7-1.3,43.3-2,65c22,0,44,0,66,0c0.2-21.8,0.3-43.7,0.5-65.5
	C729.5,328.2,708,328.3,686.5,328.5z"
          />
          <path
            class="st0"
            d="M600.5,338.5c4.7,20.3,9.3,40.7,14,61l70-6L686,328c-6.9-3-23.3-9.2-44.5-6.5
	C620.7,324.1,606.4,333.9,600.5,338.5z"
          />
          <path
            class="st0"
            d="M224.3,432.3l15.2,60.2c-16.7,4-33.3,8-50,12c-5.3-20-10.7-40-16-60C190.4,440.4,207.4,436.4,224.3,432.3z"
          />
          <path
            class="st0"
            d="M503.5,652.5c3.3-14.3,6.7-28.7,10-43c-20.3-1.8-40.7-3.7-61-5.5c2,14.5,4,29,6,43.5L503.5,652.5z"
          />
          <polygon class="st0" points="345.5,629.5 334,676 407,694 416,647 " />
          <polygon class="st0" points="288,615 345.5,629.5 334,676 274,661 " />
          <polygon class="st0" points="249.5,605.5 288,615 274,661 207,644 " />
          <path
            class="st0"
            d="M244,604c-0.2-4.2-0.3-8.3-0.5-12.5c-37,1.3-74,2.7-111,4c-0.1,4.5,0.3,13,5,22c2.7,5.2,5.9,9,8.5,11.5
	c20.3,5,40.7,10,61,15c14.2-12.8,28.3-25.7,42.5-38.5C247.7,605,245.8,604.5,244,604z"
          />
          <path
            class="st0"
            d="M180.5,548.5L244,576v16l-111.5,3.5c0.4-5.2,1.7-11.5,5-18C149.2,554.3,176.3,549.2,180.5,548.5z"
          />
          <path
            class="st0"
            d="M243.5,531.5L256,573l-12,3c-21.2-9.2-42.3-18.3-63.5-27.5C201.5,542.8,222.5,537.2,243.5,531.5z"
          />
          <polygon
            class="st0"
            points="278.5,522.5 288.5,565.5 256,573 243.5,531.5 "
          />
          <polygon
            class="st0"
            points="314.5,513.5 278.5,522.5 288.5,565.5 324.5,557.5 "
          />
          <polygon
            class="st0"
            points="314.5,513.5 324.5,557.5 366,548 355.5,503.5 "
          />
          <path
            class="st0"
            d="M355.5,503.5c5.8,23.8,11.7,47.7,17.5,71.5l56,7l3-35c-5.2-19.2-10.3-38.3-15.5-57.5
	C396.2,494.2,375.8,498.8,355.5,503.5z"
          />
          <path
            class="st0"
            d="M528.5,457.5c5.7,16,11.3,32,17,48c-1,9.7-2,19.3-3,29c-9,0-18,0-27,0l-11,2c-6-22.7-12-45.3-18-68
	C500.5,464.8,514.5,461.2,528.5,457.5z"
          />
          <polygon
            class="st0"
            points="486.5,468.5 446.5,479.5 463.5,544.5 504.5,536.5 "
          />
          <path
            class="st0"
            d="M689,427l-1,50l-44,5c-3.5-16.8-7-33.7-10.5-50.5C652,430,670.5,428.5,689,427z"
          />
          <path
            class="st0"
            d="M568.5,446.5c10.3-2.7,20.7-5.3,31-8l17,50L587,496C580.8,479.5,574.7,463,568.5,446.5z"
          />
          <path
            class="st0"
            d="M633.5,431.5l10.8,50.4c-9.3,2.2-18.5,4.4-27.8,6.6c-5.7-16.7-11.3-33.3-17-50
	C610.8,436.2,622.2,433.8,633.5,431.5z"
          />
          <path
            class="st0"
            d="M810.2,475.9L806,325l45-2c5.6-3.2,17.4-9,33.5-9.5c16.4-0.5,28.7,4.6,34.5,7.5c13.6-3.8,32.7-7.6,55.5-7.5
	c25.4,0.1,46.2,5,60.5,9.5c6.8,7.7,26,31.3,29.5,67.5c3.2,33.6-8.9,58.7-14,68c-3.8,0.5-7.7,1-11.5,1.5c4.9,4.6,20.4,20.3,23.5,45.5
	c2,16-1.9,28.8-4.5,35.5c-45,1.3-90,2.7-135,4l-4-119l-70,1v23h-15l1,25L810.2,475.9z"
          />
          <path
            class="st0"
            d="M806,325c0.5,22.8,1,45.7,1.5,68.5c-19,0-38,0-57,0L751,328c3.8-2.7,14-9.1,28.5-9.5
	C792.3,318.2,801.9,322.7,806,325z"
          />
          <path
            class="st0"
            d="M535.5,354.5c6.3,20,12.7,40,19,60c20-5,40-10,60-15c-4.7-20.3-9.3-40.7-14-61
	C578.8,343.8,557.2,349.2,535.5,354.5z"
          />
          <path
            class="st0"
            d="M535.5,354.5c6.3,20,12.7,40,19,60c-20.3,5-40.7,10-61,15l-17-61C496.2,363.8,515.8,359.2,535.5,354.5z"
          />
          <path
            class="st0"
            d="M325,408l13.5,59.5l96-23L419,382c-11.8-0.5-28.9,0.1-48.5,5.5C350.3,393,335,401.4,325,408z"
          />
          <path
            class="st0"
            d="M419,382c5.2,20.8,10.3,41.7,15.5,62.5c19.7-5,39.3-10,59-15c-5.7-20.3-11.3-40.7-17-61
	C457.3,373,438.2,377.5,419,382z"
          />
          <path
            class="st0"
            d="M324.5,408.5c4.7,19.7,9.3,39.3,14,59c-17,4.3-34,8.7-51,13c-5-20-10-40-15-60
	C289.8,416.5,307.2,412.5,324.5,408.5z"
          />
          <path
            class="st0"
            d="M272.5,420.5c5,20,10,40,15,60c-16,4-32,8-48,12l-15.2-60.2C240.4,428.4,256.4,424.4,272.5,420.5z"
          />
          <path
            class="st0"
            d="M189.5,504.5c-13.7,3.3-27.3,6.7-41,10c-5.2-20.2-10.3-40.3-15.5-60.5l40.1-9.4c3.9,16.6,8.4,33.6,13.6,50.8
	C187.6,498.5,188.6,501.5,189.5,504.5z"
          />
          <path
            class="st0"
            d="M46.3,529.1L84,555c21.5-13.5,43-27,64.5-40.5c-5.2-20.2-10.3-40.3-15.5-60.5c-12.7,5.2-31,14.4-49.5,30.5
	C65,500.5,53.3,517.3,46.3,529.1z"
          />
          <path
            class="st0"
            d="M23.5,597.8L69,595l15-40l-37.7-25.9c-4.9,8-10.3,18.5-14.8,31.4C26.6,574.9,24.4,587.8,23.5,597.8z"
          />
          <path
            class="st0"
            d="M96.5,634.5l-35.4,69.8c4.8,5.1,10.6,10.6,17.4,16.2c6.1,5,12.1,9.1,17.5,12.5c12.3-28.7,24.7-57.3,37-86
	L96.5,634.5z"
          />
          <path
            class="st0"
            d="M174.5,657.5c-13.8-3.5-27.7-7-41.5-10.5c-12.3,28.7-24.7,57.3-37,86c2.7,1.3,5.3,2.7,8,4l38.5,9.5
	C153.2,716.8,163.8,687.2,174.5,657.5z"
          />
          <path
            class="st0"
            d="M367.5,704.5c-17.1-4.1-34.2-8.1-51.3-12.2L285,782l49,11C345.2,763.5,356.3,734,367.5,704.5z"
          />
          <path
            class="st0"
            d="M174.5,657.5c-10.7,29.7-21.3,59.3-32,89c17.3,4.4,34.7,8.7,52,13.1L224,671L174.5,657.5z"
          />
          <path
            class="st0"
            d="M316.5,692.5c-15-4-30-8-45-12l-32.3,89.6L285,782C295.5,752.2,306,722.3,316.5,692.5z"
          />
          <path
            class="st0"
            d="M410.5,714.5c-11.3,29.7-22.7,59.3-34,89c-14.2-3.5-28.3-7-42.5-10.5c11.2-29.5,22.3-59,33.5-88.5
	C381.8,707.8,396.2,711.2,410.5,714.5z"
          />
          <path class="st0" d="M285,782l31.2-89.7L285,782z" />
          <path
            class="st0"
            d="M194.5,759.6c9.8-29.5,19.7-59.1,29.5-88.6c15.8,3.2,31.7,6.3,47.5,9.5c-11,29.7-22,59.3-33,89
	C223.8,766.2,209.2,762.9,194.5,759.6z"
          />
          <polyline
            class="st0"
            points="448,665 444,665 445,646 516,654 506,713 441,703 442,685 447,685 "
          />
          <line class="st1" x1="461" y1="666" x2="460" y2="689" />
          <path class="st0" d="M512,685c-16.9-2.5-33.7-5.1-50.6-7.6" />
          <text
            transform="matrix(0.3179 -0.9481 0.9481 0.3179 366.5585 782.5878)"
            class="st2 st3 st4"
          >
            AySa{" "}
          </text>
          <text
            transform="matrix(0.2866 -0.958 0.958 0.2866 320.4993 774.6901)"
            class="st2 st3 st5"
          >
            SS.555
          </text>
          <text
            transform="matrix(0.2902 -0.957 0.957 0.2902 273.4047 767.6891)"
            class="st2 st3 st6"
          >
            Luceria
          </text>
          <text
            transform="matrix(0.3276 -0.9448 0.9448 0.3276 225.9633 756.4876)"
            class="st2 st3 st4"
          >
            Hit Saat
          </text>
          <text
            transform="matrix(0.3276 -0.9448 0.9448 0.3276 176.6232 730.6077)"
            class="st2 st3 st7"
          >
            Lady{" "}
          </text>
          <text
            transform="matrix(0.3276 -0.9448 0.9448 0.3276 193.7819 736.9808)"
            class="st2 st3 st7"
          >
            Vibes
          </text>
          <g>
            <text
              transform="matrix(0.3358 -0.9419 0.9419 0.3358 123.4845 713.2535)"
              class="st2 st3 st8"
            >
              AVA{" "}
            </text>
            <text
              transform="matrix(0.3358 -0.9419 0.9419 0.3358 134.9798 735.5045)"
              class="st2 st3 st8"
            >
              boutique
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.229 -0.9734 0.9734 -0.229 174.2445 503.9953)"
              class="st2 st3 st7"
            >
              GunAy
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2353 -0.9719 0.9719 -0.2353 209.5943 489.4246)"
              class="st2 st3 st7"
            >
              Aska
            </text>
            <text
              transform="matrix(-0.2353 -0.9719 0.9719 -0.2353 227.4977 485.6043)"
              class="st2 st3 st7"
            >
              butik
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2353 -0.9719 0.9719 -0.2353 267.2617 479.1805)"
              class="st2 st3 st7"
            >
              Sonia
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2193 -0.9757 0.9757 -0.2193 349.0874 550.5085)"
              class="st2 st3 st9"
            >
              Kapris
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2193 -0.9757 0.9757 -0.2193 309.57 560.4175)"
              class="st2 st3 st10"
            >
              Meriluu
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2428 -0.9701 0.9701 -0.2428 271.5074 568.7943)"
              class="st2 st3 st11"
            >
              Hədiyyə{" "}
            </text>
            <text
              transform="matrix(-0.2428 -0.9701 0.9701 -0.2428 279.8476 556.8099)"
              class="st2 st3 st11"
            >
              Baku
            </text>
          </g>
          <g>
            <text
              transform="matrix(1.880905e-02 -0.9998 0.9998 1.880905e-02 175.6638 592.6605)"
              class="st2 st3 st11"
            >
              Gümüş
            </text>
            <text
              transform="matrix(1.880905e-02 -0.9998 0.9998 1.880905e-02 186.7124 590.1683)"
              class="st2 st3 st11"
            >
              {" "}
              Butiki
            </text>
          </g>
          <g>
            <text
              transform="matrix(1.880905e-02 -0.9998 0.9998 1.880905e-02 189.9754 630.9144)"
              class="st2 st3 st12"
            >
              Zərli
            </text>
          </g>
          <g>
            <text
              transform="matrix(9.879423e-02 -0.9951 0.9951 9.879423e-02 477.5786 648.9627)"
              class="st2 st3 st13"
            >
              Panda{" "}
            </text>
            <text
              transform="matrix(9.879423e-02 -0.9951 0.9951 9.879423e-02 490.7033 649.3611)"
              class="st2 st3 st13"
            >
              Coffee
            </text>
          </g>
          <g>
            <text
              transform="matrix(0.322 -0.9467 0.9467 0.322 255.8028 655.0494)"
              class="st2 st3 st14"
            >
              Rispetto
            </text>
          </g>
          <g>
            <text
              transform="matrix(0.2627 -0.9649 0.9649 0.2627 374.7012 671.9052)"
              class="st2 st3 st15"
            >
              SKY{" "}
            </text>
            <text
              transform="matrix(0.2627 -0.9649 0.9649 0.2627 380.8118 686.0068)"
              class="st2 st3 st15"
            >
              Education
            </text>
          </g>
          <g>
            <text
              transform="matrix(0.2627 -0.9649 0.9649 0.2627 302.472 660.8828)"
              class="st2 st3 st16"
            >
              Dərzi{" "}
            </text>
            <text
              transform="matrix(0.2627 -0.9649 0.9649 0.2627 314.1922 666.5615)"
              class="st2 st3 st16"
            >
              Atelye
            </text>
          </g>
          <g>
            <text
              transform="matrix(0.1556 -0.9878 0.9878 0.1556 317.3513 615.6522)"
              class="st2 st3 st17"
            >
              Saffron
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2857 -0.9583 0.9583 -0.2857 238.1857 571.2311)"
              class="st2 st3 st11"
            >
              {" "}
              Lusso{" "}
            </text>
            <text
              transform="matrix(-0.2857 -0.9583 0.9583 -0.2857 248.7842 568.2819)"
              class="st2 st3 st11"
            >
              Gallery
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2353 -0.9719 0.9719 -0.2353 316.4767 472.1492)"
              class="st2 st3 st18"
            >
              lacosmetic
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2488 -0.9686 0.9686 -0.2488 377.5548 446.279)"
              class="st2 st3 st19"
            >
              Porom
            </text>
            <text
              transform="matrix(-0.2488 -0.9686 0.9686 -0.2488 394.6105 450.7767)"
              class="st2 st3 st19"
            >
              Boutique
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2565 -0.9665 0.9665 -0.2565 451.762 418.5393)"
              class="st2 st3 st20"
            >
              Mix
            </text>
            <text
              transform="matrix(-0.2565 -0.9665 0.9665 -0.2565 471.689 431.2516)"
              class="st2 st3 st20"
            >
              Boutique
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2846 -0.9587 0.9587 -0.2846 529.7688 410.4372)"
              class="st2 st3 st21"
            >
              Zera
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2729 -0.962 0.962 -0.2729 589.6703 401.5026)"
              class="st2 st3 st22"
            >
              Arzum
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2071 -0.9783 0.9783 -0.2071 656.4116 389.4424)"
              class="st2 st3 st23"
            >
              Favor
            </text>
          </g>
          <g>
            <text
              transform="matrix(1.533575e-02 -0.9999 0.9999 1.533575e-02 714.7753 372.5013)"
              class="st2 st3 st24"
            >
              İst{" "}
            </text>
            <text
              transform="matrix(1.533575e-02 -0.9999 0.9999 1.533575e-02 732.5681 386.1761)"
              class="st2 st3 st24"
            >
              Brend
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.1376 -0.9905 0.9905 -0.1376 667.6338 477.4405)"
              class="st2 st3 st25"
            >
              Garage
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2977 -0.9547 0.9547 -0.2977 632.8129 481.6444)"
              class="st2 st3 st26"
            >
              Akatsuki
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.3199 -0.9474 0.9474 -0.3199 594.7087 481.1358)"
              class="st2 st3 st27"
            >
              Tac{" "}
            </text>
            <text
              transform="matrix(-0.3199 -0.9474 0.9474 -0.3199 608.6934 483.1691)"
              class="st2 st3 st27"
            >
              Studio
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.256 -0.9667 0.9667 -0.256 562.7853 508.1264)"
              class="st2 st3 st28"
            >
              Affa
            </text>
            <text
              transform="matrix(-0.256 -0.9667 0.9667 -0.256 582.801 522.3784)"
              class="st2 st3 st28"
            >
              Boutique
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2154 -0.9765 0.9765 -0.2154 524.2007 528.2834)"
              class="st2 st3 st29"
            >
              SS Prince{" "}
            </text>
            <text
              transform="matrix(-0.2154 -0.9765 0.9765 -0.2154 536.1111 520.5354)"
              class="st2 st3 st29"
            >
              Princess
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2425 -0.9702 0.9702 -0.2425 476.2642 525.9427)"
              class="st2 st3 st30"
            >
              Anar
            </text>
            <text
              transform="matrix(-0.2425 -0.9702 0.9702 -0.2425 491.9576 523.5684)"
              class="st2 st3 st30"
            >
              Butik
            </text>
          </g>
          <g>
            <text
              transform="matrix(-0.2396 -0.9709 0.9709 -0.2396 401.6902 562.8043)"
              class="st2 st3 st31"
            >
              Winnie{" "}
            </text>
            <text
              transform="matrix(-0.2396 -0.9709 0.9709 -0.2396 418.5853 566.1539)"
              class="st2 st3 st31"
            >
              The Pooh
            </text>
          </g>
          <g>
            <text
              transform="matrix(1.462298e-02 -0.9999 0.9999 1.462298e-02 772.1859 373.8194)"
              class="st2 st3 st32"
            >
              MT
            </text>
            <text
              transform="matrix(1.462298e-02 -0.9999 0.9999 1.462298e-02 791.2114 385.8995)"
              class="st2 st3 st32"
            >
              outlet
            </text>
          </g>
          <g>
            <text
              transform="matrix(-1.250076e-02 -0.9999 0.9999 -1.250076e-02 778.1792 473.015)"
              class="st2 st3 st33"
            >
              Narcisse
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 -4.485053e-03 4.485053e-03 1 884.4933 369.4943)"
              class="st2 st3 st34"
            >
              Şer{" "}
            </text>
            <text
              transform="matrix(1 -4.485053e-03 4.485053e-03 1 827.5449 403.5504)"
              class="st2 st3 st34"
            >
              Akademiya
            </text>
          </g>
          <g>
            <text
              transform="matrix(0.355 -0.9349 0.9349 0.355 82.7323 704.7755)"
              class="st2 st3 st35"
            >
              CH men
            </text>
            <text
              transform="matrix(0.355 -0.9349 0.9349 0.355 94.018 715.05)"
              class="st2 st3 st35"
            >
              collection
            </text>
          </g>
          <g>
            <text
              transform="matrix(0.3436 -0.9391 0.9391 0.3436 39.9482 579.6148)"
              class="st2 st3 st36"
            >
              Xiomi{" "}
            </text>
            <text
              transform="matrix(0.3436 -0.9391 0.9391 0.3436 46.0222 592.6988)"
              class="st2 st3 st36"
            >
              Azerbaijan
            </text>
          </g>
          <g>
            <text
              transform="matrix(0.7994 -0.6008 0.6008 0.7994 69.8427 537.8917)"
              class="st2 st3 st37"
            >
              Kart Kriss
            </text>
          </g>
          <path class="st38" d="M797.8,390.2" />
          <path class="st38" d="M684,389" />
          <g>
            <path
              class="st2"
              d="M64,636.4l-4.1,2.3c-0.6,0.4-1.1,0.9-1.3,1.7l-1.4,4.9l-1.3-1.4c-0.6-0.6-1.3-1-2.1-1.1c0.2-0.8,0-1.6-0.4-2.3
		c-0.9-1.6-3-2.2-4.6-1.3s-2.2,3-1.3,4.6c0.4,0.8,1.1,1.3,1.9,1.6c-0.2,0.7-0.2,1.5,0.2,2.2l4.5,8.2l-0.7,2.3l-1.4,0.8
		c-2.4,1.3-3.3,4.4-2,6.9c1.3,2.4,4.4,3.3,6.9,2l0,0l4.1-2.3c0.6-0.4,1.1-0.9,1.3-1.6l5.1-17.7l1.4-0.8c2.4-1.3,3.3-4.4,2-6.9
		S66.4,635,64,636.4L64,636.4z M66.3,644.6c-0.2,0.1-0.4,0.3-0.4,0.5l-5.2,18.1c-0.1,0.2-0.2,0.4-0.4,0.5l-4.1,2.3
		c-1.6,0.9-3.5,0.3-4.4-1.3s-0.3-3.5,1.3-4.4l1.7-0.9c0.2-0.1,0.4-0.3,0.4-0.6l5.2-18.1c0.1-0.2,0.2-0.4,0.4-0.6l4.1-2.3
		c1.6-0.9,3.5-0.3,4.4,1.3s0.3,3.5-1.3,4.4L66.3,644.6z M49.8,640.7c0.7-0.4,1.7-0.1,2.1,0.6c0.4,0.7,0.1,1.7-0.6,2.1
		c-0.7,0.4-1.7,0.1-2.1-0.6S49,641.1,49.8,640.7z M51.2,646.6c-0.2-0.4-0.1-1,0.4-1.2l1.1-0.6c0.6-0.3,1.4-0.2,1.9,0.3l2,2.2
		l-1.7,5.9L51.2,646.6z M72.1,648.8l-3.2,1.8c-0.4,0.2-0.6,0.8-0.4,1.2s0.8,0.6,1.2,0.4l1.3-0.7l-1.3,4.5c-0.1,0.5,0.1,1,0.6,1.1
		c0.2,0.1,0.5,0,0.7-0.1s0.4-0.3,0.4-0.5l1.3-4.5l0.7,1.3c0.2,0.4,0.8,0.6,1.2,0.4s0.6-0.8,0.4-1.2l-1.8-3.2
		C73.1,648.7,72.6,648.6,72.1,648.8z"
            />
          </g>
          <path class="st0" d="M327,792" />
          <path class="st0" d="M543.5,533.5" />
          <polyline class="st0" points="463.5,544.5 457.5,549.5 456.5,558.5 " />
          <path class="st0" d="M279.5,521.5" />
          <path
            class="st1"
            d="M23.4,597.8c-0.7,12.7-0.3,34.7,9.1,59.7c8.4,22.2,20.4,37.8,28.6,46.8"
          />
          <polyline
            class="st1"
            points="411,715 547,735 561,660 583,660 587,496 644,482 688,477 689,427 749.5,426.5 753,478 835,475 
	834,450 849,450 849,427 919,426 923,545 1058,541 "
          />
        </svg> */}
      </div>
    </div>
  );
};

export default FloorThree;
