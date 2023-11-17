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
  const { data: notification, expireAlert } = useSelector(
    (state) => state.notification
  );
  const expireIn = new Date(expireAlert) - new Date();

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
                  <div className=" flex flex-col gap-2 mx-10 ">
                    {expireAlert && (
                      <>
                        <div className="flex gap-4">
                          <img
                            src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
                            alt="netflix"
                            width={100}
                            className="rounded-sm mr-1"
                          ></img>
                          <div className="hover:text-stone-400 my-2 self-center">
                            <span className="text-primary">Expire in </span>
                            <span>
                              {Math.round(expireIn / 1000 / 60 / 60 / 24)} days
                            </span>
                          </div>
                        </div>
                        <hr />
                      </>
                    )}
                    {notification && <span>New Release</span>}
                    {notification.map((noti, index) => (
                      <div key={index} className="flex gap-4">
                        <img
                          src={noti.image}
                          alt={noti.title}
                          width={100}
                          className="rounded-sm mr-1"
                        ></img>
                        <span className="flex hover:text-stone-400 my-2 max-w-sm">
                          {noti.title}
                        </span>
                      </div>
                    ))}
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
