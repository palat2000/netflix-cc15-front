import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { chooseUserProfileAction } from "../../store/slice/authSlice";
import { addChooseProfileAccessToken } from "../../utils/local-storage";

export default function ProfilesParental() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => {
    return state?.user?.data?.allUserProfile;
  });
  const defaultImage =
    "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png";

  const handleChooseProfile = (id) => {
    dispatch(chooseUserProfileAction(id))
      .unwrap()
      .then((user) => {
        addChooseProfileAccessToken(user.accessToken);
        navigate("/browse");
      });
  };

  return (
    <div className="flex justify-between pt-10 pb-3 ">
      <div className="w-2/6">
        <div className="text-[#737373]">PROFILES & PARENTAL CONTROL</div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        {userData?.map((el) => {
          return (
            <div key={el.id}>
              <div
                onClick={() => {
                  handleChooseProfile({ id: el.id });
                  console.log(el.id);
                  return navigate("/browse");
                }}
                className="flex justify-between pb-2 hover:cursor-pointer"
              >
                <img
                  className="h-20 w-20"
                  src={el?.profileImageUrl || defaultImage}
                  alt=""
                />
                <div>{el.userProfileName}</div>
              </div>
              <hr className=" bg-slate-300 p-[0.5px]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
