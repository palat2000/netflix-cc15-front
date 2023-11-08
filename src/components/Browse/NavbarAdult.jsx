import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import UserProfileMenu from "./UserProfileMenu";
import { useNavigate } from "react-router-dom";
// import SideBarMenu from "./SideBarMenu";

export default function NavbarAdult({ setSearch }) {
  const navigate = useNavigate();
  const ref = useRef(null);

  const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center text-xs  bg-gradient-to-b  from-black to-transparent bg-black  z-50 fixed left-0 right-0 top-0 bg-transparent  text-white font-extralight text-[6px] mx-10  ">
        <div className="flex justify-start items-center ">
          <img
            className="h-8 w-auto"
            src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          ></img>
          <div className="hover:text-gray-400 mx-2 ml-10 ">Home</div>
          <div className="hover:text-gray-400 mx-2">TV Shows</div>
          <div className="hover:text-gray-400 mx-2">Movie</div>
          <div className="hover:text-gray-400 mx-2">My List</div>
        </div>

        <div className=" flex items-center">
          <div
            className={` flex justify-end items-center ${
              isSearch && "border"
            } `}
            onClick={handleClick}
            ref={searchEl}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#ffffff" }}
              className="ml-2"
            />
            {isSearch && (
              <input
                onChange={(e) => {
                  console.log(e);
                  if (e.length <= 0) {
                    Navigate("/browse");
                  } else {
                    return navigate("/search");
                  }
                }}
                placeholder="Search"
                className="w-full text-white outline-none opacity-50 bg-black"
                onChange={(e) => handleOnChange(e.target.value)}
              ></input>
            )}
          </div>
          <div className=" hidden md:block ">
            <div className="flex items-center">
              <div className="hover:text-gray-400 text-white ml-2">Kids</div>
              <NotificatioBell />

              <UserProfileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
