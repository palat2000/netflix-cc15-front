import { useSelector } from "react-redux";
import memberSince from "../assets/memberSince.png";
import Membership from "../features/YourAccountCPN/Membership";
import PlanDetails from "../features/YourAccountCPN/PlanDetails";
import ProfilesParental from "../features/YourAccountCPN/Profiles&Parental";

export default function YourAccount() {
  const user = useSelector((store) => store.user.data.user);
  const activeAt = new Date(user.activeAt);
  const expiredDate = new Date(user.expiredDate);
  return (
    <div className="bg-[#f2f2f2] justify-center flex h-full">
      <div className="flex justify-center flex-col w-3/6 ">
        <div className="flex  gap-4 pb-5 pt-5">
          <div className="text-3xl">Account</div>
          <div className="flex gap-5 items-center">
            <img className="h-6" src={memberSince} alt="" />
            <div>
              <div>Member Since</div>
              <div>{activeAt.toDateString()}</div>
            </div>
            <div>
              <div>expired Date</div>
              <div>{expiredDate.toDateString()}</div>
            </div>
          </div>
        </div>
        <hr className="bg-black p-[0.5px]" />
        <Membership />
        <hr className="bg-black p-[0.1px]" />
        <PlanDetails />
        <hr className="bg-black p-[0.5px]" />
        <ProfilesParental />
      </div>
    </div>
  );
}
