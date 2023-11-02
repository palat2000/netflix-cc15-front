import { BiMenu } from "react-icons/bi";
import { useState } from "react";

export default function HeaderMobileUser() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between bg-gray-900 h-5 items-center p-10">
        <div className="flex items-center gap-2">
          <BiMenu
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-4xl cursor-pointer relative md:hidden "
          />
          <img
            className="h-12  "
            src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          ></img>
          <div className="hidden md:flex gap-5 ">
            <div className="text-white hover:text-gray-600 cursor-pointer">Home</div>
            <div className="text-white hover:text-gray-600 cursor-pointer">TV Shows</div>
            <div className="text-white hover:text-gray-600 cursor-pointer">Movies</div>
            <div className="text-white hover:text-gray-600 cursor-pointer">My List</div>
          </div>
        </div>

        <div >
          <input
            placeholder="Search"
            className=" w-32  text-gray-500 border border-white "
          ></input>
        </div>
      </div>
      {isOpen && (
        <div className="p-2 bg-gray-900 w-32 absolute translate-y-0 ">
          <div>
            <div className="flex items-center gap-1">
              <img
                className="h-6"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt=""
              />
              <div>
                <div className="text-xs text-gray-400">Kridtue01</div>
                <div className="text-xs text-gray-400">Swift Profile</div>
              </div>
            </div>
            <div className="text-xs text-gray-400">Account</div>
            <div className="text-xs text-gray-400">Help Center</div>
            <div className="text-xs text-gray-400">Sign Out of Netflix</div>
            <br />
          </div>
          <div className="text-xs text-gray-400">Home</div>
          <div className="text-xs text-gray-400">My List</div>
          <div className="text-xs text-gray-400">Kids</div>
          <div className="text-xs text-gray-400">Action</div>
          <div className="text-xs text-gray-400">Romantic</div>
          <div className="text-xs text-gray-400">Horror</div>
          <div className="text-xs text-gray-400">Comedy</div>
          <div className="text-xs text-gray-400">Sport</div>
          <div className="text-xs text-gray-400">series</div>
        </div>
      )}
    </div>
  );
}
