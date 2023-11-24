import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// main style
import "./css/style.css";

import "react-quill/dist/quill.snow.css";

import { Layout } from "./components/layout";

import { SingleBlog, SingleProduct, SingleService } from "./pages/single";

import {
  Home,
  Blogs,
  ShopsAndRestaurants,
  NotFound,
  Rent,
  ErrorPage,
} from "./pages";

import Map from "./pages/map/Map";

// admin
import { AdminLayout, NotFoundAdmin } from "./admin/components";
import {
  Blog,
  Bloglist,
  ChangePassword,
  Dashboard,
  Newsletter,
  Profile,
  Rents,
  Service,
  Services,
  ServisBanner,
  ViewRent,
} from "./admin/pages";
import { EditLayout } from "./admin/pages/editLayout";
import { ParentCat, SubCat } from "./admin/pages/categories";
import Login from "./admin/pages/auth/login/Login";
import { BlogInfo, ServisInfo, Slider, Sliders } from "./admin/pages/home";
import { Floor, FloorOne, FloorThree, FloorTwo } from "./admin/pages/map";

function App() {
  const location = useLocation();
  const getTokenFromLocalStorage = localStorage.getItem("MallAdmin")
    ? JSON.parse(localStorage.getItem("MallAdmin"))
    : null;

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  // Set Axios default headers with the token
  useEffect(() => {
    if (getTokenFromLocalStorage) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${getTokenFromLocalStorage.token}`;
    }
  }, [getTokenFromLocalStorage]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="magaza-ve-restoranlar"
            element={<ShopsAndRestaurants />}
          />
          <Route path="magaza-ve-restoranlar/:id" element={<SingleService />} />
          <Route path="xeberler-ve-yenilikler" element={<Blogs />} />
          <Route path="xeber/:id" element={<SingleBlog />} />
          <Route path="icare" element={<Rent />} />
          <Route path="map" element={<Map />} />

          <Route path="store/:id" element={<SingleProduct />} />
          <Route path="services/:id" element={<SingleService />} />

          {/* not found */}
          <Route path="*" element={<NotFound />} />
          <Route path="error" element={<ErrorPage />} />
        </Route>

        {/* auth */}
        <Route path="/login" element={<Login />} />

        {/* admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="home/sliders" element={<Sliders />} />
          <Route path="home/slider" element={<Slider />} />
          <Route path="home/slider/:id" element={<Slider />} />
          <Route path="home/servis" element={<ServisInfo />} />
          <Route path="home/blog" element={<BlogInfo />} />
          <Route path="service-info" element={<ServisBanner />} />
          <Route path="services" element={<Services />} />
          <Route path="service" element={<Service />} />
          <Route path="service/:id" element={<Service />} />
          <Route path="blogs" element={<Bloglist />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Blog />} />
          <Route path="rents" element={<Rents />} />
          <Route path="rents/:id" element={<ViewRent />} />

          <Route path="map/floorOne" element={<FloorOne />} />
          <Route path="map/floorTwo" element={<FloorTwo />} />
          <Route path="map/floorThree" element={<FloorThree />} />
          <Route path="map" element={<Floor />} />
          <Route path="map/:id" element={<Floor />} />

          <Route path="categories/parent" element={<ParentCat />} />
          <Route path="categories/sub" element={<SubCat />} />
          <Route path="layout" element={<EditLayout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-password" element={<ChangePassword />} />
          <Route path="subscribe" element={<Newsletter />} />
          {/* <Route path="profile" element={<Contact />} /> */}
          <Route path="*" element={<NotFoundAdmin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
