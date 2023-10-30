import { useEffect } from "react";
import axios from "../config/axios";

function PayPage() {
  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post("/payment/create-checkout-session", { lookup_key: "bill" })
      .then((res) => window.location.replace(res.data.url))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const subscription = async () => {
      try {
        const res = await axios.post(
          `/payment/success-subscription/${query.get("session_id")}`
        );
      } catch (err) {
        console.log(err);
      }
    };
    console.log(query);
    if (query.get("success") === "true") {
      subscription();
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSumbit}>
        {/* <input
          className="hidden"
          value="price_1O65fWHpiJPtdULK4cvsIljs"
          name="prices_id"
        /> */}
        <button>Click</button>
      </form>
    </div>
  );
}

export default PayPage;
