import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllContent } from "../store/slice/allContentSlice";
import Swal from "sweetalert2";
import axios from "../config/axios";
import MainTrailer from "../components/Browse/MainTrailer";
import NavbarAdult from "../components/Browse/NavbarAdult";
import VDOSwiperSlides from "../components/Browse/VDOSwiperSlides";
import LoadingPage from "./LoadingPage";

function TVShowsPage() {
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector((store) => store.allContent);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const sessionId = query.get("session_id");
    const subscription = async (sessionId) => {
      try {
        await axios.post(`/payment/success-subscription/${sessionId}`);
        Swal.fire({
          title: "Payment successful",
          text: "Subscription success",
          icon: "success",
          confirmButtonText: "close",
        });
      } catch (err) {
        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    };
    if (query.get("success") === "true") {
      subscription(sessionId);
    }
    dispatch(fetchAllContent());
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div>
      <div className="bg-black">
        <NavbarAdult />
        <div className=" mx-10 z-50 fixed text-white ml-10 bottom-1/4 md:box-content  "></div>
        <MainTrailer />
        <VDOSwiperSlides />
      </div>
    </div>
  );
}

export default TVShowsPage;
