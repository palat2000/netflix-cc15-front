import { TiPencil } from "react-icons/ti";
import { FaPlusCircle } from "react-icons/fa";
import ManageProfileModal from "../pages/ManageProfileModal";
import ManageProfileCreateProfileModal from "../pages/ManageProfileCreateProfileModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ManageProfiles() {
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state?.user;
  });

  const defaultImage =
    "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png";

  const userData = user?.data?.allUserProfile;
  // const userData = user?.data
  console.log(userData)

  return (
    <div className="flex flex-col bg-black items-center h-full p-10 gap-5 absolute w-full justify-center ">
      <div className="text-white text-2xl md:text-6xl">Manage Profiles:</div>
      <div className="flex flex-row flex-wrap gap-2">
        {userData?.map((data, i) => {
          return (
            <div key={i} className="flex ">
              <div
                onClick={() => {
                  setModalData(data);
                  setIsOpenModal(!IsOpenModal);
                }}
                className="cursor-pointer  flex flex-col items-center p-1 gap-1 group"
              >
                <TiPencil className=" translate-y-14 z-20 text-white text-lg  md:translate-y-28 md:text-4xl md:m-1" />
               {data.isKid && <div className="text-white bg-gradient-to-br from-red-500 to-purple-700 text-transparent bg-clip-text font-extrabold  text-xs absolute translate-x-6 z-20 translate-y-20 md:text-2xl md:translate-x-12 md:translate-y-40">kids</div>}
                <img
                  className="h-20 w-20 m-1 rounded-md relative opacity-70 group-hover:border-4 border-gray-500 md:hover:border-white  md:h-40 md:w-40"
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
            className="cursor-pointer   flex flex-col items-center p-1 group gap-1"
          >
            <FaPlusCircle className="md:h-40  absolute translate-y-12 md:translate-y-12  z-20 text-gray-500 group-hover:text-gray-500 text-4xl md:text-5xl" />
            <div className=" h-20 w-20 translate-y-6 md:h-40 md:w-40 md:translate-y-14 md:-m-1  rounded-md  group-hover:border opacity-0 group-hover:opacity-75 bg-white border-white"></div>

            <div className="p-1 translate-y-7 md:translate-y-16 md:m-1 md:text-lg text-xs text-gray-500 group-hover:text-white ">
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

        {IsOpenModal && (
          <ManageProfileModal onClose={setIsOpenModal} data={modalData} />
        )}
      </div>
      <div
        onClick={() => navigate("/choose-profile")}
        // onClick={()=>console.log(userData)}
        className="pl-4 pr-4 text-xs p-1 bg-white hover:bg-red-700 hover:text-white  hover:cursor-pointer md:p-2 md:font-medium md:pl-8 md:pr-8 md:text-lg"
      >
        Done
      </div>
   
    </div>
  );
}
