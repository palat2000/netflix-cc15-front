import { useEffect } from "react";
import Swal from "sweetalert2";
import phone from "../assets/Phone.png";
import computer from "../assets/Computer.png";
import { CheckIcon } from "../icons";
import axios from "../config/axios";
import { useState } from "react";
import { addAccessToken, removeAccessToken } from "../utils/local-storage";
import { useNavigate } from "react-router-dom";
import ButtonNetflix from "../features/logo&button/ButtonNetflix";

export default function PackagePage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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
    <div className="w-full flex flex-col md:flex md:justify-center">
      <div className="flex justify-between items-center">
        <img
          onClick={() => {
            return navigate("/");
          }}
          className="w-44 cursor-pointer pl-7"
          src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
        ></img>
        <button
          onClick={() => {
            return navigate("/login");
          }}
          className="pr-7 text-2xl font-bold"
        >
          {addAccessToken ? (
            <button
              onClick={() => {
                removeAccessToken();
                return navigate("/");
              }}
            >
              Sign Out
            </button>
          ) : (
            <>Sign in</>
          )}
        </button>
      </div>
      <hr />
      <div className="w-full h-full pt-14 md:flex md:justify-center md:items-center">
        <div className="flex justify-center md:w-96 md:flex md:justify-center">
          <div className="flex justify-center flex-col gap-3 pt-3 w-11/12 md:w-full md:justify-center md:flex md:pt-10">
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
                  <img src={phone} alt="" className="w-20" />
                  <img src={computer} alt="" className="w-20" />
                </div>
              </div>
            </div>
            <hr />
            <ButtonNetflix handleClick = {handleClick} fontSize={"2xl"} text={"Next"}></ButtonNetflix>
          </div>
        </div>
      </div>
    </div>
  );
}
