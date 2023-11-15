import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// main style
import "./css/style.css";

import { Layout } from "./components/layout";

import { SingleBlog, SingleProduct, SingleService } from "./pages/single";

import { Home, Blogs, ShopsAndRestaurants, Contact, NotFound } from "./pages";

import TextSkeleton from "./components/skeleton/TextSkeleton";
import Map from "./pages/map/Map";

const Help = lazy(() => import("./pages/Help"));

axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

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
          <Route path="icare" element={<Contact />} />
          <Route path="map" element={<Map />} />

          <Route path="store/:id" element={<SingleProduct />} />
          <Route path="services/:id" element={<SingleService />} />

          {/* not found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
