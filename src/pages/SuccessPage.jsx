import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import HeaderAuthPage from "../components/header/HeaderAuthPage";
import { useDispatch, useSelector } from "react-redux";
import { paymentSuccessAction } from "../store/slice/authSlice";

function SuccessPage() {
  const { error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const sessionId = query.get("session_id");
    if (query.get("success") === "true") {
      dispatch(paymentSuccessAction(sessionId)).then((payload) => {
        if (payload.type === "payment/success/rejected") {
          Swal.fire({
            title: "Error",
            text: error,
            icon: "error",
            confirmButtonText: "Close",
          });
        } else if (payload.type === "payment/success/fulfilled") {
          Swal.fire({
            title: "Payment successful",
            text: "Subscription success",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
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
