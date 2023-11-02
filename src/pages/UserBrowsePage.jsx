import ContentModal from "../feature/ContentModal";
import ContentModalContextProvider from "../feature/context/ContentModalContext";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "../config/axios";

function UserBrowsePage() {
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
  }, []);

  return (
    <div>
      UserBrowsePage
      <ContentModalContextProvider movieId={1} >
        <ContentModal />
      </ContentModalContextProvider>
    </div >
  );

}

export default UserBrowsePage;
