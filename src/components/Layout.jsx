import { Outlet } from "react-router-dom";
import Header from "./Header";

const primaryNav = [{ title: "Header", url: "/Header" }];

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
