import { BiMenu } from "react-icons/bi";
import { useState } from "react";

export default function SideBarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BiMenu
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-4xl cursor-pointer relative md:hidden "
      />

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
                <div className="text-xs text-gray-400">Sidebar Icon</div>
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
    </>
  );
}
