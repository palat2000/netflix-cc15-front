import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarAdult from "../components/Browse/NavbarAdult";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNotification } from "../store/slice/notificationSlice";

function LayoutBrowse() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.content.modalIsOpen);
  useEffect(() => {
    dispatch(fetchNotification());
  }, []);
  return (
    <div
      className={`flex flex-col h-[100vh] ${modalIsOpen && "overflow-hidden"}`}
    >
      <div className="flex-1">
        <NavbarAdult />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default LayoutBrowse;
