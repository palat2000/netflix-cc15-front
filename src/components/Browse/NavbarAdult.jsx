import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import UserProfileMenu from "./UserProfileMenu";
import { useRef } from "react";
import NotificatioBell from "./NotificationBell";
import { useNavigate } from "react-router-dom";
// import SideBarMenu from "./SideBarMenu";
import { setSearch } from "../../store/slice/searchSlice";

export default function NavbarAdult() {
  const dispatch = useDispatch();
  const search = useSelector((store) => store.search.search);
  const navigate = useNavigate();
  const ref = useRef(null);

  const [isSearch, setIsSearch] = useState(false);
  const handleOnChange = (e) => {

    // setSearch(e)
    // if (search.length >= 1) {
    //   navigate("/search");
    // }
    // if (search.length < 1) {
    //   navigate("/browse");
    // }
    if (e.target.value.length >= 1) {
      navigate("/search");
    }
    if (e.target.value.length < 1) {
      navigate("/browse");
    }

    // localStorage.setItem("searchQuery", JSON.stringify(e));

    dispatch(setSearch(e.target.value));
  };

  const handleClick = () => {
    setIsSearch(true);
    ref.current.focus();
  };

  const goToPage = (page) => {
    if (page === "home") {
      navigate("/browse");
    } else if (page === "tv-shows") {
      navigate("/tv-shows");
    } else if (page === "movies") {
      navigate("/movies");
    } else if (page === "my-list") {
      navigate("/my-list");
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
            className="hover:text-gray-400 mx-2 ml-10 cursor-pointer"
            onClick={() => goToPage("home")}
          >
            Home
          </div>
          <div
            className="hover:text-gray-400 mx-2 cursor-pointer"
            onClick={() => goToPage("tv-shows")}
          >
            TV Shows
          </div>
          <div
            className="hover:text-gray-400 mx-2 cursor-pointer"
            onClick={() => goToPage("movies")}
          >
            Movies
          </div>
          <div
            className="hover:text-gray-400 mx-2 cursor-pointer"
            onClick={() => goToPage("my-list")}
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
              className="ml-2 cursor-pointer"
            />
            {isSearch && (
              <input
                ref={ref}
                value={search}
                placeholder="Search"
                className="w-full text-white outline-none opacity-50 bg-black cursor-pointer"
                onChange={handleOnChange}
              ></input>
            )}
          </div>
          <div className=" hidden md:block ">
            <div className="flex items-center">
              <div className="hover:text-gray-400 text-white ml-2 cursor-pointer">Kids</div>
              <NotificatioBell />

              <UserProfileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
