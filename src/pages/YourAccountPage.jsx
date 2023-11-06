import memberSince from "../assets/memberSince.png"
import Membership from "../features/YourAccountCPN/membership"
import PlanDetails from "../features/YourAccountCPN/PlanDetails"
import ProfilesParental from "../features/YourAccountCPN/Profiles&Parental"
export default function YourAccount() {
    return <div className="bg-[#f2f2f2] justify-center flex ">
        <div className="flex justify-center flex-col w-3/6">
            <div className="flex  gap-4 pb-5 pt-5">
                <div className="text-3xl">Account</div>
                <div className="flex items-center">
                    <img className="h-6" src={memberSince} alt="" />
                    <div>Memeber Since</div>
                </div>
            </div>
            <hr className="bg-black p-[0.5px]" />
            <Membership/>
            <hr className="bg-black p-[0.1px]" />
            <PlanDetails/>
            <hr className="bg-black p-[0.5px]" />
            <ProfilesParental/>
        </div>
    </div>
}