import { TiPencil } from "react-icons/ti";
import { FaPlusCircle } from "react-icons/fa";

export default function ManageProfiles() {
  return (
    <div className="flex flex-col bg-black items-center h-full p-10 gap-5 ">
    <div className="text-white text-2xl">Manage Profiles:</div>
    <div className="flex flex-row flex-wrap gap-2">
      <div className="cursor-pointer  flex flex-col items-center p-1  group">
        <TiPencil className="absoluteb translate-y-12 z-20 text-white text-lg  " />
        <img
          className="h-20 rounded-sm relative opacity-70 group-hover:border"
          src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
          alt=""
        ></img>
  
        <div className="p-1 text-xs text-gray-500  group-hover:text-white ">
          User name 
        </div>
      </div>
      <div className="cursor-pointer  flex flex-col items-center p-1 group">
        <TiPencil className="absoluteb translate-y-12 z-20 text-white text-lg" />
        <img
          className="h-20 rounded-sm relative opacity-70 group-hover:border"
          src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
          alt=""
        ></img>
  
        <div className="p-1 text-xs text-gray-500 group-hover:text-white ">
          User name 
        </div>
      </div>
      <div className="cursor-pointer  flex flex-col items-center p-1 group">
        <TiPencil className="absoluteb translate-y-12 z-20 text-white text-lg" />
        <img
          className="h-20 rounded-sm relative opacity-70 group-hover:border"
          src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
          alt=""
        ></img>
  
        <div className="p-1 text-xs text-gray-500 group-hover:text-white ">
          User name 
        </div>
      </div>
      <div className="cursor-pointer  flex flex-col items-center p-1 group">
        <TiPencil className="absoluteb translate-y-12 z-20 text-white text-lg" />
        <img
          className="h-20 rounded-sm relative opacity-70 group-hover:border"
          src="https://i.pinimg.com/originals/b0/90/cb/b090cba82229ba7a9f4df22ec8f3ea34.png"
          alt=""
        ></img>
  
        <div className="p-1 text-xs text-gray-500 group-hover:text-white ">
          Children 
        </div>
      </div>
      <div className="cursor-pointer  flex flex-col items-center p-1 group gap-1">
        <FaPlusCircle className="absolute translate-y-10 z-20 text-gray-500 group-hover:text-gray-500 text-4xl" />
        <div className=" h-20 w-20 translate-y-5  rounded-sm  group-hover:border opacity-0 group-hover:opacity-75 bg-white border-white"></div>
  
        <div className="p-1 translate-y-4  text-xs text-gray-500 group-hover:text-white ">
          Add Profiles 
        </div>
      </div>
    </div>
    <div className="pl-4 pr-4 text-xs p-1 bg-white hover:bg-red-700 hover:text-white  hover:cursor-pointer">
      Done
    </div>
  </div>
  )
}
