import { CgProfile } from "react-icons/cg";

import { AiOutlineUser, AiTwotoneHome } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function Admin() {
  const [isOpenMember, setIsOpenMember] = useState(true);
  const [isOpenMovie, setIsOpenMovie] = useState(false);

  return (
    <div>
      <div className="flex justify-between bg-gray-500 p-5 shadow-2xl opacity-90  ">
        <div className="text-3xl">Admin</div>
        <div className="flex gap-5 items-center ">
          <div className="cursor-pointer hover:text-gray-800 text-3xl">
            Logout
          </div>
          <CgProfile className="cursor-pointer hover:text-gray-800 active:text-2xl text-3xl" />
        </div>
      </div>
      <div className="bg-gray-200 w-full h-full flex flex-1">
        <div className="">
          <div className="flex  gap-5 p-5 cursor-pointer hover:bg-gray-600 group">
            <AiTwotoneHome className="group-hover:text-white" />
            <div className="cursor-pointer group-hover:text-white ">Home</div>
          </div>
          <div
            onClick={() => setIsOpenMember(!isOpenMember)}
            className="flex gap-5 p-5 cursor-pointer hover:bg-gray-600 group"
          >
            <AiOutlineUser className="group-hover:text-white" />
            <div className="group-hover:text-white">User</div>
          </div>
          <div
            onClick={() => setIsOpenMovie(!isOpenMovie)}
            className="flex gap-5 p-5 items-center cursor-pointer hover:bg-gray-600 group"
          >
            <BiSolidRightArrow className="group-hover:text-white" />
            <div className="group-hover:text-white">Movies</div>
          </div>
        </div>

        <div className="bg-gray-400 w-full relative">
          <div>
            <div>User analytics</div>
            <div className="bg-yellow-500 w-auto h-96 m-10 rounded-2xl"></div>
          </div>
          <div className="flex gap-10 p-10 ">
            {isOpenMember && (
              
              <div>

                Newest members
              <div className="bg-gray-600 p-10 rounded-md h-96 flex flex-col gap-3  w-full">
                <div className="flex gap-5 group">
                  <div className="group-hover:text-white">profile image</div>
                  <div className="group-hover:text-white">
                    Firstname Lastname
                  </div>
                  <div className="bg-red-600 hover:bg-red-500 cursor-pointer p-1 rounded-md text-white">
                    show Profile
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="group-hover:text-white">profile image</div>
                  <div className="group-hover:text-white">
                    Firstname Lastname
                  </div>
                  <div className="bg-red-600 hover:bg-red-500 cursor-pointer p-1 rounded-md text-white">
                    show Profile
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="group-hover:text-white">profile image</div>
                  <div className="group-hover:text-white">
                    Firstname Lastname
                  </div>
                  <div className="bg-red-600 hover:bg-red-500 cursor-pointer p-1 rounded-md text-white">
                    show Profile
                  </div>
                </div>
                <div className="flex gap-5"></div>
              </div>
              </div>
              
            )}
            {isOpenMovie && (
              <div>
                Lastest Content
                <div className="bg-gray-600 p-10 rounded-md h-96 flex flex-row gap-10 ">
                  <div>
                    movie
                    <div>Movename</div>
                  </div>
                  <div>
                    Genre
                    <div>1</div>
                  </div>
                  <div>
                    Year
                    <div>1990</div>
                  </div>
                  <div>
                    Age limit
                    <div>18</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
