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
  return <div>UserBrowsePage</div>;
}

export default UserBrowsePage;
