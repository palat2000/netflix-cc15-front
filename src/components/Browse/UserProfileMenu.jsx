import profilePic1 from "../../assets/netflix-profile-red.jpeg";
import profilePic2 from "../../assets/netflix-profile-yellow.jpeg";
import profilePic3 from "../../assets/netflix-profile-green.jpeg";
import profilePic4 from "../../assets/netflix-profile-blue.jpeg";
import profilePic5 from "../../assets/netflix-profile-kid.png";
import { useState } from "react";

export default function UserProfileMenu() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className=" dropdown " onMouseLeave={handleMouseLeave}>
        <button
          className="flex items-center relative dropbtn hover:text-white "
          onMouseEnter={handleMouseEnter}
        >
          <img
            src={profilePic1}
            alt="product"
            width={26}
            className="rounded-sm mr-1 "
          ></img>
        </button>
        {isHovered && (
          <>
            <div className="absolute dropdown-content bg-black bg-opacity-50 py-1 right-10 border border-zinc-300">
              <div className="flex justify-center py-2 px-4 ">
                <div className="flex">
                  <div className="flex flex-col mx-2 ">
                    <a href="" className="flex hover:text-stone-400 my-2 ">
                      <img
                        src={profilePic1}
                        alt="product"
                        width={26}
                        className="rounded-sm mr-2"
                      ></img>
                      Account1
                    </a>
                    <a href="" className="flex hover:text-stone-400 my-2">
                      <img
                        src={profilePic2}
                        alt="product"
                        width={26}
                        className="rounded-sm mr-2"
                      ></img>
                      Account2
                    </a>
                    <a href="" className="flex hover:text-stone-400 my-2">
                      <img
                        src={profilePic3}
                        alt="product"
                        width={26}
                        className="rounded-sm mr-2"
                      ></img>
                      Account3
                    </a>
                    <a href="" className="flex hover:text-stone-400 my-2">
                      <img
                        src={profilePic4}
                        alt="product"
                        width={26}
                        className="rounded-sm mr-2"
                      ></img>
                      Account4
                    </a>

                    <a href="" className="flex hover:text-stone-400 my-2">
                      <img
                        src={profilePic5}
                        alt="product"
                        width={26}
                        className="rounded-sm mr-2"
                      ></img>
                      Kid Account
                    </a>

                    <a
                      href="/manage-profile"
                      className=" hover:text-stone-400 my-2"
                    >
                      Manage Profiles
                    </a>

                    <a href="" className=" hover:text-stone-400 my-2">
                      Account
                    </a>

                    <a href="" className=" hover:text-stone-400 my-2">
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
