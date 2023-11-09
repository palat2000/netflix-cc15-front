import ContentModal from "../feature/ContentModal";
import ContentModalContextProvider from "../feature/context/ContentModalContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllContent } from "../store/slice/allContentSlice";
import Swal from "sweetalert2";
import axios from "../config/axios";

import MainTrailer from "../components/Browse/MainTrailer";
import NavbarAdult from "../components/Browse/NavbarAdult";
import VDOSwiperSlides from "../components/Browse/VDOSwiperSlides";
import ButtonMainTrailerGroup from "../components/Browse/ButtonMainTrailerGroup";

import MovieCard from "../components/Browse/MovieCard";

function UserBrowsePage() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allContent.data);
  console.log(movie);

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

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <ContentModalContextProvider movieId={1}>
        <div className="bg-black">
          <div className=" mx-10 z-10 text-white ml-10 bottom-2/4 md:box-content  ">
            <ButtonMainTrailerGroup />
          </div>
          <VDOSwiperSlides movieDetails={movie} />
        </div>
        <ContentModal />
      </ContentModalContextProvider>
      {/* <MovieCard /> */}
    </div>
  );
}

export default UserBrowsePage;
