import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function Layout() {
  // const modalIsOpen = useSelector(state => state.content.modalIsOpen)
  return (
    <div className={`flex flex-col h-screen`}>
      {/* <div className="flex flex-col h-screen overflow-hidden"> */}
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div >
  );
}

export default Layout;
