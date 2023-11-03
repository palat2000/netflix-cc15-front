import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function Layout() {
  const modalIsOpen = useSelector(state => state.movie.modalIsOpen)
  return (
    <div className={`flex flex-col h-screen ${modalIsOpen && "overflow-hidden"} `}>
      {/* // <div className="flex flex-col h-screen overflow-hidden"> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
