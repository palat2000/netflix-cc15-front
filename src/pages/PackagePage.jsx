import { useEffect } from "react";
import Swal from "sweetalert2";
import phone from "../assets/Phone.png";
import computer from "../assets/Computer.png";
import { CheckIcon } from "../icons";
import axios from "../config/axios";
import { useState } from "react";
import ButtonNetflix from "../features/logo&button/ButtonNetflix";
import HeaderAuthPage from "../components/header/HeaderAuthPage";
import Spinner from "../components/spinner/Spinner";

export default function PackagePage() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("/payment/create-checkout-session", {
        lookup_key: "bill",
      });
      window.location.replace(res.data.url);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonText: "close",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("canceled") === "true") {
      Swal.fire({
        title: "Cancel",
        text: "Cancel subscription payment",
        icon: "info",
        confirmButtonText: "close",
      });
    }
  }, []);

  return (
    <div className="w-full flex flex-col md:flex md:justify-center h-full">
      <HeaderAuthPage />
      <div className="w-full h-full py-10 md:flex md:justify-center md:items-center relative">
        {isLoading && <Spinner />}
        <div className="flex justify-center md:w-96 md:flex md:justify-center">
          <div className="flex justify-center flex-col gap-3 w-11/12 md:w-full md:justify-center md:flex">
            <div className="font-medium text-3xl">
              Choose the plan that’s right for you
            </div>
            <div className="flex flex-row gap-2">
              <CheckIcon />
              <span>Watch all you want. Ad-free.</span>
            </div>
            <div className="flex flex-row gap-2">
              <CheckIcon />
              <span>Recommendations just for you.</span>
            </div>
            <div className="flex flex-row gap-2">
              <CheckIcon />
              <span>Change or cancel your plan anytime.</span>
            </div>
            <div className="flex flex-col justify-center w-full">
              <div className="flex flex-row justify-between pb-2 ">
                <div className=" flex justify-center">
                  <div className="flex">Monthly price</div>
                </div>
                <div className=" flex justify-center">
                  <div className="text-[#E50914]">419</div>
                </div>
              </div>
              <hr />
              <div className="flex flex-row justify-between pb-2">
                <div className=" flex justify-center">
                  <div>Video quality</div>
                </div>
                <div className=" flex justify-center">
                  <div className="text-[#E50914]">4K+HDR</div>
                </div>
              </div>
              <hr />
            </div>
            <div className="flex flex-row justify-between ">
              <div className=" flex justify-center">
                <div>Devices you can use to watch</div>
              </div>
              <div className=" flex justify-center">
                <div className="flex flex-col">
                  <img src={phone} alt="phone" className="w-20" />
                  <img src={computer} alt="computer" className="w-20" />
                </div>
              </div>
            </div>
            <hr />
            <ButtonNetflix
              handleClick={handleClick}
              fontSize="2xl"
              text="Next"
            ></ButtonNetflix>
          </div>
        </div>
      </div>
    </div>
  );
}
