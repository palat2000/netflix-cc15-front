import { TiPencil } from "react-icons/ti";
import { FaPlusCircle } from "react-icons/fa";
function Header() {
  return (
    <div className="flex flex-col bg-black items-center h-full p-10">
      <div className="text-white">Manage Profiles:</div>

      <div className="flex flex-row flex-wrap ">
        <div className="cursor-pointer  flex flex-col items-center p-1">
          <TiPencil className="absoluteb translate-y-12 z-20 text-white text-lg" />
          <img
            className="h-20 rounded-sm relative opacity-70 hover:border"
            src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
            alt=""
          ></img>

          <div className="p-1 text-xs text-gray-500 hover:text-white">
            User name{" "}
          </div>
        </div>
        <div className="cursor-pointer  flex flex-col items-center p-1">
          <TiPencil className="absoluteb translate-y-12 z-20 text-white text-lg" />
          <img
            className="h-20 rounded-sm relative opacity-70 hover:border"
            src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
            alt=""
          ></img>

          <div className="p-1 text-xs text-gray-500 hover:text-white">
            User name{" "}
          </div>
        </div>
        <div className="cursor-pointer  flex flex-col items-center p-1">
          <TiPencil className="absoluteb translate-y-12 z-20 text-white text-lg" />
          <img
            className="h-20 rounded-sm relative opacity-70 hover:border"
            src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
            alt=""
          ></img>

          <div className="p-1 text-xs text-gray-500 hover:text-white">
            User name{" "}
          </div>
        </div>
        <div className="cursor-pointer  flex flex-col items-center p-1">
          <TiPencil className="absoluteb translate-y-12 z-20 text-white text-lg" />
          <img
            className="h-20 rounded-sm relative opacity-70 hover:border"
            src="https://i.pinimg.com/originals/b0/90/cb/b090cba82229ba7a9f4df22ec8f3ea34.png"
            alt=""
          ></img>

          <div className="p-1 text-xs text-gray-500 hover:text-white">
            Children{" "}
          </div>
        </div>
        <div className="cursor-pointer  flex flex-col items-center p-1">
          <FaPlusCircle className="absolute translate-y-10 z-20 text-gray-500 hover:text-white text-4xl" />
          <img
            className=" h-20 rounded-sm relative hover:border opacity-0 border-white"
            src="https://i.pinimg.com/originals/b0/90/cb/b090cba82229ba7a9f4df22ec8f3ea34.png"
            alt=""
          ></img>

          <div className="p-1 translate-y-4  text-xs text-gray-500 hover:text-white">
            Add Profiles{" "}
          </div>
        </div>
        








      </div>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Header;
