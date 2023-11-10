import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ManageProfileCreateProfileModal from "../pages/ManageProfileCreateProfileModal";
import { chooseUserProfileAction, getMeAction } from "../store/slice/authSlice";
import { addChooseProfileAccessToken } from "../utils/local-storage";
import { getMe } from "../store/utils/userApi";

export default function WhoIsWatching() {
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [modalData, setModalData] = useState(null);
  const dispatch = useDispatch();
  const [allprofileData, setAllProfileData] = useState({});

  const user = useSelector((state) => {
    return state?.user;
  });
  console.log("🚀 ~ file: WhoIsWatching.jsx:30 ~ user ~ user:", user)

  const navigate = useNavigate();
  const defaultImage =
    "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png";

  const userData = user?.data?.user.allUserProfile;
  console.log(
    "🚀 ~ file: WhoIsWatching.jsx:21 ~ WhoIsWatching ~ userData:",
    userData
  );

  const handleChooseProfile = (id) => {
    dispatch(chooseUserProfileAction(id))
      .unwrap()
      .then((user) => {
        addChooseProfileAccessToken(user.accessToken);
        navigate("/browse");
      });
  };
  return (
    <div className="flex flex-col bg-black items-center h-full p-10 gap-5 absolute w-full justify-center ">
      <div className="text-white text-2xl md:text-6xl m-5">
        Who is watching ?
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {userData?.map((data, i) => {
          return (
            <div
              onClick={() => {
                handleChooseProfile({ id: data.id });
              }}
              key={i}
              className="flex"
            >
              <div className="cursor-pointer  flex flex-col items-center p-1 gap-1 group">
                {data.isKid && (
                  <div className=" bg-gradient-to-br from-red-300 to-purple-700 text-transparent bg-clip-text font-extrabold  text-xs absolute translate-x-6 z-20 translate-y-16 md:text-2xl md:translate-x-12 md:translate-y-32">
                    kids
                  </div>
                )}
                <img
                  className="h-20 w-20 m-1 rounded-md relative  group-hover:border-4 md:border-white md:h-40 md:w-40"
                  src={
                    data.profileImageUrl ? data.profileImageUrl : defaultImage
                  }
                  alt=""
                ></img>

                <div className="p-1 text-xs text-gray-500  group-hover:text-white md:text-xl">
                  {data.userProfileName}
                </div>
              </div>
            </div>
          );
        })}

        {userData?.length < 5 && (
          <div
            onClick={() => {
              setModalData(userData);
              return setIsOpenModalCreate(!isOpenModalCreate);
            }}
            className="cursor-pointer  flex flex-col items-center p-1 translate-y-2 rounded-md group md:translate-y-2 "
          >
            <FaPlusCircle className="md:h-40  absolute translate-y-5 z-20 text-gray-500 group-hover:text-gray-500 text-4xl md:text-5xl md:-translate-y-1" />
            <div className=" h-20 w-20 -translate-y-1  rounded-md  group-hover:border opacity-0 group-hover:opacity-75 bg-white  md:h-40 md:w-40"></div>

            <div className="p-1 translate-y-2  md:-translate-y-2 md:m-3 md:text-lg text-xs text-gray-500 group-hover:text-white ">
              Add Profiles
            </div>
          </div>
        )}
        {isOpenModalCreate && (
          <div>
            <ManageProfileCreateProfileModal
              onClose={setIsOpenModalCreate}
              data={modalData}
            />
          </div>
        )}
      </div>
      <div
        onClick={() => navigate("/manage-profile")}
        // onClick={()=>console.log(user)}
        className="pl-4 pr-4 text-xs p-1 bg-black border  text-gray-500 hover:border-2 hover:border-white border-gray-500 hover:text-white hover:cursor-pointer md:text-2xl md:pl-9 md:pr-9 md:p-2"
      >
        Manage Profiles
      </div>
    </div>
  );
}
