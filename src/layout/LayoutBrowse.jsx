import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarAdult from "../components/Browse/NavbarAdult";
import { useSelector } from "react-redux";
import ContentModalDetail from "../feature/ContentModalDetail";

function LayoutBrowse() {
  const modalIsOpen = useSelector(state => state.content.modalIsOpen)
  return (
    <div className={`flex flex-col h-[100vh] ${modalIsOpen && "overflow-hidden"}`} >
      <div className="flex-1">
        <NavbarAdult />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default LayoutBrowse;
