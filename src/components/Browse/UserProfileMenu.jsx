
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { addChooseProfileAccessToken, removeAccessToken, removeChooseProfileAccessToken } from "../../utils/local-storage";
import { useNavigate } from "react-router-dom";
import { chooseUserProfileAction, resetState } from "../../store/slice/authSlice";
import { fetchAllContent } from "../../store/slice/allContentSlice";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

export default function UserProfileMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state?.user.data;
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  useEffect(()=>{
    navigate("/browse")
  },[isHovered])

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const defaultImage =
    "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png";

    const handleChooseProfile = (id) => {
      dispatch(chooseUserProfileAction(id))
        .unwrap()
        .then((user) => {
          addChooseProfileAccessToken(user.accessToken);
          dispatch(fetchAllContent());
          console.log('after set tolen')
          navigate("/browse");
        });
    };
  return (
    <>
      <div className=" dropdown " onMouseLeave={handleMouseLeave}>
        <button
          className="flex items-center relative dropbtn group-hover:text-white group"
          onMouseEnter={handleMouseEnter}
        >
          <img
            src={user.userProfile.profileImageUrl||defaultImage}
            alt="product"
            width={26}
            className="rounded-sm mr-1 "
          ></img>
          <IoMdArrowDropdown className="group-hover:rotate-180 transition-transform duration-300 " />

        </button>
        {isHovered && (
          <>
            <div className="absolute dropdown-content bg-black bg-opacity-50 py-1 right-10 border border-zinc-300">
              <div className="flex justify-center py-2 px-4 ">
                <div className="flex">
                  <div className="flex flex-col mx-2 ">
                    {user.allUserProfile.map((data, i) => {
                      return (
                        <div className="flex " 
                        onClick={() => {
                          console.log(data.id )
                          setIsHovered(!isHovered)
                          handleChooseProfile({ id: data.id });
                        }} key={i}>
                          {data.isKid && (
                  <div className=" text-blue-700 font-bold absolute z-20 -translate-y- p-1  font-sans ">
                    Kid
                  </div>
                )}
                          <div className="flex gap-2">
                            <img
                              src={
                                data.profileImageUrl
                                  ? data.profileImageUrl
                                  : defaultImage
                              }
                              alt=""
                              className="h-7 w-7 rounded-sm m-1 hover:text-stone-400 "
                            />
                            <div className="hover:underline">{data.userProfileName}</div>
                          </div>
                        </div>
                      );
                    })}

                    <a className="flex gap-5 items-center pb-1" href="/manage-profile">
                      <FaPencil className="translate-x-2"  />
                      <a
                        href="/manage-profile"
                        className=" hover:text-stone-400 my-1 translate-x-2"
                      >
                        Manage Profiles
                      </a>
                    </a>
                    <a
                     href="/your-account"
                    className="flex gap-5 items-center pb-1"
                    >
                      <FaUserLarge className="translate-x-2" />
                      <div
                      className=" hover:text-stone-400 my-1 translate-x-2"
                      >Account</div>

                    </a>

                    {/* <a href="" className=" hover:text-stone-400 my-2">
                      Account
                    </a> */}
                    <hr />

                    <a 
                     onClick={() => {
                      removeAccessToken();
                      removeChooseProfileAccessToken();
                      dispatch(resetState());
                      return navigate("/");
                    }}
                    href="" className=" hover:text-stone-400 my-2 mx-1">
                      Sign Out of Netflex
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
