import { useEffect } from "react";
import axios from "../config/axios";
import { useState } from "react";

function GoToPaymentResult() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const subscription = async () => {
      try {
        await axios.post(
          `/payment/success-subscription/${query.get("session_id")}`
        );
      } catch (err) {
        console.log(err);
      }
    };
    if (query.get("success") === "true") {
      // subscription();
      setIsSuccess(true);
    } else {
      setMessage("Cancel order subscription");
    }
  }, []);
  return <div></div>;
}

export default GoToPaymentResult;
