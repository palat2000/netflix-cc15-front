import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import HeaderAuthPage from "../components/header/HeaderAuthPage";
import { useDispatch, useSelector } from "react-redux";
import { paymentSuccessAction } from "../store/slice/authSlice";
import { AiOutlineCheckCircle } from "react-icons/ai";

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
      <div className="-translate-y-20 flex flex-col gap-7 justify-center items-center w-full h-full">
        <AiOutlineCheckCircle className="text-9xl text-green-500" />
        <h2 className="text-4xl ">Payment successful</h2>
        <h2 className="text-4xl ">Subscription success</h2>
        <button
          onClick={() => navigate("/choose-profile")}
          className="px-4 py-2 bg-primary text-white rounded-md text-2xl hover:bg-red-500"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
