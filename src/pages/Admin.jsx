import { CgProfile } from "react-icons/cg";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";
import Modal from '@mui/material/Modal';

export default function Admin() {
  return (
    <div>
      <div className="flex justify-between bg-gray-500 p-5 ">
        <div>Admin</div>
        <div className="flex gap-5 items-center ">
          <div className="cursor-pointer hover:text-gray-800">Logout</div>
          <CgProfile className="cursor-pointer hover:text-gray-800 active:text-2xl" />
        </div>
      </div>
      <div className="bg-gray-200 w-full h-full flex flex-1">
        <div className="">

        <div className="flex  gap-5 p-5">
          <GrHomeRounded />
          <div>Home</div>
        </div>
        <div className="flex gap-5 p-5">
          <AiOutlineUser />
          <div>User</div>
        </div>
        <div className="flex gap-5 p-5 items-center">
          <BiSolidRightArrow />
          <div>Movies</div>
        </div>
        </div>
        
        <div className="bg-gray-400 w-full">
          <div>
            <div>User analytics</div>
            <div className="bg-gray-700 w-auto h-96"></div>
          </div>
          <div className="flex gap-10 p-10 ">
            <div className="bg-gray-500 p-10 rounded-md"> 
                newest members
                <div className="flex gap-5">
                    <div>profile</div>
                    <div>Firstname Lastname</div>
                    <div>show Profile</div>
                </div>
                <div className="flex gap-5">
                    <div>profile</div>
                    <div>Firstname Lastname</div>
                    <div>show Profile</div>
                </div>
                <div className="flex gap-5">
                    <div>profile</div>
                    <div>Firstname Lastname</div>
                    <div>show Profile</div>
                </div>
                <div className="flex gap-5">
                    <div>profile</div>
                    <div>Firstname Lastname</div>
                    <div>show Profile</div>
                </div>
                
            </div>
            <div>
              Lastest Content
              <div className="flex gap-32">
                <div>movie</div>
                <div>Genre</div>
                <div>Year</div>
                <div>Age limit</div>
              </div>
              <div className="flex gap-20">
                <div className="flex gap-2">
                  <div>profile</div>
                  <div>movie</div>
                </div>
               
                <div>genre</div>
                <div>year</div>
                <div>age limit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  )
}
