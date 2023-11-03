import ContentModal from "../feature/ContentModal";
import ContentModalContextProvider from "../feature/context/ContentModalContext";
import { useEffect } from "react";
import Swal from "sweetalert2";

function UserBrowsePage() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success") === "true") {
      Swal.fire({
        title: "Payment successful",
        text: "Subscription success",
        icon: "success",
        confirmButtonText: "close",
      });
    }
  }, []);

  return (
    <div>
      <ContentModalContextProvider movieId={1} >
        <ContentModal />
      </ContentModalContextProvider>
    </div >
  );

}

export default UserBrowsePage;
