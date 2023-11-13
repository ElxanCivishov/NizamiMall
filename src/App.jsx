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

import { Contact, Home, OurStore, NotFound } from "./pages";

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
        <Route path="/map" element={<Map />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="elaqe" element={<Contact />} />
          <Route path="store" element={<OurStore />} />
          <Route path="store/:id" element={<SingleProduct />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="services/:id" element={<SingleService />} />

          <Route
            path="yardım"
            element={
              <Suspense fallback={<TextSkeleton />}>
                <Help />
              </Suspense>
            }
          />
          {/* not found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
