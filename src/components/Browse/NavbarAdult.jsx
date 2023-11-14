import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import UserProfileMenu from "./UserProfileMenu";
import { useRef } from "react";
import { useEffect } from "react";
import NotificatioBell from "./NotificationBell";
import { useNavigate } from "react-router-dom";
// import SideBarMenu from "./SideBarMenu";

export default function NavbarAdult({ setSearch }) {
  const navigate = useNavigate();
  const ref = useRef(null);

  const [isSearch, setIsSearch] = useState(false);

  const handleOnChange = (e) => {
    setSearch(e);
    localStorage.setItem("searchQuery", JSON.stringify(e));

    // if (e.length === 1) {
    navigate("/search");
    // }
  };

  const handleClick = () => {
    setIsSearch(true);
    ref.current.focus();
  };

  const goToPage = (page) => {
    console.log("page =", page);

    if (page === "home") {
      navigate("/home");
    } else if (page === "tvShow") {
      navigate("/tvShow");
    } else if (page === "movies") {
      navigate("/movies");
    } else if (page === "myList") {
      navigate("/mylist");
    }
  };

  const searchEl = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (!searchEl.current?.contains(e.target)) {
        setIsSearch(false);
      }
    };

    document.addEventListener("click", handleClickOutSide);
    return () => document.removeEventListener("click", handleClickOutSide);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center text-xs  bg-gradient-to-b  from-black to-transparent bg-black  z-50 fixed left-0 right-0 top-0 bg-transparent  text-white font-extralight text-[6px] px-10">
        <div className="flex justify-start items-center ">
          <img
            className="h-8 w-auto"
            src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          />
          <div
            className="hover:text-gray-400 mx-2 ml-10"
            onClick={() => goToPage("home")}
          >
            Home
          </div>
          <div
            className="hover:text-gray-400 mx-2"
            onClick={() => goToPage("tvShows")}
          >
            TV Shows
          </div>
          <div
            className="hover:text-gray-400 mx-2"
            onClick={() => goToPage("movie")}
          >
            Movie
          </div>
          <div
            className="hover:text-gray-400 mx-2"
            onClick={() => goToPage("myList")}
          >
            My List
          </div>
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
                ref={ref}
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
