import { useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const svgPaths = [
  // unix ayaqqabı
  {
    uid: 1,
    className: "cls-40",
    d: "M287.48,265.23l1,.2,120.5,24.3-7-31.5-47-5.6-2.9-10.7-65.1,14.7c.2,2.9,.3,5.8,.5,8.6Z",
  },
  // elpidio baku
  {
    uid: 2,
    className: "cls-40",
    d: "M478.98,158.73c-8.3,2.3-16.7,4.7-25,7l19,68,26-3c-6.7-24-13.3-48-20-72Z",
  },
  // aska sport
  {
    uid: 3,
    className: "cls-40",
    d: "M381.98,76.73l9,3,30-6c5.7,19.8,11.5,39.6,17.2,59.4l-37.2,9.6c-6.3-22-12.7-44-19-66Z",
  },
  // luxury
  {
    uid: 4,
    className: "cls-40",
    d: "M577.98,228.13c-9.7,.2-19.3,.4-29,.6,.3-11.7,.7-23.3,1-35-5-16.3-10-32.7-15-49,8.5-2.4,17-4.8,25.5-7.2,6.4,17,12.7,34,19,50.9-.5,13.3-1,26.5-1.5,39.7Z",
  },
  // aska butik
  {
    uid: 5,
    className: "cls-40",
    d: "M786.98,115.73c1,17.3,2,34.7,3,52-13.3,.7-26.7,1.3-40,2-.5-8.4-.9-16.8-1.4-25.2-.5-9.3-1.1-18.5-1.6-27.8,13.3-.3,26.7-.7,40-1Z",
  },
  // glent
  {
    uid: 6,
    className: "cls-40",
    d: "M681.98,16.13c-.7,22.3-1.3,44.6-2.1,66.9,22.7-.1,45.4-.2,68.1-.3,0-11.1,0-22.2,.1-33.4,.1-11.3,.1-22.5,.3-33.7-22.2,.2-44.3,.3-66.4,.5Z",
  },
  // vn toys
  {
    uid: 7,
    className: "cls-40",
    d: "M593.48,26.43c4.8,20.9,9.6,41.9,14.4,62.8l72-6.2,1.5-67.4c-7.1-3.1-24-9.5-45.8-6.7-21.4,2.7-36.1,12.8-42.1,17.5Z",
  },
  // rounded bos sona orta
  {
    uid: 8,
    className: "cls-40",
    d: "M238.98,303.73c-4.7,15.3-9.3,30.7-14,46-12.2-3-24.3-5.9-36.5-8.9-20.9-5.1-41.9-10.3-62.8-15.4-2.7-2.6-6-6.5-8.8-11.8-4.8-9.3-5.2-18-5.1-22.6,0,0,.4-9.4,5.1-18.5,9.8-18.9,40-27.9,68-35.6,29-8,55.2-14.6,78-20,3.7,14.3,7.3,28.7,11,43-15.8,3.7-31.6,7.4-47.4,11.1-.4,7.2-.5,14.8-.2,22.6,.1,2.1,.1,4.1,.2,6.2,2.1,.7,4.3,1.4,6.4,2.1,2.1,.5,4.1,1.1,6.1,1.8Z",
  },
  // mulen ruj
  {
    uid: 9,
    className: "cls-40",
    d: "M339.98,196.73c2.6,9,5.1,18.2,7.6,27.5,2.6,9.6,5,19,7.3,28.4l47,5.6,2.5-27.8c-4.4-15.2-8.6-30.4-13-45.6-8.3,1.7-16.9,3.5-25.6,5.6-8.8,2-17.4,4.1-25.8,6.3Z",
  },
  // prada parfum
  {
    uid: 10,
    className: "cls-40",
    d: "M534.98,144.73c4.7,16,9.3,32,14,48v36c-7.3,.3-14.7,.7-22,1-4.7-26.3-9.3-52.7-14-79,7.3-2,14.7-4,22-6Z",
  },

  // ad dress
  {
    uid: 11,
    className: "cls-40",
    d: "M453.98,165.73c-6.3,1.9-12.7,3.9-19,5.8l17.5,66.9c6.8-1.6,13.7-3.1,20.5-4.7-6.3-22.7-12.7-45.3-19-68Z",
  },
  // ayna boutique
  {
    uid: 12,
    className: "cls-40",
    d: "M684.48,117.53l-1,51.5-45.3,5.1c-3.6-17.3-7.2-34.7-10.8-52,19.1-1.5,38.1-3.1,57.1-4.6Z",
  },
  // shamplena
  {
    uid: 13,
    className: "cls-40",
    d: "M560.48,137.53c10.6-2.8,21.3-5.5,31.9-8.2l17.5,51.5-30.4,7.7c-6.3-17-12.6-34-19-51Z",
  },
  // pro cosmetics
  {
    uid: 14,
    className: "cls-40",
    d: "M627.38,122.13l11.1,51.9c-9.6,2.3-19,4.5-28.6,6.8-5.9-17.2-11.6-34.3-17.5-51.5,11.7-2.4,23.4-4.8,35-7.2Z",
  },
  // aura studio
  {
    uid: 15,
    className: "cls-40",
    d: "M1068.88,198.23c2,16.5-2,29.6-4.6,36.5-46.3,1.3-92.6,2.8-138.9,4.1l-4.1-122.5-72,1c-.7-11.6-1.5-23.2-2.2-34.8h-99V15.53c4.2-2.9,15.2-9.6,30.7-9.9,13-.2,22.7,4.2,27.2,6.7l45.4-2c5.8-3.3,17.9-9.3,34.5-9.8,16.9-.5,29.5,4.7,35.5,7.7,14-3.9,33.7-7.8,57.1-7.7,26.1,.1,47.5,5.1,62.3,9.8,7,7.9,26.8,32.2,30.3,69.5,3.3,34.6-9.2,60.4-14.4,70-3.9,.5-7.9,1-11.8,1.5,4.8,4.9,20.8,21,24,46.9Z",
  },
  // nb acessories
  {
    uid: 16,
    className: "cls-40",
    d: "M547.98,39.73l15,60c15-3.5,29.9-7,44.9-10.5-4.8-20.9-9.6-41.9-14.4-62.8-15.2,4.4-30.3,8.9-45.5,13.3Z",
  },
  // rose girl
  {
    uid: 17,
    className: "cls-40",
    d: "M547.98,39.73l15,60c-14,3.7-28,7.3-42,11l-18-60c15-3.7,30-7.3,45-11Z",
  },
  // bos zona sonianın yanı
  {
    uid: 18,
    className: "cls-40",
    d: "M306.98,101.73c4.3,20.7,8.7,41.3,13,62,10.3-2.7,20.7-5.3,31-8-6.3-24.3-12.7-48.7-19-73-2.3,1.2-4.6,2.5-7,4-7.6,4.8-13.5,10.1-18,15Z",
  },
  // catreen
  {
    uid: 19,
    className: "cls-40",
    d: "M459.98,62.73c5.7,20,11.3,40,17,60,14.7-4,29.3-8,44-12l-18-60c-14.3,4-28.7,8-43,12Z",
  },
  // dr.brown
  {
    uid: 20,
    className: "cls-40",
    d: "M306.98,101.73c4.3,20.7,8.7,41.3,13,62-12.3,3-24.7,6-37,9-4.5-20.6-9-41.3-13.5-61.9,12.5-3,25-6.1,37.5-9.1Z",
  },
  // sis
  {
    uid: 21,
    className: "cls-40",
    d: "M236.98,118.73c4.7,20.7,9.3,41.3,14,62-11.7,3-23.3,6-35,9-4.7-21-9.3-42-14-63,11.7-2.7,23.3-5.3,35-8Z",
  },
  // style bag
  {
    uid: 22,
    className: "cls-40",
    d: "M161.98,203.73l-24,6c-6-21.3-12-42.7-18-64,9.3-2,18.7-4,28-6,4.7,21.3,9.3,42.7,14,64Z",
  },
  // connect
  {
    uid: 23,
    className: "cls-40",
    d: "M37.98,209.73c13.7,8.3,27.3,16.7,41,25,12.7-6.3,25.3-12.7,38-19-10.7-20-21.3-40-32-60-7.1,5.2-15.4,12-23.6,20.9-11,11.9-18.4,23.7-23.4,33.1Z",
  },
  // flame.az
  {
    uid: 24,
    className: "cls-40",
    d: "M109.98,354.73c-11.3,26-22.7,52-34,78,10.7,3.7,21.3,7.3,32,11,11-27.7,22-55.3,33-83-10.3-2-20.7-4-31-6Z",
  },
  // zera
  {
    uid: 25,
    className: "cls-40",
    d: "M186.98,369.73c-15.3-3-30.7-6-46-9-11.3,27.7-22.7,55.3-34,83l45,12c11.7-28.7,23.3-57.3,35-86Z",
  },
  // junior gentleman ledies
  {
    uid: 26,
    className: "cls-40",
    d: "M186.98,369.73c-11.7,28.8-23.3,57.5-35,86.3,22.7,5.6,45.3,11.2,68,16.7,11.7-29.7,23.3-59.3,35-89-22.7-4.7-45.3-9.3-68-14Z",
  },
  // ram zotti
  {
    uid: 27,
    className: "cls-40",
    d: "M323.98,398.73l-69-15c-11.7,29.7-23.3,59.3-35,89,23.7,5.7,47.3,11.3,71,17,11-30.3,22-60.7,33-91Z",
  },
  // sahmat evi
  {
    uid: 28,
    className: "cls-40",
    d: "M400.98,413.73c-11,30.3-22,60.7-33,91-25.7-5-51.3-10-77-15,11-30.3,22-60.7,33-91,25.7,5,51.3,10,77,15Z",
  },

  // izim accessories
  {
    uid: 29,
    className: "cls-40",
    d: "M271.88,310.93c-11-2.4-21.9-4.8-32.9-7.2-4.7,15.3-9.3,30.7-14,46,10.8,2.9,21.6,5.7,32.5,8.6l14.4-47.4Z",
  },
  {
    uid: 30,
    className: "cls-40",
    d: "M501.78,381.13c-10.9-.7-21.8-1.4-32.8-2.1",
  },

  // turkuaz
  {
    uid: 31,
    className: "cls-40",
    d: "M50.98,414.73c11.7-21,23.3-42,35-63-6-3.7-12-7.3-18-11-11.3,19-22.7,38-34,57,2.2,2.8,4.9,5.9,8,9s6.2,5.8,9,8Z",
  },
  // rizanna
  {
    uid: 32,
    className: "cls-40",
    d: "M45.98,312.73l-36.2,44.7c2.3,6.6,5.8,14.7,11.2,23.3,4.3,6.9,8.9,12.6,13,17,11.3-19,22.7-38,34-57-7.3-9.3-14.7-18.7-22-28Z",
  },

  // misstyle
  {
    uid: 33,
    className: "cls-40",
    d: "M84.98,155.73c10.3,20,20.7,40,31,60,7.3-2,14.7-4,22-6-6-21.3-12-42.7-18-64-11.7,3.3-23.3,6.7-35,10Z",
  },
  // agat ametist
  {
    uid: 34,
    className: "cls-40",
    d: "M175.98,132.73c-9.3,2.3-18.7,4.7-28,7,4.7,21.3,9.3,42.7,14,64,9.3-2.3,18.7-4.7,28-7-4.7-21.3-9.3-42.7-14-64Z",
  },
  // fiore silver
  {
    uid: 35,
    className: "cls-40",
    d: "M175.98,132.73c8.7-2,17.3-4,26-6,4.7,21,9.3,42,14,63-8.7,2.3-17.3,4.7-26,7-4.7-21.3-9.3-42.7-14-64Z",
  },
  // iris colection
  {
    uid: 36,
    className: "cls-40",
    d: "M236.98,118.73c4.7,20.7,9.3,41.3,14,62,10.7-2.7,21.3-5.3,32-8-4.5-20.6-9-41.3-13.5-61.9l-32.5,7.9Z",
  },
  // sonia
  {
    uid: 37,
    className: "cls-40",
    d: "M381.98,76.73c6.3,22,12.7,44,19,66-16.7,4.3-33.3,8.7-50,13-6.3-24.3-12.7-48.7-19-73,7.9-4.1,21.9-9.6,39-8,4,.4,7.7,1.1,11,2Z",
  },
  // roni wear
  {
    uid: 38,
    className: "cls-40",
    d: "M459.98,62.73c-13,3.7-26,7.3-39,11,5.7,19.7,11.3,39.3,17,59,13-3.3,26-6.7,39-10-5.7-20-11.3-40-17-60Z",
  },
  // Bakust reet
  {
    uid: 39,
    className: "cls-40",
    d: "M577.98,228.13l-1.3,69.8c-42.2-.4-84.4-.8-126.7-1.2,.8-19.4,1.6-38.9,2.5-58.3l20.5-4.7,26-3,79-2.6Z",
  },
  {
    uid: 40,
    className: "cls-40",
    d: "M271.88,310.93c-11-2.4-21.9-4.8-32.9-7.2-4.7,15.3-9.3,30.7-14,46,10.8,2.9,21.6,5.7,32.5,8.6l14.4-47.4Z",
  },
];

const dynamicNames = [
  {
    uid: 10,
    text: "Aura Studio",
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
  },
  {
    uid: 9,
    text: "Glent",
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
  },
  {
    uid: 8,
    text: "VN toys",
    x1: 3,
    x2: 3,
    y1: 20,
    y2: -10,
  },
  {
    uid: 2,
    text: "NB accessories",
    x1: 0,
    x2: 10,
    y1: 20,
    y2: -10,
  },
  {
    uid: 1,
    text: "Rose Girl",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -20,
  },
  {
    uid: 6,
    text: "Catreen",
    x1: 5,
    x2: 5,
    y1: 20,
    y2: -10,
  },
  {
    uid: 3,
    text: "Roni Wear",
    x1: 15,
    x2: 10,
    y1: 20,
    y2: -10,
  },
  {
    uid: 12,
    text: "Aska Sport",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 11,
    text: "Sonia",
    x1: 10,
    x2: 10,
    y1: 20,
    y2: -30,
  },
  {
    uid: 11,
    text: "",
    x1: 10,
    x2: 10,
    y1: 20,
    y2: -30,
  },
  {
    uid: 14,
    text: "Dr.Brown",
    x1: -10,
    x2: -10,
    y1: 20,
    y2: -10,
  },
  {
    uid: 16,
    text: "Iris Collection",
    x1: 10,
    x2: 20,
    y1: 15,
    y2: -6,
  },
  {
    uid: 15,
    text: "SIS",
    x1: 10,
    x2: 20,
    y1: 15,
    y2: -8,
  },
  {
    uid: 13,
    text: "Fiore Silver",
    x1: 10,
    x2: 10,
    y1: 20,
    y2: -20,
  },
  {
    uid: 7,
    text: "Agat Ametist",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Style bag",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Misstyle",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Connect",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Rizanna",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Turkuaz",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Plame.az",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Zera",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Junior gentleman ladies",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Ram zotti",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Şahmat evi",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Esko",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Aska Butik",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Ayna boutique",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Pro cosmetics",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Shamplena",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Luxury Brandiju",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Prada parfum",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "İntime Azerbaijan",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Elpidio Baku",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "AD Dress",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Mulem Ruj",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Parfume de as",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "VM Store",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Uniz ayaqqabı",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Eloor",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Ns moda",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "izim accessories",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "AzTel",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Hale accessory",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Bakust reet",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
  {
    uid: 7,
    text: "Dosso dossi",
    x1: 0,
    x2: 0,
    y1: 20,
    y2: -10,
  },
];

const svgTexts = [
  // sahmat
  {
    uid: 10,
    className: "cls-10",
    transform: "translate(333.04 491.06) rotate(-71.46)",
  },
  // evi
  {
    uid: 9,
    className: "cls-10",
    transform: "translate(365.01 474.67) rotate(-71.46)",
  },
  // ramzotti
  {
    uid: 8,
    className: "cls-13",
    transform: "translate(265.83 478.11) rotate(-73.13)",
  },
  // zera
  {
    uid: 2,
    className: "cls-6",
    transform: "translate(141.9 430.99) rotate(-68.17)",
  },
  // esko
  {
    uid: 1,
    className: "cls-23",
    transform: "translate(808.26 155.85) rotate(-90.72)",
  },
  // aska butik
  {
    uid: 6,
    className: "cls-23",
    transform: "translate(765.04 158.07) rotate(-93.65)",
  },
  // ayna boutique
  {
    uid: 3,
    className: "cls-23",
    transform: "translate(653.98 160.81) rotate(-93.65)",
  },

  // procosmetics
  {
    uid: 12,
    className: "cls-22",
    transform: "translate(617.13 163.1) rotate(-104.89)",
  },

  // Shamplena
  {
    uid: 11,
    className: "cls-12",
    transform: "translate(597.29 182.6) rotate(-108.15)",
  },
  // Luxury brandiju
  {
    uid: 14,
    className: "cls-9",
    transform: "translate(562.78 193.85) rotate(-109.21)",
  },
  // prada parfum
  {
    uid: 16,
    className: "cls-9",
    transform:
      "translate(540.76 213.94) rotate(-100.6) scale(.88 1) skewX(-.21)",
  },
  // intime Azerbaijan
  {
    uid: 15,
    className: "cls-21",
    transform: "translate(505.3 207.19) rotate(-104.77)",
  },
  // Elpidio Baku
  {
    uid: 13,
    className: "cls-12",
    transform: "translate(488.05 222.9) rotate(-108.15)",
  },
  // Add dress
  {
    uid: 7,
    className: "cls-12",
    transform: "translate(464.75 222.9) rotate(-108.15)",
  },
  //Flame.az
  {
    uid: 7,
    className: "cls-31",
    transform: "translate(100.25 430.8) rotate(-68.46)",
  },
  //Connect
  {
    uid: 7,
    className: "cls-32",
    transform: "translate(95.4 221.73) rotate(-127.97)",
  },
  //Junior gentleman ladies
  {
    uid: 7,
    className: "cls-16",
    transform: "translate(184.74 437.65) rotate(-70.74)",
  },
  //Misstyle
  {
    uid: 7,
    className: "cls-33",
    transform: "translate(126.53 204.31) rotate(-110.27)",
  },

  //style bag
  {
    uid: 7,
    className: "cls-24",
    transform: "translate(152.65 201.27) rotate(-105.67)",
  },

  //fiore silver
  {
    uid: 7,
    className: "cls-32",
    transform: "translate(198.71 179.09) rotate(-103.62)",
  },

  //Iris collection
  {
    uid: 7,
    className: "cls-2",
    transform: "translate(258.28 153.12) rotate(-101.5)",
  },

  // Dr.B rown
  {
    uid: 7,
    className: "cls-2",
    transform: "translate(303.08 162.82) rotate(-101.5)",
  },

  // Mulen ruj
  {
    uid: 7,
    className: "cls-2",
    transform: "translate(385.56 251.21) rotate(-101.5)",
  },
  // parfume de as
  {
    uid: 7,
    className: "cls-5",
    transform: "translate(329.25 243.06) rotate(-104.7)",
  },

  // Vm store
  {
    uid: 7,
    className: "cls-5",
    transform: "translate(291.99 255.86) rotate(-104.7)",
  },

  // Sonia
  {
    uid: 7,
    className: "cls-7",
    transform: "translate(381.67 141.15) rotate(-102.38)",
  },

  // roni wear
  {
    uid: 7,
    className: "cls-25",
    transform: "translate(451.37 115.72) rotate(-106.24)",
  },

  // aska sport
  {
    uid: 7,
    className: "cls-28",
    transform: "translate(415.61 129.14) rotate(-106.24)",
  },

  // catreen
  {
    uid: 7,
    className: "cls-14",
    transform: "translate(500.29 115.45) rotate(-104.17)",
  },

  // aura studio
  {
    uid: 7,
    className: "cls-20",
    transform: "translate(928.56 69.21) rotate(-.58) scale(1.03 1)",
  },

  // rose girl
  {
    uid: 7,
    className: "cls-11",
    transform: "translate(543.34 102.88) rotate(-104.17)",
  },

  // nb accessories
  {
    uid: 7,
    className: "cls-30",
    transform: "translate(575.19 74.34) rotate(-106.93)",
  },

  // vn toys
  {
    uid: 7,
    className: "cls-3",
    transform: "translate(649.01 82.74) rotate(-93.96)",
  },

  // Bakust reet
  {
    uid: 7,
    className: "cls-3",
    transform: "translate(468.03 271.87) rotate(-1.21)",
  },

  // Unix ayyaqqabı
  {
    uid: 7,
    className: "cls-19",
    transform: "translate(321.11 263.4) rotate(9.93)",
  },

  // Eloor
  {
    uid: 7,
    className: "cls-4",
    transform: "translate(330.6 293.23) rotate(10.84)",
  },

  //  NS moda
  {
    uid: 7,
    className: "cls-4",
    transform: "translate(311.85 315.17) rotate(10.84)",
  },

  //  hale accessory
  {
    uid: 7,
    className: "cls-18",
    transform: "translate(355.82 369.07) rotate(-76.86) scale(.97 1)",
  },

  //  aztel
  {
    uid: 7,
    className: "cls-8",
    transform: "translate(292.31 363.14) rotate(-74.26) scale(.97 1)",
  },

  //   Dosso dossi
  {
    uid: 7,
    className: "cls-26",
    transform: "translate(458.96 320.97) rotate(3.47)",
  },

  //   glent
  {
    uid: 7,
    className: "cls-17",
    transform: "translate(721.8 77.3) rotate(-89.17)",
  },

  //   agat ametist
  {
    uid: 7,
    className: "cls-32",
    transform: "translate(168.31 184.2) rotate(-103.2)",
  },

  //   sis
  {
    uid: 7,
    className: "cls-29",
    transform: "translate(235.87 167.02) rotate(-103.2)",
  },

  //   izim accessories
  {
    uid: 7,
    className: "cls-27",
    transform: "translate(246.01 339.42) rotate(-74.26) scale(.97 1)",
  },

  //  turkuaz
  {
    uid: 7,
    className: "cls-15",
    transform: "translate(50.46 404.8) rotate(-59.5)",
  },

  //  rizanna
  {
    uid: 7,
    className: "cls-15",
    transform: "translate(24.61 376.52) rotate(-52.81)",
  },

  //  rizanna
  {
    uid: 7,
    className: "cls-15",
    transform: "translate(24.61 376.52) rotate(-52.81)",
  },
];

const svgPolygons = [
  {
    uid: 41,
    className: "cls-40",
    points:
      "282.98 288.73 404.28 319.03 403.58 343.93 274.78 311.63 282.98 288.73",
  },
  {
    uid: 42,
    className: "cls-40",
    points:
      "575.38 357.33 576.68 297.93 449.98 296.73 445.98 343.73 506.48 351.13 552.78 357.33 575.38 357.33",
  },
  {
    uid: 43,
    className: "cls-40",
    points:
      "282.98 288.73 287.48 265.23 408.98 289.73 404.28 319.03 282.98 288.73",
  },
  {
    uid: 44,
    className: "cls-40",
    points:
      "834.78 166.93 832.98 114.73 786.98 115.73 789.98 167.73 834.78 166.93",
  },
  {
    uid: 45,
    className: "cls-40",
    points:
      "330.98 325.93 319.18 373.73 394.28 392.23 403.58 343.93 330.98 325.93",
  },
  {
    uid: 46,
    className: "cls-40",
    points:
      "271.88 310.93 330.98 325.93 319.18 373.73 257.48 358.33 271.88 310.93",
  },
  {
    uid: 47,
    className: "cls-40",
    points:
      "300.08 206.53 263.08 215.73 273.38 260.03 310.38 251.83 300.08 206.53",
  },
  {
    uid: 48,
    className: "cls-40",
    points:
      "299.08 206.53 309.38 251.83 352.08 242.03 341.28 196.23 299.08 206.53",
  },
  {
    uid: 49,
    className: "cls-40",
    points:
      "526.98 229.73 498.98 230.73 478.98 158.73 512.98 150.73 526.88 229.23",
  },
];

const FloorTwo = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (item, e) => {
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
    } else {
      return (
        <tspan x={x2} dy={y2}>
          {"Boş zona"
            .trim()
            .split(" ")
            .map((word, index) => {
              return (
                <tspan key={index} x={x1} dy={index > 0 ? y1 : y2}>
                  {word}
                </tspan>
              );
            })}
        </tspan>
      );
    }
  };

  return (
    <div className="bg-white rounded-lg w-full select-none h-auto">
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

      <div className="relative w-full max-full mx-auto group  bg-slate-100  text-colorPrimary  mb-5 h-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1072.13 505.31"
          className="w-full h-full"
        >
          <defs>
            <style>{`.cls-1{letter-spacing:-.03em;}.cls-2{font-size:12.9px;}.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19,.cls-20,.cls-21,.cls-22,.cls-23,.cls-24,.cls-25,.cls-26,.cls-27,.cls-28,.cls-29,.cls-30,.cls-31,.cls-32,.cls-33{fill:#4d4d4d;font-family:Raleway-Regular, Raleway;isolation:isolate;}.cls-34{letter-spacing:-.02em;}.cls-35{letter-spacing:0em;}.cls-3{font-size:17.99px;}.cls-36{letter-spacing:-.02em;}.cls-37{letter-spacing:-.03em;}.cls-38{fill:#1f6524;}.cls-39,.cls-40{fill:#fff;}.cls-41{letter-spacing:0em;}.cls-42{letter-spacing:-.01em;}.cls-43{letter-spacing:-.03em;}.cls-44{letter-spacing:0em;}.cls-4{font-size:11.56px;}.cls-5{font-size:9.78px;}.cls-45{letter-spacing:0em;}.cls-6{font-size:20.93px;}.cls-46{letter-spacing:-.02em;}.cls-47{letter-spacing:0em;}.cls-48{letter-spacing:-.02em;}.cls-49{letter-spacing:0em;}.cls-50{letter-spacing:-.05em;}.cls-51{letter-spacing:0em;}.cls-7{font-size:22.43px;}.cls-52{letter-spacing:0em;}.cls-8{font-size:16.73px;}.cls-53{letter-spacing:0em;}.cls-54{letter-spacing:-.01em;}.cls-55{letter-spacing:-.02em;}.cls-56{letter-spacing:0em;}.cls-9{font-size:10.05px;}.cls-57{letter-spacing:-.11em;}.cls-58{letter-spacing:0em;}.cls-10{font-size:20.93px;}.cls-59{letter-spacing:0em;}.cls-11{font-size:13.75px;}.cls-60{letter-spacing:-.01em;}.cls-61{letter-spacing:0em;}.cls-62{letter-spacing:0em;}.cls-63{letter-spacing:0em;}.cls-64{letter-spacing:-.03em;}.cls-65{fill:#f5f8f9;}.cls-12{font-size:10.05px;}.cls-66{letter-spacing:-.02em;}.cls-67{letter-spacing:-.01em;}.cls-68{letter-spacing:-.11em;}.cls-13{font-size:20.93px;}.cls-69{letter-spacing:0em;}.cls-70{fill:#22b37f;}.cls-71{letter-spacing:0em;}.cls-72{letter-spacing:-.03em;}.cls-73{letter-spacing:-.01em;}.cls-74{letter-spacing:0em;}.cls-75{letter-spacing:-.01em;}.cls-76{letter-spacing:0em;}.cls-14{font-size:14.7px;}.cls-77{letter-spacing:0em;}.cls-15{font-size:14.89px;}.cls-78{letter-spacing:0em;}.cls-79{letter-spacing:0em;}.cls-80{fill:#918291;}.cls-81{letter-spacing:-.01em;}.cls-82{fill:#7a6d79;}.cls-83{letter-spacing:-.03em;}.cls-84{letter-spacing:0em;}.cls-16{font-size:15.86px;}.cls-17{font-size:22.49px;}.cls-85{letter-spacing:0em;}.cls-18{font-size:10.13px;}.cls-19{font-size:11.22px;}.cls-86{letter-spacing:0em;}.cls-87{fill:none;}.cls-87,.cls-40{stroke:#4d4d4d;stroke-miterlimit:10;}.cls-20{font-size:32.8px;}.cls-21{font-size:10.94px;}.cls-22{font-size:10.89px;}.cls-88{letter-spacing:0em;}.cls-89{letter-spacing:0em;}.cls-23{font-size:11.66px;}.cls-24{font-size:13.63px;}.cls-25{font-size:14.78px;}.cls-90{letter-spacing:-.01em;}.cls-91{letter-spacing:-.03em;}.cls-92{letter-spacing:0em;}.cls-93{letter-spacing:0em;}.cls-94{letter-spacing:0em;}.cls-95{letter-spacing:-.09em;}.cls-96{letter-spacing:0em;}.cls-97{letter-spacing:0em;}.cls-98{letter-spacing:-.02em;}.cls-26{font-size:17.99px;}.cls-99{letter-spacing:-.03em;}.cls-100{letter-spacing:-.03em;}.cls-27{font-size:8.82px;}.cls-101{letter-spacing:0em;}.cls-102{letter-spacing:0em;}.cls-28{font-size:18.48px;}.cls-103{letter-spacing:-.01em;}.cls-104{fill:#57be92;}.cls-105{letter-spacing:0em;}.cls-106{letter-spacing:-.03em;}.cls-107{letter-spacing:-.01em;}.cls-29{font-size:21.52px;}.cls-108{fill:#685e68;}.cls-109{letter-spacing:0em;}.cls-110{letter-spacing:-.06em;}.cls-111{letter-spacing:-.03em;}.cls-30{font-size:10.09px;}.cls-112{letter-spacing:-.03em;}.cls-31{font-size:17.28px;}.cls-113{letter-spacing:-.03em;}.cls-114{letter-spacing:-.01em;}.cls-115{letter-spacing:-.03em;}.cls-116{letter-spacing:0em;}.cls-32{font-size:13.63px;}.cls-117{letter-spacing:-.02em;}.cls-118{letter-spacing:0em;}.cls-119{letter-spacing:0em;}.cls-120{letter-spacing:0em;}.cls-121{letter-spacing:-.02em;}.cls-33{font-size:13.63px;}`}</style>
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
          {svgPolygons.map((item) => (
            <polygon
              key={item.uid}
              {...item}
              style={{
                fill: selected?.uid === item?.uid ? "currentcolor" : "#fff",
                zIndex: 10,
              }}
              onClick={(e) => handleClick(item, e)}
            />
          ))}

          {/* {svgTexts.map((item) => (
            <text
              key={item.uid}
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
          ))} */}
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
            class="cls-87"
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
  );
};

export default FloorTwo;
