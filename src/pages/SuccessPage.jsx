import { useEffect } from "react";
import axios from "../config/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import HeaderAuthPage from "../components/header/HeaderAuthPage";

function SuccessPage() {
  const navigate = useNavigate();
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
    <div className="h-full">
      <HeaderAuthPage />
      <div className="flex flex-col justify-center items-center">
        <h2>Payment successful</h2>
        <h3>Subscription success</h3>
        <button
          onClick={() => navigate("/choose-profile")}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
