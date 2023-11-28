import { Navigate, Outlet } from "react-router-dom";
import { Header, Footer } from "./index";
import { useSelector } from "react-redux";

const Layout = () => {
  const { user } = useSelector((state) => state.auth);
  if (user) {
    return (
      <main className="min-h-screen flex flex-col justify-between">
        <Header />
        <Outlet />
        <Footer />
      </main>
    );
  }
  return <Navigate to="/login" replace={true} />;
};

export default Layout;
