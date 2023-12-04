import { Outlet } from "react-router-dom";
import { Header, Footer } from "./index";

const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
