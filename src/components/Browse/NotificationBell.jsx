import { useSelector } from "react-redux";
import profilePic1 from "../../assets/netflix-profile-red.jpeg";
import profilePic2 from "../../assets/netflix-profile-yellow.jpeg";
import profilePic3 from "../../assets/netflix-profile-green.jpeg";
import profilePic4 from "../../assets/netflix-profile-blue.jpeg";
import profilePic5 from "../../assets/netflix-profile-kid.png";
import NotiPic1 from "../../assets/SpidermanImg.jpeg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function NotificatioBell() {
  const [isHovered, setIsHovered] = useState(false);
  const notification = useSelector((state) => state.notification.data);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="dropdown " onMouseLeave={handleMouseLeave}>
        <button
          className="relative dropbtn hover:text-white "
          onMouseEnter={handleMouseEnter}
        >
          <FontAwesomeIcon icon={faBell} className="mx-2 text-white" />
        </button>
        {isHovered && (
          <>
            <div className="absolute dropdown-content bg-black bg-opacity-50 py-2 right-20 border border-zinc-300">
              <div className="flex justify-center py-2">
                <div className="flex">
                  <div className=" flex flex-col mx-10 ">
                    <a href="" className="flex hover:text-stone-400 my-2 ">
                      <img
                        src={NotiPic1}
                        alt="product"
                        width={100}
                        className="rounded-sm mr-1"
                      ></img>
                      Notification 1
                    </a>
                    <a href="" className="flex hover:text-stone-400 my-2">
                      <img
                        src={NotiPic1}
                        alt="product"
                        width={100}
                        className="rounded-sm mr-1"
                      ></img>
                      Notification 2
                    </a>
                    <a href="" className="flex hover:text-stone-400 my-2">
                      <img
                        src={NotiPic1}
                        alt="product"
                        width={100}
                        className="rounded-sm mr-1"
                      ></img>
                      Notification 3
                    </a>
                    <a href="" className="flex hover:text-stone-400 my-2">
                      <img
                        src={NotiPic1}
                        alt="product"
                        width={100}
                        className="rounded-sm mr-1"
                      ></img>
                      Notification 4
                    </a>
                    <a href="" className="flex hover:text-stone-400 my-2">
                      <img
                        src={NotiPic1}
                        alt="product"
                        width={100}
                        className="rounded-sm mr-1"
                      ></img>
                      Notification 5
                    </a>
                    <a href="" className="flex hover:text-stone-400 my-2">
                      <img
                        src={NotiPic1}
                        alt="product"
                        width={100}
                        className="rounded-sm mr-1"
                      ></img>
                      Notification 6
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
