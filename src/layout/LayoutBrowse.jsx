import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarAdult from "../components/Browse/NavbarAdult";

function LayoutBrowse() {
  return (
    <div className="flex flex-col h-[100vh]">
      <div className="flex-1">
        <NavbarAdult/>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default LayoutBrowse;
