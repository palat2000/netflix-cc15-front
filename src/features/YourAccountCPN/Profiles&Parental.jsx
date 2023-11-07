import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProfilesParental() {
    const navigate =useNavigate()
    const userData = useSelector((state) => {
        return state?.user?.data?.allUserProfile;
    });
    return <div className="flex justify-between pt-10 pb-3 ">
        <div className="w-2/6">
            <div className="text-[#737373]">PROFILES & PARENTAL CONTROL</div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
            {userData?.map((e) => {
                return <div id={el.id}>
                    <div onClick={() =>{
                        return navigate("/manage-profile")
                    }} className="flex justify-between pb-2 hover:cursor-pointer">
                        <img className="h-20 w-20" src={e?.profileImageUrl} alt="" />
                        <div>Name</div>
                    </div>
                    <hr className=" bg-slate-300 p-[0.5px]"/>
                </div>
            })}
        </div>
    </div>
}