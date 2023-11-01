import phone from "../assets/Phone.png";
import computer from "../assets/Computer.png";
import { CheckIcon } from "../icons";

export default function PackagePage() {
  return (
    <div className="w-full md:flex md:justify-center">
      <div className="flex justify-center md:w-96 md:flex md:justify-center">
        <div className="flex justify-center flex-col gap-4  w-11/12 md:w-10/12 md:justify-center md:block">
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
            <div className="flex flex-row justify-between ml- ">
              <div className=" flex justify-center">
                <div className="flex">Monthly price</div>
              </div>
              <div className=" flex justify-center">
                <div className="text-[#E50914]">419</div>
              </div>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
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
          <button className="bg-[#E50914] w-full h-16 text-2xl font-light text-white rounded-md mt-2">
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}