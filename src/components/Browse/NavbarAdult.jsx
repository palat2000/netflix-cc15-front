import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import UserProfileMenu from "./UserProfileMenu";
// import SideBarMenu from "./SideBarMenu";

export default function NavbarAdult() {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center text-xs  bg-gradient-to-b  from-black to-transparent bg-black  z-50 sticky top-0 bg-transparent">
        {/* <SideBarMenu /> */}
        <div className="flex justify-items-start items-center  mx-10 text-white">
          <img
            className="h-8 w-auto"
            src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          ></img>
          <div className="mx-2 ml-10">Home</div>
          <div className="mx-2">TV Shows</div>
          <div className="mx-2">Movie</div>
          <div className="mx-2">My List</div>
        </div>

        <div className=" flex items-center">
          <div className="flex justify-end border border-solid items-center ">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#ffffff" }}
              className="ml-2"
              onClick={() => setIsSearch(true)}
            />

            {isSearch && (
              <input
                placeholder="Search"
                className=" w-full text-white outline-none  opacity-50 bg-black"
              ></input>
            )}
          </div>

          <div className="text-white mx-2">Kids</div>

          <FontAwesomeIcon icon={faBell} className="mx-2 text-white" />
          <UserProfileMenu />
        </div>
      </div>
    </>
  );
}
