import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import mainCatReducer from "../features/mainCategory/mainCategorySlice";
import subCatReducer from "../features/subCategory/subCategorySlice";
import rentReducer from "../features/rent/rentSlice";
import layoutReducer from "../features/layout/layoutSlice";

import authReducer from "../features/auth/authSlice";
import newsletterReducer from "../features/newsletter/newsletterSlice";
import blogReducer from "../features/blogs/blogSlice";
import serviceReducer from "../features/service/serviceSlice";
import mapReducer from "../features/map/mapSlice";

import homeServiceInfoReducer from "../features/home/service/serviceInfoSlice";
import serviceInfoReducer from "../features/service/serviceInfoSlice";
import homeBlogInfoReducer from "../features/home/blog/blogInfoSlice";
import homeSliderReducer from "../features/home/slider/sliderSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    auth: authReducer,
    mainCats: mainCatReducer,
    subCats: subCatReducer,
    rents: rentReducer,
    blogs: blogReducer,
    services: serviceReducer,
    maps: mapReducer,

    layout: layoutReducer,
    newsletters: newsletterReducer,

    serviceInfo: homeServiceInfoReducer,
    serviceText: serviceInfoReducer,
    blogInfo: homeBlogInfoReducer,
    homeSlider: homeSliderReducer,
  },
});
