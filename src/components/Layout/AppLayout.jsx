import { Outlet } from "react-router-dom";
import Header from "../UI/Header.jsx";
import Footer from "../UI/Footer.jsx";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />        {/* Renders Home/About/etc. */}
      <Footer />
    </>
  );
}
